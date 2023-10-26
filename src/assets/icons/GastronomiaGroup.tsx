import { useContext } from "react";
import { TangranContext } from "../../contexts/ContextsFiles/Tangran";
import clsx from "clsx";

export function GastronomiaGroup() {
  const { newSelectedValue, dataTangran } = useContext(TangranContext)
  const wordIsSelected = newSelectedValue.includes(12)

  return (
    <svg className={
      clsx('absolute top-[36.5rem] left-[41.438rem] transition-colors ease-out duration-700', {
        'fill-O350': newSelectedValue.length <= 5 && wordIsSelected
      })
    } width="301" height="283" viewBox="0 0 301 283" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={
        clsx('absolute top-[36.5rem] left-[41.438rem] transition-colors ease-out duration-700', {
          'fill-O350': newSelectedValue.length <= 5 && wordIsSelected
        })
      } filter="url(#filter0_d_2241_16141)">
        <path className={
          clsx('absolute top-[36.5rem] left-[41.438rem] transition-colors ease-out duration-700', {
            'fill-O350': newSelectedValue.length <= 5 && wordIsSelected
          })
        } d="M247.122 107.54C241.022 105.31 234.942 103.03 228.792 100.94C219.052 97.6501 219.792 95.2502 214.562 106.54C213.889 106.46 213.221 106.336 212.562 106.17C188.862 98.0702 165.142 90.0101 141.502 81.7201C140.576 81.3069 139.743 80.7088 139.055 79.9625C138.367 79.2163 137.839 78.3376 137.502 77.3801C133.832 65.3801 130.552 53.3301 126.912 41.3801C126.402 39.7001 124.742 37.4602 123.332 37.2302C121.922 37.0002 119.742 38.7001 118.702 40.1301C114.792 45.5201 111.222 51.1301 107.502 56.6801C105.822 59.1601 104.062 61.5901 101.622 65.0801C98.8224 48.3901 96.2225 33.0801 93.7124 17.7101C93.2724 15.0401 93.0624 11.7101 89.7124 12.0201C87.9624 12.1601 85.7625 14.6602 84.9125 16.6102C78.6124 30.9035 72.5024 45.2835 66.5825 59.7502C65.0925 63.4202 63.4324 64.5701 59.4424 63.6601C41.9624 59.6601 24.4424 56.0001 6.89245 52.2201C1.21245 50.9901 -0.667551 52.7001 0.202449 58.4401C4.85245 89.1001 9.40245 119.85 14.2524 150.54C15.4224 158 14.1425 158.37 23.1224 158.43C27.1224 158.43 29.3124 159.87 30.3824 163.83C31.3481 167.582 32.7756 171.2 34.6325 174.6C36.2125 177.41 38.3025 180.46 40.9725 182.04C55.5058 190.62 70.2024 198.917 85.0624 206.93C87.4524 208.22 90.9324 208.2 93.7625 207.76C97.6525 207.16 101.392 205.59 105.602 204.31C107.152 209.17 108.772 213.5 109.892 217.95C110.298 219.744 111.114 221.419 112.276 222.844C113.439 224.268 114.916 225.404 116.592 226.16C128.162 232.11 139.592 238.23 150.962 244.63C154.712 246.74 157.592 246.69 161.172 244.36C179.222 232.62 197.452 221.16 215.452 209.36C217.92 207.596 219.837 205.169 220.982 202.36C223.702 195.8 225.792 188.98 228.142 182.26C235.836 160.207 243.526 138.16 251.212 116.12C253.122 110.67 252.532 109.48 247.122 107.54Z" fill="#B2B2B2" />
      </g>
      <defs>
        <filter className={
          clsx('absolute top-[36.5rem] left-[41.438rem] transition-colors ease-out duration-700', {
            'fill-O350': newSelectedValue.length <= 5 && wordIsSelected
          })
        } id="filter0_d_2241_16141" x="0" y="0" width="300.203" height="282.162" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood className={
            clsx('absolute top-[36.5rem] left-[41.438rem] transition-colors ease-out duration-700', {
              'fill-O350': newSelectedValue.length <= 5 && wordIsSelected
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
          <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.407843 0 0 0 0 0.270588 0 0 0 0.24 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2241_16141" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2241_16141" result="shape" />
        </filter>
      </defs>
    </svg>

  );
}