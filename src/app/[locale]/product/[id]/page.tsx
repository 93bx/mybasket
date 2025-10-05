import Image from 'next/image';
import {notFound} from 'next/navigation';
import {getTranslations} from 'next-intl/server';

export default async function ProductPage({params}:{params:Promise<{id:string}>}){
  const t = await getTranslations();
  const {id} = await params;
  
  const PRODUCTS = Array.from({length: 42}).map((_, i) => ({
    id: (i + 1).toString(),
    name: `${t('products.product')} ${i + 1}`,
    brand: [t('products.brands.acme'), t('products.brands.globex'), t('products.brands.umbrella')][i % 3],
    description: t('products.description'),
    moq: 10 + (i % 5) * 5,
    packaging: t('products.packaging'),
    image: '/vercel.svg'
  }));
  
  const product = PRODUCTS.find(p=>p.id === id);
  if(!product) return notFound();
  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-xl bg-white/70 border border-white/50 p-6">
          <Image src={product.image} alt={product.name} width={320} height={120} />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="mt-2 opacity-80">{product.brand}</div>
          <p className="mt-4">{product.description}</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Info label={t('product.moq')} value={String(product.moq)} />
            <Info label={t('product.packaging')} value={product.packaging} />
          </div>
          <a href="#contact" className="inline-block mt-6 px-5 py-3 rounded-lg bg-[#155263] text-white">{t('product.inquire')}</a>
        </div>
      </div>
    </div>
  );
}

function Info({label, value}:{label:string; value:string}){
  return (
    <div className="rounded-xl bg-white/70 border border-white/50 p-4">
      <div className="text-sm opacity-70">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}
