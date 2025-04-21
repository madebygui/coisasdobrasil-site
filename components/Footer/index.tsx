import Image from 'next/image';
import './styles.css';

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
          <span className='footer-p'>
            © Copyright 2025 <span className='footer-p !font-bold'>Coisas do Brasil</span>
          </span>
        </div>
        <div className='flex flex-col'>
          <span className='footer-title'>SHOWROOM</span>
          <span className='footer-p'>Rua Javari, 146 – Mooca, São Paulo – SP, 03112-100</span>
          <span className='footer-p'>(11) 2693-2437</span>
          <span className='footer-p'>(11) 99150-3494</span>
          <span className='footer-p'>coisas@coisasdobrasil.com.br</span>
        </div>
        <div className='flex flex-col'>
          <span className='footer-title'>NAVEGUE</span>
          <div className='grid grid-cols-2'>
            <a className='footer-p'>Home</a>
            <a className='footer-p'>Portólio</a>
            <a className='footer-p'>Sobre</a>
            <a className='footer-p'>Sob medida</a>
            <a className='footer-p'>Blog</a>
            <a className='footer-p'>Produtos</a>
            <a className='footer-p'>Contato</a>
            <a className='footer-p'>Download</a>
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='footer-title'>MÍDIAS SOCIAIS</span>
          <span className='footer-p'>Instagram</span>
          <span className='footer-p'>Pinterest</span>
          <span className='footer-p'>Facebook</span>
        </div>
      </div>
    </footer>
  );
}
