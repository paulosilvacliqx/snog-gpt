import clsx from 'clsx';
import { useContext } from 'react';
import { TangranContext } from "../../contexts/ContextsFiles/Tangran";

export function AventuraGroup() {
  const { newSelectedValue, dataTangran } = useContext(TangranContext)
  const wordIsSelected = newSelectedValue.includes(9)

  return (
    <svg className={
      clsx('absolute top-[310px] left-[52.313rem] transition-colors ease-out duration-700', {
        'fill-O300': newSelectedValue.length <= 5 && wordIsSelected
      })
    } width="281" height="167" viewBox="0 0 281 167" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={
        clsx('absolute top-[310px] left-[52.313rem] transition-colors ease-out duration-700', {
          'fill-O300': newSelectedValue.length <= 5 && wordIsSelected
        })
      } filter="url(#filter0_d_2241_16129)">
        <path className={
          clsx('absolute top-[310px] left-[52.313rem] transition-colors ease-out duration-700', {
            'fill-O300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } d="M229.43 40.202C222.63 34.822 215.83 29.462 208.63 24.562C205.705 22.6604 202.432 21.3586 199 20.732C191.73 19.302 184.35 18.372 177 17.352C164.6 15.632 152.22 12.912 139.78 12.552C112.98 11.782 86.15 12.552 59.34 12.012C50.99 11.842 44.34 13.432 38.88 20.012C36.12 23.252 32.52 25.822 29.32 28.822C21.55 35.822 21.98 34.492 26.83 43.122C27.2 43.782 27.48 44.492 28.05 45.672C27.0426 46.0875 26.0146 46.4513 24.97 46.762C18.5 48.272 11.97 49.532 5.59 51.372C4 51.832 1.91 54.042 1.81 55.562C0.929999 68.542 0.326667 81.542 0 94.562C0.100853 96.7921 0.982196 98.9158 2.49 100.562C11.03 109.752 19.8 118.732 28.49 127.782C32.57 132.032 33.75 132.032 37.72 127.572C46.57 117.572 55.43 107.642 64.2 97.622C65.87 95.722 67.39 94.902 70.2 95.412C81.29 97.462 92.45 99.212 103.61 100.872C106.198 101.269 108.835 101.205 111.4 100.682C124.393 97.8886 137.35 94.952 150.27 91.872C152.638 91.3015 154.868 90.2646 156.83 88.822C165.5 82.322 174.31 75.942 182.53 68.892C192.01 60.742 202.41 54.952 214.76 52.572C219.298 51.6021 223.749 50.2644 228.07 48.572C229.7 47.972 231.89 46.382 232.07 45.002C232.25 43.622 230.83 41.302 229.43 40.202Z" fill="#B2B2B2" />
      </g>
      <defs>
        <filter className={
          clsx('absolute top-[310px] left-[52.313rem] transition-colors ease-out duration-700', {
            'fill-O300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } id="filter0_d_2241_16129" x="0" y="0" width="280.086" height="166.944" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood className={
            clsx('absolute top-[310px] left-[52.313rem] transition-colors ease-out duration-700', {
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2241_16129" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2241_16129" result="shape" />
        </filter>
      </defs>
    </svg>

  );
}