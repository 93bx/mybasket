import {redirect} from 'next/navigation';
import {headers} from 'next/headers';

export default async function RootPage() {
  // Get the Accept-Language header to determine user's preferred locale
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language') || '';
  
  // Simple locale detection based on Accept-Language header
  let preferredLocale = 'en'; // default
  
  if (acceptLanguage.includes('ar') || acceptLanguage.includes('ar-')) {
    preferredLocale = 'ar';
  }
  
  // Redirect to the preferred locale
  redirect(`/${preferredLocale}`);
}
