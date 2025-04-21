import styles from './Animation.module.css';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  text: string;
}

export const HoverTextSlide = ({ text, ...rest }: Props) => {
  return (
    <div className={styles.animationSlideText}>
      <a {...rest}>{text}</a>
    </div>
  );
};
