import clsx from "clsx";
import { useContext } from "react";
import { MemorableExperiencesContext } from "../../contexts/ContextsFiles/MemorableExperience";

export function UnknowExperienceIcon() {
  const { unknow } = useContext(MemorableExperiencesContext);

  return (
    <svg className={
      clsx('transition-colors ease-out duration-700 delay-75', {
        'fill-P100 w-12 h-12': !unknow
      })
    } width="64" height="64" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={
        clsx('transition-colors ease-out duration-700 delay-75', {
          'fill-P100 w-12 h-12': !unknow
        })
      } filter="url(#filter0_d_48_1212)">
        <path className={
          clsx('transition-colors ease-out duration-700 delay-75', {
            'fill-P100 w-12 h-12': !unknow
          })
        } d="M63.5801 62.9908C63.3672 61.6939 63.0621 60.4095 62.7729 59.125C62.2868 56.9589 61.9674 54.7342 61.2507 52.6443C59.7108 48.1452 57.9101 43.7366 56.3312 39.2482C55.8398 37.8502 55.1621 36.8461 53.7375 36.344C53.0172 36.0903 52.3643 35.6557 51.6778 35.3044C50.0154 34.4564 50.2709 34.4422 49.1373 35.7834C49.0503 35.8863 48.951 35.9786 48.7825 36.1382C48.6139 35.9378 48.4986 35.826 48.4117 35.6947C47.757 34.7136 47.1396 33.706 46.4371 32.7621C46.3228 32.6286 46.1762 32.5266 46.0113 32.4659L46.3963 32.3417C46.7724 32.2193 47.2621 31.852 47.3401 31.515C47.5356 30.5741 47.6461 29.6176 47.6701 28.6569C47.7322 27.2643 48.1509 26.1182 49.1816 25.0786C51.0959 23.1519 52.8735 21.0869 54.6813 19.0467C54.9793 18.7132 55.1585 18.2679 55.3572 17.8581C55.799 16.9444 55.4211 16.0964 55.123 15.2413C54.6706 13.948 54.6777 13.9533 53.3365 13.9657C50.9788 13.9888 48.621 14.0101 46.2615 14.0047C45.9116 14.0001 45.5674 13.9152 45.2556 13.7564C42.6494 12.4081 40.0646 11.0172 37.4496 9.67598C35.9416 8.90071 34.4603 7.97818 32.8547 7.50982C30.4987 6.8339 28.0416 6.47021 25.604 6.01959C25.1873 5.95747 24.7621 6.04415 24.403 6.26442C22.6857 7.40515 20.9879 8.57073 19.3309 9.81259C18.8946 10.1657 18.5547 10.6234 18.3427 11.1431C17.8335 12.3194 17.3971 13.5382 16.9855 14.7605C16.6201 15.8516 16.2244 16.9497 16.0311 18.0763C15.7916 19.4778 15.788 20.9148 15.6017 22.3341C15.4081 23.7173 15.592 25.1272 16.134 26.4145C17.6774 30.1915 19.1322 34.0058 20.6064 37.8112C17.7005 38.6734 14.7892 39.5125 11.8779 40.3588C8.22569 41.4232 4.57225 42.4841 0.917639 43.5415C-0.146812 43.8519 -0.26745 44.3451 0.504277 45.1843C1.00634 45.7289 1.53325 46.2487 2.02999 46.8005C5.67219 50.8418 9.80226 54.3971 12.7401 59.1446C12.966 59.4689 13.2715 59.7298 13.6272 59.9021C15.4013 60.8441 17.1754 61.7525 18.9672 62.6679C19.1872 62.7797 19.4178 62.8666 19.6608 62.973C19.9358 62.8666 20.1931 62.7797 20.445 62.6697C24.7028 60.782 28.9606 58.8784 33.2379 57.0157C33.8464 56.7513 34.125 56.3504 34.274 55.694C35.2036 51.5781 36.1374 47.4634 37.0753 43.3499C38.8588 44.0347 40.6376 44.7124 42.4117 45.383C42.8304 45.5409 43.0628 45.7378 43.1497 46.2328C43.5045 48.2038 43.9037 50.1659 44.3224 52.1245C44.4186 52.5786 44.594 53.0121 44.8404 53.4054C46.113 55.39 47.4081 57.3598 48.7257 59.3149C48.9706 59.6749 49.2848 59.9825 49.65 60.2197C51.2715 61.2557 52.8806 62.3219 54.5642 63.2462C56.5068 64.3107 58.1124 65.6821 59.2815 67.5839C59.7241 68.2774 60.2219 68.9342 60.7699 69.5478C60.974 69.782 61.3731 70.0463 61.6144 69.9931C61.8557 69.9399 62.1466 69.5496 62.2424 69.2515C62.7161 67.7879 63.1756 66.3154 63.5464 64.8163C63.6772 64.2159 63.6887 63.5956 63.5801 62.9908Z" fill="#9EC245" />
      </g>
      <defs>
        <filter className={
          clsx('transition-colors ease-out duration-700 delay-75', {
            'fill-P100 w-12 h-12': !unknow
          })
        } id="filter0_d_48_1212" x="0.0078125" y="0" width="87.6465" height="88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          {
            unknow &&
            <>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="12" dy="6" />
            </>
          }
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.619608 0 0 0 0 0.760784 0 0 0 0 0.270588 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_48_1212" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_48_1212" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}