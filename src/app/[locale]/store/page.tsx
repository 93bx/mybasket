"use client";
import {useState, useMemo} from 'react';
import Image from 'next/image';
import {useTranslations, useLocale} from 'next-intl';

export default function StorePage(){
  const t = useTranslations();
  const locale = useLocale();
  
  const PRODUCTS = Array.from({length: 42}).map((_, i) => ({
    id: i + 1,
    name: `${t('products.product')} ${i + 1}`,
    brand: [t('products.brands.acme'), t('products.brands.globex'), t('products.brands.umbrella')][i % 3],
    category: [t('products.categories.beverages'), t('products.categories.snacks'), t('products.categories.household')][i % 3],
    price: (5 + (i % 10)) * 3,
    image: '/vercel.svg',
    moq: 10 + (i % 5) * 5,
    packaging: t('products.packaging')
  }));
  
  const [q, setQ] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [page, setPage] = useState(1);
  const pageSize = 12;

  const brands = useMemo(() => Array.from(new Set(PRODUCTS.map(p=>p.brand))), []);
  const categories = useMemo(() => Array.from(new Set(PRODUCTS.map(p=>p.category))), []);

  const filtered = PRODUCTS.filter(p =>
    (!q || p.name.toLowerCase().includes(q.toLowerCase())) &&
    (!brand || p.brand === brand) &&
    (!category || p.category === category) &&
    (!maxPrice || p.price <= Number(maxPrice))
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page-1)*pageSize, page*pageSize);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">{t('store.title')}</h1>
      <div className="grid md:grid-cols-5 gap-4 mb-6">
        <input value={q} onChange={e=>{setQ(e.target.value); setPage(1);}} placeholder={t('store.search')} className="md:col-span-2 px-4 py-2 rounded-lg bg-white/70 border border-white/50" />
        <select value={category} onChange={e=>{setCategory(e.target.value); setPage(1);}} className="px-4 py-2 rounded-lg bg-white/70 border border-white/50">
          <option value="">{t('store.category')}</option>
          {categories.map(c=> <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={brand} onChange={e=>{setBrand(e.target.value); setPage(1);}} className="px-4 py-2 rounded-lg bg-white/70 border border-white/50">
          <option value="">{t('store.brand')}</option>
          {brands.map(b=> <option key={b} value={b}>{b}</option>)}
        </select>
        <input value={maxPrice as any} onChange={e=>{setMaxPrice(e.target.value? Number(e.target.value): ''); setPage(1);}} type="number" placeholder={t('store.price')} className="px-4 py-2 rounded-lg bg-white/70 border border-white/50" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pageItems.map(p => (
          <div key={p.id} className="rounded-xl bg-white/70 border border-white/50 p-4">
            <Image src={p.image} alt={p.name} width={120} height={60} />
            <div className="mt-3 font-semibold">{p.name}</div>
            <div className="text-sm opacity-70">{p.brand} • {p.category}</div>
            <div className="text-sm mt-2">{t('product.moq')}: {p.moq}</div>
            <div className="text-sm">{t('product.packaging')}: {p.packaging}</div>
            <a href={`/${locale}/product/${p.id}`} className="inline-block mt-3 px-3 py-1.5 rounded bg-[#155263] text-white text-sm">{t('product.inquire')}</a>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        <button disabled={page===1} onClick={()=>setPage(p=>Math.max(1, p-1))} className="px-3 py-1 rounded bg-white/70 border border-white/50 disabled:opacity-50">‹</button>
        <div className="px-3 py-1">{page} / {totalPages}</div>
        <button disabled={page===totalPages} onClick={()=>setPage(p=>Math.min(totalPages, p+1))} className="px-3 py-1 rounded bg-white/70 border border-white/50 disabled:opacity-50">›</button>
      </div>
    </div>
  );
}
