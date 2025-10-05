import {useTranslations} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import {useLocale} from 'next-intl';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <div className="container mx-auto px-4">
      <section className="text-center md:text-left grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">{t('hero.title')}</h1>
          <p className="text-lg opacity-80 mb-6">{t('hero.subtitle')}</p>
          <div className="flex gap-3 justify-center md:justify-start">
            <Link href={`/${locale}/store`} className="px-5 py-3 rounded-lg bg-[#155263] text-white hover:opacity-95 transition">
              {t('cta.browse')}
            </Link>
            <Link href={`/${locale}/suppliers`} className="px-5 py-3 rounded-lg border border-[#155263] text-[#155263] bg-white/40 backdrop-blur hover:bg-white/60 transition">
              {t('cta.becomeSupplier')}
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Image src="/logo.png" alt="logo" width={280} height={80} className="drop-shadow-xl" />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">{t('how.title')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white/60 backdrop-blur border border-white/40 shadow-sm">{t('how.step1')}</div>
          <div className="p-6 rounded-xl bg-white/60 backdrop-blur border border-white/40 shadow-sm">{t('how.step2')}</div>
          <div className="p-6 rounded-xl bg-white/60 backdrop-blur border border-white/40 shadow-sm">{t('how.step3')}</div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">{t('stats.title')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Stat value="150+" label={t('stats.suppliers')} />
          <Stat value="5k+" label={t('stats.skus')} />
          <Stat value="20+" label={t('stats.cities')} />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">{t('testimonials.title')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="p-6 rounded-xl bg-white/60 backdrop-blur border border-white/40 shadow-sm">
              <p className="italic">"{t('testimonials.quote')}"</p>
              <div className="mt-3 text-sm opacity-80">— {t('testimonials.partner')} {i}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({value, label}:{value:string; label:string}){
  return (
    <div className="p-8 rounded-xl bg-white/70 border border-white/50 shadow text-center">
      <div className="text-4xl font-extrabold text-[#155263]">{value}</div>
      <div className="opacity-80 mt-2">{label}</div>
    </div>
  );
}
