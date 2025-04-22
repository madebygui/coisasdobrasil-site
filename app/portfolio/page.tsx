'use client';

import { useCategoriesQueryHook } from '@/hooks/portfolio/useCategoriesQuery.hook';
import { useEffect, useState } from 'react';
import { useProductsQueryHook } from '@/hooks/portfolio/useProductsQuery.hook';
import Image from 'next/image';

export default function Page() {
  const { data } = useCategoriesQueryHook();
  const [activeCategory, setActiveCategory] = useState('');
  const [activeName, setActiveName] = useState('');
  const { data: products } = useProductsQueryHook(activeCategory);

  useEffect(() => {
    if (data) {
      setActiveCategory(data[0].id);
      setActiveName(data[0].nome);
    }
  }, [data]);

  return (
    <section className='max-w-7xl mx-auto p-4'>
      <h1 className='text-neutral-900 text-5xl font-bold mb-16 text-center'>{activeName}</h1>

      <div className='flex gap-4 items-baseline justify-center'>
        {data?.map((i) => (
          <div key={i.id}>
            <button
              type='button'
              onClick={() => {
                setActiveName(i.nome);
                setActiveCategory(i.id);
              }}
            >
              <h2
                className={`text-neutral-900 text-lg ${activeCategory === i.id ? 'font-bold' : ''}`}
              >
                {i.nome}
              </h2>
            </button>
          </div>
        ))}
      </div>

      <hr className='mt-4 mb-10 text-neutral-600' />

      {products?.map((i) => (
        <div key={i.id}>
          <a href={`/portfolio/${i.id}`} target='_blank' rel='noreferrer'>
            <div className='flex flex-col justify-center items-center gap-5'>
              <Image
                src={i.thumbnail.url}
                alt={i.nome}
                width={220}
                height={220}
                className='object-contain'
              />
              <span className='text-neutral-900 text-3xl'>{i.nome}</span>
            </div>
          </a>
        </div>
      ))}
    </section>
  );
}
