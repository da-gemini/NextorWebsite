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
  tagline: "Bringing the Best of India to North America",
  description:
    "A Canadian sourcing and import company connecting North American businesses with premium Indian agricultural products, food ingredients, and specialty commodities.",

  /**
   * CONTACT DETAILS
   * Shown on Contact page and footer
   */
  contact: {
    email: "nextor.enterprises@gmail.com",
    address: "Ontario, Canada",
    /**
     * Formspree endpoint — quote requests are sent here and forwarded
     * to your inbox. Replace with your own Formspree URL if needed.
     */
    formEndpoint: "https://formspree.io/f/mpqklprg",
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
    badge: "Canadian business. Trusted Indian supply network.",
    heading: "Bringing the Best of India to North America",
    subheading:
      "Premium agricultural products, food ingredients, and specialty commodities — sourced directly from trusted Indian farmers, processors, and manufacturers.",
    ctaPrimary: "View Products",
    ctaSecondary: "Request a Quote",
  },

  /**
   * WHY US SECTION (Homepage)
   * Cards explaining your strengths.
   * Icons available: "Shield", "Globe", "Leaf", "Handshake",
   * "MessageSquare", "Settings", "Boxes", "Tag"
   */
  whyUs: {
    heading: "What Sets Us Apart",
    subheading:
      "Many importers source through multiple intermediaries. We believe successful international trade begins with trusted relationships.",
    items: [
      {
        title: "Reliable Supply Partners",
        description:
          "We collaborate with carefully selected farms, processing facilities, and manufacturers that consistently meet our quality expectations.",
        icon: "Handshake" as const,
      },
      {
        title: "Quality-Driven Sourcing",
        description:
          "Every order is sourced to your specifications — grades, packaging, moisture levels, certifications, or private labeling.",
        icon: "Shield" as const,
      },
      {
        title: "Transparent Communication",
        description:
          "You work with a Canadian company that understands your market and stays responsive from first inquiry through to delivery.",
        icon: "MessageSquare" as const,
      },
      {
        title: "Tailored Procurement",
        description:
          "Need a product that isn't listed here? Our supplier network helps us source to your specifications and budget.",
        icon: "Settings" as const,
      },
      {
        title: "Flexible Quantities",
        description:
          "From a first trial shipment to a long-term supply agreement, our sourcing solutions grow with your business.",
        icon: "Boxes" as const,
      },
      {
        title: "Competitive Pricing",
        description:
          "Direct relationships with producers and manufacturers help us optimize costs while maintaining quality and reliability.",
        icon: "Tag" as const,
      },
    ],
  },

  /**
   * "LOOKING FOR SOMETHING ELSE" SECTION
   * Shown on the Products page and the About page.
   */
  sourcing: {
    heading: "Looking for Something Else?",
    paragraphs: [
      "Our website highlights only a selection of the products we source.",
      "Through our extensive network of trusted farmers, processors, and manufacturers across India, we can source a wide variety of agricultural commodities, food ingredients, spices, fresh produce, industrial raw materials, and private-label products.",
      "If you're looking for a specific product, grade, packaging format, or custom sourcing solution, we'd be happy to discuss your requirements.",
    ],
    closing:
      "Tell us what you need — we'll help you source the right product at the right quality and competitive pricing.",
    buttonText: "Tell Us What You Need",
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
   * - subheading: Italic line under the page title
   * - paragraphs: Array of text blocks (add/remove as needed)
   * - mission: Closing mission statement
   */
  about: {
    heading: "About Nextor Enterprises",
    subheading: "Bringing the Best of India to North America",
    paragraphs: [
      "Nextor Enterprises is a Canadian sourcing and import company dedicated to connecting North American businesses with premium agricultural products, food ingredients, and specialty commodities from India.",
      "We specialize in sourcing authentic products directly from trusted farmers, processors, and manufacturing partners across India, ensuring our customers receive consistent quality, competitive pricing, and dependable supply.",
      "Our focus goes beyond simply importing products — we build long-term relationships with reliable producers who share our commitment to quality, traceability, and ethical business practices. Every supplier is carefully selected based on their manufacturing capabilities, quality standards, and ability to meet international market requirements.",
      "As a Canadian company, we understand the expectations of businesses in North America. We work closely with our supplier network to ensure products are sourced according to your specifications, comply with applicable import requirements, and arrive with the documentation needed for international trade.",
      "Whether you're a wholesaler, distributor, retailer, food manufacturer, or importer, Nextor Enterprises serves as your trusted sourcing partner — helping you access authentic Indian products without the uncertainty of dealing with unfamiliar overseas suppliers.",
      "From sourcing and quality coordination to logistics support and documentation, we strive to make international procurement simple, transparent, and reliable.",
    ],
    mission: {
      heading: "Our Mission",
      text: "To become a trusted bridge between India's exceptional producers and North American businesses by delivering authentic products, dependable sourcing, and long-term partnerships built on transparency and trust.",
    },
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
