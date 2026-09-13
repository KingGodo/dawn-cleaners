export const photos = {
  hero: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2000&q=80",
  heroWide:
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2400&q=80",
  hotelSuite: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=80",
  residence: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  apartment: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
  lodge: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
  bathroom: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80",
  kitchen: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1600&q=80",
  linens: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
  living: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80",
} as const

export const site = {
  name: "Dawn Cleaners",
  tagline: "Guest ready spaces. On a schedule you can trust.",
  description:
    "Professional cleaning for homes, offices, BnBs, lodges and hotels. Reliable teams, hospitality grade finish, and bookings you don’t have to chase.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/#industries", label: "Industries" },
    { href: "/#work", label: "Work" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  contact: {
    email: "dawnclanerz@gmail.com",
    phone: "+263 77 865 9908",
    phoneHref: "tel:+263778659908",
    whatsapp: "https://wa.me/263778659908",
    location: "Harare, Zimbabwe",
    hours: "Monday to Saturday, 7:00 to 18:00",
    region: "Homes, offices and hospitality properties across Zimbabwe",
  },
  legal: [
    { href: "/policy", label: "Policy" },
    { href: "/privacy", label: "Privacy" },
  ],
  social: [
    {
      label: "Facebook" as const,
      href: "https://www.facebook.com/dawncleaners",
    },
    {
      label: "Instagram" as const,
      href: "https://www.instagram.com/dawncleaners",
    },
    {
      label: "TikTok" as const,
      href: "https://www.tiktok.com/@dawncleaners",
    },
    {
      label: "WhatsApp" as const,
      href: "https://wa.me/263778659908",
    },
  ],
} as const

export const serviceTypes = [
  "Residential Cleaning",
  "Office Cleaning",
  "BnB Cleaning",
  "Lodge Cleaning",
  "Hotel Cleaning",
  "Other",
] as const

export const propertyTypes = [
  "Home",
  "Office",
  "BnB",
  "Lodge",
  "Hotel",
  "Commercial",
] as const

export const services = [
  {
    slug: "residential",
    name: "Residential Cleaning",
    eyebrow: "Homes",
    intent: "A house that feels lived in and looked after, not staged.",
    summary:
      "Weekly or fortnightly home care, deep cleans, and move in / move out work. We follow the way you actually live.",
    includes: [
      "Kitchens, bathrooms and living areas",
      "Bedrooms and linen change on request",
      "Flexible weekday or weekend slots",
    ],
    image: photos.residence,
    featured: true,
  },
  {
    slug: "office",
    name: "Office Cleaning",
    eyebrow: "Workplaces",
    intent: "An office that still looks considered at the end of the week.",
    summary:
      "After hours and scheduled office cleaning so your team walks into a space that’s ready for work.",
    includes: [
      "Desks, floors, kitchens and washrooms",
      "Quiet, after hours teams",
      "Recurring contracts with a named lead",
    ],
    image: photos.office,
    featured: false,
  },
  {
    slug: "bnb",
    name: "BnB Cleaning",
    eyebrow: "Short stays",
    intent: "Turnovers guests can feel before they put the bags down.",
    summary:
      "Same day guest turnovers with linen, bathrooms and presentation held to a listing standard.",
    includes: [
      "Full turnover between check out and check in",
      "Linen and bathroom reset",
      "Photo ready presentation",
    ],
    image: photos.apartment,
    featured: false,
  },
  {
    slug: "lodge",
    name: "Lodge Cleaning",
    eyebrow: "Lodges",
    intent: "Hospitality rooms kept to the standard your guests paid for.",
    summary:
      "Lodge and guest house programmes with consistent teams who understand check in pressure.",
    includes: [
      "Room, bathroom and public area care",
      "Turnaround around arrival windows",
      "Brief once, repeat the standard service",
    ],
    image: photos.lodge,
    featured: false,
  },
  {
    slug: "hotel",
    name: "Hotel Cleaning",
    eyebrow: "Hotels",
    intent: "Rooms that reset cleanly, quietly, and on time.",
    summary:
      "Support for hotel housekeeping: suites, deluxe rooms and the details guests notice first.",
    includes: [
      "Room resets and turndown support",
      "Bathroom and linen presentation",
      "Teams used to hotel pace",
    ],
    image: photos.hotelSuite,
    featured: false,
  },
] as const

export const work = [
  {
    title: "Private residence",
    meta: "Weekly home care · Harare",
    image: photos.living,
  },
  {
    title: "Hotel suite",
    meta: "Guest turnover",
    image: photos.hero,
  },
  {
    title: "City office",
    meta: "After hours contract",
    image: photos.office,
  },
  {
    title: "Boutique BnB",
    meta: "Same day reset",
    image: photos.apartment,
  },
  {
    title: "Lodge room",
    meta: "Hospitality programme",
    image: photos.lodge,
  },
  {
    title: "Family kitchen",
    meta: "Deep clean",
    image: photos.kitchen,
  },
] as const

export const industries = [
  {
    name: "Homes",
    copy: "Households that want the house looked after without managing every hour of it.",
    image: photos.residence,
  },
  {
    name: "Offices",
    copy: "Workplaces that should still feel considered on a Thursday afternoon.",
    image: photos.office,
  },
  {
    name: "BnBs",
    copy: "Short stay properties where the next guest is often hours away.",
    image: photos.apartment,
  },
  {
    name: "Lodges",
    copy: "Guest houses and lodges that live or die on the feeling at check in.",
    image: photos.lodge,
  },
  {
    name: "Hotels",
    copy: "Rooms that have to reset to standard, quietly, every day.",
    image: photos.hotelSuite,
  },
] as const

export const heroStats = [
  {
    value: "5 spaces",
    label: "Spaces we serve",
    copy: "Homes, offices, BnBs, lodges and hotels. One guest standard.",
  },
  {
    value: "Same day resets",
    label: "Turnovers",
    copy: "Ready between check out and the next guest, without the scramble.",
  },
] as const

export const processSteps = [
  {
    title: "Tell us what you need",
    copy: "Property type, frequency, and anything guests or the household always notice.",
    image: photos.office,
  },
  {
    title: "We assess the space",
    copy: "A clear scope, not a surprise on the day. We confirm timing and the finish you expect.",
    image: photos.residence,
  },
  {
    title: "We schedule the service",
    copy: "A slot that fits check ins, office hours or the way you live. Then we keep it.",
    image: photos.apartment,
  },
  {
    title: "We clean and hand over",
    copy: "The team delivers to the brief. You walk into a space that’s ready.",
    image: photos.linens,
  },
] as const

export const testimonials = [
  {
    quote:
      "Dawn Cleaners has made managing our Avondale rooms so much easier. Guests from the airport walk into a space that already feels ready.",
    name: "Tendai Moyo",
    role: "Property manager",
    context: "Avondale, Harare",
    image:
      "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&crop=faces&w=200&h=200&q=80",
  },
  {
    quote:
      "Turnovers in Nyanga used to take the whole morning. They arrive on time, work quietly, and the rooms are ready for check in.",
    name: "Rumbidzai Ncube",
    role: "Lodge manager",
    context: "Nyanga",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&crop=faces&w=200&h=200&q=80",
  },
  {
    quote:
      "Our Borrowdale office still looks looked after on a Friday. They keep it that way without us having to chase anyone.",
    name: "Tafadzwa Chirwa",
    role: "Office administrator",
    context: "Borrowdale, Harare",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&crop=faces&w=200&h=200&q=80",
  },
  {
    quote:
      "They treat the Mount Pleasant house with care. I come back to a home that feels settled, not like someone has just been through it.",
    name: "Tsitsi Chikwanda",
    role: "Homeowner",
    context: "Mount Pleasant, Harare",
    image:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&crop=faces&w=200&h=200&q=80",
  },
  {
    quote:
      "At the Falls, guests mention the rooms before they mention the view. That is the standard we were after, and they hold it.",
    name: "Chiedza Dube",
    role: "Hotel supervisor",
    context: "Victoria Falls",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&crop=faces&w=200&h=200&q=80",
  },
  {
    quote:
      "We briefed them once in Bulawayo. Every visit since has matched that first handover, including the bathrooms.",
    name: "Farai Nyathi",
    role: "Lodge owner",
    context: "Bulawayo",
    image:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&crop=faces&w=200&h=200&q=80",
  },
  {
    quote:
      "Same day resets in Belgravia used to be a scramble. Now the next guest walks into a room that already looks listed.",
    name: "Lindiwe Sibanda",
    role: "Host",
    context: "Belgravia, Harare",
    image:
      "https://images.unsplash.com/photo-1611432579699-484f7990b127?auto=format&fit=crop&crop=faces&w=200&h=200&q=80",
  },
  {
    quote:
      "The team is quiet, on time, and they leave our Highlands kitchen the way I wish I left it myself.",
    name: "Kudakwashe Mutasa",
    role: "Homeowner",
    context: "Highlands, Harare",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&crop=faces&w=200&h=200&q=80",
  },
  {
    quote:
      "Clients notice the Newlands office now. Floors, washrooms, the kitchen. We stopped sending reminder messages.",
    name: "Netsai Khupe",
    role: "Practice manager",
    context: "Newlands, Harare",
    image:
      "https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?auto=format&fit=crop&crop=faces&w=200&h=200&q=80",
  },
] as const

export const principles = [
  {
    title: "Reliable service",
    copy: "The booking holds. If something changes, you hear from us before you have to ask.",
  },
  {
    title: "Attention to detail",
    copy: "Bathrooms, linens, edges and the last look before handover. The parts guests notice first.",
  },
  {
    title: "Professional team",
    copy: "Named leads, briefed once, and used to working in homes and live hospitality spaces.",
  },
  {
    title: "Flexible scheduling",
    copy: "Check in windows, after hours offices, and household routines. We plan around the space.",
  },
] as const
