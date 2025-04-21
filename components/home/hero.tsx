'use client';

import Image from 'next/image';
import styles from './Home.module.css';

export function Hero() {
  return (
    <section className={styles.heroSlider} aria-label='Banner principal'>
      <div className={styles.heroImage}>
        <Image
          src='/images/banner-home-1.webp'
          alt='Banner linha infantil'
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.overlay}>
          <div className={styles.textContainer}>
            <h3>LANÇAMENTO 2024 | Linha Infantil</h3>
            <h2>Giz</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
