import * as React from 'react';

function SvgWatchFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" {...props}>
      <path
        d="M8.75 25.25a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H8.75zm8.414-12.404l-5.109 3.077A.696.696 0 0111 15.327V9.172a.696.696 0 011.055-.596l5.109 3.078a.697.697 0 010 1.192zM21.75 2.75H6.25A3.754 3.754 0 002.5 6.5V18a3.754 3.754 0 003.75 3.75h15.5A3.754 3.754 0 0025.5 18V6.5a3.754 3.754 0 00-3.75-3.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWatchFill;
