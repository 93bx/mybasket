import {NextResponse} from 'next/server';

export async function POST(req: Request){
  const formData = await req.formData();
  const payload: Record<string, string> = {};
  formData.forEach((v, k) => { payload[k] = String(v); });
  console.log('CONTACT_FORM', payload);
  return NextResponse.json({ok:true});
}
