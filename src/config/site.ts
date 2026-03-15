/**
 * ============================================
 * SITE CONFIGURATION
 * ============================================
 * Edit this file to customize your website.
 * All company info, contact details, and content
 * strings are centralized here for easy updates.
 */

export const siteConfig = {
  // ---- Brand ----
  name: "Nextor",
  tagline: "Reliable Sourcing for Essential Goods",
  description:
    "We provide high-grade cotton tissues, guar gum, rice, and honey for global industries. Quality you can trust, at scale.",

  // ---- Contact Details ----
  contact: {
    email: "info@nextor.com",
    phone: "+91 98765 43210",
    address: "Ahmedabad, Gujarat, India",
  },

  // ---- Social Links (add your URLs) ----
  social: {
    linkedin: "",
    twitter: "",
    instagram: "",
  },

  // ---- Hero Section ----
  hero: {
    badge: "Trusted by 500+ businesses worldwide",
    heading: "Reliable Sourcing for Essential Goods",
    subheading:
      "High-grade cotton tissues, guar gum, rice, and honey for global industries. Quality you can trust, at scale.",
    ctaPrimary: "View Products",
    ctaSecondary: "Request a Quote",
  },

  // ---- Why Us Section ----
  whyUs: {
    heading: "Why Partner With Us",
    subheading:
      "We combine deep industry expertise with rigorous quality standards to deliver reliable supply chains.",
    items: [
      {
        title: "Quality Assured",
        description:
          "Every batch tested against international standards. Certificates of analysis with every shipment.",
        icon: "Shield" as const,
      },
      {
        title: "Global Reach",
        description:
          "Exports to 30+ countries across Asia, Europe, Africa, and the Americas with reliable logistics.",
        icon: "Globe" as const,
      },
      {
        title: "Sustainable Sourcing",
        description:
          "Direct partnerships with certified farms ensure traceability and ethical supply chain practices.",
        icon: "Leaf" as const,
      },
    ],
  },

  // ---- CTA Section ----
  cta: {
    heading: "Ready to Source?",
    subheading:
      "Tell us what you need. Our team will respond with pricing and specifications within 24 hours.",
    buttonText: "Request a Quote",
  },

  // ---- About Page ----
  about: {
    heading: "About Nextor",
    paragraphs: [
      "Nextor is a trading company specializing in the sourcing and export of essential commodities — cotton tissues, guar gum, rice, and honey. We connect quality producers with global buyers who demand consistency, traceability, and competitive pricing.",
      "Founded with a commitment to transparency, we work directly with certified farms, processing units, and manufacturing facilities. Every product we trade comes with full documentation — from origin certificates to laboratory test reports.",
      "Our network spans over 30 countries. Whether you need a single container or a long-term supply agreement, our logistics and compliance teams ensure smooth, reliable delivery to your door.",
      "We believe in building long-term partnerships, not one-time transactions. That means we invest in understanding your requirements, your industry standards, and your timelines — so you can focus on your business while we handle the supply.",
    ],
    stats: [
      { value: "500+", label: "Clients Worldwide" },
      { value: "30+", label: "Countries Served" },
      { value: "10+", label: "Years Experience" },
    ],
  },

  // ---- Navigation ----
  nav: [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],
} as const;
