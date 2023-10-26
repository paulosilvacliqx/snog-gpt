import { useContext } from 'react';
import { TangranContext } from '../../contexts/ContextsFiles/Tangran';
import clsx from 'clsx';

export function EspiritualidadeGroup() {
  const { newSelectedValue, dataTangran } = useContext(TangranContext)
  const wordIsSelected = newSelectedValue.includes(5)

  return (
    <svg className={
      clsx('absolute top-[27rem] left-[60rem] transition-colors ease-out duration-700', {
        'fill-O300': newSelectedValue.length <= 5 && wordIsSelected
      })
    } width="346" height="297" viewBox="0 0 346 297" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={
        clsx('absolute top-[27rem] left-[60rem] transition-colors ease-out duration-700', {
          'fill-O300': newSelectedValue.length <= 5 && wordIsSelected
        })
      } filter="url(#filter0_d_2241_16126)">
        <path className={
          clsx('absolute top-[27rem] left-[60rem] transition-colors ease-out duration-700', {
            'fill-O300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } d="M297.178 153.244C297.901 151.352 295.579 148.014 294.114 145.552C285.078 130.023 275.916 114.572 266.786 99.1049C263.748 93.8868 262.816 93.6023 257.038 95.5897C238.279 102.08 219.482 108.398 200.793 115.009C197.567 116.137 195.998 115.774 194.252 112.618C185.883 97.3939 177.163 82.4174 168.592 67.3424C164.797 60.6945 164.812 60.6685 157.335 62.8406C120.693 73.3859 84.0463 83.9129 47.3949 94.4218C43.6479 95.4917 41.9906 97.2022 42.2838 101.274C42.577 105.347 42.9984 109.597 41.6864 113.169C35.105 131.009 28.0146 148.669 20.9862 166.343C19.5988 169.826 20.0464 172.371 22.9473 174.946C32.9879 183.896 42.7691 193.134 52.9056 201.977C55.0741 203.81 57.7808 204.886 60.6157 205.043C84.6423 205.427 108.629 205.362 132.631 205.709C137.304 205.775 139.179 203.947 140.283 199.654C142.582 190.693 145.37 181.864 148.199 172.124C165.024 180.683 181.209 188.769 197.205 197.242C210.87 204.474 210.763 204.7 224.416 197.653C245.849 186.529 267.317 175.345 288.847 164.415C293.622 161.884 295.563 157.462 297.178 153.244Z" fill="#B2B2B2" />
      </g>
      <defs>
        <filter className={
          clsx('absolute top-[27rem] left-[60rem] transition-colors ease-out duration-700', {
            'fill-O300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } id="filter0_d_2241_16126" x="20.2305" y="49.5557" width="325.084" height="192.155" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood className={
            clsx('absolute top-[27rem] left-[60rem] transition-colors ease-out duration-700', {
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2241_16126" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2241_16126" result="shape" />
        </filter>
      </defs>
    </svg>

  );
}