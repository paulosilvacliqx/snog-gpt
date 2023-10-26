import { useContext } from "react";
import { TangranContext } from "../../contexts/ContextsFiles/Tangran";
import clsx from "clsx";

export function TecnologiaGroup() {
  const { newSelectedValue, dataTangran } = useContext(TangranContext)
  const wordIsSelected = newSelectedValue.includes(13)

  return (
    <svg className={
      clsx('absolute top-[38.188rem] left-[22.063rem] transition-colors ease-out duration-700', {
        'fill-BL300': newSelectedValue.length <= 5 && wordIsSelected
      })
    } width="287" height="278" viewBox="0 0 287 278" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={
        clsx('absolute top-[38.188rem] left-[22.063rem] transition-colors ease-out duration-700', {
          'fill-BL300': newSelectedValue.length <= 5 && wordIsSelected
        })
      } filter="url(#filter0_d_2241_16147)">
        <path className={
          clsx('absolute top-[38.188rem] left-[22.063rem] transition-colors ease-out duration-700', {
            'fill-BL300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } d="M181.262 204.3V208.98C181.261 209.803 181.006 210.606 180.532 211.279C180.057 211.952 179.387 212.462 178.612 212.74L103.902 239.42C100.46 240.647 96.8094 241.183 93.1596 240.998C89.5098 240.813 85.9324 239.909 82.6322 238.34L44.6322 220.25C41.0182 218.531 37.8185 216.051 35.2522 212.98L13.2522 186.63C10.3979 183.207 8.40554 179.151 7.44217 174.8L0.672178 144.03C-0.697475 137.92 0.039084 131.527 2.76217 125.89L13.4222 103.99L26.4222 100.34C26.6945 100.264 26.9475 100.131 27.1647 99.9496C27.3818 99.7685 27.5581 99.5434 27.6819 99.2892C27.8057 99.035 27.8742 98.7575 27.8828 98.4749C27.8915 98.1923 27.8402 97.9111 27.7322 97.6497L22.9222 85.9897C22.8141 85.7284 22.7626 85.4471 22.7713 85.1644C22.7799 84.8817 22.8483 84.604 22.9722 84.3497L39.5322 50.3497C41.8833 45.5128 46.0595 41.8078 51.1422 40.0497L56.3522 38.2597C57.1191 37.9967 57.788 37.5068 58.2702 36.8549C58.7524 36.2031 59.0251 35.4201 59.0522 34.6097L59.8022 12.9697C59.807 12.8118 59.8491 12.6571 59.9252 12.5186C60.0013 12.3801 60.1092 12.2615 60.2399 12.1727C60.3707 12.0839 60.5206 12.0274 60.6775 12.0078C60.8343 11.9881 60.9936 12.0059 61.1422 12.0597L75.1922 17.1497C89.7765 17.1484 104.114 20.917 116.812 28.0897L147.082 45.1997C154.084 49.1613 160.482 54.1048 166.082 59.8797L189.082 83.5197C198.515 93.2259 210.141 100.524 222.982 104.8L236.042 109.16C236.837 109.426 237.528 109.935 238.018 110.615C238.508 111.295 238.772 112.112 238.772 112.95V131.16C238.771 131.901 238.563 132.628 238.173 133.258C237.783 133.888 237.225 134.398 236.562 134.73L233.972 136.03C228.336 138.846 223.595 143.176 220.282 148.535C216.968 153.893 215.213 160.069 215.212 166.37V199.73C215.217 200.303 215.099 200.87 214.866 201.394C214.633 201.917 214.289 202.384 213.86 202.763C213.43 203.143 212.924 203.425 212.376 203.592C211.828 203.759 211.25 203.806 210.682 203.73L185.682 200.37C185.129 200.311 184.569 200.369 184.039 200.539C183.509 200.709 183.02 200.988 182.604 201.358C182.188 201.728 181.854 202.181 181.623 202.687C181.392 203.194 181.269 203.743 181.262 204.3Z" fill="#B2B2B2" />
      </g>
      <defs>
        <filter className={
          clsx('absolute top-[38.188rem] left-[22.063rem] transition-colors ease-out duration-700', {
            'fill-BL300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } id="filter0_d_2241_16147" x="0" y="0" width="286.772" height="277.034" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood className={
            clsx('absolute top-[38.188rem] left-[22.063rem] transition-colors ease-out duration-700', {
              'fill-BL300': newSelectedValue.length <= 5 && wordIsSelected
            })
          } floodOpacity="0" result="BackgroundImageFix" />
          {
            (newSelectedValue.length <= 5 && wordIsSelected) &&
            <>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="24" dy="12" />
            </>
          }
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.25098 0 0 0 0 0.564706 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2241_16147" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2241_16147" result="shape" />
        </filter>
      </defs>
    </svg>

  );
}