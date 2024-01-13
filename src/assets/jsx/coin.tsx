import React from 'react';
import { ISVGProps } from './types';

export const Coin = (props: ISVGProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='188'
      height='188'
      viewBox='0 0 188 188'
      fill='none'
      {...props}>
      <g filter='url(#filter0_f_110_85)'>
        <path
          d='M184 94C184 143.706 143.706 184 94 184C44.2944 184 4 143.706 4 94C4 44.2944 44.2944 4 94 4C143.706 4 184 44.2944 184 94Z'
          fill='url(#paint0_linear_110_85)'
        />
      </g>
      <g filter='url(#filter1_d_110_85)'>
        <path
          d='M111.88 68.4139C111.88 60.0618 118.665 53.291 127.036 53.291H151.401C157.738 53.291 162.875 58.4169 162.875 64.74C162.875 71.0631 157.738 76.1889 151.401 76.1889H111.88V68.4139Z'
          fill='white'
        />
        <path
          d='M111.88 96.4003C111.88 88.0481 118.665 81.2774 127.036 81.2774H151.401C157.738 81.2774 162.875 86.4032 162.875 92.7263C162.875 99.0494 157.738 104.175 151.401 104.175H111.88V96.4003Z'
          fill='white'
        />
        <path
          d='M111.88 121.985C111.88 114.959 117.588 109.264 124.629 109.264C131.67 109.264 137.377 114.959 137.377 121.985C137.377 129.01 131.67 134.706 124.629 134.706H111.88V121.985Z'
          fill='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M65.832 53.291C43.3499 53.291 25.1245 71.5164 25.1245 93.9985C25.1245 116.481 43.3499 134.706 65.832 134.706H106.539V93.9985C106.539 71.5164 88.3141 53.291 65.832 53.291ZM46.7503 93.9985C46.7503 104.537 55.2935 113.08 65.832 113.08H84.9136V93.9985C84.9136 83.46 76.3705 74.9168 65.832 74.9168C55.2935 74.9168 46.7503 83.46 46.7503 93.9985Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_110_85'
          x='0'
          y='0'
          width='188'
          height='188'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur
            stdDeviation='2'
            result='effect1_foregroundBlur_110_85'
          />
        </filter>
        <filter
          id='filter1_d_110_85'
          x='25.1245'
          y='53.291'
          width='145.75'
          height='89.4148'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='4' dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_110_85'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_110_85'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear_110_85'
          x1='47.9999'
          y1='8.63945'
          x2='168.775'
          y2='136.449'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#D944FE' />
          <stop offset='0.436714' stopColor='#6AD2D8' />
          <stop offset='0.735' stopColor='#6E55F0' />
          <stop offset='1' stopColor='#5E0CC6' />
        </linearGradient>
      </defs>
    </svg>
  );
};
