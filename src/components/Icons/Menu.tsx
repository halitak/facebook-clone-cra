import * as React from 'react';

function SvgMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" {...props}>
      <path
        d="M23.5 4a1.5 1.5 0 010 3h-19a1.5 1.5 0 010-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMenu;
