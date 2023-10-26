import { useContext } from 'react';
import { TangranContext } from "../../contexts/ContextsFiles/Tangran";
import clsx from "clsx";

export function FeGroup() {
  const { newSelectedValue, dataTangran } = useContext(TangranContext)
  const wordIsSelected = newSelectedValue.includes(4)

  return (
    <svg className={
      clsx('absolute top-[43.25rem] left-[70rem] transition-colors ease-out duration-700', {
        'fill-G300': newSelectedValue.length <= 5 && wordIsSelected
      })
    } width="225" height="282" viewBox="0 0 225 282" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={
        clsx('absolute top-[43.25rem] left-[70rem] transition-colors ease-out duration-700', {
          'fill-G300': newSelectedValue.length <= 5 && wordIsSelected
        })
      } filter="url(#filter0_d_2241_16123)">
        <path className={
          clsx('absolute top-[43.25rem] left-[70rem] transition-colors ease-out duration-700', {
            'fill-G300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } d="M168.309 13.0458C140.309 22.9058 112.309 32.6758 84.3092 42.7558C79.9192 44.3458 75.9492 47.2158 71.9392 49.7558C65.2892 53.9258 58.6892 58.1858 52.1992 62.6158C49.2892 64.6158 47.3192 63.7958 44.9492 61.6658C36.6492 54.2058 28.2592 46.8358 19.7292 39.6658C18.9749 39.1107 18.1185 38.7102 17.2089 38.4871C16.2994 38.264 15.3547 38.2227 14.4292 38.3658C13.5192 38.5458 12.5492 41.0258 12.4292 42.5058C11.6792 58.7558 11.3292 75.0258 10.4292 91.2658C9.74921 103.266 8.97925 115.346 7.15925 127.266C5.69925 136.856 2.42923 146.146 0.319227 155.656C-0.232508 158.318 -0.0668736 161.079 0.799207 163.656C4.71921 174.746 8.92925 185.726 13.2193 196.656C14.1001 198.944 15.4026 201.048 17.0592 202.856C29.0092 215.436 41.3392 227.686 53.0092 240.526C54.5645 242.418 56.5694 243.89 58.8404 244.807C61.1114 245.724 63.5762 246.057 66.0092 245.776C68.8492 245.606 70.0792 244.626 70.6792 241.856C73.0192 230.976 75.6793 220.166 77.9693 209.276C78.6493 205.966 80.1892 204.276 83.3192 203.216C93.2292 199.706 103.009 195.826 112.909 192.216C115.909 191.136 117.969 189.636 117.279 186.216C115.899 179.396 118.989 175.426 125.109 173.156C126.079 172.674 127.024 172.144 127.939 171.566C130.689 170.166 131.479 168.196 130.699 165.076C128.049 154.586 125.649 144.076 123.179 133.496C121.389 125.866 119.629 118.236 117.789 110.286C118.723 110.12 119.671 110.053 120.619 110.086C125.339 110.996 128.259 108.996 131.009 105.086C143.299 87.7758 155.929 70.6958 168.369 53.4958C169.642 51.9535 170.569 50.1565 171.089 48.2258C172.819 38.4858 174.429 28.7158 175.789 18.9158C176.759 12.0658 174.909 10.7358 168.309 13.0458Z" fill="#B2B2B2" />
      </g>
      <defs>
        <filter className={
          clsx('absolute top-[43.25rem] left-[70rem] transition-colors ease-out duration-700', {
            'fill-G300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } id="filter0_d_2241_16123" x="0" y="0" width="224.03" height="281.873" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood className={
            clsx('absolute top-[43.25rem] left-[70rem] transition-colors ease-out duration-700', {
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
          <feColorMatrix type="matrix" values="0 0 0 0 0.619608 0 0 0 0 0.760784 0 0 0 0 0.270588 0 0 0 0.24 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2241_16123" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2241_16123" result="shape" />
        </filter>
      </defs>
    </svg>

  );
}