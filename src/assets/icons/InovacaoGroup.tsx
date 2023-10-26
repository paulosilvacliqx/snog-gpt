import { useContext } from "react";
import { TangranContext } from "../../contexts/ContextsFiles/Tangran";
import clsx from "clsx";

export function InovacaoGroup() {
  const { newSelectedValue, dataTangran } = useContext(TangranContext)
  const wordIsSelected = newSelectedValue.includes(14)

  return (
    <svg className={
      clsx('absolute top-[45.313rem] left-[11.5rem] transition-colors ease-out duration-700', {
        'fill-BL300': newSelectedValue.length <= 5 && wordIsSelected
      })
    } width="246" height="268" viewBox="0 0 246 268" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={
        clsx('absolute top-[45.313rem] left-[11.5rem] transition-colors ease-out duration-700', {
          'fill-BL300': newSelectedValue.length <= 5 && wordIsSelected
        })
      } filter="url(#filter0_d_2241_16153)">
        <path className={
          clsx('absolute top-[45.313rem] left-[11.5rem] transition-colors ease-out duration-700', {
            'fill-BL300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } d="M66.6791 184.188C67.5679 184.19 68.4452 184.389 69.2477 184.771C70.0501 185.153 70.7577 185.709 71.3191 186.398L107.559 230.828C107.733 231.04 107.948 231.215 108.192 231.341C108.437 231.466 108.704 231.54 108.978 231.558C109.252 231.576 109.526 231.537 109.785 231.444C110.043 231.351 110.279 231.206 110.479 231.018L176.559 168.458C181.747 163.544 186.133 157.848 189.559 151.578L197.069 137.848C197.214 137.584 197.298 137.291 197.314 136.99C197.33 136.689 197.278 136.389 197.162 136.111C197.046 135.833 196.868 135.585 196.642 135.385C196.417 135.186 196.149 135.039 195.859 134.958L156.859 123.908C154.903 123.352 153.232 122.071 152.186 120.327C151.14 118.583 150.798 116.505 151.229 114.518L162.229 63.5879L152.699 22.7279C152.624 22.4082 152.471 22.1118 152.255 21.865C152.038 21.6183 151.764 21.4287 151.456 21.3131C151.149 21.1975 150.818 21.1593 150.492 21.202C150.166 21.2446 149.856 21.3669 149.589 21.5579L128.529 36.5579C127.313 37.4239 125.879 37.9325 124.39 38.0261C122.9 38.1198 121.414 37.7948 120.099 37.0879L73.9891 12.2378C73.6559 12.059 73.279 11.9783 72.9018 12.005C72.5246 12.0317 72.1628 12.1648 71.8582 12.3888C71.5536 12.6128 71.3187 12.9185 71.1808 13.2706C71.0429 13.6226 71.0076 14.0066 71.0791 14.3779L83.0091 76.6279C83.2471 77.87 83.1873 79.151 82.8344 80.3655C82.4815 81.5801 81.8457 82.6937 80.9791 83.6149C80.1125 84.5362 79.0398 85.2388 77.8491 85.6652C76.6583 86.0916 75.3835 86.2296 74.1291 86.0679L2.25909 76.7579C1.91644 76.7131 1.568 76.7579 1.2478 76.8879C0.927605 77.0178 0.64656 77.2285 0.432038 77.4994C0.217516 77.7704 0.0768367 78.0922 0.023743 78.4337C-0.0293506 78.7752 0.0069565 79.1246 0.12909 79.4479L7.40909 98.6778C8.87987 102.554 9.64852 106.662 9.67908 110.808L9.99908 154.688C10.0092 155.883 9.95917 157.078 9.84909 158.268L5.84909 199.878C5.81805 200.205 5.86828 200.536 5.99536 200.839C6.12244 201.143 6.32244 201.41 6.57761 201.618C6.83278 201.825 7.13526 201.967 7.45822 202.03C7.78118 202.093 8.11465 202.075 8.42908 201.978L64.8591 184.458C65.4488 184.277 66.0623 184.186 66.6791 184.188Z" fill="#B2B2B2" />
      </g>
      <defs>
        <filter className={
          clsx('absolute top-[45.313rem] left-[11.5rem] transition-colors ease-out duration-700', {
            'fill-BL300': newSelectedValue.length <= 5 && wordIsSelected
          })
        } id="filter0_d_2241_16153" x="0" y="0" width="245.317" height="267.562" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood className={
            clsx('absolute top-[45.313rem] left-[11.5rem] transition-colors ease-out duration-700', {
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2241_16153" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2241_16153" result="shape" />
        </filter>
      </defs>
    </svg>

  );
}