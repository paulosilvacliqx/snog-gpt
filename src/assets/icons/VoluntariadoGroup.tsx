import { useContext } from 'react';
import { TangranContext } from '../../contexts/ContextsFiles/Tangran';
import clsx from 'clsx';

export function VoluntariadoGroup() {
  const { newSelectedValue, dataTangran } = useContext(TangranContext)
  const wordIsSelected = newSelectedValue.includes(6)

  return (
    <svg className={
      clsx('absolute top-[19rem] left-[65rem] transition-colors ease-out duration-700', {
        'fill-O300': newSelectedValue.length <= 5 && wordIsSelected
      })
    } width="278" height="224" viewBox="0 0 278 224" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={
        clsx('absolute top-80 left-[65rem] transition-colors ease-out duration-700', {
          'fill-O300': newSelectedValue.length <= 5 && wordIsSelected
        })
      } filter="url(#filter0_d_2241_16120)">
        <path className={
          clsx('absolute top-80 left-[65rem] transition-colors ease-out duration-700', {
            'fill-O300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } d="M146.359 187.651C148.479 187.491 150.169 187.321 151.869 187.251C168.279 186.631 184.679 185.981 201.089 185.451C205.259 185.321 206.779 183.451 206.609 179.311C206.069 166.311 205.829 153.311 205.279 140.311C205.059 135.141 205.589 130.451 208.229 125.691C214.999 113.531 221.129 101.011 227.659 88.6914C229.459 85.3614 229.559 82.4414 227.609 79.1214C218.449 63.3347 209.395 47.4714 200.449 31.5314C198.509 28.0514 196.369 26.6214 192.259 27.5914C183.214 29.7318 173.742 29.2074 164.989 26.0814C150.369 21.0814 135.419 17.0814 120.629 12.6114C117.459 11.6114 114.809 11.6114 112.219 14.3514C102.599 24.4514 92.6687 34.2514 83.1087 44.3514C77.7187 50.0714 71.8687 54.7114 64.3987 57.5814C54.7287 61.2814 45.3187 65.6614 35.8587 69.9014C33.6019 70.8898 31.5081 72.2149 29.6487 73.8314C20.7687 81.8314 12.0087 89.8913 3.21873 97.9613C-0.941273 101.781 -1.04128 103.511 2.75872 107.591C10.8887 116.321 19.4187 124.711 27.0687 133.841C31.4487 139.061 35.8687 140.591 41.9187 137.991C44.8387 136.731 46.7387 137.701 48.6687 140.081C53.5587 146.081 58.7687 151.831 63.6687 157.821C65.6687 160.281 67.6687 160.981 70.9187 160.201C89.2287 155.741 107.619 151.611 125.919 147.131C129.339 146.301 130.609 147.261 131.439 150.431C134.269 161.191 137.349 171.881 140.229 182.631C141.179 186.131 142.929 188.221 146.359 187.651Z" fill="#B2B2B2" />
      </g>
      <defs>
        <filter className={
          clsx('absolute top-80 left-[65rem] transition-colors ease-out duration-700', {
            'fill-O300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } id="filter0_d_2241_16120" x="0" y="0" width="277.04" height="223.745" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood className={
            clsx('absolute top-80 left-[65rem] transition-colors ease-out duration-700', {
              'fill-O300': newSelectedValue.length <= 5 && wordIsSelected
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
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.627451 0 0 0 0 0.27451 0 0 0 0.24 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2241_16120" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2241_16120" result="shape" />
        </filter>
      </defs>
    </svg>

  );
}