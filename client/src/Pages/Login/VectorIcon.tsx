import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.8051 0C7.44841 0 4.72725 2.72116 4.72725 6.07789C4.72725 9.43461 7.44841 12.1558 10.8051 12.1558C14.1619 12.1558 16.883 9.43461 16.883 6.07789C16.883 2.72116 14.1619 0 10.8051 0ZM7.42853 6.07789C7.42853 4.21304 8.94029 2.70128 10.8051 2.70128C12.67 2.70128 14.1817 4.21304 14.1817 6.07789C14.1817 7.94273 12.67 9.45449 10.8051 9.45449C8.94029 9.45449 7.42853 7.94273 7.42853 6.07789Z'
      fill='#898989'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.8051 14.1817C4.83762 14.1817 0 19.0194 0 24.9869V27.0128H21.6103V24.9869C21.6103 19.0194 16.7726 14.1817 10.8051 14.1817ZM10.8051 16.883C15.0533 16.883 18.5381 20.1519 18.8812 24.3116H2.72902C3.07219 20.1519 6.55692 16.883 10.8051 16.883Z'
      fill='#898989'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
