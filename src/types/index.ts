export interface Product {
  id: string;
  handle: string;
  title: string;
  price: number; // in pence (£33.00 = 3300)
  compareAtPrice?: number;
  perCanPrice?: string;
  description: string;
  featuredImage: string;
  images: string[];
  flavor: string;
  canCount: number;
  rating: number;
  reviewCount: number;
  proteinGrams: number;
  calories: number;
  sugarGrams: number;
  badge?: string;
  nutritionFacts?: {
    servingSize: string;
    protein: string;
    calories: string;
    sugar: string;
    carbs: string;
    fat: string;
  };
  ingredients?: string;
}

export interface CartItem {
  id: string; // unique item id (e.g. handle + subscription status)
  productId: string;
  handle: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  isSubscription: boolean;
  subscriptionFrequency?: string;
  flavor?: string;
}

export interface PageContent {
  slug: string;
  title: string;
  subtitle?: string;
  html?: string;
}

export interface PolicyContent {
  slug: string;
  title: string;
  lastUpdated?: string;
  html: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image?: string;
  content: string;
}
