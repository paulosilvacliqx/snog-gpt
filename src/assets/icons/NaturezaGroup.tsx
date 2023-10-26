import { useContext } from 'react';
import { TangranContext } from "../../contexts/ContextsFiles/Tangran";
import clsx from "clsx";

export function NaturezaGroup() {
  const { newSelectedValue, dataTangran } = useContext(TangranContext)
  const wordIsSelected = newSelectedValue.includes(7)

  return (
    <svg className={
      clsx('absolute top-71 left-[37.375rem] transition-colors ease-out duration-700', {
        'fill-G300': newSelectedValue.length <= 5 && wordIsSelected
      })
    } width="264" height="245" viewBox="0 0 264 245" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={
        clsx('absolute top-71 left-[37.375rem] transition-colors ease-out duration-700', {
          'fill-G300': newSelectedValue.length <= 5 && wordIsSelected
        })
      } filter="url(#filter0_d_2241_16132)">
        <path className={
          clsx('absolute top-71 left-[37.375rem] transition-colors ease-out duration-700', {
            'fill-G300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } d="M210.387 24.5381C206.177 18.0581 206.217 18.088 198.897 19.958C186.017 23.248 173.137 26.538 160.217 29.678C158.296 30.1281 156.297 30.1281 154.377 29.678C138.297 25.798 122.277 21.6781 106.177 17.8281C96.8766 15.6181 87.5367 12.5581 78.1167 12.1481C64.2367 11.5581 50.2566 12.8681 36.3466 13.6781C33.9826 13.9008 31.7712 14.9446 30.0966 16.6281C22.2366 25.1881 14.5066 33.8881 7.09664 42.8381C5.18907 45.3565 3.94435 48.3136 3.47664 51.4381C2.27664 58.6081 1.47664 65.858 0.916644 73.108C0.376644 79.568 -0.303375 86.1081 0.146625 92.5381C0.716625 100.538 2.63662 108.428 3.51662 116.418C4.32093 124.26 7.23409 131.738 11.9467 138.058C27.2467 159.058 41.9967 180.578 56.9467 201.878C58.1175 203.705 59.4175 205.446 60.8366 207.088C63.2766 209.668 66.0166 209.038 67.2766 205.698C67.6982 204.373 68.0093 203.015 68.2066 201.638C70.4566 189.828 72.6866 178.018 75.0366 165.638C80.8766 166.638 86.3767 167.258 91.7567 168.438C105.437 171.438 117.987 173.108 131.047 163.598C148.267 151.058 167.397 141.158 185.567 129.898C187.467 128.728 189.657 126.058 189.627 124.108C189.449 118.695 188.779 113.31 187.627 108.018C186.097 100.308 186.837 93.468 191.087 86.398C198.977 73.268 205.937 59.5781 213.087 46.0281C214.267 43.7981 214.647 41.118 215.187 38.608C216.377 32.948 213.167 28.8181 210.387 24.5381Z" fill="#B2B2B2" />
      </g>
      <defs>
        <filter className={
          clsx('absolute top-71 left-[37.375rem] transition-colors ease-out duration-700', {
            'fill-G300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } id="filter0_d_2241_16132" x="0" y="0" width="263.441" height="244.677" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood className={
            clsx('absolute top-71 left-[37.375rem] transition-colors ease-out duration-700', {
              'fill-G300': newSelectedValue.length <= 5 && wordIsSelected
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
          <feColorMatrix type="matrix" values="0 0 0 0 0.619608 0 0 0 0 0.760784 0 0 0 0 0.270588 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2241_16132" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2241_16132" result="shape" />
        </filter>
      </defs>
    </svg>

  );
}