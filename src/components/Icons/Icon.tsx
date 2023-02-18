import { HTMLAttributes } from 'react';
import IconVariant from './IconVariant';

interface IconProps {
  gradient?: boolean;
  size?: string;
  icon: string;
  color?: string;
}

export default function Icon({
  gradient,
  size,
  icon,
  color = 'currentColor',
}: IconProps) {
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
      <IconVariant icon={icon} />
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
