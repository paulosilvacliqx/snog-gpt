import { useContext, useEffect } from "react";
import { UserDataContext } from "./contexts/ContextsFiles/UserData";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AppRoutes } from "./routes";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import profileImg from "./assets/imgs/profile-img.png";
import axios from "axios";

export function App() {
  const { setUserData, setIdUser, setAccessToken, setOpenLogin, userData } =
    useContext(UserDataContext);
  const auth = getAuth();

  const emptyWebChatScript = () => {
    const scriptList = document.querySelectorAll(
      "script[type='application/javascript']"
    );
    const convertedNodeList = Array.from(scriptList);
    if (convertedNodeList) {
      const testScript: any = convertedNodeList.find(
        (script) => script.id === "webChat"
      );
      if (testScript) {
        testScript.parentNode.removeChild(testScript);
      }
    }
  };

  const handleCreateScript = (userId?: string) => {
    emptyWebChatScript();
    const script = document.createElement("script");
    script.src = `https://qa-fbots.cliqx.com.br/tripness/WebChatpaypal.min.js?userCode=${
      userId || ""
    }`;
    script.id = "webChat";
    script.type = "application/javascript";
    document.body.appendChild(script);
  };

  useEffect(() => {
    // Função que monitora o usuário logado (se existe usuário logado ou não)

    onAuthStateChanged(auth, (user) => {
      auth.currentUser
        ?.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
          setAccessToken(idToken);
          // if (user) {
          axios
            .get(`${import.meta.env.VITE_APP_WEB_API}user/register/`, {
              headers: {
                Authorization: idToken,
              },
            })
            .then((response) => {
              setOpenLogin(false);
              setUserData({
                displayName: response.data.name,
                email: response.data.email,
                telefone: response.data.phone,
                photoURL: profileImg,
                uid: response?.data?.user_id,
              });
            })
            .catch((error) => {
              console.error(error);
            });
          // }
        })
        .catch(function (error) {
          console.error(error);
        });

      if (!user) {
        setUserData({
          displayName: "",
          email: "",
          telefone: "",
          photoURL: "",
          uid: "",
        });
      } else {
        setIdUser(user.uid);
      }
    });
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
}
