import axios from 'axios';
import i18n from '@/i18n';

export async function loadLocaleMessages(locale: string) {
  if (i18n.global.availableLocales.includes(locale)) return;

  try {
    const apiUrl = import.meta.env.VITE_API_URL;
    const res = await axios.get(`${apiUrl}/translations/${locale}`);
    const messages = res.data;
    i18n.global.setLocaleMessage(locale, messages);
  } catch (error) {
    console.error(`Failed to load ${locale} translations`, error);
  }
}
