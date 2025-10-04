"use client";
import Image from 'next/image';
import Link from 'next/link';
import {useLocale} from 'next-intl';
import {usePathname} from '@/i18n/routing';

export default function Navbar(){
  const locale = useLocale();
  const pathname = usePathname();
  const switchTo = locale === 'ar' ? 'en' : 'ar';

  const switchHref = `/${switchTo}${pathname?.replace(/^\/[a-z]{2}/,'') || ''}`;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto container px-4">
        <nav className="mt-4 flex items-center justify-between rounded-2xl bg-white/30 backdrop-blur-xl border border-white/50 shadow-lg px-4 py-3">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <Image src="/logo.png" alt="mybasket" width={140} height={32} />
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href={`/${locale}/store`} className="hover:underline">Products</Link>
            <Link href={`/${locale}/suppliers`} className="hover:underline">Suppliers</Link>
            <Link href={`/${locale}/contact`} className="hover:underline">Contact</Link>
            <Link href={switchHref} className="px-3 py-1.5 rounded-lg bg-[#155263] text-white">
              {switchTo.toUpperCase()}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
