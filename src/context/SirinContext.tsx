import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  companyConfig as defaultCompanyConfig,
  trustStats as defaultTrustStats,
  servicesData as defaultServicesData,
  pricingPackages as defaultPricingPackages,
  droneShowTiers as defaultDroneShowTiers,
  droneShowAddOns as defaultDroneShowAddOns,
  whyUsAdvantages as defaultWhyUsAdvantages,
  processSteps as defaultProcessSteps,
  testimonialsData as defaultTestimonialsData,
  faqData as defaultFaqData,
  portfolioItems as defaultPortfolioItems,
} from '../data/sirinData';
import {
  CompanyConfig,
  ServiceItem,
  PricingPackage,
  DroneShowTier,
  TestimonialItem,
  FAQItem,
  PortfolioItem,
} from '../types';
import { Language, Translations, translations } from '../translations';

interface SirinContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations) => string;
  companyConfig: CompanyConfig;
  setCompanyConfig: React.Dispatch<React.SetStateAction<CompanyConfig>>;
  trustStats: { id: string; value: string; label: string; detail?: string }[];
  setTrustStats: React.Dispatch<React.SetStateAction<{ id: string; value: string; label: string; detail?: string }[]>>;
  services: ServiceItem[];
  setServices: React.Dispatch<React.SetStateAction<ServiceItem[]>>;
  packages: PricingPackage[];
  setPackages: React.Dispatch<React.SetStateAction<PricingPackage[]>>;
  droneShows: DroneShowTier[];
  setDroneShows: React.Dispatch<React.SetStateAction<DroneShowTier[]>>;
  testimonials: TestimonialItem[];
  setTestimonials: React.Dispatch<React.SetStateAction<TestimonialItem[]>>;
  faqs: FAQItem[];
  setFaqs: React.Dispatch<React.SetStateAction<FAQItem[]>>;
  stories: PortfolioItem[];
  setStories: React.Dispatch<React.SetStateAction<PortfolioItem[]>>;
  visualStoriesHeading: string;
  setVisualStoriesHeading: React.Dispatch<React.SetStateAction<string>>;
  visualStoriesSubheading: string;
  setVisualStoriesSubheading: React.Dispatch<React.SetStateAction<string>>;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  resetAllToDefault: () => void;
  saveData: () => void;
}

const SirinContext = createContext<SirinContextType | undefined>(undefined);

const STORAGE_KEY = 'sirin_visuals_live_data_v4';
const LANG_STORAGE_KEY = 'sirin_app_language_v1';

export const SirinProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Initialize Language
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === 'hi' || saved === 'en') {
        return saved as Language;
      }
    } catch (e) {}
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (e) {}
  };

  const t = (key: keyof Translations): string => {
    const dict = translations[language] || translations.en;
    return dict[key] || translations.en[key] || '';
  };

  // Load from localStorage or defaults
  const loadInitialData = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
    return null;
  };

  const initialData = loadInitialData();

  const [companyConfig, setCompanyConfig] = useState<CompanyConfig>(
    initialData?.companyConfig || defaultCompanyConfig
  );
  const [trustStats, setTrustStats] = useState(
    initialData?.trustStats || defaultTrustStats
  );
  const [services, setServices] = useState<ServiceItem[]>(
    initialData?.services || defaultServicesData
  );
  const [packages, setPackages] = useState<PricingPackage[]>(
    initialData?.packages || defaultPricingPackages
  );
  const [droneShows, setDroneShows] = useState<DroneShowTier[]>(
    initialData?.droneShows || defaultDroneShowTiers
  );
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(
    initialData?.testimonials || defaultTestimonialsData
  );
  const [faqs, setFaqs] = useState<FAQItem[]>(
    initialData?.faqs || defaultFaqData
  );
  const [stories, setStories] = useState<PortfolioItem[]>(
    initialData?.stories || defaultPortfolioItems
  );
  const [visualStoriesHeading, setVisualStoriesHeading] = useState<string>(
    initialData?.visualStoriesHeading || 'OUR VISUAL STORIES'
  );
  const [visualStoriesSubheading, setVisualStoriesSubheading] = useState<string>(
    initialData?.visualStoriesSubheading ||
      'A showcase of cinematic aerials, commercial storytelling, luxury celebrations, and high-conversion visual campaigns.'
  );

  // Auto-save to localStorage on change
  useEffect(() => {
    try {
      const payload = {
        companyConfig,
        trustStats,
        services,
        packages,
        droneShows,
        testimonials,
        faqs,
        stories,
        visualStoriesHeading,
        visualStoriesSubheading,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [
    companyConfig,
    trustStats,
    services,
    packages,
    droneShows,
    testimonials,
    faqs,
    stories,
    visualStoriesHeading,
    visualStoriesSubheading,
  ]);

  const saveData = () => {
    try {
      const payload = {
        companyConfig,
        trustStats,
        services,
        packages,
        droneShows,
        testimonials,
        faqs,
        stories,
        visualStoriesHeading,
        visualStoriesSubheading,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {}
  };

  const resetAllToDefault = () => {
    setCompanyConfig(defaultCompanyConfig);
    setTrustStats(defaultTrustStats);
    setServices(defaultServicesData);
    setPackages(defaultPricingPackages);
    setDroneShows(defaultDroneShowTiers);
    setTestimonials(defaultTestimonialsData);
    setFaqs(defaultFaqData);
    setStories(defaultPortfolioItems);
    setVisualStoriesHeading('OUR VISUAL STORIES');
    setVisualStoriesSubheading(
      'A showcase of cinematic aerials, commercial storytelling, luxury celebrations, and high-conversion visual campaigns.'
    );
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  };

  return (
    <SirinContext.Provider
      value={{
        language,
        setLanguage,
        t,
        companyConfig,
        setCompanyConfig,
        trustStats,
        setTrustStats,
        services,
        setServices,
        packages,
        setPackages,
        droneShows,
        setDroneShows,
        testimonials,
        setTestimonials,
        faqs,
        setFaqs,
        stories,
        setStories,
        visualStoriesHeading,
        setVisualStoriesHeading,
        visualStoriesSubheading,
        setVisualStoriesSubheading,
        isAdminOpen,
        setIsAdminOpen,
        resetAllToDefault,
        saveData,
      }}
    >
      {children}
    </SirinContext.Provider>
  );
};

export const useSirin = () => {
  const context = useContext(SirinContext);
  if (!context) {
    throw new Error('useSirin must be used within a SirinProvider');
  }
  return context;
};
