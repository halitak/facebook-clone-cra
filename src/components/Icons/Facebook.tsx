import * as React from 'react';

function SvgFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 40 40" fill="none" {...props}>
      <g clipPath="url(#facebook_svg__clip0)">
        <path
          d="M16.667 39.778C7.222 38.11 0 29.888 0 20 0 9 9 0 20 0s20 9 20 20c0 9.889-7.222 18.111-16.667 19.778l-1.11-.89h-4.445l-1.111.89z"
          fill="url(#facebook_svg__paint0_linear)"
        />
        <path
          d="M27.778 25.555L28.667 20h-5.334v-3.889c0-1.556.556-2.778 3-2.778h2.556v-5.11c-1.444-.223-3-.445-4.444-.445-4.556 0-7.778 2.778-7.778 7.778V20h-5v5.555h5v14.112A16.96 16.96 0 0020 40c1.111 0 2.222-.111 3.333-.333V25.555h4.445z"
          fill="#fff"
        />
      </g>
      <defs>
        <linearGradient
          id="facebook_svg__paint0_linear"
          x1={20}
          y1={38.616}
          x2={20}
          y2={0}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0062E0" />
          <stop offset={1} stopColor="#19AFFF" />
        </linearGradient>
        <clipPath id="facebook_svg__clip0">
          <path fill="#fff" d="M0 0h40v40H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgFacebook;
