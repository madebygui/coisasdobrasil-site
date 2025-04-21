'use client';

import Image from 'next/image';
import { Search, Menu as MenuIcon } from 'lucide-react';
import { Menu } from '@/components/Menu';
import { useState } from 'react';

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <header className='flex justify-between items-center gap-4 max-w-7xl mx-auto p-4'>
        <Image alt='Logo' height={70} src='/images/logo-pb.png' width={211} />

        <div className='flex gap-2 items-center'>
          <Search color='#000' size={24} />
          <MenuIcon
            color='#000'
            size={24}
            className='cursor-pointer'
            onClick={() => setMenuIsOpen(true)}
          />
        </div>
      </header>
      <Menu open={menuIsOpen} handleCloseAction={() => setMenuIsOpen(false)} />
    </>
  );
}
