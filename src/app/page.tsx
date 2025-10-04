import Link from 'next/link';

export default function Root(){
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Link href="/en" className="underline">Go to site</Link>
    </div>
  );
}
