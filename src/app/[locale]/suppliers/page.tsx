"use client";
import {useState} from 'react';
import {useTranslations} from 'next-intl';

export default function SuppliersPage(){
  const t = useTranslations();
  const [status, setStatus] = useState<'idle'|'ok'|'err'>('idle');

  async function onSubmit(formData: FormData){
    setStatus('idle');
    const res = await fetch('/api/supplier', {method:'POST', body: formData});
    setStatus(res.ok ? 'ok' : 'err');
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-2">{t('suppliers.title')}</h1>
      <p className="opacity-80 mb-6">{t('suppliers.subtitle')}</p>

      <form action={onSubmit} className="grid md:grid-cols-2 gap-4 bg-white/70 border border-white/50 rounded-xl p-6">
        <input name="name" placeholder={t('form.name')} className="px-4 py-2 rounded-lg bg-white/90 border" required />
        <input name="company" placeholder={t('form.company')} className="px-4 py-2 rounded-lg bg-white/90 border" required />
        <input name="email" type="email" placeholder={t('form.email')} className="px-4 py-2 rounded-lg bg-white/90 border" required />
        <input name="phone" placeholder={t('form.phone')} className="px-4 py-2 rounded-lg bg-white/90 border" />
        <input name="category" placeholder={t('form.category')} className="md:col-span-2 px-4 py-2 rounded-lg bg-white/90 border" />
        <textarea name="message" placeholder={t('form.message')} className="md:col-span-2 px-4 py-2 rounded-lg bg-white/90 border min-h-28" />
        <button className="md:col-span-2 px-5 py-3 rounded-lg bg-[#155263] text-white">{t('form.submit')}</button>
        {status==='ok' && <p className="text-green-700">{t('form.success')}</p>}
        {status==='err' && <p className="text-red-700">{t('form.error')}</p>}
      </form>
    </div>
  );
}
