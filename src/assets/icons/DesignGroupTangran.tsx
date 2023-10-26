import { useContext } from "react"
import { TangranContext } from "../../contexts/ContextsFiles/Tangran"
import clsx from "clsx"

export function DesignGroupTangran() {
  const { newSelectedValue } = useContext(TangranContext)
  const wordIsSelected = newSelectedValue.includes(1)

  return (
    <svg className = {
      clsx('absolute top-[19rem] left-[3.688rem] transition-colors ease-out duration-700', {
        'fill-R300': newSelectedValue.length <= 5 && wordIsSelected
})
    }  width="220" height="239" viewBox="0 0 220 239" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={
        clsx('absolute top-[19rem] left-[3.688rem] transition-colors ease-out duration-700', {
          'fill-R300': newSelectedValue.length <= 5 && wordIsSelected
        })
      } filter="url(#filter0_d_2241_16111)">
        <path className={
          clsx('absolute top-[19rem] left-[3.688rem] transition-colors ease-out duration-700', {
            'fill-R300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } d="M171.535 90.01C170.465 80.51 168.785 71.07 167.535 61.58C166.215 51.53 162.535 41.74 164.265 31.35C164.985 26.92 165.515 22.46 166.005 18C166.465 13.83 164.675 12 160.455 12H98.6151V12.71C78.3051 12.71 58.0051 12.71 37.6951 12.71C35.7051 12.6645 33.7343 13.1074 31.9551 14C22.2451 19.48 12.6751 25.2 3.02515 30.8C0.575145 32.22 -0.424901 34.11 0.165099 36.96C3.4151 52.54 6.45514 68.17 9.95514 83.7C10.7313 86.7677 12.3773 89.5458 14.6951 91.7C28.6951 104.41 43.0051 116.78 57.0651 129.42C58.7928 131.086 60.0044 133.214 60.5551 135.55C62.5551 144.55 64.1251 153.75 66.1051 162.81C70.2551 181.81 65.6251 177.29 84.1651 180.75C96.3051 183.02 107.965 185.75 117.845 193.75C121.537 196.582 125.476 199.075 129.615 201.2C131.305 202.12 134.395 203.02 135.315 202.2C136.655 201.01 137.225 198.2 137.045 196.2C136.557 190.965 135.763 185.762 134.665 180.62C133.058 173.537 134.183 166.109 137.815 159.82C148.965 139.29 159.315 118.32 169.815 97.44C171.05 95.1645 171.644 92.5966 171.535 90.01V90.01Z" fill="#B2B2B2" />
      </g>
      <defs>
        <filter className={
          clsx('absolute top-[19rem] left-[3.688rem] transition-colors ease-out duration-700', {
            'fill-R300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } id="filter0_d_2241_16111" x="0" y="0" width="219.548" height="238.522" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood className={
            clsx('absolute top-[19rem] left-[3.688rem] transition-colors ease-out duration-700', {
              'fill-R300': newSelectedValue.length <= 5 && wordIsSelected
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
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.294118 0 0 0 0 0.392157 0 0 0 0.24 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2241_16111" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2241_16111" result="shape" />
        </filter>
      </defs>
    </svg>

  )
}