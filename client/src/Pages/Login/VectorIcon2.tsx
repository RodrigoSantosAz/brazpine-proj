import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M5.40753 5.24367V10.4873H8.02937V5.24367H5.40753Z' fill='#898989' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 0H13.7646V3.93275H27.5293V11.7983H24.9074V15.731H17.0419V11.7983H13.7646V15.731H0V0ZM11.1428 2.62183V6.55458H24.9074V9.17642H22.2856V13.1092H19.6638V9.17642H11.1428V13.1092H2.62183V2.62183H11.1428Z'
      fill='#898989'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
