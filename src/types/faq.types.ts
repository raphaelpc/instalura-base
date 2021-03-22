export type Question = {
  title?: string;
  slug?: string;
  description?: string;
}

export type FAQCategory = {
  title?: string;
  slug?: string;
  questions?: Question[];
}
