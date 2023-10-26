import { useContext } from 'react';
import { TangranContext } from '../../contexts/ContextsFiles/Tangran';
import clsx from 'clsx';

export function MusicaGroup() {
  const { newSelectedValue, dataTangran } = useContext(TangranContext)
  const wordIsSelected = newSelectedValue.includes(10)

  return (
    <svg className={
      clsx('absolute top-[27.5rem] left-[46.063rem] transition-colors ease-out duration-700', {
        'fill-O350': newSelectedValue.length <= 5 && wordIsSelected
      })
    } width="270" height="212" viewBox="0 0 270 212" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={
        clsx('absolute top-[27.5rem] left-[46.063rem] transition-colors ease-out duration-700', {
          'fill-O350': newSelectedValue.length <= 5 && wordIsSelected
        })
      } filter="url(#filter0_d_2241_16144)">
        <path className={
          clsx('absolute top-[27.5rem] left-[46.063rem] transition-colors ease-out duration-700', {
            'fill-O350': newSelectedValue.length <= 5 && wordIsSelected
          })
        } d="M219.122 101.992C210.242 90.4421 201.642 78.6721 192.822 67.0721C192.051 66.2347 191.554 65.1814 191.399 64.0535C191.243 62.9255 191.436 61.7771 191.952 60.7621C195.042 53.5021 197.952 46.1522 200.822 38.8122C202.892 33.5722 202.412 32.4322 197.362 30.2722C184.122 24.6122 170.942 18.8321 157.592 13.4721C154.309 12.2066 150.77 11.7471 147.272 12.1321C125.422 14.6521 103.632 17.8721 79.6725 15.9721C74.8625 15.9721 68.1825 16.2622 61.5425 15.9022C54.1925 15.4922 47.5425 16.6522 41.3625 21.0222C35.9425 24.8422 29.8325 27.6821 24.2825 31.3521C22.007 32.8579 20.1576 34.9243 18.9125 37.3521C14.4925 46.3521 10.9125 55.8321 6.17247 64.7021C1.36247 73.7621 -0.947524 83.1222 0.362476 93.2222C0.638401 95.705 1.78234 98.0106 3.59248 99.7322C15.2725 108.952 27.1158 117.952 39.1225 126.732C40.995 128.011 43.2543 128.598 45.5125 128.392C67.6125 125.592 89.6725 122.502 111.772 119.692C113.855 119.53 115.926 120.127 117.602 121.372C124.712 127.122 131.682 133.072 138.432 139.232C139.998 140.819 140.948 142.91 141.112 145.132C141.582 153.332 141.652 161.552 141.742 169.762C141.742 173.762 143.252 175.932 147.612 175.392C155.752 174.392 163.932 173.682 172.032 172.392C173.079 172.128 174.059 171.648 174.91 170.983C175.76 170.319 176.463 169.484 176.972 168.532C180.212 161.692 182.872 154.582 185.972 147.642C186.859 145.512 188.1 143.548 189.642 141.832C199.182 131.652 208.732 121.482 218.552 111.572C221.822 108.232 221.922 105.642 219.122 101.992Z" fill="#B2B2B2" />
      </g>
      <defs>
        <filter className={
          clsx('absolute top-[27.5rem] left-[46.063rem] transition-colors ease-out duration-700', {
            'fill-O350': newSelectedValue.length <= 5 && wordIsSelected
          })
        } id="filter0_d_2241_16144" x="0" y="0" width="269.121" height="211.474" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood className={
            clsx('absolute top-[27.5rem] left-[46.063rem] transition-colors ease-out duration-700', {
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
          <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.407843 0 0 0 0 0.270588 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2241_16144" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2241_16144" result="shape" />
        </filter>
      </defs>
    </svg>

  );
}