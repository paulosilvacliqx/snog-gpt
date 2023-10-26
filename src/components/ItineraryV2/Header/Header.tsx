import { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { MenuProfile } from "../../MenuProfile/MenuProfile";
import * as Styles from "./Header.styles";
import { UserDataContext } from "../../../contexts/ContextsFiles/UserData";
import { RecoverPassword } from "../../RecoverPassword/RecoverPassword";
import { LoginForm } from "../../LoginForm/LoginForm";

type Props = {
  handleBack?: () => void;
  btnLabel?: string;
  openLoginModal?: boolean;
  setOpenLoginModal?: (openLoginModal: boolean) => void;
};

export const Header: FC<Props> = ({
  handleBack,
  btnLabel,
  openLoginModal,
  setOpenLoginModal,
}) => {
  const navigate = useNavigate();
  const {
    userData,
    openLogin,
    setOpenLogin,
    setEmail,
    setPassword,
    setOpenRecoverPassword,
    openRecoverPassword,
    recoverSuccess,
    setRecoverSuccess,
  } = useContext(UserDataContext);

  useEffect(() => {
    if (openLoginModal) {
      setOpenLogin(true);
    }
  }, [openLoginModal]);

  const handleRegisterUser = () => {
    navigate("/cadastro");
    setOpenLogin(false);
    setOpenLoginModal && setOpenLoginModal(false);
  };

  const handleCloseDialog = () => {
    setOpenLogin(false);
    setOpenLoginModal && setOpenLoginModal(false);
    setOpenRecoverPassword(false);
    setRecoverSuccess(false);
    setEmail("");
    setPassword("");
  };

  const handleBackLogin = () => {
    setOpenLogin(true);
    setOpenLoginModal && setOpenLoginModal(true);
    setOpenRecoverPassword(false);
    setRecoverSuccess(false);
  };

  const handleBackRecover = () => {
    setOpenRecoverPassword(true);
    setRecoverSuccess(false);
  };

  return (
    <>
      <Styles.Container>
        {(handleBack && (
          <Styles.Button>
            {btnLabel === "Voltar" && (
              <svg
                onClick={handleBack}
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 6.66667H5.10667L9.88 1.88L8 0L0 8L8 16L9.88 14.12L5.10667 9.33333H24V6.66667Z"
                  fill="#2b0e03"
                />
              </svg>
            )}
            <span onClick={handleBack}>{btnLabel}</span>
          </Styles.Button>
        )) || <div style={{ width: 250 }} />}
        <svg
          width="70"
          height="62"
          viewBox="0 0 70 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.829 8.52313C28.5583 8.5204 28.3081 8.34526 28.2225 8.07161L26.2779 1.86384C26.1718 1.52451 26.3595 1.16193 26.6967 1.05384C27.0339 0.947112 27.3943 1.13593 27.5017 1.47526L29.4463 7.68303C29.5524 8.02235 29.3647 8.38494 29.0275 8.49303C28.9622 8.51356 28.8956 8.52313 28.829 8.52313Z"
            fill="black"
          />
          <path
            d="M18.7443 16.5712C18.6137 16.5698 18.4818 16.5288 18.369 16.444L13.1689 12.5718C12.8847 12.3597 12.8248 11.9561 13.0356 11.6687C13.2464 11.3828 13.6475 11.3212 13.9331 11.5347L19.1332 15.4068C19.4174 15.6189 19.4772 16.0225 19.2665 16.3099C19.1386 16.4836 18.9428 16.5739 18.7443 16.5712Z"
            fill="black"
          />
          <path
            d="M26.4057 62C26.3404 62 26.2738 61.989 26.2072 61.9671C25.8713 61.8536 25.6904 61.4882 25.8019 61.1503L27.8553 54.9781C27.9682 54.6401 28.3299 54.4554 28.6671 54.5717C29.003 54.6853 29.1839 55.0506 29.0724 55.3886L27.019 61.5608C26.9279 61.8317 26.6763 62.0027 26.4057 62Z"
            fill="black"
          />
          <path
            d="M44.0294 60.8205C43.7588 60.8178 43.5086 60.6427 43.4229 60.369L41.4783 54.1612C41.3723 53.8205 41.5599 53.4593 41.8972 53.3512C42.2344 53.2418 42.5948 53.432 42.7022 53.7727L44.6468 59.9804C44.7528 60.3211 44.5652 60.6823 44.2279 60.7904C44.1613 60.8123 44.0947 60.8205 44.0294 60.8205Z"
            fill="black"
          />
          <path
            d="M59.1319 53.4716C59.0014 53.4703 58.8695 53.4292 58.7566 53.3444L53.5565 49.4722C53.2723 49.2602 53.2125 48.8565 53.4233 48.5692C53.634 48.2832 54.0352 48.2217 54.3208 48.4351L59.5208 52.3073C59.8051 52.5193 59.8649 52.923 59.6555 53.2103C59.5263 53.3827 59.3305 53.473 59.1319 53.4716Z"
            fill="black"
          />
          <path
            d="M42.4955 7.46411C42.4302 7.46411 42.3636 7.45316 42.297 7.4299C41.9611 7.31771 41.7802 6.95101 41.8917 6.61305L43.9451 0.440862C44.058 0.102904 44.4197 -0.0790741 44.7569 0.0331227C45.0928 0.146688 45.2737 0.512012 45.1622 0.84997L43.1088 7.02216C43.019 7.29445 42.7661 7.46684 42.4955 7.46411Z"
            fill="black"
          />
          <path
            d="M62.125 16.4385C61.8027 15.0894 62.7587 13.587 64.2599 13.0822L64.007 12.0204C62.5057 12.5239 61.0289 11.8398 60.7066 10.4907C60.4809 9.54522 60.8916 8.53135 61.6694 7.8308C60.1314 7.8609 58.5227 7.16036 58.2004 5.80852L3.95453 24.0268C4.28905 25.4265 3.13861 27.0931 1.74884 28.0057C2.67082 28.1507 3.41738 28.7473 3.63496 29.6572C3.93821 30.9283 3.10054 32.3253 1.74748 32.9054L2.01129 34.0137C3.41874 33.6662 4.75004 34.3352 5.05329 35.6063C5.35654 36.8775 4.51886 38.2744 3.16581 38.8546L3.42962 39.9629C4.83707 39.6153 6.16837 40.2844 6.47161 41.5555C6.77486 42.8266 5.93719 44.2236 4.58414 44.8038L4.84795 45.912C6.25676 45.5645 7.5867 46.2336 7.88994 47.5047C8.19319 48.7758 7.35552 50.1728 6.00247 50.7529L6.26628 51.8612C7.67373 51.5137 9.00502 52.1827 9.30827 53.4538C9.51225 54.3104 9.19948 55.2271 8.56035 55.9126C10.1011 55.8798 11.7166 56.5803 12.0389 57.9349L66.2848 39.7152C65.9734 38.4099 66.9511 36.872 68.2117 35.9293C67.3155 35.7705 66.5921 35.1781 66.38 34.2846C66.0577 32.9355 67.0137 31.4332 68.5149 30.9283L68.262 29.8665C66.7607 30.37 65.2839 29.6859 64.9616 28.3368C64.6394 26.9877 65.5953 25.4854 67.0966 24.9805L66.8437 23.9187C65.3424 24.4222 63.8656 23.7381 63.5433 22.3877C63.221 21.0386 64.177 19.5362 65.6783 19.0313L65.4253 17.9696C63.9241 18.4717 62.4473 17.7876 62.125 16.4385Z"
            fill="white"
          />
          <path
            d="M12.0443 58.6984C11.9165 58.6984 11.7886 58.6655 11.6744 58.6026C11.4881 58.4986 11.3535 58.3207 11.3032 58.1114C11.072 57.1454 9.73798 56.6474 8.58074 56.6761C8.27205 56.6816 7.99328 56.5037 7.86954 56.2218C7.74443 55.94 7.80019 55.6102 8.0096 55.3858C8.49915 54.8604 8.70857 54.2037 8.57258 53.6304C8.48691 53.2719 8.27341 52.9791 7.95657 52.7848C7.54861 52.5344 6.99923 52.4673 6.45257 52.6028C6.25539 52.6507 6.04733 52.6192 5.87463 52.5125C5.70193 52.4058 5.57819 52.2361 5.53059 52.0377L5.26678 50.9294C5.17975 50.5655 5.36741 50.1919 5.70873 50.0455C6.73134 49.6077 7.36639 48.5692 7.15426 47.6812C7.06858 47.3227 6.85509 47.0313 6.53824 46.8356C6.13029 46.5852 5.58091 46.5182 5.03424 46.6536C4.83707 46.7015 4.63037 46.67 4.45631 46.5633C4.28361 46.4566 4.15986 46.2869 4.11226 46.0885L3.84845 44.9803C3.76142 44.6163 3.94908 44.2428 4.2904 44.0964C5.31301 43.6585 5.94806 42.62 5.73593 41.732C5.65026 41.3735 5.43676 41.0807 5.11991 40.8864C4.7106 40.6361 4.16258 40.569 3.61592 40.7045C3.41874 40.7523 3.21204 40.7209 3.03798 40.6142C2.86528 40.5074 2.74153 40.3378 2.69394 40.1394L2.43012 39.0311C2.34309 38.6671 2.52939 38.2936 2.87208 38.1472C3.89469 37.7094 4.52974 36.6709 4.3176 35.7829C4.23193 35.4244 4.01843 35.1316 3.70159 34.9373C3.29227 34.6869 2.74425 34.6198 2.19759 34.7553C2.00041 34.8032 1.79371 34.7717 1.61965 34.665C1.44695 34.5583 1.3232 34.3886 1.27561 34.1902L1.0118 33.0819C0.924766 32.718 1.11243 32.3444 1.45375 32.198C2.47636 31.7602 3.11141 30.7217 2.89927 29.8337C2.76329 29.2645 2.29142 28.8636 1.63597 28.761C1.32456 28.7117 1.07571 28.475 1.00908 28.1658C0.942444 27.8552 1.07299 27.5364 1.3368 27.3626C2.45596 26.6265 3.46633 25.2446 3.21748 24.2033C3.12501 23.8175 3.34259 23.4234 3.71655 23.2975L57.9584 5.08061C58.161 5.0122 58.3827 5.03409 58.569 5.13671C58.7553 5.2407 58.8899 5.41857 58.9402 5.62791C59.17 6.58979 60.5068 7.08373 61.6545 7.06321C61.9795 7.05774 62.261 7.25066 62.3779 7.54894C62.4949 7.84722 62.4146 8.18655 62.1767 8.39999C61.5742 8.94182 61.2955 9.67384 61.4464 10.3101C61.562 10.7958 61.8802 11.0612 62.1263 11.1994C62.5846 11.4553 63.1816 11.4895 63.765 11.2925C63.9676 11.2241 64.1892 11.246 64.3755 11.3486C64.5618 11.4526 64.6965 11.6304 64.7468 11.8398L65.0011 12.9015C65.0935 13.2888 64.876 13.6815 64.502 13.8073C63.3883 14.1809 62.639 15.3028 62.8661 16.2579C62.9817 16.7436 63.2999 17.009 63.546 17.1472C64.0043 17.4031 64.6013 17.4373 65.1847 17.2403C65.3859 17.1719 65.6076 17.1924 65.7952 17.2964C65.9815 17.4004 66.1161 17.5782 66.1665 17.7876L66.4208 18.8493C66.5132 19.2352 66.2957 19.6293 65.9217 19.7551C64.808 20.1287 64.0587 21.252 64.2858 22.2057C64.4014 22.6914 64.7196 22.9568 64.9657 23.095C65.424 23.3509 66.021 23.3837 66.6043 23.1881C66.807 23.1197 67.0286 23.1402 67.2149 23.2455C67.4012 23.3495 67.5358 23.5274 67.5862 23.7367L67.8391 24.7985C67.9316 25.1844 67.714 25.5784 67.34 25.7043C66.2263 26.0792 65.477 27.2012 65.7041 28.1548C65.8197 28.6406 66.1379 28.906 66.384 29.0442C66.8423 29.2987 67.4393 29.3329 68.0227 29.1372C68.2253 29.0688 68.4469 29.0894 68.6332 29.1933C68.8195 29.2973 68.9542 29.4752 69.0045 29.6845L69.2588 30.7463C69.3512 31.1335 69.1337 31.5262 68.7597 31.6521C67.646 32.0256 66.8967 33.149 67.1238 34.1026C67.2571 34.6595 67.714 35.059 68.349 35.1712C68.6482 35.2246 68.8875 35.4517 68.9569 35.75C69.0262 36.0469 68.9134 36.3589 68.67 36.5409C67.5127 37.4056 66.8219 38.6644 67.03 39.5332C67.1224 39.9191 66.9049 40.3131 66.5309 40.439L12.285 58.6587C12.2061 58.6861 12.1245 58.6984 12.0443 58.6984ZM9.87124 55.275C10.9346 55.509 11.9423 56.0631 12.4754 56.9798L65.4689 39.1802C65.477 38.0993 66.0468 37.0225 66.8192 36.1701C66.2317 35.7664 65.8115 35.1712 65.6416 34.4611C65.322 33.1202 65.9652 31.6671 67.1428 30.7928C66.6084 30.7737 66.0958 30.6355 65.6443 30.3837C64.9181 29.9787 64.4136 29.3138 64.2219 28.512C63.9023 27.1711 64.5455 25.718 65.7232 24.8437C65.1901 24.8245 64.6761 24.6863 64.2246 24.4346C63.4984 24.0296 62.9939 23.3646 62.8022 22.5628C62.4826 21.2219 63.1258 19.7688 64.3035 18.8945C63.7704 18.8753 63.2564 18.7372 62.8049 18.4854C62.0788 18.0804 61.5742 17.4154 61.3825 16.615C61.0629 15.2741 61.7061 13.821 62.8838 12.9467C62.3507 12.9275 61.8367 12.7894 61.3852 12.5376C60.6591 12.1326 60.1546 11.4676 59.9642 10.6672C59.7874 9.9297 59.8989 9.14569 60.2538 8.43694C59.2353 8.18791 58.2793 7.64198 57.7666 6.75946L4.77587 24.5591C4.77179 25.7426 4.10002 26.9029 3.2202 27.7854C3.79542 28.1877 4.20745 28.776 4.37471 29.4793C4.69564 30.827 4.05787 32.2829 2.8476 33.1572C3.43914 33.1722 4.00075 33.3323 4.48894 33.632C5.15119 34.0383 5.61354 34.6759 5.79304 35.4285C6.11397 36.7762 5.4762 38.232 4.26593 39.1063C4.85746 39.1214 5.42044 39.2815 5.90863 39.5811C6.57088 39.9875 7.03323 40.6251 7.21273 41.3776C7.53365 42.7254 6.89588 44.1812 5.68561 45.0555C6.27715 45.0706 6.84013 45.2306 7.32832 45.5303C7.98921 45.9367 8.45292 46.5743 8.63242 47.3254C8.9547 48.6732 8.31557 50.129 7.1053 51.0033C7.69684 51.0184 8.25982 51.1784 8.748 51.4781C9.41025 51.8845 9.8726 52.5221 10.0521 53.2746C10.2085 53.93 10.1405 54.6278 9.87124 55.275Z"
            fill="black"
          />
          <path
            d="M59.3876 37.3906L16.8949 51.6628C14.5763 52.4414 12.2945 51.3837 11.7968 49.2985L7.55813 31.5331C7.06042 29.4492 8.53723 27.1287 10.8558 26.3501L53.3485 12.0779C55.667 11.2993 57.9489 12.357 58.4466 14.4422L62.6852 32.2076C63.1816 34.2915 61.7061 36.612 59.3876 37.3906Z"
            fill="#FDC300"
          />
          <path
            d="M15.3705 52.7191C14.5369 52.7191 13.7319 52.5221 13.0343 52.1321C12.0076 51.5588 11.2923 50.6188 11.023 49.4859L6.78301 31.7205C6.19284 29.2453 7.90625 26.4952 10.6028 25.5894L53.0956 11.3171C54.5193 10.8382 56.0192 10.945 57.2091 11.6086C58.2358 12.1819 58.9511 13.1218 59.2203 14.2548L63.459 32.0202C64.0492 34.4953 62.3358 37.2455 59.6392 38.1513L17.1478 52.4236C16.559 52.6206 15.9579 52.7191 15.3705 52.7191ZM54.8742 12.6238C54.4568 12.6238 54.0257 12.6949 53.6001 12.8372L11.1073 27.1109C9.175 27.7594 7.93073 29.6599 8.33325 31.347L12.5719 49.111C12.7392 49.8116 13.1662 50.3712 13.8067 50.7283C14.6063 51.1743 15.6397 51.2373 16.642 50.9007L59.1347 36.6284C61.067 35.9799 62.3113 34.0794 61.9088 32.3923L57.6701 14.6269C57.5028 13.9264 57.0758 13.3668 56.4354 13.0096C55.9757 12.7538 55.4386 12.6238 54.8742 12.6238Z"
            fill="black"
          />
          <path
            d="M55.6235 27.364C55.5283 26.9015 55.3992 26.4568 55.2373 26.0409C55.0782 25.6331 54.8987 25.2665 54.7043 24.9477C54.5343 24.648 54.3412 24.399 54.1236 24.2006C54.2324 23.8996 54.2963 23.5233 54.2501 23.069C54.2134 22.5956 54.1182 22.1373 53.9659 21.7063C53.8108 21.2657 53.5905 20.8484 53.3104 20.468C52.7202 19.6142 51.8363 19.1545 50.7539 19.138C50.5404 19.1353 50.316 19.149 50.0984 19.1791C49.5722 19.2475 49.0418 19.3679 48.5237 19.5389C48.075 19.6853 47.6289 19.8372 47.2087 19.985C46.7233 20.1437 46.2609 20.3599 45.8312 20.6267C45.4437 20.8675 45.067 21.1412 44.7053 21.4422C44.1749 21.8869 43.7738 22.3822 43.5127 22.9144C43.4012 23.1402 43.3155 23.3783 43.2461 23.6246C43.0938 23.4385 42.9198 23.2715 42.7199 23.132C42.4329 22.9322 42.1066 22.7803 41.7517 22.6805C41.4715 22.6025 41.1764 22.5601 40.8746 22.5559C40.8038 22.5546 40.7331 22.5559 40.6624 22.5587C40.3007 22.5737 39.9403 22.6394 39.5895 22.7543L39.5337 22.7735C39.361 22.8392 39.1924 22.8994 39.0251 22.9541C38.8212 23.0212 38.6172 23.0937 38.4323 23.1648L36.9269 23.719C36.3639 23.9256 35.8105 24.1814 35.2733 24.4797C34.7416 24.7794 34.2901 25.1625 33.9311 25.6195C33.666 25.9561 33.4497 26.3186 33.2811 26.7004C32.9956 26.3077 32.6529 26.1216 32.3795 26.0409C32.2218 25.993 32.0518 25.9684 31.875 25.9656C31.5922 25.9615 31.2849 26.0108 30.9259 26.1189C30.6933 26.1846 30.4662 26.2571 30.2378 26.3364C30.0311 26.4089 29.823 26.4856 29.5728 26.5813C29.1213 26.7688 28.7855 27.0082 28.5434 27.3175C28.2701 27.6691 28.1232 28.1015 28.1082 28.6036L28.1069 28.6529L28.1082 28.7008C28.115 28.8609 28.1286 29.0182 28.149 29.1701C28.1694 29.3233 28.198 29.4807 28.2401 29.664C28.2306 29.6544 28.2211 29.6462 28.2116 29.638C27.8852 29.3398 27.5629 29.0292 27.276 28.7377C26.8164 28.2479 26.233 27.9605 25.5884 27.9072C25.5177 27.9017 25.4457 27.8976 25.3722 27.8962C24.9466 27.8894 24.4938 27.9633 24.03 28.1165C23.8805 28.1658 23.7404 28.2192 23.6003 28.278C23.4847 28.3272 23.3705 28.382 23.259 28.4394C22.9082 28.5913 22.6389 28.761 22.42 28.9539C22.2092 28.8513 21.9739 28.7815 21.7169 28.7569L21.653 28.75H21.5891L21.2872 28.7432C21.1567 28.7405 21.0302 28.7459 20.8643 28.7651C20.3938 28.8294 19.911 28.9279 19.431 29.0593C18.9347 29.1947 18.4451 29.3685 17.9733 29.5819C17.3246 29.8747 16.7317 30.2291 16.2082 30.6355C15.6547 31.0679 15.1964 31.5591 14.8483 32.0927C14.4771 32.6578 14.2282 33.2803 14.1099 33.9439C13.9902 34.6144 14.0229 35.3259 14.2078 36.0592C14.3968 36.8036 14.7531 37.4152 15.2644 37.8763C15.671 38.243 16.1375 38.5549 16.6528 38.804C17.0866 39.0133 17.5503 39.2117 18.0276 39.3937C18.0508 39.4019 18.0725 39.4115 18.0956 39.4197C17.8101 39.4717 17.5395 39.5661 17.2852 39.6988C16.7875 39.9615 16.4189 40.4007 16.2204 40.9685C16.0382 41.4885 16.0314 42.0467 16.1973 42.5653L16.3373 43.0278C16.4203 43.3028 16.5345 43.5573 16.6773 43.7817C16.8609 44.0717 17.1016 44.3125 17.3872 44.4945C17.7176 44.7066 18.112 44.8188 18.5403 44.8284L18.6396 44.8311C19.1115 44.838 19.6146 44.7764 20.1395 44.645C20.6766 44.5109 21.2056 44.3125 21.7129 44.0567C22.2214 43.8008 22.7069 43.4861 23.157 43.1208C23.6438 42.7254 24.0545 42.2766 24.3754 41.7868C24.4584 41.6595 24.5345 41.5282 24.6053 41.3954C24.7589 41.5405 24.9303 41.6609 25.1247 41.7389C25.3382 41.8251 25.5694 41.8716 25.8142 41.8757C26.0018 41.8784 26.2004 41.8565 26.4057 41.8086L26.4683 41.7922C26.694 41.7293 26.9184 41.6622 27.1414 41.5952C27.3998 41.5172 27.6595 41.4228 27.907 41.3174C28.1926 41.1984 28.4278 41.0807 28.6372 40.9494C28.931 40.7619 29.1676 40.5293 29.3376 40.2639C29.5252 39.9752 29.6367 39.6523 29.6721 39.302C29.6911 39.1132 29.6938 38.9066 29.683 38.6753C29.6857 38.544 29.6721 38.4126 29.6422 38.284L29.6122 38.1595C29.9141 38.3907 30.2119 38.6261 30.4989 38.8573C31.0714 39.3389 31.7472 39.5989 32.4516 39.6099C33.0472 39.6194 33.6619 39.4539 34.2806 39.1187C34.3609 39.0845 34.4343 39.0475 34.5036 39.0051C34.9347 38.7656 35.2869 38.4386 35.5507 38.0309C35.752 37.7189 35.8689 37.3823 35.9165 37.0334C35.9369 37.0444 35.956 37.0608 35.9764 37.0718C36.4414 37.3098 36.9759 37.4521 37.5606 37.4932C37.6707 37.5014 37.7822 37.5055 37.8937 37.5082C38.3058 37.5151 38.7409 37.4795 39.187 37.4042C39.6969 37.318 40.2096 37.2017 40.7086 37.0594C41.2104 36.9158 41.6945 36.7488 42.1419 36.5641C42.5812 36.3835 42.9687 36.2029 43.2978 36.0278L43.3522 35.999L43.4025 35.9648C43.9437 35.6077 44.3911 35.2041 44.7311 34.7621C45.067 34.327 45.2778 33.8263 45.3743 33.2776C45.6055 33.5499 45.8611 33.7934 46.1453 33.9987C46.6702 34.379 47.3012 34.587 48.0111 34.6144C48.0709 34.6171 48.1321 34.6198 48.1919 34.6198C48.608 34.6267 49.0486 34.5856 49.5028 34.5008C49.9761 34.4119 50.4588 34.2901 50.9375 34.1382C51.4066 33.9891 51.8785 33.8126 52.3422 33.6128C52.8059 33.4103 53.2411 33.1927 53.6232 32.9697C54.1685 32.6591 54.6104 32.2582 54.9395 31.778C55.2414 31.3374 55.4631 30.8476 55.5977 30.3222C55.7214 29.8351 55.7813 29.3261 55.7745 28.8061C55.7718 28.3204 55.7201 27.836 55.6235 27.364ZM21.1635 34.6924C20.9649 34.6157 20.7732 34.5377 20.5896 34.4598C20.5896 34.4598 21.086 34.4078 21.2559 34.3872C21.7482 34.3202 22.163 34.1615 22.5029 33.922C22.6199 34.4502 22.7382 34.977 22.8565 35.5037C22.7545 35.4422 22.6511 35.3806 22.5451 35.3245C22.1018 35.0878 21.6367 34.8757 21.1635 34.6924Z"
            fill="black"
          />
          <path
            d="M17.4891 41.6951C17.4062 41.4351 17.4089 41.1834 17.4946 40.9371C17.5803 40.6922 17.7217 40.517 17.9175 40.4144C18.0739 40.3323 18.2425 40.2803 18.4247 40.2543C18.6056 40.2297 18.7864 40.2051 18.9673 40.1791C19.1482 40.1544 19.3249 40.123 19.4976 40.086C19.6703 40.0491 19.8213 39.9793 19.9518 39.878C20.0742 39.7891 20.1599 39.6742 20.2102 39.5332C20.2605 39.3937 20.2768 39.25 20.2592 39.1036C20.2415 38.9558 20.1925 38.8122 20.1096 38.6712C20.0266 38.5303 19.9138 38.4099 19.7696 38.3087C19.378 38.0419 18.9591 37.8243 18.5131 37.6546C18.0671 37.485 17.6428 37.303 17.2417 37.1101C16.8391 36.9158 16.4829 36.6777 16.1701 36.3958C15.8573 36.114 15.6397 35.7309 15.5174 35.2479C15.38 34.7006 15.3542 34.1861 15.4398 33.7031C15.5269 33.2215 15.705 32.7713 15.977 32.3568C16.249 31.9408 16.6039 31.5632 17.0418 31.2211C17.4796 30.8804 17.9773 30.5835 18.5335 30.3317C18.9415 30.1484 19.3603 29.9993 19.79 29.883C20.2184 29.7666 20.6413 29.6805 21.0574 29.623C21.1431 29.6148 21.2328 29.612 21.328 29.6161C21.4218 29.6202 21.513 29.623 21.6013 29.6216C21.9277 29.6531 22.0977 29.82 22.1126 30.121C22.1167 30.3769 22.1181 30.6355 22.1194 30.8968C22.1194 31.1582 22.1058 31.4222 22.08 31.6877C22.0474 31.975 21.9508 32.1844 21.789 32.3171C21.6272 32.4484 21.3919 32.536 21.0819 32.5784C20.9432 32.5948 20.8058 32.6099 20.6726 32.6236C20.5393 32.6386 20.4074 32.6509 20.2782 32.6646C19.8036 32.7016 19.4337 32.8138 19.1686 32.9985C18.9034 33.1846 18.7416 33.3953 18.6804 33.6333C18.6192 33.87 18.6559 34.1136 18.7905 34.3599C18.9238 34.6075 19.1577 34.81 19.4908 34.9674C19.8607 35.1425 20.2605 35.3122 20.6889 35.4777C21.1172 35.6433 21.5293 35.8308 21.9236 36.0415C22.318 36.2535 22.6715 36.5067 22.983 36.8049C23.293 37.1032 23.516 37.4713 23.6506 37.9105C23.8084 38.4017 23.8465 38.8737 23.7635 39.3253C23.6819 39.7768 23.516 40.1914 23.2685 40.569C23.021 40.9467 22.7069 41.2887 22.3275 41.5966C21.9481 41.9044 21.5469 42.1644 21.1227 42.3778C20.6998 42.5913 20.2673 42.7527 19.8254 42.8622C19.3834 42.9717 18.9741 43.0209 18.5974 43.0059C18.3989 43.0018 18.2384 42.9607 18.116 42.8827C17.9936 42.8047 17.893 42.7035 17.8155 42.5817C17.738 42.4599 17.6754 42.3204 17.6278 42.1617C17.5816 42.0029 17.534 41.8483 17.4891 41.6951Z"
            fill="white"
          />
          <path
            d="M27.4487 34.3667C27.4936 34.5596 27.5289 34.7348 27.5548 34.8949C27.5806 35.055 27.6214 35.2096 27.6785 35.3587C27.7805 35.7993 27.8866 36.244 27.9954 36.6914C28.1042 37.1388 28.2157 37.5821 28.3272 38.02C28.334 38.0473 28.3408 38.0774 28.3476 38.1089C28.3544 38.1404 28.3571 38.1732 28.353 38.2033C28.3653 38.3976 28.3639 38.5604 28.3503 38.6931C28.3367 38.8259 28.2959 38.9449 28.2279 39.0516C28.1586 39.1583 28.0606 39.2528 27.9315 39.3349C27.8023 39.4156 27.6269 39.5031 27.4066 39.5962C27.1958 39.6851 26.9836 39.7631 26.7674 39.8288C26.5526 39.8945 26.3364 39.9588 26.1188 40.019C25.9202 40.0641 25.7611 40.0628 25.6401 40.0135C25.5191 39.9656 25.4266 39.8521 25.3641 39.6755C25.3069 39.5264 25.2553 39.3745 25.209 39.2227C25.1628 39.0708 25.122 38.9162 25.0853 38.7602C24.8582 37.7778 24.6325 36.7954 24.4108 35.8116C24.1891 34.8278 23.9688 33.8427 23.7526 32.8575C23.6602 32.4129 23.5623 31.975 23.4562 31.5413C23.3501 31.1062 23.2508 30.667 23.1597 30.2237C23.1053 29.9445 23.1244 29.7366 23.2128 29.5984C23.3025 29.4615 23.5119 29.3233 23.8424 29.1851C23.9403 29.1332 24.0396 29.0866 24.1388 29.0428C24.2381 29.0004 24.3442 28.9608 24.457 28.9238C24.8351 28.7993 25.1805 28.7514 25.4946 28.776C25.8087 28.802 26.0821 28.9389 26.316 29.1879C26.6464 29.5231 26.9823 29.8474 27.325 30.1607C27.6663 30.4727 28.0022 30.7969 28.3326 31.1335C28.6549 31.4332 28.9908 31.7082 29.3389 31.9586C29.6884 32.209 30.0379 32.4703 30.386 32.7399C30.4268 32.7262 30.4649 32.7043 30.5029 32.6715L30.3942 32.2035C30.2541 31.648 30.114 31.0911 29.9753 30.5342C29.8353 29.9774 29.6952 29.4219 29.5551 28.865C29.5279 28.7459 29.5062 28.6296 29.4912 28.5161C29.4763 28.4039 29.4654 28.2876 29.4613 28.1713C29.4681 27.9619 29.517 27.7977 29.6109 27.6773C29.7047 27.5583 29.8665 27.4516 30.0963 27.3558C30.299 27.2792 30.4989 27.2067 30.696 27.1355C30.8946 27.0657 31.0958 27.0028 31.3025 26.9439C31.6316 26.8454 31.8669 26.8181 32.0083 26.8605C32.1497 26.9029 32.2667 27.052 32.3591 27.3079C32.6692 28.0755 32.9344 28.8663 33.156 29.6832C33.3505 30.4289 33.5381 31.1814 33.7204 31.9422C33.9012 32.7016 34.0875 33.4664 34.2752 34.234C34.3459 34.5364 34.4057 34.8456 34.456 35.1603C34.5064 35.475 34.5594 35.7952 34.6124 36.1236C34.6451 36.3603 34.5866 36.5942 34.437 36.8255C34.2874 37.0581 34.0848 37.2401 33.8305 37.3728C33.8115 37.3878 33.7775 37.4042 33.7258 37.4207C32.8229 37.9351 32.0369 37.9105 31.3678 37.3495C30.7858 36.8802 30.1915 36.4205 29.5823 35.9731C28.9731 35.527 28.368 35.0755 27.7683 34.6199C27.7275 34.5843 27.6799 34.5473 27.6282 34.5104C27.5765 34.4707 27.5167 34.4242 27.4487 34.3667Z"
            fill="white"
          />
          <path
            d="M44.1042 32.3212C44.0729 32.7563 43.9329 33.1353 43.684 33.4596C43.4338 33.7825 43.1006 34.0835 42.6804 34.3599C42.3976 34.5118 42.0522 34.6718 41.6456 34.8401C41.239 35.0084 40.8093 35.1562 40.3551 35.2862C39.9009 35.4162 39.4413 35.5202 38.9762 35.5982C38.5111 35.6761 38.0746 35.7021 37.6667 35.672C37.2587 35.6433 36.9024 35.5503 36.5964 35.3943C36.2905 35.2383 36.0675 34.9961 35.9247 34.6677C35.5344 33.788 35.2053 32.889 34.9374 31.9695C34.6695 31.0514 34.4479 30.1156 34.2711 29.1674C34.2072 28.8431 34.1841 28.4928 34.2017 28.1165C34.2194 27.7416 34.2929 27.3708 34.4234 27.0069C34.5539 26.6429 34.7443 26.3022 34.9945 25.9834C35.2448 25.6646 35.5602 25.3978 35.9383 25.1844C36.4156 24.9189 36.9024 24.6959 37.3988 24.5126C37.8951 24.3292 38.3969 24.1459 38.9028 23.9598C39.085 23.89 39.2672 23.8243 39.4508 23.7641C39.6344 23.7039 39.822 23.6369 40.0151 23.5644C40.2504 23.4877 40.487 23.444 40.7277 23.4344C40.967 23.4248 41.1928 23.4494 41.4035 23.5083C41.6157 23.5671 41.802 23.6533 41.9665 23.7682C42.1311 23.8818 42.2602 24.0268 42.3554 24.2033C42.6437 24.7411 42.9007 25.3486 43.1237 26.0245C43.3468 26.7018 43.5331 27.4009 43.6826 28.122C43.8336 28.8431 43.9451 29.5655 44.0199 30.2921C44.096 31.0159 44.1232 31.6918 44.1042 32.3212ZM39.9186 28.0509C39.8547 27.8251 39.7554 27.6308 39.618 27.468C39.4821 27.3052 39.2944 27.2094 39.0564 27.1779C38.8348 27.1724 38.6226 27.2025 38.4173 27.2696C38.2133 27.3366 38.0338 27.4297 37.8801 27.5501C37.7265 27.6705 37.6082 27.8114 37.5252 27.977C37.4423 28.1425 37.4124 28.3204 37.4355 28.5106C37.4953 29.1523 37.6 29.7667 37.7469 30.3564C37.8937 30.9447 38.0991 31.4975 38.3615 32.0133C38.4037 32.0982 38.4717 32.1789 38.5655 32.2569C38.6607 32.3349 38.7545 32.3828 38.847 32.4019C39.0659 32.4484 39.2835 32.4471 39.497 32.3964C39.7105 32.3458 39.8968 32.2596 40.0559 32.1392C40.215 32.0188 40.3401 31.8738 40.434 31.7041C40.5264 31.5358 40.5659 31.3497 40.5523 31.1472C40.5305 30.5821 40.4544 30.0458 40.3211 29.5423C40.1878 29.0374 40.0532 28.5407 39.9186 28.0509Z"
            fill="white"
          />
          <path
            d="M44.4251 24.2307C44.4469 23.7997 44.5462 23.4015 44.7257 23.0362C44.9052 22.6709 45.188 22.3275 45.5756 22.0018C45.8883 21.7418 46.2133 21.5065 46.5492 21.2972C46.8851 21.0878 47.2468 20.9195 47.6357 20.7923C48.0736 20.639 48.5115 20.4899 48.9507 20.3462C49.39 20.2026 49.8333 20.0999 50.282 20.0425C51.1659 19.9193 51.8159 20.1656 52.2334 20.78C52.4401 21.0577 52.6006 21.3574 52.7134 21.6803C52.8277 22.0045 52.897 22.3439 52.9242 22.6996C52.9582 23.0348 52.8997 23.2975 52.7529 23.4891C52.6046 23.6807 52.3531 23.8407 51.9982 23.9666C51.8295 24.0419 51.6596 24.0952 51.4909 24.1253C51.3223 24.1568 51.151 24.1992 50.9769 24.2567C50.7702 24.3155 50.6206 24.2403 50.5295 24.0337C50.3962 23.7915 50.2086 23.6232 49.9665 23.5288C49.7258 23.4357 49.4416 23.418 49.1139 23.4754C48.8283 23.5206 48.5849 23.6341 48.385 23.8189C48.1865 24.0022 48.0287 24.2129 47.9118 24.4469C47.7962 24.6822 47.716 24.9285 47.6711 25.1857C47.6262 25.443 47.6167 25.6701 47.6398 25.8699C47.6956 26.346 47.7676 26.8112 47.856 27.2655C47.9444 27.7197 48.0981 28.159 48.317 28.5804C48.5564 29.0935 48.9099 29.3753 49.3777 29.4246C49.8455 29.4738 50.3813 29.3302 50.9837 28.9936C51.1292 28.906 51.2366 28.802 51.3073 28.6803C51.3781 28.5585 51.4229 28.4326 51.442 28.3026C51.461 28.1726 51.4637 28.0413 51.4501 27.9086C51.4352 27.7745 51.4202 27.6513 51.4053 27.5378C51.3998 27.323 51.257 27.2518 50.9769 27.323C50.8232 27.3736 50.6669 27.4215 50.5077 27.4694C50.3486 27.5172 50.1868 27.5665 50.0236 27.6199C49.6959 27.728 49.462 27.7581 49.3192 27.7115C49.1765 27.665 49.05 27.5008 48.9412 27.2203C48.895 27.1163 48.8569 27.0083 48.8243 26.8947C48.793 26.7825 48.759 26.6717 48.7236 26.5663C48.6815 26.4308 48.691 26.305 48.7508 26.1859C48.8107 26.0669 48.9072 25.9615 49.0405 25.8685C49.118 25.8233 49.2009 25.7768 49.288 25.7276C49.375 25.6797 49.4647 25.6345 49.5545 25.5962C49.9353 25.4416 50.3228 25.287 50.7172 25.1337C51.1102 24.9805 51.5045 24.8286 51.8975 24.6795C52.3327 24.5167 52.6699 24.4701 52.912 24.5386C53.1527 24.607 53.3689 24.8136 53.5579 25.1556C53.7157 25.4101 53.8625 25.7098 53.9971 26.0559C54.1318 26.4021 54.2392 26.7688 54.3181 27.1574C54.3969 27.546 54.4391 27.9428 54.4445 28.345C54.45 28.7487 54.4051 29.1359 54.3099 29.5081C54.2147 29.8802 54.0597 30.2223 53.8462 30.5342C53.6327 30.8462 53.3417 31.1075 52.9718 31.3183C52.6223 31.5208 52.2388 31.7137 51.82 31.897C51.3998 32.079 50.9755 32.2377 50.5458 32.3745C50.1148 32.5114 49.6905 32.6195 49.2689 32.6975C48.8474 32.7768 48.453 32.8069 48.0872 32.7891C47.6317 32.7713 47.2495 32.6496 46.9395 32.4252C46.6295 32.2008 46.3629 31.9175 46.1413 31.5755C45.8217 31.0487 45.5484 30.485 45.3199 29.8816C45.0928 29.2809 44.9092 28.6638 44.7692 28.0331C44.6291 27.4023 44.5312 26.7661 44.4754 26.1216C44.4197 25.4826 44.4034 24.8505 44.4251 24.2307Z"
            fill="white"
          />
        </svg>
      </Styles.Container>
      <Dialog.Root open={openLogin}>
        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/50 fixed inset-0" />
          <Dialog.Content className="absolute w-full max-w-xl h-[34rem] bg-white top-[20%] left-1/2 -translate-x-1/2">
            {openRecoverPassword ? (
              <>
                <ArrowLeft
                  size={24}
                  onClick={recoverSuccess ? handleBackRecover : handleBackLogin}
                  className="cursor-pointer absolute left-6 top-6 text-GL300"
                  weight="bold"
                />
                <Dialog.Close
                  onClick={handleCloseDialog}
                  className="absolute right-6 top-6 text-P300"
                >
                  <X size={24} weight="bold" aria-label="Fechar" />
                </Dialog.Close>

                <Dialog.Title className="text-4xl flex items-center justify-center text-P300 leading-tight font-bold pt-16">
                  Recuperar Senha
                </Dialog.Title>

                <Dialog.Description className="w-[30rem] mx-12 text-xl text-P300 leading-tight font-light text-center pt-6">
                  {recoverSuccess ? (
                    <p>
                      Agora é só aguardar as instruções para criação de nova
                      senha em seu e-mail.
                    </p>
                  ) : (
                    <p>
                      Insira abaixo seu e-mail de acesso ao sistema para receber
                      instruções de recuperação.
                    </p>
                  )}
                </Dialog.Description>

                <RecoverPassword />
              </>
            ) : (
              <>
                <Dialog.Close
                  onClick={handleCloseDialog}
                  className="absolute right-6 top-6 text-P300"
                >
                  <X size={24} aria-label="Fechar" />
                </Dialog.Close>

                <Dialog.Title className="text-4xl text-P300 leading-tight font-bold text-center pt-6">
                  Faça seu login
                </Dialog.Title>

                <Dialog.Description className="w-110 text-xl text-P300 leading-tight font-light text-center pt-6">
                  Insira abaixo seus dados de acesso para continuar com
                  experiências incríveis
                </Dialog.Description>

                <LoginForm />

                <p className="mt-5 font-semibold text-B500 text-base text-center">
                  Não possui uma conta?&nbsp;
                  <span
                    onClick={handleRegisterUser}
                    className="font-bold underline text-base text-BL300 cursor-pointer"
                  >
                    Clique aqui
                  </span>
                </p>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
