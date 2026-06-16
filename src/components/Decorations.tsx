import type { ReactNode } from 'react';

export function WavyDivider({
  fillTop = '#FDF6EC',
  fillBottom = '#F5EDE0',
  flip = false,
}: {
  fillTop?: string;
  fillBottom?: string;
  flip?: boolean;
}) {
  return (
    <div
      className="wavy-divider"
      style={flip ? { transform: 'rotate(180deg)' } : {}}
    >
      <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
        <rect width="1440" height="70" fill={fillBottom} />
        <path
          d="M0,0 C360,70 1080,0 1440,50 L1440,0 L0,0 Z"
          fill={fillTop}
        />
      </svg>
    </div>
  );
}

export function FloatingDecoration({
  children,
  className = '',
  delay = 0,
  animation = 'animate-float-1',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: string;
}) {
  return (
    <div
      className={`absolute pointer-events-none select-none ${animation} ${className}`}
      style={{ animationDelay: `${delay}s` }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

export function StarShape({
  size = 24,
  color = '#A78BFA',
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z" />
    </svg>
  );
}

export function CodeBrackets({
  size = 32,
  color = '#7C3AED',
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 6L4 16L10 26" />
      <path d="M22 6L28 16L22 26" />
    </svg>
  );
}

export function DotCircle({
  size = 16,
  color = '#F59E0B',
  opacity = 0.6,
}: {
  size?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="7" fill={color} opacity={opacity} />
    </svg>
  );
}

export function BlobShape({
  size = 100,
  color = '#A78BFA',
  opacity = 0.1,
}: {
  size?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <path
        d="M44.7,-76.4C58.8,-69.2,71.8,-58.2,80.3,-44.3C88.8,-30.4,92.9,-13.7,91.2,2.1C89.5,17.9,82,32.9,72.1,45.4C62.3,57.9,50.1,67.8,36.3,74.4C22.5,81,7.1,84.3,-8.2,83.1C-23.5,81.9,-38.7,76.2,-50.3,67C-61.9,57.8,-69.9,45,-75.7,31.1C-81.5,17.1,-85.2,2,-83.4,-12.2C-81.7,-26.4,-74.5,-39.7,-64.2,-49.9C-53.9,-60.1,-40.5,-67.2,-27,-74.1C-13.5,-81,0,-87.7,13.1,-85.3C26.2,-82.9,30.7,-83.6,44.7,-76.4Z"
        transform="translate(100 100)"
        fill={color}
        opacity={opacity}
      />
    </svg>
  );
}

export function TriangleShape({
  size = 20,
  color = '#F59E0B',
  opacity = 0.5,
}: {
  size?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill={color} opacity={opacity}>
      <polygon points="10,2 18,18 2,18" />
    </svg>
  );
}
