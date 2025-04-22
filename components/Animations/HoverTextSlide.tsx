import styles from './Animation.module.css';
import React, { AnchorHTMLAttributes } from 'react';
import Link, { LinkProps } from 'next/link';

interface Props extends LinkProps {
  text: string;
}

export const HoverTextSlide = ({ text, ...rest }: Props) => {
  return (
    <div className={styles.animationSlideText}>
      <Link {...rest}>{text}</Link>
    </div>
  );
};
