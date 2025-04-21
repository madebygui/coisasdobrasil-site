'use client';

import Image from 'next/image';
import './styles.css';

export function Hero() {
  return (
    <section className='hero-slider' aria-label='Banner principal'>
      <div className='hero-image'>
        <Image
          src='/images/banner-home-1.webp'
          alt='Banner linha infantil'
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className='overlay'>
          <div className='text-container'>
            <h3 className='description'>LANÇAMENTO 2024 | Linha Infantil</h3>
            <h2 className='title'>Giz</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
