import React from "react";

export default function NettaliansenLogoCommentButton(props: {
  className?: string,
  width?: string | number,
  height?: string | number
}) {
  const className = props.className;
  const width = props.width ?? '123';
  const height = props.height ?? '92';

  return (
    <svg width={width} height={height} className={className} viewBox="0 -15 123 92" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_142_834)">
        <path d="M7 20C7 8.9543 15.9543 0 27 0H102C113.046 0 122 8.95431 122 20V84H27C15.9543 84 7 75.0457 7 64V20Z"
              fill="#144654"/>
      </g>
      <path fillRule="evenodd" clipRule="evenodd"
            d="M86 34.2295C95.3888 34.2295 103 29.9248 103 24.6148C103 19.3047 95.3888 15 86 15C76.6112 15 69 19.3047 69 24.6148C69 27.8625 71.8471 30.7341 76.2067 32.4748C76.242 32.4889 76.2666 32.5217 76.2699 32.5595L76.7895 38.6657C76.7959 38.74 76.8783 38.7815 76.9418 38.7423L84.2904 34.1995C84.3078 34.1888 84.3281 34.1836 84.3485 34.1847C84.8919 34.2143 85.4428 34.2295 86 34.2295Z"
            fill="white"/>
      <circle cx="80.5" cy="24.5" r="1.5" fill="#004F00"/>
      <circle cx="85.5" cy="24.5" r="1.5" fill="#004F00"/>
      <circle cx="90.5" cy="24.5" r="1.5" fill="#004F00"/>
      <circle cx="63.5" cy="48.5" r="8.5" fill="white"/>
      <circle cx="50.5" cy="61.5" r="5.5" fill="white"/>
      <circle cx="31" cy="61" r="3" fill="white"/>
      <circle cx="40.5" cy="52.5" r="4.5" fill="white"/>
      <path d="M31 60.6667L40.0588 52L50.4118 62L64 48" stroke="white"/>
      <defs>
        <filter id="filter0_d_142_834" x="0" y="0" width="123" height="92" filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                         result="hardAlpha"/>
          <feOffset dx="-3" dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_142_834"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_142_834" result="shape"/>
        </filter>
      </defs>
    </svg>
  );
}