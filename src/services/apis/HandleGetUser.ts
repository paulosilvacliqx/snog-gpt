import axios from "axios";
import profileImg from "../../assets/imgs/profile-img.png";
import { UserDataAuth } from "../../contexts/ContextsFiles/UserData";

export async function HandleGetUser(
  idToken: string,
  setUserData: React.Dispatch<React.SetStateAction<UserDataAuth>>
) {
  await axios
    .get(`${import.meta.env.VITE_APP_WEB_API}user/register/`, {
      headers: {
        Authorization: idToken,
      },
    })
    .then((response) => {
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
}
