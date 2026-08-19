export type Language = 'en' | 'hi';

export interface Translations {
  // Navigation
  nav_services: string;
  nav_portfolio: string;
  nav_pricing: string;
  nav_drone_shows: string;
  nav_about: string;
  nav_contact: string;
  nav_book_project: string;
  nav_call_now: string;

  // Hero
  hero_badge: string;
  hero_title_line1: string;
  hero_title_line2: string;
  hero_title_line3: string;
  hero_description: string;
  hero_cta_book: string;
  hero_cta_explore: string;
  hero_cta_showreel: string;
  hero_sub_badge: string;

  // Trust Bar
  stat_services_label: string;
  stat_services_detail: string;
  stat_packages_label: string;
  stat_packages_detail: string;
  stat_coverage_label: string;
  stat_coverage_detail: string;
  stat_team_label: string;
  stat_team_detail: string;

  // Services
  services_badge: string;
  services_heading: string;
  services_subheading: string;
  services_view_details: string;
  services_book_service: string;

  // Portfolio / Visual Stories
  portfolio_badge: string;
  portfolio_heading: string;
  portfolio_subheading: string;
  portfolio_filter_all: string;
  portfolio_filter_drone: string;
  portfolio_filter_photo: string;
  portfolio_filter_video: string;
  portfolio_filter_cinematic: string;
  portfolio_filter_product: string;
  portfolio_filter_events: string;
  portfolio_filter_social: string;
  portfolio_view_project: string;

  // Pricing
  pricing_badge: string;
  pricing_heading: string;
  pricing_subheading: string;
  pricing_book_package: string;
  pricing_custom_quote: string;
  pricing_popular_badge: string;

  // Drone Shows
  drone_badge: string;
  drone_heading: string;
  drone_subheading: string;
  drone_fleet_label: string;
  drone_explore_tiers: string;
  drone_request_quote: string;

  // Why Us
  why_badge: string;
  why_heading: string;

  // Process
  process_badge: string;
  process_heading: string;

  // Testimonials
  testimonials_badge: string;
  testimonials_heading: string;

  // FAQ
  faq_badge: string;
  faq_heading: string;
  faq_subheading: string;
  faq_ask_custom: string;

  // Contact
  contact_badge: string;
  contact_heading: string;
  contact_subheading: string;
  contact_form_name: string;
  contact_form_phone: string;
  contact_form_email: string;
  contact_form_service: string;
  contact_form_date: string;
  contact_form_location: string;
  contact_form_budget: string;
  contact_form_message: string;
  contact_form_submit: string;
  contact_form_success: string;
  contact_direct_call: string;
  contact_whatsapp_chat: string;

  // Modals & Calculator
  calculator_title: string;
  calculator_calculate_btn: string;
  close: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    nav_services: 'Services',
    nav_portfolio: 'Portfolio',
    nav_pricing: 'Pricing',
    nav_drone_shows: 'Drone Shows',
    nav_about: 'About',
    nav_contact: 'Contact',
    nav_book_project: 'Book Project',
    nav_call_now: 'Call Now',

    hero_badge: 'PREMIUM VISUAL & DRONE PRODUCTION',
    hero_title_line1: 'CAPTURE.',
    hero_title_line2: 'CREATE.',
    hero_title_line3: 'ELEVATE.',
    hero_description:
      'Premium visual production agency specializing in certified drone cinematography, commercial film production, 360 video booths, and synchronized drone light shows globally.',
    hero_cta_book: 'Book A Project',
    hero_cta_explore: 'Explore Work',
    hero_cta_showreel: 'Watch Showreel',
    hero_sub_badge: 'Global Service • Custom Formations & 8K Production',

    stat_services_label: 'Creative Services',
    stat_services_detail: 'From Drones to 360 Booths',
    stat_packages_label: 'Production Packages',
    stat_packages_detail: 'Tailored for Every Scale',
    stat_coverage_label: 'Service Coverage',
    stat_coverage_detail: 'Deployable Worldwide',
    stat_team_label: 'Professional Team',
    stat_team_detail: 'Certified Aerial & Cinema Crew',

    services_badge: 'COMPREHENSIVE CAPABILITIES',
    services_heading: 'Crafted For Visual Impact',
    services_subheading:
      'From synchronized aerial spectacles to intimate luxury celebrations and high-conversion commercial films.',
    services_view_details: 'View Details',
    services_book_service: 'Book Service',

    portfolio_badge: 'CURATED GALLERY',
    portfolio_heading: 'OUR VISUAL STORIES',
    portfolio_subheading:
      'A showcase of cinematic aerials, commercial storytelling, luxury celebrations, and high-conversion visual campaigns.',
    portfolio_filter_all: 'ALL',
    portfolio_filter_drone: 'DRONE',
    portfolio_filter_photo: 'PHOTOGRAPHY',
    portfolio_filter_video: 'VIDEOGRAPHY',
    portfolio_filter_cinematic: 'CINEMATIC',
    portfolio_filter_product: 'PRODUCT',
    portfolio_filter_events: 'EVENTS',
    portfolio_filter_social: 'SOCIAL MEDIA',
    portfolio_view_project: 'View Project',

    pricing_badge: 'TRANSPARENT VALUE',
    pricing_heading: 'Production Packages',
    pricing_subheading:
      'Clear, predictable investments designed for brand commercials, luxury events, aerial mapping, and high-end celebrations.',
    pricing_book_package: 'Select Package',
    pricing_custom_quote: 'Request Custom Quote',
    pricing_popular_badge: 'MOST POPULAR',

    drone_badge: 'SIRIN SKY DIVISION',
    drone_heading: 'Synchronized Drone Light Shows',
    drone_subheading:
      'Transform the night sky into an illuminated 3D canvas with synchronized drone swarms, bespoke animations, and musical synchronization.',
    drone_fleet_label: 'Fleet Options',
    drone_explore_tiers: 'Explore Show Tiers',
    drone_request_quote: 'Book Drone Show',

    why_badge: 'THE SIRIN STANDARD',
    why_heading: 'Every Moment Deserves To Be Extraordinary',

    process_badge: 'SEAMLESS PRODUCTION',
    process_heading: 'How We Bring Your Vision To Life',

    testimonials_badge: 'CLIENT EXPERIENCES',
    testimonials_heading: 'Trusted by Visionary Brands & Creators',

    faq_badge: 'FREQUENTLY ASKED QUESTIONS',
    faq_heading: 'Everything You Need To Know',
    faq_subheading:
      'Clear answers regarding drone permissions, booking timelines, deliverables, and custom project scopes.',
    faq_ask_custom: 'Have a specific question? Ask us directly on WhatsApp.',

    contact_badge: 'LET’S COLLABORATE',
    contact_heading: 'Start Your Production',
    contact_subheading:
      'Tell us about your upcoming shoot, drone show, or visual campaign. Our production team responds within 24 hours.',
    contact_form_name: 'Full Name / Company',
    contact_form_phone: 'Phone Number',
    contact_form_email: 'Email Address',
    contact_form_service: 'Select Service Required',
    contact_form_date: 'Tentative Event / Shoot Date',
    contact_form_location: 'City & Location',
    contact_form_budget: 'Estimated Budget Range',
    contact_form_message: 'Project Details & Creative Brief',
    contact_form_submit: 'Submit Project Inquiry',
    contact_form_success: 'Thank you! Your inquiry has been sent. We will contact you shortly.',
    contact_direct_call: 'Direct Call',
    contact_whatsapp_chat: 'Chat on WhatsApp',

    calculator_title: 'Instant Production Cost Estimator',
    calculator_calculate_btn: 'Calculate Estimate',
    close: 'Close',
  },
  hi: {
    nav_services: 'सेवाएं',
    nav_portfolio: 'पोर्टफोलियो',
    nav_pricing: 'पैकेज और दरें',
    nav_drone_shows: 'ड्रोन शो',
    nav_about: 'हमारे बारे में',
    nav_contact: 'संपर्क करें',
    nav_book_project: 'प्रोजेक्ट बुक करें',
    nav_call_now: 'कॉल करें',

    hero_badge: 'प्रीमियम विजुअल और ड्रोन प्रोडक्शन',
    hero_title_line1: 'कैप्चर.',
    hero_title_line2: 'क्रिएट.',
    hero_title_line3: 'एलिवेट.',
    hero_description:
      'प्रमाणित ड्रोन सिनेमैटोग्राफी, कमर्शियल फिल्म प्रोडक्शन, 360 वीडियो बूथ और वैश्विक स्तर पर सिंक्रोनाइज़्ड ड्रोन लाइट शो में विशेषज्ञता रखने वाली प्रीमियर विजुअल प्रोडक्शन एजेंसी।',
    hero_cta_book: 'प्रोजेक्ट बुक करें',
    hero_cta_explore: 'हमारा काम देखें',
    hero_cta_showreel: 'शोरील देखें',
    hero_sub_badge: 'ग्लोबल सेवा • कस्टम 3D फॉर्मेशन और 8K प्रोडक्शन',

    stat_services_label: 'क्रिएटिव सेवाएं',
    stat_services_detail: 'ड्रोन से लेकर 360 वीडियो बूथ तक',
    stat_packages_label: 'प्रोडक्शन पैकेज',
    stat_packages_detail: 'हर स्तर और बजट के लिए उपयुक्त',
    stat_coverage_label: 'सेवा कवरेज',
    stat_coverage_detail: 'दुनिया भर में उपलब्ध',
    stat_team_label: 'प्रोफेशनल टीम',
    stat_team_detail: 'प्रमाणित एरियल और सिनेमा क्रू',

    services_badge: 'हमारी व्यापक क्षमताएं',
    services_heading: 'प्रभावशाली विजुअल्स का निर्माण',
    services_subheading:
      'आकाश में सिंक्रोनाइज़्ड ड्रोन शो से लेकर लग्जरी शादियों और हाई-इम्पैक्ट कमर्शियल फिल्मों तक।',
    services_view_details: 'विवरण देखें',
    services_book_service: 'सेवा बुक करें',

    portfolio_badge: 'क्यूरेटेड गैलरी',
    portfolio_heading: 'हमारी विजुअल कहानियां',
    portfolio_subheading:
      'सिनेमैटिक एरियल, कमर्शियल स्टोरीटेलिंग, भव्य समारोह और प्रभावशाली विजुअल अभियानों का संग्रह।',
    portfolio_filter_all: 'सभी',
    portfolio_filter_drone: 'ड्रोन',
    portfolio_filter_photo: 'फोटोग्राफी',
    portfolio_filter_video: 'वीडियोग्राफी',
    portfolio_filter_cinematic: 'सिनेमैटिक',
    portfolio_filter_product: 'प्रोडक्ट',
    portfolio_filter_events: 'इवेंट्स',
    portfolio_filter_social: 'सोशल मीडिया',
    portfolio_view_project: 'प्रोजेक्ट देखें',

    pricing_badge: 'पारदर्शी मूल्य',
    pricing_heading: 'प्रोडक्शन पैकेज',
    pricing_subheading:
      'ब्रांड कमर्शियल, लग्जरी इवेंट्स, एरियल मैपिंग और हाई-एंड सेलिब्रेशन के लिए तैयार किए गए स्पष्ट पैकेज।',
    pricing_book_package: 'पैकेज चुनें',
    pricing_custom_quote: 'कस्टम कोटेशन मांगें',
    pricing_popular_badge: 'सबसे लोकप्रिय',

    drone_badge: 'सिरिन स्काई डिवीजन',
    drone_heading: 'सिंक्रोनाइज़्ड ड्रोन लाइट शो',
    drone_subheading:
      'सैकड़ों सिंक्रोनाइज़्ड ड्रोन, कस्टम 3D एनिमेशन और संगीतमय सिंक के साथ रात के आसमान को एक शानदार कैनवास में बदलें।',
    drone_fleet_label: 'फ्लीट विकल्प',
    drone_explore_tiers: 'शो टियर देखें',
    drone_request_quote: 'ड्रोन शो बुक करें',

    why_badge: 'सिरिन स्टैंडर्ड',
    why_heading: 'हर पल को असाधारण बनाने का हमारा संकल्प',

    process_badge: 'सहज और पारदर्शी प्रक्रिया',
    process_heading: 'हम आपके विजन को कैसे साकार करते हैं',

    testimonials_badge: 'ग्राहकों के अनुभव',
    testimonials_heading: 'प्रमुख ब्रांड्स और क्रिएटर्स का हम पर भरोसा',

    faq_badge: 'अक्सर पूछे जाने वाले सवाल',
    faq_heading: 'आपके सभी सवालों के जवाब',
    faq_subheading:
      'ड्रोन अनुमतियों, बुकिंग समयसीमा, डिलीवरी और कस्टम प्रोजेक्ट के बारे में स्पष्ट जानकारी।',
    faq_ask_custom: 'कोई विशेष प्रश्न है? हमसे सीधे व्हाट्सएप पर पूछें।',

    contact_badge: 'आइए साथ मिलकर बनाएं',
    contact_heading: 'अपना प्रोजेक्ट शुरू करें',
    contact_subheading:
      'अपने आगामी शूट, ड्रोन शो या विजुअल कैंपेन के बारे में हमें बताएं। हमारी टीम 24 घंटे में संपर्क करेगी।',
    contact_form_name: 'पूरा नाम / कंपनी',
    contact_form_phone: 'फोन नंबर',
    contact_form_email: 'ईमेल पता',
    contact_form_service: 'आवश्यक सेवा चुनें',
    contact_form_date: 'संभावित कार्यक्रम / शूट की तारीख',
    contact_form_location: 'शहर और स्थान',
    contact_form_budget: 'अनुमानित बजट',
    contact_form_message: 'प्रोजेक्ट का विवरण',
    contact_form_submit: 'पूछताछ भेजें',
    contact_form_success: 'धन्यवाद! आपकी पूछताछ प्राप्त हो गई है। हम शीघ्र ही आपसे संपर्क करेंगे।',
    contact_direct_call: 'सीधे कॉल करें',
    contact_whatsapp_chat: 'व्हाट्सएप पर चैट करें',

    calculator_title: 'त्वरित प्रोडक्शन लागत कैलकुलेटर',
    calculator_calculate_btn: 'लागत का अनुमान लगाएं',
    close: 'बंद करें',
  },
};
