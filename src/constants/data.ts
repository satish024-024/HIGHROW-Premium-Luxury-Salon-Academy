export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  duration?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  services: ServiceItem[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface TransformationItem {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
}

export interface CourseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  features: string[];
}

export const SALON_INFO = {
  name: "HIGHROW",
  subtitle: "THE UNISEX SALON & ACADEMY",
  phone: "+91 99661 81114",
  address: "3rd Floor, Sujatha Complex, Opposite Pantaloons Showroom, A.V. Appa Rao Road, Rajahmundry, AP 533103",
  addressShort: "AV Appa Rao Road, Rajahmundry",
  hours: "8:00 AM - 10:00 PM",
  email: "appointments@highrow.in",
  whatsappUrl: "https://wa.me/919966181114",
  socials: {
    instagram: "https://instagram.com/highrowsalon",
    facebook: "https://facebook.com/highrowsalon",
    whatsapp: "https://wa.me/919966181114",
    google: "https://g.co/kgs/highrowsalon", // Mock or standard link
    location: "https://maps.google.com/?q=Highrow+Unisex+Salon+Rajahmundry"
  }
};

export const NAVIGATION_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "ACADEMY", href: "#academy" },
  { label: "GALLERY", href: "#gallery" },
  { label: "OFFERS", href: "#offers" },
  { label: "REVIEWS", href: "#reviews" },
  { label: "CONTACT", href: "#contact" }
];

export const TRUST_INDICATORS = [
  {
    id: "rating",
    title: "4.9/5 Rating",
    subtitle: "230+ Reviews",
    icon: "star"
  },
  {
    id: "stylists",
    title: "Expert Stylists",
    subtitle: "Certified Professionals",
    icon: "award"
  },
  {
    id: "products",
    title: "Premium Products",
    subtitle: "International Brands",
    icon: "sparkles"
  },
  {
    id: "hygiene",
    title: "Hygienic & Safe",
    subtitle: "100% Sterilized Tools",
    icon: "shield-check"
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "hair",
    name: "HAIR",
    icon: "scissors",
    services: [
      {
        id: "hair-styling",
        name: "Hair Styling",
        description: "From trendy cuts to stunning styles, we create your signature look.",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
        price: "Starts from ₹499"
      },
      {
        id: "hair-cutting",
        name: "Hair Cutting",
        description: "Precision cuts for men, women & kids by expert stylists.",
        image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
        price: "Starts from ₹599"
      },
      {
        id: "hair-treatments",
        name: "Hair Treatments",
        description: "Advanced treatments for healthy, shiny & beautiful hair.",
        image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=800&auto=format&fit=crop",
        price: "Starts from ₹1499"
      },
      {
        id: "hair-colouring",
        name: "Hair Colouring",
        description: "Global colour, highlights, balayage, ombre & fashion colours.",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=800&auto=format&fit=crop",
        price: "Starts from ₹2499"
      }
    ]
  },
  {
    id: "skin",
    name: "SKIN",
    icon: "sparkles",
    services: [
      {
        id: "hydra-facial",
        name: "Hydra Facial Glow",
        description: "Deep cleansing, exfoliation, and hydration infusion for instant radiance.",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
        price: "Starts from ₹1999"
      },
      {
        id: "skin-brightening",
        name: "De-tan & Brightening",
        description: "Advanced tan removal and organic skin polishing for even tone.",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
        price: "Starts from ₹999"
      }
    ]
  },
  {
    id: "makeup",
    name: "MAKEUP",
    icon: "brush",
    services: [
      {
        id: "glam-makeup",
        name: "Party Glam Makeup",
        description: "Professional high-definition makeup styled for premium evening events.",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
        price: "Starts from ₹2999"
      },
      {
        id: "bridal-makeup-service",
        name: "Engagement Makeup",
        description: "Stunning, customized, long-lasting look with premium products.",
        image: "https://images.unsplash.com/photo-1522337060762-ef9651ff636a?q=80&w=800&auto=format&fit=crop",
        price: "Starts from ₹7999"
      }
    ]
  },
  {
    id: "nails",
    name: "NAILS",
    icon: "hand",
    services: [
      {
        id: "luxury-nail-art",
        name: "Luxury Nail Art",
        description: "Exquisite hand-painted nail designs, chrome finishes, and stone art.",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
        price: "Starts from ₹799"
      },
      {
        id: "gel-extensions",
        name: "Gel Nail Extensions",
        description: "Durable and natural-looking nail extensions with long-lasting gel polish.",
        image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop",
        price: "Starts from ₹1499"
      }
    ]
  },
  {
    id: "waxing",
    name: "WAXING",
    icon: "flower",
    services: [
      {
        id: "rika-waxing",
        name: "Premium Rica Waxing",
        description: "Gentle liposoluble Italian wax treatment for smooth, hair-free skin.",
        image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop",
        price: "Starts from ₹499"
      }
    ]
  },
  {
    id: "grooming",
    name: "GROOMING",
    icon: "smile",
    services: [
      {
        id: "beard-grooming",
        name: "Premium Beard Styling",
        description: "Precise line trimming, hot towel treatment, and premium beard oil application.",
        image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop",
        price: "Starts from ₹299"
      }
    ]
  },
  {
    id: "bridal",
    name: "BRIDAL",
    icon: "crown",
    services: [
      {
        id: "hd-bridal-makeup",
        name: "Traditional Bridal Styling",
        description: "Flawless HD/Airbrush bridal makeup, hair styling, and professional draping.",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
        price: "Starts from ₹14999"
      }
    ]
  },
  {
    id: "academy",
    name: "ACADEMY",
    icon: "graduation-cap",
    services: [
      {
        id: "hair-course-intro",
        name: "Professional Hair Designing",
        description: "Complete certification course on hair styling, chemical work & coloring.",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=800&auto=format&fit=crop",
        price: "Duration: 3 Months"
      }
    ]
  }
];

export const STATS_ITEMS = [
  { id: "years", value: "10+", label: "Years of Excellence" },
  { id: "staff", value: "50+", label: "Expert Professionals" },
  { id: "clients", value: "5000+", label: "Happy Clients" },
  { id: "reviews", value: "230+", label: "5 Star Reviews" }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    quote: "Highrow is not just a salon, it's an experience! The ambience, the staff, the hygiene—everything is absolutely top-notch.",
    author: "Priya K.",
    role: "Regular Client",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "t2",
    quote: "Excellent bridal styling! Their team was patient, professional, and understood exactly what I wanted. Best in Rajahmundry.",
    author: "Anjali S.",
    role: "Bride",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "t3",
    quote: "The precision cuts by their stylists are unmatched. The warm atmosphere and premium interior make you feel like royalty.",
    author: "Vikram R.",
    role: "Regular Client",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    rating: 5
  }
];

export const ACADEMY_COURSES: CourseItem[] = [
  {
    id: "course-hair",
    title: "Hair Cutting Course",
    description: "Master techniques from basic to advanced level.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
    duration: "3 Months",
    features: ["Basic to Advanced Cuts", "Client Consultation", "Chemical Treatment Basics"]
  },
  {
    id: "course-makeup",
    title: "Makeup Course",
    description: "Professional makeup artistry from experts.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    duration: "2 Months",
    features: ["HD and Airbrush Makeup", "Color Theory", "Bridal & Fashion Glam"]
  },
  {
    id: "course-nail",
    title: "Nail Technician Course",
    description: "Learn nail art, extensions & advanced techniques.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
    duration: "1 Month",
    features: ["Gel & Acrylic Extensions", "Advanced 3D Nail Art", "Manicure & Care procedures"]
  },
  {
    id: "course-beauty",
    title: "Beautician Course",
    description: "Complete beauty & skincare training.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    duration: "3 Months",
    features: ["Facial Treatments", "Skincare Science", "Body Waxing & Grooming"]
  }
];

export const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: "trans-hair",
    title: "Hair Transformation",
    category: "Hair Cut & Blowdry",
    beforeImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=500&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "trans-bridal",
    title: "Bridal Makeup",
    category: "Airbrush HD Bridal Glam",
    beforeImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=500&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "trans-color",
    title: "Hair Colour",
    category: "Luxury Balayage Highlight",
    beforeImage: "https://images.unsplash.com/photo-1605497746445-97d1b0a9ead9?q=80&w=500&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1620331350646-6ff7ee4579f5?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "trans-beard",
    title: "Beard Styling",
    category: "Precision Lining & Spa",
    beforeImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=500&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "trans-nail",
    title: "Nail Art",
    category: "Premium Gel Extensions & Stones",
    beforeImage: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=500&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "trans-makeup",
    title: "Makeup Transformation",
    category: "Evening Glam Transformation",
    beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=500&auto=format&fit=crop"
  }
];

export const BANNER_MODEL_LEFT = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop";
export const BANNER_MODEL_RIGHT = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop";
export const STATS_MODEL_PORTRAIT = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop";
export const HERO_SALON_IMAGE = "/hero_salon_user_v3.png"; // Premium salon interior
export const ACADEMY_MODEL_STUDENTS = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop";
export const MOCK_CINEMATIC_VIDEO = "/hero_salon_video_v1.mp4"; // Custom looping video clip
