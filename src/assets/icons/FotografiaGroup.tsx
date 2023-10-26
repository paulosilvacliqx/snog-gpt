import { useContext } from 'react';
import { TangranContext } from '../../contexts/ContextsFiles/Tangran';
import clsx from 'clsx';

export function FotografiaGroup() {
  const { newSelectedValue, dataTangran } = useContext(TangranContext)
  const wordIsSelected = newSelectedValue.includes(8)

  return (
    <svg className={
      clsx('absolute top-[30.4rem] left-99 transition-colors ease-out duration-700', {
        'fill-O350': newSelectedValue.length <= 5 && wordIsSelected
      })
    } width="271" height="213" viewBox="0 0 271 213" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={
        clsx('absolute top-[30.4rem] left-99 transition-colors ease-out duration-700', {
          'fill-O350': newSelectedValue.length <= 5 && wordIsSelected
        })
      } filter="url(#filter0_d_2241_16135)">
        <path className={
          clsx('absolute top-[30.4rem] left-99 transition-colors ease-out duration-700', {
            'fill-O350': newSelectedValue.length <= 5 && wordIsSelected
          })
        } d="M216.038 12.4403C202.528 15.7803 188.888 18.6803 175.578 22.6903C166.948 25.3003 159.578 25.7703 152.908 18.6903C150.358 15.9603 147.398 16.5703 145.028 19.6903C140.458 25.7503 135.888 31.8303 131.028 37.6903C129.455 39.5148 127.395 40.8536 125.088 41.5503C105.738 46.9803 86.3184 52.1903 66.9184 57.4503C46.3318 63.0303 25.7351 68.6103 5.1284 74.1903C-0.871599 75.8203 -1.55155 78.4203 2.79844 82.8304C5.62844 85.7004 8.60843 88.4304 11.4084 91.3304C31.9384 112.59 55.2184 131.33 71.7784 156.26C73.0831 157.992 74.8025 159.368 76.7784 160.26C86.7784 165.21 96.8384 169.99 106.888 174.81C108.128 175.4 109.428 175.81 110.798 176.41C112.348 175.86 113.798 175.41 115.218 174.82C139.218 164.89 163.218 154.88 187.328 145.08C190.758 143.69 192.328 141.58 193.168 138.13C202.808 98.3037 212.502 58.4903 222.248 18.6903C223.598 12.9403 221.698 11.0403 216.038 12.4403Z" fill="#B2B2B2" />
      </g>
      <defs>
        <filter className={
          clsx('absolute top-[30.4rem] left-99 transition-colors ease-out duration-700', {
            'fill-O350': newSelectedValue.length <= 5 && wordIsSelected
          })
        } id="filter0_d_2241_16135" x="0" y="0" width="270.665" height="212.41" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood className={
            clsx('absolute top-[30.4rem] left-99 transition-colors ease-out duration-700', {
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2241_16135" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2241_16135" result="shape" />
        </filter>
      </defs>
    </svg>

  );
}