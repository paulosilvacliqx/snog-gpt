import { useContext } from 'react';
import { TangranContext } from "../../contexts/ContextsFiles/Tangran";
import clsx from "clsx";

export function CulturaGroup() {
  const { newSelectedValue, dataTangran } = useContext(TangranContext)
  const wordIsSelected = newSelectedValue.includes(11)

  return (
    <svg className={
      clsx('absolute top-[42.813rem] left-[58.313rem] transition-colors ease-out duration-700', {
        'fill-G300': newSelectedValue.length <= 5 && wordIsSelected
      })
    } width="214" height="281" viewBox="0 0 214 281" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={
        clsx('absolute top-[42.813rem] left-[58.313rem] transition-colors ease-out duration-700', {
          'fill-G300': newSelectedValue.length <= 5 && wordIsSelected
        })
      } filter="url(#filter0_d_2241_16138)">
        <path className={
          clsx('absolute top-[42.813rem] left-[58.313rem] transition-colors ease-out duration-700', {
            'fill-G300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } d="M162.959 87.7622C152.239 77.4522 141.329 67.3322 130.809 56.8222C128.153 54.1141 126.173 50.8184 125.029 47.2022C122.029 37.4522 119.539 27.5522 117.289 17.6022C116.239 13.0122 114.159 11.6022 109.539 12.0922C82.8988 14.7522 56.2388 17.3022 29.5388 19.5622C24.9388 19.9422 22.5388 21.1122 21.8388 25.9822C18.8388 48.6622 15.5488 71.3222 12.3588 93.9822C8.7388 119.712 5.2188 145.452 1.3588 171.152C-0.121201 181.012 -2.2312 190.782 6.3588 198.612C8.5488 200.612 10.9188 202.892 13.6088 203.762C33.6088 210.196 53.6888 216.426 73.8488 222.452C78.7087 223.91 83.1196 226.576 86.6688 230.202C96.2788 239.662 108.309 243.852 121.599 244.762C123.931 244.894 126.27 244.864 128.599 244.672C129.929 244.482 131.699 243.732 132.319 242.672C140.819 228.086 149.215 213.439 157.509 198.732C159.049 196.022 158.429 193.732 155.619 192.052C151.697 189.915 147.894 187.564 144.229 185.012C142.346 183.624 140.995 181.634 140.399 179.372C136.769 160.372 133.619 141.372 129.869 122.372C129.039 118.172 130.219 116.302 133.569 114.272C143.239 108.412 152.729 102.272 162.239 96.1422C166.539 93.3622 166.679 91.3522 162.959 87.7622Z" fill="#B2B2B2" />
      </g>
      <defs>
        <filter className={
          clsx('absolute top-[42.813rem] left-[58.313rem] transition-colors ease-out duration-700', {
            'fill-G300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } id="filter0_d_2241_16138" x="0" y="0" width="213.615" height="280.843" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood className={
            clsx('absolute top-[42.813rem] left-[58.313rem] transition-colors ease-out duration-700', {
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2241_16138" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2241_16138" result="shape" />
        </filter>
      </defs>
    </svg>

  );
}