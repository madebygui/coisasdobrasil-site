import './styles.css';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  text: string;
}

export const HoverTextSlide = ({ text, ...rest }: Props) => {
  return (
    <div className='animation-slide-text'>
      <a {...rest}>{text}</a>
    </div>
  );
};
