/**
 * =============================================
 *  SITE CONFIGURATION — Edit this file to
 *  change ALL text, contact info, and content
 *  on your website. No React knowledge needed!
 * =============================================
 */

export const siteConfig = {
  /**
   * BRAND
   * - name: Your company name (shown in header & footer)
   * - tagline: Short phrase shown below the name
   * - description: One-liner about your company
   */
  name: "Nextor",
  tagline: "Reliable Sourcing for Essential Goods",
  description:
    "We provide high-grade cotton tissues, guar gum, rice, and honey for global industries.",

  /**
   * CONTACT DETAILS
   * Shown on Contact page and footer
   */
  contact: {
    email: "info@nextor.com",
    phone: "+91 98765 43210",
    address: "Ahmedabad, Gujarat, India",
  },

  /**
   * SOCIAL LINKS
   * Add your URLs. Leave empty ("") to hide a link.
   */
  social: {
    linkedin: "",
    twitter: "",
    instagram: "",
  },

  /**
   * HERO SECTION (Homepage top banner)
   * - badge: Small label above the heading
   * - heading: Big main headline
   * - subheading: Supporting text below headline
   * - ctaPrimary / ctaSecondary: Button labels
   */
  hero: {
    badge: "Trusted by 500+ businesses worldwide",
    heading: "Reliable Sourcing for Essential Goods",
    subheading:
      "High-grade cotton tissues, guar gum, rice, and honey for global industries. Quality you can trust, at scale.",
    ctaPrimary: "View Products",
    ctaSecondary: "Request a Quote",
  },

  /**
   * WHY US SECTION (Homepage)
   * Three cards explaining your strengths.
   * Icons available: "Shield", "Globe", "Leaf"
   */
  whyUs: {
    heading: "Why Partner With Us",
    subheading:
      "Deep industry expertise with rigorous quality standards to deliver reliable supply chains.",
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

  /**
   * CTA BANNER (Homepage bottom)
   */
  cta: {
    heading: "Ready to Source?",
    subheading:
      "Tell us what you need. Our team will respond with pricing and specifications within 24 hours.",
    buttonText: "Request a Quote",
  },

  /**
   * ABOUT PAGE
   * - paragraphs: Array of text blocks (add/remove as needed)
   * - stats: Number cards (add/remove as needed)
   */
  about: {
    heading: "About Nextor",
    paragraphs: [
      "Nextor is a trading company specializing in the sourcing and export of essential commodities — cotton tissues, guar gum, rice, and honey. We connect quality producers with global buyers who demand consistency, traceability, and competitive pricing.",
      "Founded with a commitment to transparency, we work directly with certified farms, processing units, and manufacturing facilities. Every product we trade comes with full documentation — from origin certificates to laboratory test reports.",
      "Our network spans over 30 countries. Whether you need a single container or a long-term supply agreement, our logistics and compliance teams ensure smooth, reliable delivery to your door.",
    ],
    stats: [
      { value: "500+", label: "Clients Worldwide" },
      { value: "30+", label: "Countries Served" },
      { value: "10+", label: "Years Experience" },
    ],
  },

  /**
   * NAVIGATION LINKS
   * - label: Text shown in the menu
   * - path: URL path (must match a route in App.tsx)
   */
  nav: [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],
} as const;
