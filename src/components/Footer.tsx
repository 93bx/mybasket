"use client";
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname} from '@/i18n/routing';

export default function Footer(){
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const switchTo = locale === 'ar' ? 'en' : 'ar';
  const switchHref = `/${switchTo}${pathname?.replace(/^\/[a-z]{2}/,'') || ''}`;

  return (
    <footer className="mt-16 border-t border-white/50 bg-white/30 backdrop-blur py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">© {new Date().getFullYear()} mybasket</div>
        <nav className="flex items-center gap-6 text-sm">
          <Link href={`/${locale}/store`} className="hover:underline">{t('footer.catalog')}</Link>
          <Link href={`/${locale}/suppliers`} className="hover:underline">{t('footer.suppliers')}</Link>
          <Link href={`/${locale}/contact`} className="hover:underline">{t('footer.contact')}</Link>
          <Link href={switchHref} className="px-2 py-1 rounded bg-[#155263] text-white">{switchTo.toUpperCase()}</Link>
        </nav>
      </div>
    </footer>
  );
}
