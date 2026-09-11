export interface LocationInfo {
  id: string;
  name: string;
  badge: string;
  address: string;
  cityStateZip: string;
  phone: string;
  directionsUrl: string;
  mapEmbedUrl: string;
  hours: {
    days: string;
    time: string;
  }[];
}

export interface Testimonial {
  id: string;
  author: string;
  treatment?: string;
  date: string;
  rating: number;
  text: string;
  source: 'Google' | 'Verified Client';
  avatarInitials: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  targetAudience: string;
  monthlyPricingPlaceholder: string;
  videoUrl?: string;
  badge?: string;
  popular?: boolean;
  highlightPerks: string[];
  sampleTreatments: string[];
  tokenEquivalent: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: 'injectables' | 'facials' | 'body' | 'laser' | 'hair' | 'specialty';
  description: string;
  tokenEligible: boolean;
  popular?: boolean;
}

export const MEDSPA_INFO = {
  name: "Houston's Medspa + Wellness",
  shortName: "HMW",
  phone: "(832) 835-2545",
  phoneTel: "tel:+18328352545",
  email: "help@htxmdspa.com",
  tagline: "Skincare • Body • Wellness • Laser",
  googleRating: "4.9",
  reviewCount: "532+",
  heroImg: "https://htxmdspa.com/wp-content/uploads/2026/02/Facial-1.jpg",
  ctaBgImg: "https://htxmdspa.com/wp-content/uploads/2026/02/Untitled-design.jpg",
  videoGuideUrl: "https://htxmdspa.com/wp-content/uploads/2026/02/Copy-of-2025-Services-Guide-A4111.mp4",
  generalHours: [
    { days: "Tuesday – Friday", time: "10:00 AM – 6:00 PM" },
    { days: "Saturday", time: "10:00 AM – 4:00 PM" },
    { days: "Sunday – Monday", time: "Closed" },
  ],
};

export const LOCATIONS: LocationInfo[] = [
  {
    id: "downtown",
    name: "Downtown Location",
    badge: "East Downtown / Mid-City",
    address: "3312 St Emanuel Street",
    cityStateZip: "Houston, TX 77004",
    phone: "(832) 835-2545",
    directionsUrl: "https://maps.app.goo.gl/RTQsghch6AaseWr28",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.47654938215!2d-95.3687042!3d29.734918400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf0c31517757%3A0x1d4ba1dbd1437773!2s3312%20St%20Emanuel%20St%2C%20Houston%2C%20TX%2077004!5e0!3m2!1sen!2sus!4v1758191578740!5m2!1sen!2sus",
    hours: [
      { days: "Tue - Fri", time: "10:00 AM – 6:00 PM" },
      { days: "Saturday", time: "10:00 AM – 4:00 PM" },
      { days: "Sun - Mon", time: "Closed" },
    ],
  },
  {
    id: "champions",
    name: "Champions Location",
    badge: "Northwest Houston / Willowbrook",
    address: "13303 Champion Forest Dr, STE 1",
    cityStateZip: "Houston, TX 77069",
    phone: "(832) 835-2545",
    directionsUrl: "https://maps.app.goo.gl/ZvJrtnCzamkYxoMK9",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.513524673898!2d-95.5396629!3d29.9758883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640ceeb3a48e7e1%3A0xc3f5879a83685412!2s13303%20Champion%20Forest%20Dr%20%231%2C%20Houston%2C%20TX%2077069!5e0!3m2!1sen!2sus!4v1758191600000!5m2!1sen!2sus",
    hours: [
      { days: "Tue - Fri", time: "10:00 AM – 6:00 PM" },
      { days: "Saturday", time: "10:00 AM – 4:00 PM" },
      { days: "Sun - Mon", time: "Closed" },
    ],
  },
];

export const MEMBERSHIP_PERKS = [
  {
    title: "Up to 80% Off Services",
    subtitle: "Beauty & Wellness Tokens",
    description: "Enjoy exclusive tiered pricing on treatments like the Vampire Facial and Medical Facials that non-members never unlock.",
    stat: "80%",
    statLabel: "Max Service Savings",
  },
  {
    title: "Up to 30% Off Non-Member Services",
    subtitle: "Advanced Aesthetics & Injectables",
    description: "Significant member-only pricing on specialized procedures including PRPFILL (Plasma Gel Bio-Filler), Endo-Lift, and Kybella.",
    stat: "30%",
    statLabel: "Injectable & Elite Discount",
  },
  {
    title: "10% Off Medical-Grade Skincare",
    subtitle: "Take-Home Care & Devices",
    description: "Receive an ongoing 10% discount on all clinical retail products, home medical devices, and even items already on sale.",
    stat: "10%",
    statLabel: "Retail & Device Discount",
  },
  {
    title: "Rollover Tokens & $50 Guest Pass",
    subtitle: "Total Flexibility & Sharing",
    description: "Missed your visit? Your monthly Beauty Tokens roll over! Plus purchase a $50 Guest Pass so friends can experience member rates.",
    stat: "100%",
    statLabel: "Rollover Protected",
  },
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: "express",
    name: "Express",
    subtitle: "Consistent Glow & Maintenance",
    description: "Unlock essentials that keep your skin consistently glowing with monthly restorative care and core skin conditioning.",
    targetAudience: "Perfect for routine skin health, glow maintenance, and clients seeking predictable monthly beauty care.",
    monthlyPricingPlaceholder: "[CONTACT FOR CURRENT SPECIAL]",
    videoUrl: "https://htxmdspa.com/wp-content/uploads/2026/02/unlock-essentials-vid.mp4",
    badge: "Essential Care",
    popular: false,
    tokenEquivalent: "1 Token / Month",
    highlightPerks: [
      "Custom Medical Facial or Core Conditioning monthly",
      "Rollover protection if a monthly appointment is missed",
      "10% off all clinical take-home skincare and medical devices",
      "Access to $50 guest passes for friends & family",
      "Annual subscription with monthly draft or prepaid option",
    ],
    sampleTreatments: [
      "Custom Medical Facials",
      "Brow Lamination & Lash Lift",
      "Chemical Peels (TCA / Herbal)",
      "High Frequency Scalp Stimulation",
    ],
  },
  {
    id: "lavish",
    name: "Lavish",
    subtitle: "Visible Transformation & Deep Selfcare",
    description: "Results-driven treatments designed for visible transformation, collagen renewal, and next-level selfcare.",
    targetAudience: "Ideal for clients focused on active skin resurfacing, firming, and targeted body toning.",
    monthlyPricingPlaceholder: "[CONTACT FOR CURRENT SPECIAL]",
    videoUrl: "https://htxmdspa.com/wp-content/uploads/2026/02/lavish-video-latest.mp4",
    badge: "Most Popular",
    popular: true,
    tokenEquivalent: "Multi-Token Tier / Month",
    highlightPerks: [
      "Access to advanced radio-frequency tightening and peels",
      "Up to 80% discount on premium esthetic services",
      "30% off high-tier non-member treatments like PRPFILL",
      "Birthday gift perk & exclusive member-only promotions",
      "10% off medical-grade retail products, even on sale items",
      "Complete rollover protection for active subscribers",
    ],
    sampleTreatments: [
      "Radio Frequency (RF) Tightening Facial",
      "Microdermabrasion & Deluxe Peels",
      "Vaser Shape Body Contouring Session",
      "Lipotropic Injections & Wellness Add-ons",
      "Laser Skin Tightening",
    ],
  },
  {
    id: "vib",
    name: "VIB (Very Important Beauty)",
    subtitle: "High-Performance Transformation & Elite Results",
    description: "Access to our most advanced, high-performance treatments for ultimate transformation and elite-level regenerative results.",
    targetAudience: "For clients seeking maximum anti-aging, PRP regenerative therapies, and VIP aesthetic perks.",
    monthlyPricingPlaceholder: "[CONTACT FOR CURRENT SPECIAL]",
    videoUrl: "https://htxmdspa.com/wp-content/uploads/2026/02/access-to.mp4",
    badge: "Elite Level",
    popular: false,
    tokenEquivalent: "Elite Token Program",
    highlightPerks: [
      "Priority booking access for top practitioners & master injectors",
      "Deepest savings on regenerative Vampire Facials & PRP therapy",
      "Full 30% savings on Endo-Lift, PRPFILL & Kybella",
      "Annual prepay options unlock your entire beauty bank up front",
      "Dedicated aesthetic treatment plan curated to your personal goals",
      "Full guest privileges with $50 pass & transferable tokens",
    ],
    sampleTreatments: [
      "Vampire Facial (PRP Microneedling)",
      "PRP Hair Restoration Sessions",
      "eMatrix Sublative Rejuvenation",
      "Hollywood Laser Peel",
      "ThermiVa & Female Rejuvenation access",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    author: "Rachael Schaut",
    treatment: "Radio Frequency Tightening Facial",
    date: "Verified Google Review",
    rating: 5,
    source: "Google",
    avatarInitials: "RS",
    text: "First off, when you walk into the beautiful salon, Irela is there to greet you. She is so lovely and kind & extremely knowledgeable. I came in for a radio frequency tightening facial with Grace. Oh. My. God. The experience was AMAZING! Then I looked in the mirror & there was an instant visual difference. My exact words were, 'I look like a different person!' There are so many things I’m going to come back for in the future… a PRP fill treatment to tighten my under eyes, Lipo B12 shots & a lymphatic release massage. This place is magic y’all!",
  },
  {
    id: "rev-2",
    author: "Felicia Clark",
    treatment: "Medspa Care",
    date: "Verified Google Review",
    rating: 5,
    source: "Google",
    avatarInitials: "FC",
    text: "Staff is super knowledgeable and sweet and overall, it was a good experience.",
  },
  {
    id: "rev-3",
    author: "Yvonne Olivares",
    treatment: "Lip Filler & Lip Flip",
    date: "Verified Google Review",
    rating: 5,
    source: "Google",
    avatarInitials: "YO",
    text: "Came in for lip filler and a lip flip. Absolutely loved my results!! The team is amazing!!",
  },
  {
    id: "rev-4",
    author: "Vidhi Desai",
    treatment: "First-Time Procedure",
    date: "Verified Google Review",
    rating: 5,
    source: "Google",
    avatarInitials: "VD",
    text: "This was my first time getting any procedure and they helped me through it and walked me through every step! My lips look amazing and I love them so much. I would 12/10 recommend them so much with everything. Grace was amazing as she is so knowledgeable and answered all my questions and made me feel so great & comfortable through it.",
  },
  {
    id: "rev-5",
    author: "Tartesia Asphy",
    treatment: "Microdermabrasion & Skin Analysis",
    date: "Verified Google Review",
    rating: 5,
    source: "Google",
    avatarInitials: "TA",
    text: "I had the Microdermabrasion! It was amazing. Grace did an amazing job, she is the best. Customer service is 5 stars. She is so knowledgeable and professional. I will be back! You have a loyal customer! I can’t wait for my next visit..the ambiance is top notch. Skin analysis. My skin feels amazing and it’s glowing. I look like a new person. Julie is so friendly and welcoming. These girls know their stuff.. You have to get the Microdermabrasion. Thank you Grace!",
  },
  {
    id: "rev-6",
    author: "Robert Lloyd",
    treatment: "RF Microneedling & Peels",
    date: "Verified Google Review",
    rating: 5,
    source: "Google",
    avatarInitials: "RL",
    text: "This is a great beauty spa. I have been coming here for over a year for a variety of services and have been impressed with the experience all around. Some of the services they have provided are Micro RF, chemical peels, and facials. I highly recommend all of the services!",
  },
  {
    id: "rev-7",
    author: "Alexa Ketchem",
    treatment: "Aesthetic Consultation",
    date: "Verified Google Review",
    rating: 5,
    source: "Google",
    avatarInitials: "AK",
    text: "Got a consult and they were very helpful in explaining my treatment plan. They are very mindful of their clients’ comfort!",
  },
  {
    id: "rev-8",
    author: "Thomas Beaumont",
    treatment: "Age Spot Removal & Glow Care",
    date: "Verified Google Review",
    rating: 5,
    source: "Google",
    avatarInitials: "TB",
    text: "This was my first time like that Madonna Song! And I had a fabulous experience! Grace did a fantastic job removing an embarrassing age spot! The entire staff made me feel just at home and put my mind at ease! I'm an actor moving from Hollywood to Texas! Let me tell you This is the place to GLOW UP Y’all! A sincere thank you!",
  },
  {
    id: "rev-9",
    author: "Leslie Sanchez",
    treatment: "Lip Treatment",
    date: "Verified Google Review",
    rating: 5,
    source: "Google",
    avatarInitials: "LS",
    text: "Got my lips done for the first time I loved them 💓 girls are really nice. Definitely will be coming back",
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "vampire-facial",
    name: "Vampire Facial (PRP Microneedling)",
    category: "facials",
    description: "Platelet-rich plasma combined with clinical microneedling to stimulate natural collagen, refine texture, and restore youthful elasticity.",
    tokenEligible: true,
    popular: true,
  },
  {
    id: "prpfill",
    name: "PRPFILL (Plasma Gel Bio-Filler)",
    category: "injectables",
    description: "100% natural, autologous bio-filler created from your own blood plasma to restore midface volume and smooth deep hollows.",
    tokenEligible: false,
    popular: true,
  },
  {
    id: "endolift",
    name: "Endo-Lift in Houston",
    category: "laser",
    description: "Minimally invasive subdermal laser therapy that targets deep and superficial cutaneous tissue for noticeable skin tightening and restructuring.",
    tokenEligible: false,
    popular: true,
  },
  {
    id: "botox-fillers",
    name: "Botox, Dermal Fillers & Kybella",
    category: "injectables",
    description: "Precision non-surgical refinements for wrinkle reduction, lip enhancements, chin contouring, and submental fat reduction.",
    tokenEligible: false,
    popular: true,
  },
  {
    id: "custom-facials",
    name: "Custom Medical Facials",
    category: "facials",
    description: "Deep clinical pore cleansing, targeted serums, exfoliation, and custom lymphatic techniques tailored to your skin analysis.",
    tokenEligible: true,
    popular: true,
  },
  {
    id: "rf-microneedling",
    name: "Microneedling RF",
    category: "laser",
    description: "Radiofrequency energy combined with micro-pins to firm loose skin, soften acne scarring, and stimulate deep dermal tightening.",
    tokenEligible: true,
    popular: true,
  },
  {
    id: "chemical-peels",
    name: "Clinical Peels (TCA, Melasma, Herbal)",
    category: "facials",
    description: "Medical-strength chemical exfoliation targeting stubborn pigmentation, sun damage, and melasma for balanced skin tone.",
    tokenEligible: true,
  },
  {
    id: "vaser-shape",
    name: "Vaser Shape Ultrasound & Cellulite Therapy",
    category: "body",
    description: "Dual-action ultrasound diathermy and zonal massage to reduce cellulite appearance and smooth body contours.",
    tokenEligible: true,
  },
  {
    id: "lymphatic-drainage",
    name: "Manual Lymphatic Drainage & Post-Surgical Care",
    category: "body",
    description: "Specialized gentle therapies designed to accelerate healing, minimize post-op swelling, and boost circulation.",
    tokenEligible: true,
  },
  {
    id: "semaglutide",
    name: "Semaglutide Medical Weight Loss",
    category: "body",
    description: "Physician-guided medical weight loss protocol tailored with ongoing clinical support and wellness monitoring.",
    tokenEligible: false,
  },
  {
    id: "hair-restoration",
    name: "PRP Hair Restoration & High Frequency Therapy",
    category: "hair",
    description: "Reactivate sluggish follicles and stimulate cellular repair with concentrated platelets and high-frequency stimulation.",
    tokenEligible: true,
  },
  {
    id: "laser-hair-removal",
    name: "Advanced Laser Hair Removal",
    category: "laser",
    description: "Permanent reduction of unwanted facial and body hair utilizing medical-grade laser technology safe for diverse skin tones.",
    tokenEligible: true,
  },
  {
    id: "brows-lashes",
    name: "Brow Lamination, Tinting & Lash Lift",
    category: "specialty",
    description: "Refined brow sculpting and keratin lash lifts to frame your eyes with effortless, natural definition.",
    tokenEligible: true,
  },
  {
    id: "hollywood-peel",
    name: "Hollywood Laser Peel & IPL Photofacial",
    category: "laser",
    description: "Instant skin brightening and pore tightening with zero downtime, ideal for immediate red-carpet radiance.",
    tokenEligible: true,
  },
  {
    id: "thermiva",
    name: "ThermiVa & O-Shot Female Rejuvenation",
    category: "specialty",
    description: "Non-surgical, temperature-controlled radiofrequency treatment to restore comfort, confidence, and tissue wellness.",
    tokenEligible: false,
  },
];

export const FAQS = [
  {
    question: "How does the Beauty + Wellness Membership work?",
    answer: "Our membership is an annual subscription model built around Beauty Tokens. You can either prepay for the year to unlock all your Beauty Tokens up front, or enjoy convenient monthly draft payments. Your provider curates services around your personal goals, ensuring each visit delivers maximum value. Select high-performance services may utilize additional tokens.",
  },
  {
    question: "What happens if I miss a month? Do tokens roll over?",
    answer: "Yes! If you are on a monthly draft and miss your visit, your Token rolls over to the following month so you never lose the value of your beauty plan.",
  },
  {
    question: "Can I share my tokens or bring a friend?",
    answer: "Want to share the experience? It’s easy. You can purchase a Guest Pass for $50. With a guest pass, you can either gift one of your tokens, or your guest can act as a member and receive exclusive member rates for their visit.",
  },
  {
    question: "What discounts do members receive on non-member services?",
    answer: "Beauty + Wellness members enjoy up to 80% savings on signature membership services like the Vampire Facial. In addition, members save up to 30% on elite non-member services such as PRPFILL (Plasma Gel Bio-Filler) and Endo-Lift, plus 10% off all clinical retail skincare and at-home devices (even on items already on sale!).",
  },
  {
    question: "How does gratuity work?",
    answer: "Gratuity is not included in our service prices and is always optional. Most of our clients tip 15–20% of the service price to thank their provider for exceptional care and attention.",
  },
  {
    question: "What are the Membership Terms & Conditions?",
    answer: "Houston's Medspa + Wellness Memberships is an annual subscription. Prepay for the year to unlock access to all your Beauty Tokens immediately, or enjoy the annual program with predictable monthly payments. Exclusive savings on non-member services are subject to availability and active membership. Membership cancellation requires a 30-day written notice after minimum terms have been fulfilled.",
  },
  {
    question: "Is financing available for treatments?",
    answer: "Yes! We proudly partner with Cherry Financing to provide flexible 0% APR payment options and low monthly payment plans for aesthetic procedures, skincare, and packages. Approvals take only seconds with no hard credit check impact.",
  },
];
