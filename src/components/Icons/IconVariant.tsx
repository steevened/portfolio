import React from 'react';

interface IconVariantProps {
  icon: string;
}

export default function IconVariant({ icon }: IconVariantProps) {
  if (icon === 'terminal-window') {
    return (
      <>
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
          d="m80 96 40 32-40 32m56 0h40"
        />
        <rect
          width="192"
          height="160"
          x="32"
          y="48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16.97"
          rx="8.5"
        />
      </>
    );
  } else if (icon === 'sun') {
    return (
      <>
        <circle
          cx="128"
          cy="128"
          r="60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
          d="M128 36V16M63 63 49 49m-13 79H16m47 65-14 14m79 13v20m65-47 14 14m13-79h20m-47-65 14-14"
        />
      </>
    );
  } else if (icon === 'moon-stars') {
    return (
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M216 112V64m24 24h-48m-24-64v32m16-16h-32m65 113A92 92 0 0 1 103 39h0a92 92 0 1 0 114 114Z"
      />
    );
  } else {
    return <div>Hi</div>;
  }
}
