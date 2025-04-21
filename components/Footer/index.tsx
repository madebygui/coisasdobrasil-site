import Image from 'next/image';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className='w-full bg-neutral-900 px-8 py-16'>
      <div className='grid gap-4 grid-cols-4'>
        <div>
          <Image
            src='/images/logotipo-cb-footer.png'
            alt='Logo'
            width={150}
            height={102}
            className='mb-6'
          />
          <span className={styles.footerP}>
            © Copyright 2025{' '}
            <span className={`${styles.footerP} !font-bold`}>Coisas do Brasil</span>
          </span>
        </div>
        <div className='flex flex-col'>
          <span className={styles.footerTitle}>SHOWROOM</span>
          <span className={styles.footerP}>Rua Javari, 146 – Mooca, São Paulo – SP, 03112-100</span>
          <span className={styles.footerP}>(11) 2693-2437</span>
          <span className={styles.footerP}>(11) 99150-3494</span>
          <span className={styles.footerP}>coisas@coisasdobrasil.com.br</span>
        </div>
        <div className='flex flex-col'>
          <span className={styles.footerTitle}>NAVEGUE</span>
          <div className='grid grid-cols-2'>
            <a className={styles.footerP}>Home</a>
            <a className={styles.footerP}>Portólio</a>
            <a className={styles.footerP}>Sobre</a>
            <a className={styles.footerP}>Sob medida</a>
            <a className={styles.footerP}>Blog</a>
            <a className={styles.footerP}>Produtos</a>
            <a className={styles.footerP}>Contato</a>
            <a className={styles.footerP}>Download</a>
          </div>
        </div>
        <div className='flex flex-col'>
          <span className={styles.footerTitle}>MÍDIAS SOCIAIS</span>
          <span className={styles.footerP}>Instagram</span>
          <span className={styles.footerP}>Pinterest</span>
          <span className={styles.footerP}>Facebook</span>
        </div>
      </div>
    </footer>
  );
}
