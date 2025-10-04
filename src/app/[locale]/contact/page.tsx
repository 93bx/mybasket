"use client";
import {useState} from 'react';
import {useTranslations} from 'next-intl';

export default function ContactPage(){
  const t = useTranslations();
  const [status, setStatus] = useState<'idle'|'ok'|'err'>('idle');

  async function onSubmit(formData: FormData){
    setStatus('idle');
    const res = await fetch('/api/contact', {method:'POST', body: formData});
    setStatus(res.ok ? 'ok' : 'err');
  }

  return (
    <div id="contact" className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-2">{t('contact.title')}</h1>
      <p className="opacity-80 mb-6">{t('contact.subtitle')}</p>

      <div className="flex gap-3 mb-6">
        <a href="https://wa.me/15551234567" target="_blank" rel="noopener" className="px-4 py-2 rounded-lg bg-green-600 text-white">WhatsApp</a>
        <a href="tel:+15551234567" className="px-4 py-2 rounded-lg bg-[#155263] text-white">Call</a>
      </div>

      <form action={onSubmit} className="grid md:grid-cols-2 gap-4 bg-white/70 border border-white/50 rounded-xl p-6">
        <input name="name" placeholder={t('form.name')} className="px-4 py-2 rounded-lg bg-white/90 border" required />
        <input name="company" placeholder={t('form.company')} className="px-4 py-2 rounded-lg bg-white/90 border" required />
        <input name="email" type="email" placeholder={t('form.email')} className="px-4 py-2 rounded-lg bg-white/90 border" required />
        <input name="phone" placeholder={t('form.phone')} className="px-4 py-2 rounded-lg bg-white/90 border" />
        <textarea name="message" placeholder={t('form.message')} className="md:col-span-2 px-4 py-2 rounded-lg bg-white/90 border min-h-28" />
        <button className="md:col-span-2 px-5 py-3 rounded-lg bg-[#155263] text-white">{t('form.submit')}</button>
        {status==='ok' && <p className="text-green-700">{t('form.success')}</p>}
        {status==='err' && <p className="text-red-700">{t('form.error')}</p>}
      </form>

      <div className="mt-8 rounded-xl overflow-hidden border border-white/50 bg-white/40">
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531590465!3d-37.81627974201337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772e08441b1b6e!2sVictoria%20State%20Library!5e0!3m2!1sen!2s!4v1614034541234!5m2!1sen!2s" width="100%" height="320" style={{border:0}} loading="lazy" allowFullScreen></iframe>
      </div>
    </div>
  );
}
