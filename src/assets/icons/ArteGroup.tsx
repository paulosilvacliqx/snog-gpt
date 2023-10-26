import { useContext } from 'react';
import { TangranContext } from "../../contexts/ContextsFiles/Tangran";
import clsx from "clsx";

export function ArteGroup() {
  const { newSelectedValue, dataTangran } = useContext(TangranContext)
  const wordIsSelected = newSelectedValue.includes(2)

  return (
    <svg className={
      clsx('absolute top-[463px] left-48 transition-colors ease-out duration-700', {
        'fill-R300': newSelectedValue.length <= 5 && wordIsSelected
      })
    } width="265" height="223" viewBox="0 0 265 223" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={
        clsx('absolute top-[463px] left-48 transition-colors ease-out duration-700', {
          'fill-R300': newSelectedValue.length <= 5 && wordIsSelected
        })
      } filter="url(#filter0_d_2241_16117)">
        <path className={
          clsx('absolute top-[463px] left-48 transition-colors ease-out duration-700', {
            'fill-R300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } d="M214.694 50.8093C200.234 26.6793 200.294 26.6393 175.754 13.3793C175.628 13.2867 175.486 13.2189 175.334 13.1793C173.014 12.9293 170.474 11.9793 168.394 12.5793C155.904 16.1493 143.574 20.2393 131.074 23.7393C128.332 24.3575 125.463 24.0734 122.894 22.9293C116.844 20.1993 111.034 16.9293 105.234 13.6293C103.872 12.7709 102.331 12.2348 100.73 12.0615C99.1289 11.8882 97.5093 12.0824 95.9945 12.6293C87.6445 15.4293 79.0945 17.6293 70.8245 20.6293C67.8945 21.7093 64.6145 23.9093 63.1345 26.5293C58.2445 35.1993 51.7745 41.6593 42.5545 45.6793C36.6245 48.2793 31.1745 51.9693 25.3945 54.9393C24.0782 55.5632 22.9393 56.507 22.0816 57.6843C21.2239 58.8617 20.6748 60.2351 20.4845 61.6793C16.8845 79.5693 12.5745 97.2793 5.61447 114.239C3.79447 118.679 2.38449 123.239 0.664488 127.749C-0.775512 131.489 0.0244713 133.919 4.05447 135.289C8.74447 136.879 13.3445 138.739 17.9045 140.639C27.5645 144.639 37.6645 147.539 46.0845 154.439C57.0845 163.439 68.9345 171.509 80.0845 180.439C85.5845 184.819 91.0845 187.809 98.3745 185.999C105.644 187.999 110.874 184.689 116.064 179.809C126.064 170.369 136.414 161.169 147.064 152.449C152.194 148.249 154.504 144.249 151.634 137.859C150.804 136.029 150.144 133.129 151.014 131.679C156.174 123.069 160.804 113.839 167.474 106.499C182.274 90.2193 198.114 74.8993 213.654 59.3093C216.474 56.5093 216.744 54.2393 214.694 50.8093Z" fill="#B2B2B2" />
      </g>
      <defs>
        <filter className={
          clsx('absolute top-[463px] left-48 transition-colors ease-out duration-700', {
            'fill-R300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } id="filter0_d_2241_16117" x="0" y="0" width="264.034" height="222.592" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood className={
            clsx('absolute top-[463px] left-48 transition-colors ease-out duration-700', {
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2241_16117" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2241_16117" result="shape" />
        </filter>
      </defs>
    </svg>

  );
}