import * as React from 'react';

function SvgLike(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3m7-2V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a1.999 1.999 0 00-2-2.3H14z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgLike;
