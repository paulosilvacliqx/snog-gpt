import { useContext } from "react";
import { TangranContext } from "../../contexts/ContextsFiles/Tangran";
import clsx from "clsx";

export function ModaGroup() {
  const { newSelectedValue, dataTangran } = useContext(TangranContext)
  const wordIsSelected = newSelectedValue.includes(3)

  return (
    <svg className={
      clsx('absolute top-[17rem] left-[19.5rem] transition-colors ease-out duration-700', {
        'fill-R300': newSelectedValue.length <= 5 && wordIsSelected
      })
    } width="282" height="256" viewBox="0 0 282 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={
        clsx('absolute top-[17rem] left-[19.5rem] transition-colors ease-out duration-700', {
          'fill-R300': newSelectedValue.length <= 5 && wordIsSelected
        })
      } filter="url(#filter0_d_2241_16114)">
        <path className={
          clsx('absolute top-[17rem] left-[19.5rem] transition-colors ease-out duration-700', {
            'fill-R300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } d="M232.894 116.408C230.804 102.958 228.654 89.5078 226.794 76.0278C226.344 72.7578 224.714 71.1978 221.974 69.9278C210.604 64.6578 199.254 59.3278 187.974 53.8478C185.625 52.7046 183.475 51.192 181.604 49.3678C170.224 38.1612 158.931 26.8578 147.724 15.4578C146.677 14.2477 145.355 13.3063 143.869 12.713C142.383 12.1196 140.777 11.8915 139.184 12.0478C116.604 13.4278 94.0143 14.5978 71.4343 16.0478C69.1496 16.3113 66.9722 17.1623 65.1143 18.5178C47.7043 30.4078 30.6943 42.9078 12.9243 54.2178C3.72428 60.0478 -2.21573 66.2278 0.784268 77.7278C0.784268 81.2978 0.944268 84.8678 0.784268 88.4278C0.624268 91.9878 1.98426 94.1678 5.37426 95.5178C11.9843 98.1678 18.3743 101.258 25.0443 103.828C28.2943 105.088 29.8143 107.068 30.6343 110.408C35.3943 129.774 40.2976 149.108 45.3443 168.408C45.9425 170.77 47.2306 172.9 49.0443 174.528C67.0443 189.008 85.2043 203.278 103.284 217.668C106.144 219 108.674 220.098 111.594 217.758C151.054 186.211 190.564 154.694 230.124 123.208C231.207 122.475 232.047 121.438 232.54 120.228C233.033 119.017 233.156 117.688 232.894 116.408Z" fill="#B2B2B2" />
      </g>
      <defs>
        <filter className={
          clsx('absolute top-[17rem] left-[19.5rem] transition-colors ease-out duration-700', {
            'fill-R300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } id="filter0_d_2241_16114" x="0" y="0" width="281.028" height="255.443" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood className={
            clsx('absolute top-[17rem] left-[19.5rem] transition-colors ease-out duration-700', {
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2241_16114" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2241_16114" result="shape" />
        </filter>
      </defs>
    </svg>

  )
}