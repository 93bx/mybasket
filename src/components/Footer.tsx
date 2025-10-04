import Link from 'next/link';

export default function Footer(){
  return (
    <footer className="mt-16 border-t border-white/50 bg-white/30 backdrop-blur py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">© {new Date().getFullYear()} mybasket</div>
        <nav className="flex gap-6 text-sm">
          <Link href="/en/store" className="hover:underline">Catalog</Link>
          <Link href="/en/suppliers" className="hover:underline">Suppliers</Link>
          <Link href="/en/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
