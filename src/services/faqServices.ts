import { FAQCategory } from '../types/faq.types';

/* eslint-disable import/prefer-default-export */
export async function getFaqCategories() {
  const response = await fetch('https://instalura-api.vercel.app/api/content/faq');
  const faqCategories = response.ok
    ? (await response.json())?.data
    : [];

  return faqCategories as FAQCategory[];
}
