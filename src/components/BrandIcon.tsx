import React from 'react';
import clsx from 'clsx';

// Brand slugs for Simple Icons CDN
export type BrandKey =
  | 'flutter'
  | 'androidstudio'
  | 'firebase'
  | 'git'
  | 'figma'
  | 'java'
  | 'python'
  | 'cplusplus'
  | 'html5'
  | 'css3'
  | 'javascript'
  | 'dart'
  | 'react';

const SLUGS: Record<BrandKey, string> = {
  flutter: 'flutter',
  androidstudio: 'androidstudio',
  firebase: 'firebase',
  git: 'git',
  figma: 'figma',
  java: 'java',
  python: 'python',
  cplusplus: 'cplusplus',
  html5: 'html5',
  css3: 'css3',
  javascript: 'javascript',
  dart: 'dart',
  react: 'react',
};

interface BrandIconProps {
  name: BrandKey;
  className?: string;
  title?: string;
  color?: string; // hex without '#', defaults to brand color
}

// Renders official brand logos via Simple Icons CDN
const BrandIcon: React.FC<BrandIconProps> = ({ name, className, title, color }) => {
  const slug = SLUGS[name];
  const src = `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ''}`;
  const label = title || `${name} logo`;

  return (
    <img
      src={src}
      alt={label}
      className={clsx('inline-block', className)}
      width={24}
      height={24}
      loading="lazy"
      decoding="async"
    />
  );
};

export default BrandIcon;
