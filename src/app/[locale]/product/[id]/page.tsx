import Image from 'next/image';
import {notFound} from 'next/navigation';
import {useTranslations} from 'next-intl';

const PRODUCTS = Array.from({length: 42}).map((_, i) => ({
  id: (i + 1).toString(),
  name: `Product ${i + 1}`,
  brand: ['Acme','Globex','Umbrella'][i % 3],
  description: 'High quality wholesale product for retail distribution.',
  moq: 10 + (i % 5) * 5,
  packaging: 'Box',
  image: '/vercel.svg'
}));

export default function ProductPage({params}:{params:{id:string}}){
  const t = useTranslations();
  const product = PRODUCTS.find(p=>p.id === params.id);
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
