import { HTMLAttributes } from 'react';
import { iconPaths } from './IconPath';
import { SVGProps } from 'react';
import React from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  gradient?: boolean;
  size?: string;
  icon?: keyof typeof iconPaths;
  color?: string;
}

export default function Icon({
  gradient,
  size,
  icon,
  color = 'currentColor',
}: IconProps) {
  const iconPath = icon ? iconPaths[icon] : null;

  const attrs: HTMLAttributes<SVGSVGElement> = {};
  if (size) attrs.style = { fontSize: size };

  const gradientId =
    'icon-gradient-' + Math.round(Math.random() * 10e12).toString(36);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 256 256"
      aria-hidden="true"
      stroke={gradient ? `url(#${gradientId})` : color}
      {...attrs}
    >
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

      {gradient && (
        <linearGradient
          id={gradientId}
          x1="23"
          x2="235"
          y1="43"
          y2="202"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4c11c6" />
          <stop offset=".5" stopColor="#7611a6" />
          <stop offset="1" stopColor="#1c0056" />
        </linearGradient>
      )}
    </svg>
  );
}
