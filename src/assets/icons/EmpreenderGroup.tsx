import { useContext } from 'react';
import { TangranContext } from '../../contexts/ContextsFiles/Tangran';
import clsx from 'clsx';

export function EmpreenderGroup() {
  const { newSelectedValue, dataTangran } = useContext(TangranContext)
  const wordIsSelected = newSelectedValue.includes(15)

  return (
    <svg className={
      clsx('absolute top-[40.125rem] left-5 transition-colors ease-out duration-700', {
        'fill-BL300': newSelectedValue.length <= 5 && wordIsSelected
      })
    } width="299" height="176" viewBox="0 0 299 176" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={
        clsx('absolute top-[40.125rem] left-5 transition-colors ease-out duration-700', {
          'fill-BL300': newSelectedValue.length <= 5 && wordIsSelected
        })
      } filter="url(#filter0_d_2241_16150)">
        <path className={
          clsx('absolute top-[40.125rem] left-5 transition-colors ease-out duration-700', {
            'fill-BL300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } d="M107.56 86.6471H173.42C176.741 86.6488 179.998 85.7316 182.83 83.9971L249.57 42.9971C249.871 42.8235 250.122 42.5745 250.297 42.2746C250.472 41.9748 250.566 41.6344 250.57 41.2871V13.9971C250.57 13.6877 250.498 13.3827 250.359 13.106C250.221 12.8292 250.02 12.5883 249.773 12.4023C249.526 12.2162 249.239 12.09 248.935 12.0335C248.631 11.9771 248.318 11.992 248.02 12.0771L197.49 26.4971C194.665 27.3072 191.74 27.7179 188.8 27.7171H121.57C121.04 27.7171 120.531 27.5064 120.156 27.1313C119.781 26.7563 119.57 26.2475 119.57 25.7171V15.7771C119.572 15.6331 119.542 15.4905 119.483 15.3591C119.424 15.2277 119.338 15.1104 119.23 15.0155C119.122 14.9205 118.994 14.8501 118.856 14.809C118.718 14.7678 118.573 14.7569 118.43 14.7771L47.7003 25.1171C47.3983 25.1621 47.1106 25.2756 46.8593 25.4489C46.608 25.6222 46.3996 25.8508 46.2503 26.1171L0.250284 108.547C0.119419 108.783 0.0378111 109.044 0.0103545 109.313C-0.0171021 109.581 0.0101849 109.853 0.0905547 110.111C0.170924 110.369 0.302741 110.608 0.478006 110.813C0.65327 111.019 0.868371 111.187 1.11033 111.307L56.7803 139.147C57.176 139.345 57.6262 139.407 58.0605 139.322C58.4948 139.237 58.8886 139.01 59.1803 138.677L103.02 88.6771C103.588 88.0338 104.287 87.5198 105.07 87.1696C105.853 86.8194 106.702 86.6412 107.56 86.6471Z" fill="#B2B2B2" />
      </g>
      <defs>
        <filter className={
          clsx('absolute top-[40.125rem] left-5 transition-colors ease-out duration-700', {
            'fill-BL300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } id="filter0_d_2241_16150" x="0" y="0" width="298.57" height="175.359" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood className={
            clsx('absolute top-[40.125rem] left-5 transition-colors ease-out duration-700', {
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
          <feColorMatrix type="matrix" values="0 0 0 0 0.25098 0 0 0 0 0.564706 0 0 0 0 1 0 0 0 0.24 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2241_16150" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2241_16150" result="shape" />
        </filter>
      </defs>
    </svg>

  );
}