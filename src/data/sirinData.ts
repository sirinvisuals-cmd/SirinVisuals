import {
  CompanyConfig,
  DroneShowTier,
  FAQItem,
  PortfolioItem,
  PricingPackage,
  ServiceItem,
  TestimonialItem,
} from '../types';

// Centralized company configuration for easy editing
export const companyConfig: CompanyConfig = {
  name: 'SIRIN VISUALS',
  legalName: 'SIRIN VISUALS Studio',
  tagline: 'CAPTURE | CREATE | ELEVATE',
  secondaryTagline: 'Complete Visual Solutions For Every Moment',
  heroHeadline: 'CAPTURE. CREATE. ELEVATE.',
  heroSupportingText:
    'From cinematic aerial footage to unforgettable events, powerful brand visuals and spectacular drone shows — SIRIN VISUALS turns moments into experiences.',
  phone: '+91 12345 67890',
  phoneRaw: '911234567890',
  email: 'Hello@SirinVisuals.com',
  instagram: '@SirinVisuals',
  instagramUrl: 'https://instagram.com/SirinVisuals',
  youtubeUrl: 'https://youtube.com/@SirinVisuals',
  facebookUrl: 'https://facebook.com/SirinVisuals',
  whatsappNumber: '911234567890',
  defaultWhatsAppMessage: 'Hi SIRIN VISUALS, I would like to enquire about a visual production project.',
  address: 'Global Operations & Studio',
  coverage: 'Global Service',
};

// Trust statistics
export const trustStats = [
  { id: 'stat-1', value: '8+', label: 'Creative Services', detail: 'From Drones to 360 Booths' },
  { id: 'stat-2', value: '7+', label: 'Production Packages', detail: 'Tailored for Every Scale' },
  { id: 'stat-3', value: 'Global', label: 'Service Coverage', detail: 'Deployable Worldwide' },
  { id: 'stat-4', value: '100%', label: 'Professional Team', detail: 'Certified Aerial & Cinema Crew' },
];

// 8 Core Services
export const servicesData: ServiceItem[] = [
  {
    id: 'drone-services',
    category: 'drone',
    title: 'Drone Services',
    tagline: 'Aerial Shoot | Drone Ads | Drone Shows | Mapping',
    description:
      'High-precision 4K/8K aerial cinematography, commercial drone advertising, terrain mapping, and dynamic FPV drone flythroughs operated by DGCA-certified pilots.',
    highlights: ['4K/8K Aerial Cinematography', 'FPV Dynamic Flythroughs', 'Commercial Drone Advertising', 'Site & Infrastructure Mapping'],
    icon: 'Drone',
    badge: 'Speciality',
  },
  {
    id: 'photography',
    category: 'photography',
    title: 'Photography',
    tagline: 'Events | Portraits | Products | Commercial | Branding',
    description:
      'Mastery of light and emotion. We capture weddings, corporate galas, fashion portraiture, architecture, and luxury editorial campaigns with stunning clarity.',
    highlights: ['Celebration & Wedding Coverage', 'Executive & Fashion Portraits', 'Commercial Architecture & Spaces', 'Luxury Editorial Branding'],
    icon: 'Camera',
  },
  {
    id: 'videography',
    category: 'videography',
    title: 'Videography',
    tagline: 'Weddings | Events | Reels | Corporate | Promotions',
    description:
      'Dynamic multi-camera video production for high-stakes corporate conferences, luxury brand launches, weddings, and high-impact digital promotional campaigns.',
    highlights: ['Multi-Cam Live & Event Recording', 'Corporate Brand Films', 'High-Impact Promotional Videos', 'Fast-Turnaround Reels'],
    icon: 'Video',
  },
  {
    id: 'editing',
    category: 'editing',
    title: 'Editing & Post-Production',
    tagline: 'Reels | YouTube | Ads | Color Grading | VFX',
    description:
      'Hollywood-grade DaVinci Resolve color grading, precise audio mastering, motion graphics, VFX, and viral-ready short-form pacing that commands attention.',
    highlights: ['DaVinci Resolve Color Grading', 'Motion Graphics & VFX Compositing', 'Sound Design & Spatial Audio', 'Viral Short-Form Formats'],
    icon: 'Film',
  },
  {
    id: 'photo-booth',
    category: 'photobooth',
    title: 'Photo Booth Experience',
    tagline: '360° Booth | AI Effects | Instant Share | Props',
    description:
      'Transform your celebrations into experiential entertainment. Features 360-degree slow-motion video spinners, custom AI overlays, instant QR sharing, and luxury prop setups.',
    highlights: ['360° Slow-Motion Video Spinner', 'Custom Event Branding Overlays', 'Instant QR & AirDrop Sharing', 'Curated Luxury Props & Attendants'],
    icon: 'Sparkles',
    badge: 'Popular',
  },
  {
    id: 'cinematic-films',
    category: 'cinematic',
    title: 'Cinematic Films',
    tagline: 'Cinematic Videos | Teasers | Highlights | Trailers',
    description:
      'Narrative-driven story films shot on industry-standard cinema cameras with anamorphic glass, emotional scoring, and breathtaking visual pacing.',
    highlights: ['Anamorphic Cinema Lenses', 'Emotionally Scored Highlight Reels', 'Theatrical Trailers & Teasers', 'Director-Led Storyboarding'],
    icon: 'Clapperboard',
  },
  {
    id: 'product-shoot',
    category: 'product',
    title: 'Product Shoot',
    tagline: 'E-Commerce | Catalog | Lifestyle | Promo',
    description:
      'High-conversion product photography and 3D turntable videos for e-commerce, Amazon/Shopify stores, luxury packaging, and social advertising campaigns.',
    highlights: ['Clean White & Studio Tabletop', 'Lifestyle & In-Use Context Shoots', '360° Product Spin Videos', 'Macro Texture & Detail Shots'],
    icon: 'Package',
  },
  {
    id: 'content-creation',
    category: 'social',
    title: 'Content Creation & Social',
    tagline: 'Social Media | Reels | Shorts | Strategy',
    description:
      'End-to-end visual content pipelines designed for algorithmic growth across Instagram, YouTube, and LinkedIn — from scriptwriting to published reels.',
    highlights: ['High-Retention Reels & Shorts', 'Brand Narrative Strategy', 'Batch Content Shoot Days', 'Trend Adaptation & Motion Text'],
    icon: 'Share2',
  },
];

// 7 Packages & Pricing
export const pricingPackages: PricingPackage[] = [
  {
    id: 'pkg-basic',
    name: 'BASIC',
    price: 9999,
    formattedPrice: '₹9,999',
    subtitle: 'Essential visual coverage for intimate events & starter shoots',
    features: [
      'Professional Photography Coverage',
      'High-Resolution Raw & Edited Photos',
      'Basic Color Correction & Retouching',
      'Secure Online Cloud Delivery (30 Days)',
      'Standard 5-Day Turnaround',
    ],
    bestFor: 'Intimate gatherings, portraits & small product catalogs',
  },
  {
    id: 'pkg-premium',
    name: 'PREMIUM',
    price: 24999,
    formattedPrice: '₹24,999',
    subtitle: 'Our most sought-after full-coverage photo and video bundle',
    isPopular: true,
    badge: 'MOST POPULAR',
    features: [
      'Lead Photographer + Dedicated Videographer',
      'Full HD / 4K Video Recording',
      'Professional Color Grading & Editing',
      '1x Curated Highlight Video (60-90s)',
      'Online Cloud Gallery & High-Res Export',
      'Priority 4-Day Turnaround',
    ],
    bestFor: 'Corporate mixers, brand launches, birthdays & celebrations',
  },
  {
    id: 'pkg-elite',
    name: 'ELITE',
    price: 49999,
    formattedPrice: '₹49,999',
    subtitle: 'Elevated production with certified drone aerials & interactive booth',
    features: [
      'Certified 4K Drone Aerial Shoot',
      'Comprehensive Photo + Video Crew',
      'Cinematic Color Grading & Sound Design',
      '2-Hour 360° Photo Booth Experience',
      '1x Cinematic Highlight Reel + Social Teaser',
      'Priority 3-Day Turnaround',
    ],
    bestFor: 'Grand celebrations, milestone events & brand campaigns',
  },
  {
    id: 'pkg-ultimate',
    name: 'ULTIMATE',
    price: 79999,
    formattedPrice: '₹79,999',
    subtitle: 'Heavy-duty cinema production with full-length cinematic cut',
    features: [
      'Multi-Angle Drone Shoot (Day & Sunset)',
      'Expanded Multi-Camera Photo & Video Team',
      'Cinematic Editing with Sound Mastering',
      '4-Hour 360° Photo Booth Experience',
      '3x Instagram Reels / Teasers + Full Film',
      'Priority 24/7 Production Support',
    ],
    bestFor: 'Luxury weddings, multi-stage events & commercial productions',
  },
  {
    id: 'pkg-signature',
    name: 'SIGNATURE',
    price: 149999,
    formattedPrice: '₹1,49,999',
    subtitle: 'Full-day flagship visual production with extensive digital delivery',
    features: [
      'Complete 1-Day All-Inclusive Production',
      'Cinema Camera Rigs + FPV Drone Aerials',
      'Full Cinematic Story Film (5-8 Mins)',
      '4-Hour 360° Photo Booth with Custom Branding',
      '5x Vertical Reels & Teasers for Social Channels',
      'Comprehensive Social Media Content Asset Bank',
      'Dedicated Producer & Priority VIP Support',
    ],
    bestFor: 'High-profile luxury weddings, corporate summits & brand films',
  },
  {
    id: 'pkg-royal',
    name: 'ROYAL',
    price: 249999,
    formattedPrice: '₹2,49,999',
    subtitle: 'Multi-day spectacle featuring our certified drone show team',
    features: [
      'Multiple Day Complete Production Coverage',
      'Large Cinema Crew & Master Directors',
      'Theatrical Cinematic Film & Documentary Cut',
      'Full Day 360° Photo Booth with Attendants',
      'Synchronized Drone Show Display (Entry Tier)',
      'Complete Social Media Takeover Package',
      'VIP Dedicated Production Manager',
    ],
    bestFor: 'Destination weddings, multi-day festivals & mega conferences',
  },
  {
    id: 'pkg-grand',
    name: 'GRAND',
    price: 500000,
    formattedPrice: '₹5,00,000',
    subtitle: 'The pinnacle of broadcast production and large-scale drone shows',
    features: [
      'Full Event End-to-End Production',
      'Elite Multi-Unit Cinema Crew & Directors',
      'Large Scale Synchronized Drone Show',
      'Broadcast-Quality 8K Production Pipeline',
      'Full Day 360° Photo Booth with Instant Printing',
      'Same-Day Social Teasers & Live Feed Support',
      'Unrestricted Commercial Licensing & VIP Concierge',
    ],
    bestFor: 'Mega corporate galas, stadium drone shows & luxury destination events',
  },
];

// SIRIN SKY - 6 Drone Show Packages
export const droneShowTiers: DroneShowTier[] = [
  {
    id: 'sky-mini',
    name: 'SKY MINI',
    drones: '50–100 DRONES',
    droneCountMin: 50,
    droneCountMax: 100,
    price: 125000,
    formattedPrice: '₹1,25,000',
    duration: 'Up to 5 Minutes',
    features: [
      '50 to 100 Synchronized Light Drones',
      'Basic 2D Geometric Formations',
      'Custom Text & Brand Logos',
      'Safety Perimeter & DGCA Certified Pilots',
      'Up to 5 Minutes Flight Time',
    ],
    badge: 'Starter Show',
  },
  {
    id: 'sky-pro',
    name: 'SKY PRO',
    drones: '100–200 DRONES',
    droneCountMin: 100,
    droneCountMax: 200,
    price: 225000,
    formattedPrice: '₹2,25,000',
    duration: 'Up to 10 Minutes',
    features: [
      '100 to 200 High-Lumen RGB Drones',
      'Advanced 2D/3D Formations & Morphing',
      'Detailed Company Logos, Typography & Symbols',
      'Precision Geo-Fenced Sky Positioning',
      'Up to 10 Minutes Flight Time',
    ],
    badge: 'Popular for Corporate',
  },
  {
    id: 'sky-grand',
    name: 'SKY GRAND',
    drones: '200–500 DRONES',
    droneCountMin: 200,
    droneCountMax: 500,
    price: 350000,
    formattedPrice: '₹3,50,000',
    duration: 'Up to 12 Minutes',
    features: [
      '200 to 500 Synchronized Fleet Drones',
      'Complex 3D Dynamic Morphing & Spatial Animations',
      'Multi-Color Fluid Sky Storytelling',
      'Custom Flight Choreography by 3D Animators',
      'Up to 12 Minutes Flight Time',
    ],
    badge: 'Festivals & Weddings',
  },
  {
    id: 'sky-signature',
    name: 'SKY SIGNATURE',
    drones: '500+ DRONES',
    droneCountMin: 500,
    price: 425000,
    formattedPrice: '₹4,25,000',
    duration: 'Up to 15 Minutes',
    features: [
      '500+ High-Density Fleet Drones',
      'Premium High-Resolution 3D Sky Animations',
      'Fully Customized Cinematic Sky Narrative',
      'Multi-Tier Color Spectrum & Shimmer FX',
      'Up to 15 Minutes Flight Time',
    ],
    badge: 'High Impact',
  },
  {
    id: 'sky-enterprise',
    name: 'SKY ENTERPRISE',
    drones: '1000+ DRONES',
    droneCountMin: 1000,
    price: 475000,
    formattedPrice: '₹4,75,000',
    duration: 'Up to 20 Minutes',
    features: [
      '1,000+ Fleet Swarm Drones',
      'Massive Horizon-Spanning 3D Morphing Figures',
      'Complete Brand Takeover & Public Sky Displays',
      'Redundant Safety & Multi-Station Ground Control',
      'Up to 20 Minutes Flight Time',
    ],
    badge: 'Mega Arena',
  },
  {
    id: 'sky-legend',
    name: 'SKY LEGEND',
    drones: '5000+ DRONES',
    droneCountMin: 5000,
    price: 500000,
    formattedPrice: '₹5,00,000',
    duration: 'Up to 25 Minutes+',
    features: [
      '5,000+ Ultra-Fleet Drone Constellation',
      'Guinness-Record Scale Sky Transformations',
      'Full Custom Thematic 3D Holographic Illusion',
      'Full Integrated Audio-Visual Symphony',
      'Up to 25 Minutes+ Flight Time',
    ],
    badge: 'World-Class Pinnacle',
  },
];

// Drone Show Add-ons
export const droneShowAddOns = [
  { id: 'add-1', title: 'Music Sync', desc: 'Real-time timecode synchronization with event audio' },
  { id: 'add-2', title: 'Live Event Recording', desc: 'Multi-cam broadcast and ground recording' },
  { id: 'add-3', title: 'Aerial Camera Coverage', desc: 'Dedicated FPV & cinema chase drones filming the show' },
  { id: 'add-4', title: 'LED / Event Lighting', desc: 'Coordinated ground uplighting and laser wash' },
  { id: 'add-5', title: 'Same Day Reels', desc: 'Edited highlight reel delivered within hours of the show' },
  { id: 'add-6', title: 'Custom Animation', desc: 'Bespoke 3D CGI design crafted for your brand story' },
];

// Why SIRIN Visuals (4 advantages)
export const whyUsAdvantages = [
  {
    id: 'why-1',
    title: 'Professional Team',
    subtitle: 'Experienced creative production',
    description:
      'DGCA-certified drone pilots, cinematographers, and DaVinci Resolve colorists with deep industry expertise on commercial and luxury sets.',
    icon: 'Users',
    stat: '100% Certified',
  },
  {
    id: 'why-2',
    title: 'Premium Quality',
    subtitle: 'High-quality equipment and production',
    description:
      'Industry-leading cinema rigs, anamorphic lenses, high-lumen drone swarms, and 360-degree slow motion tech for unmatched visual fidelity.',
    icon: 'Sparkles',
    stat: '8K / 4K UHD',
  },
  {
    id: 'why-3',
    title: 'On-Time Delivery',
    subtitle: 'Reliable project delivery',
    description:
      'Rigorous project management, transparent milestones, expedited post-production pipelines, and guaranteed delivery timelines for every client.',
    icon: 'Clock',
    stat: 'Strict Deadlines',
  },
  {
    id: 'why-4',
    title: 'Global Service',
    subtitle: 'Available for projects worldwide',
    description:
      'Seamless production logistics deployed across key cultural and corporate hubs worldwide, supporting domestic shoots and international destination events.',
    icon: 'MapPin',
    stat: 'Worldwide Coverage',
  },
];

// 4-Step Process
export const processSteps = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Tell us about your project.',
    description:
      'We discuss your vision, creative goals, venue parameters, budget, and desired timeline through an initial consultation.',
    icon: 'Search',
  },
  {
    step: '02',
    title: 'PLAN',
    subtitle: 'Our team creates the right visual strategy.',
    description:
      'We craft shot lists, flight paths, gear allocations, 3D drone choreographies, and comprehensive production schedules.',
    icon: 'Compass',
  },
  {
    step: '03',
    title: 'CREATE',
    subtitle: 'We capture, produce and edit your content.',
    description:
      'Our team executes on-site shooting with cinema gear and drones, followed by master grading, VFX, and audio mixing.',
    icon: 'Layers',
  },
  {
    step: '04',
    title: 'DELIVER',
    subtitle: 'Receive polished, professional final visuals.',
    description:
      'Access your high-resolution visual masters, social cuts, teaser reels, and raw assets via secure online cloud galleries.',
    icon: 'CheckCircle2',
  },
];

// Featured Portfolio Items with Diverse Categories & Before/After
export const portfolioItems: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Skyline Symphony Drone Show',
    category: 'DRONE',
    image: '/src/assets/images/sirin_sky_droneshow_1787143463022.jpg',
    aspectRatio: 'landscape',
    client: 'National Tech Summit',
    location: 'Mumbai Arena',
    description:
      'A 300-drone synchronized aerial light performance creating 3D floating brand emblems and geometric spheres over the marine skyline.',
    tags: ['Drone Show', '300 Fleet', 'Night Aerials', 'Live Music Sync'],
  },
  {
    id: 'port-2',
    title: 'The Royal Heritage Wedding Film',
    category: 'CINEMATIC',
    image: '/src/assets/images/sirin_hero_cinematic_1787143442924.jpg',
    aspectRatio: 'landscape',
    client: 'Destination Wedding',
    location: 'Udaipur, Rajasthan',
    description:
      'Anamorphic cinema footage captured with RED cameras and FPV drone flythroughs inside historic palace courtyards.',
    tags: ['Cinema 4K', 'Anamorphic', 'FPV Drone', 'Color Master'],
  },
  {
    id: 'port-3',
    title: 'Behind the Scenes: Commercial Set',
    category: 'VIDEOGRAPHY',
    image: '/src/assets/images/sirin_film_crew_1787143479237.jpg',
    aspectRatio: 'landscape',
    client: 'Automotive Brand',
    location: 'Film City Studio',
    description:
      'Multi-cam high-speed gimbal tracking and precision lighting setup for a nationwide TV commercial broadcast.',
    tags: ['Commercial', 'Gimbal Rig', 'Lighting', 'Multi-Cam'],
  },
  {
    id: 'port-4',
    title: 'Luxury Gala 360 Video Booth',
    category: 'EVENTS',
    image: '/src/assets/images/sirin_photobooth_360_1787143500363.jpg',
    aspectRatio: 'square',
    client: 'Fashion Awards 2026',
    location: 'Grand Hyatt',
    description:
      'High-velocity 360 slow motion video spinner with custom violet neon lighting and instant guest AirDrop/QR sharing.',
    tags: ['360 Booth', 'Instant Share', 'Slow Motion', 'VIP Event'],
  },
  {
    id: 'port-5',
    title: 'DaVinci Resolve Color Grading Suite',
    category: 'CINEMATIC',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape',
    client: 'Feature Teaser',
    location: 'Post Studio',
    description:
      'Color transformation comparing flat log camera profiles with final cinematic Kodachrome-inspired purple-rich color grades.',
    tags: ['Color Grading', 'DaVinci Resolve', 'Log to Rec709', 'Post Production'],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=70',
      after: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
      labelBefore: 'Raw Flat Log Profile',
      labelAfter: 'Final Cinematic Master',
    },
  },
  {
    id: 'port-6',
    title: 'Architectural Aerial Mapping & Twilight',
    category: 'DRONE',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape',
    client: 'Real Estate Developer',
    location: 'Bengaluru Tech Park',
    description:
      'High-altitude 8K twilight aerial captures showcasing architectural lines, highway connectivity, and landscape design.',
    tags: ['Aerial 8K', 'Twilight', 'Architecture', 'Real Estate'],
  },
  {
    id: 'port-7',
    title: 'Luxury Perfume & Bottle Product Campaign',
    category: 'PRODUCT',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'portrait',
    client: 'Aroma Artisans',
    location: 'SIRIN Studio',
    description:
      'Macro studio lighting and caustic crystal reflections for a premium fragrance e-commerce and social campaign.',
    tags: ['Product Shoot', 'Macro', 'Luxury E-Com', 'Studio Light'],
  },
  {
    id: 'port-8',
    title: 'Editorial Fashion Portraiture',
    category: 'PHOTOGRAPHY',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'portrait',
    client: 'Lookbook Edition',
    location: 'Studio 4',
    description:
      'Deep contrast studio portraiture with gentle lavender rim lighting, high-frequency retouching, and true-to-skin tones.',
    tags: ['Portraits', 'Studio', 'Editorial', 'High-End Retouch'],
  },
  {
    id: 'port-9',
    title: 'Viral Social Reels & Brand Storytelling',
    category: 'SOCIAL MEDIA',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'square',
    client: 'D2C Lifestyle Brand',
    location: 'Multiple Locations',
    description:
      'Dynamic vertical 9:16 short-form video series generating high retention with sound-designed kinetic typography.',
    tags: ['Reels', 'Shorts', 'Kinetic Typography', 'Social Growth'],
  },
];

// Testimonials
export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Aarav Mehta',
    role: 'Head of Brand Marketing',
    companyOrEvent: 'Apex Global Summit',
    quote:
      'SIRIN VISUALS executed our 300-drone synchronized sky display flawlessly. The visual precision, safety discipline, and accompanying event video production were second to none.',
    rating: 5,
    serviceType: 'Drone Show & Event Videography',
  },
  {
    id: 'test-2',
    name: 'Pooja & Rohan Kapoor',
    role: 'Bride & Groom',
    companyOrEvent: 'Udaipur Palace Destination Wedding',
    quote:
      'The wedding film they delivered felt like an authentic Bollywood cinema masterpiece. The aerial angles over the lake and the 360 photo booth had all our guests raving.',
    rating: 5,
    serviceType: 'Signature Wedding Film & 360 Booth',
  },
  {
    id: 'test-3',
    name: 'Vikram Singhania',
    role: 'Creative Director',
    companyOrEvent: 'Lumina Luxury Living',
    quote:
      'From twilight drone architectural sweeps to studio product shoots, SIRIN VISUALS provides the exact high-end aesthetic our luxury real estate brand requires.',
    rating: 5,
    serviceType: 'Commercial Shoot & Drone Mapping',
  },
];

// 12 Comprehensive FAQs
export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What areas do you provide services in?',
    answer:
      'SIRIN VISUALS provides global visual production services. Our certified cinema crews and drone teams deploy worldwide for international brand campaigns, stadium drone shows, and destination events.',
    category: 'general',
  },
  {
    id: 'faq-2',
    question: 'Do you provide drone services?',
    answer:
      'Yes. We offer comprehensive drone cinematography, commercial drone advertising, FPV dynamic flythroughs, orthomosaic mapping, and large-scale synchronized drone light shows operated strictly by DGCA-certified pilots following all airspace regulations.',
    category: 'drones',
  },
  {
    id: 'faq-3',
    question: 'Do you provide wedding photography and videography?',
    answer:
      'Yes. We specialize in luxury and destination weddings, providing multi-camera cinema crews, high-resolution candid photography, pre-wedding concept shoots, same-day teaser edits, and comprehensive feature-length documentary films.',
    category: 'services',
  },
  {
    id: 'faq-4',
    question: 'Can you create custom packages?',
    answer:
      'Absolutely. While our 7 standard packages cater to common project scopes, we frequently tailor customized packages incorporating specific hours of drone coverage, photo booth durations, additional crew members, and specialized delivery timelines.',
    category: 'pricing',
  },
  {
    id: 'faq-5',
    question: 'Do you provide commercial photography?',
    answer:
      'Yes. Our commercial photography services span product e-commerce catalogs, corporate executive portraits, architectural spaces, food and hospitality, and advertising campaigns with full studio lighting setups.',
    category: 'services',
  },
  {
    id: 'faq-6',
    question: 'Do you create social media reels?',
    answer:
      'Yes. We shoot and edit high-retention 9:16 vertical reels and shorts with kinetic subtitles, audio trending sound design, and color grading optimized for maximum engagement on Instagram, YouTube Shorts, and TikTok.',
    category: 'services',
  },
  {
    id: 'faq-7',
    question: 'Do you provide drone shows?',
    answer:
      'Yes, through our SIRIN SKY division. We deploy synchronized fleet drone light shows starting from 50 drones up to 5,000+ drones for corporate summits, stadium events, government celebrations, and luxury weddings.',
    category: 'drones',
  },
  {
    id: 'faq-8',
    question: 'How many drones can be used for a show?',
    answer:
      'Our fleet configurations range from 50 to 100 drones (Sky Mini) for intimate displays, up to 500+ (Sky Signature), 1,000+ (Sky Enterprise), and mega-scale 5,000+ drone constellations (Sky Legend) for world-class arena events.',
    category: 'drones',
  },
  {
    id: 'faq-9',
    question: 'Can you create custom drone formations?',
    answer:
      'Yes. Our in-house 3D motion animators design bespoke sky formations including company 3D logos, custom typography, countdowns, portraits, and dynamic fluid morphing sequences tailored to your brand narrative.',
    category: 'drones',
  },
  {
    id: 'faq-10',
    question: 'How can I book a project?',
    answer:
      'You can book by submitting our online Project Enquiry form on this website, clicking the "BOOK A PROJECT" button in the menu, or messaging us directly via WhatsApp or email (Hello@SirinVisuals.com). Our production manager will respond within 24 hours.',
    category: 'general',
  },
  {
    id: 'faq-11',
    question: 'How early should I book?',
    answer:
      'For standard photo and video shoots, we recommend booking 2 to 4 weeks in advance. For destination weddings and large-scale drone shows (requiring airspace permissions and custom 3D animations), we recommend booking 4 to 8 weeks ahead.',
    category: 'general',
  },
  {
    id: 'faq-12',
    question: 'Do you provide editing-only services?',
    answer:
      'Yes. If you already have raw footage (from your own cameras, drones, or smartphones), our post-production suite provides DaVinci Resolve color grading, audio mastering, visual effects, and social reel editing with fast cloud turnaround.',
    category: 'services',
  },
];
