export type ServiceCategory =
  | 'drone'
  | 'photography'
  | 'videography'
  | 'cinematic'
  | 'editing'
  | 'photobooth'
  | 'product'
  | 'social';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  highlights: string[];
  icon: string;
  badge?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'DRONE' | 'PHOTOGRAPHY' | 'VIDEOGRAPHY' | 'CINEMATIC' | 'PRODUCT' | 'EVENTS' | 'SOCIAL MEDIA';
  image: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  client?: string;
  location?: string;
  description: string;
  tags: string[];
  isVideo?: boolean;
  videoUrl?: string;
  beforeAfter?: {
    before: string;
    after: string;
    labelBefore: string;
    labelAfter: string;
  };
}

export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  subtitle: string;
  isPopular?: boolean;
  isCustom?: boolean;
  features: string[];
  badge?: string;
  bestFor: string;
}

export interface DroneShowTier {
  id: string;
  name: string;
  drones: string;
  droneCountMin: number;
  droneCountMax?: number;
  price: number;
  formattedPrice: string;
  duration: string;
  features: string[];
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'general' | 'services' | 'drones' | 'pricing';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  companyOrEvent: string;
  quote: string;
  rating: number;
  serviceType: string;
}

export interface EnquiryFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  city: string;
  projectType: string;
  preferredDate: string;
  budgetRange: string;
  selectedServices: string[];
  selectedPackage?: string;
  projectDetails: string;
  referenceFilesNote?: string;
}

export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  secondaryTagline: string;
  heroHeadline: string;
  heroSupportingText: string;
  phone: string;
  phoneRaw: string;
  email: string;
  instagram: string;
  instagramUrl: string;
  youtubeUrl: string;
  facebookUrl: string;
  whatsappNumber: string;
  defaultWhatsAppMessage: string;
  floatingButtonAction?: 'whatsapp' | 'call';
  floatingButtonLabel?: string;
  address: string;
  coverage: string;
}
