import guarImg from "@/assets/guar-gum-hero.jpg";
import riceImg from "@/assets/rice-hero.jpg";
import honeyImg from "@/assets/honey-hero.jpg";
import indrayaniImg from "@/assets/indrayani-rice.jpg";
import turmericImg from "@/assets/turmeric.jpg";
import jaggeryImg from "@/assets/jaggery.jpg";
import freshGingerImg from "@/assets/fresh-ginger.jpg";
import dryGingerImg from "@/assets/dry-ginger-powder.jpg";
import chilliesImg from "@/assets/green-chillies.jpg";
import pomegranateImg from "@/assets/pomegranate.jpg";
import dragonFruitImg from "@/assets/dragon-fruit.jpg";
import makhanaImg from "@/assets/makhana.jpg";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  /** URL of the product page, e.g. "/products/turmeric" */
  slug: string;
  /** Product name shown on cards and the product page */
  title: string;
  /** Short line under the name on the product card */
  shortDescription: string;
  /** Italic headline shown at the top of the product page */
  tagline: string;
  /** Body text on the product page — one entry per paragraph */
  paragraphs: string[];
  image: string;
  /** Rows of the Technical Specifications table */
  specs: ProductSpec[];
  /** Tags shown under "Applications" */
  applications: string[];
}

export const products: Product[] = [
  {
    slug: "indrayani-rice",
    title: "Indrayani Rice",
    shortDescription: "Aromatic medium-grain heritage rice from the Sahyadri Valley.",
    tagline: "Authentic Heritage from the Sahyadri Valley",
    paragraphs: [
      "Indrayani rice is one of Maharashtra's most cherished traditional rice varieties, cultivated for generations in the fertile valleys of the Sahyadri mountain range. Grown by farming communities using time-honored agricultural practices, this medium-grain rice is renowned for its naturally rich aroma, soft texture, and slightly sticky consistency after cooking.",
      "While it is a staple in western India, authentic Indrayani rice remains relatively unknown in many international markets, making it a unique opportunity for retailers and distributors looking to introduce consumers to genuine regional Indian cuisine.",
      "At Nextor Enterprises, we work directly with trusted growers and milling partners to deliver consistent quality while preserving the authenticity that makes Indrayani truly special.",
    ],
    image: indrayaniImg,
    specs: [
      { label: "Origin", value: "Sahyadri Valley, Maharashtra, India" },
      { label: "Type", value: "Medium Grain Aromatic Rice" },
      { label: "Moisture", value: "Below 14%" },
      { label: "Broken", value: "5%, 10%, 25%" },
      { label: "Packaging", value: "5kg, 10kg, 25kg, 50kg" },
      { label: "Private Label", value: "Available" },
    ],
    applications: ["Retail", "Food Service", "Restaurants", "Hospitality", "Grocery Chains"],
  },
  {
    slug: "rice",
    title: "Rice",
    shortDescription: "Premium basmati and non-basmati varieties for export.",
    tagline: "Consistent Quality Across Every Grade",
    paragraphs: [
      "We export premium long-grain basmati and non-basmati rice varieties. Our rice is sourced directly from certified farms, processed in modern mills, and undergoes rigorous quality checks.",
      "Available in bulk for wholesale and industrial buyers, with packaging and grading matched to your specifications.",
    ],
    image: riceImg,
    specs: [
      { label: "Variety", value: "Basmati 1121, IR-64, Sona Masoori" },
      { label: "Grain Length", value: "≥ 8.3mm (Basmati)" },
      { label: "Moisture", value: "≤ 13%" },
      { label: "Broken", value: "≤ 2%" },
      { label: "Aroma", value: "Natural, Extra Long" },
      { label: "Packaging", value: "10 / 25 / 50 kg bags" },
    ],
    applications: ["Wholesale Distribution", "Food Service & HORECA", "Retail Private Label"],
  },
  {
    slug: "turmeric",
    title: "Organic Turmeric",
    shortDescription: "Vibrant organic turmeric in whole finger and powder form.",
    tagline: "Nature's Golden Treasure",
    paragraphs: [
      "For centuries, India has been the world's leading producer of turmeric, celebrated for its vibrant colour, distinctive aroma, and numerous culinary and wellness applications. Our organic turmeric is cultivated without synthetic pesticides or chemical fertilizers, allowing the rhizomes to develop their naturally high quality and rich flavour.",
      "Every batch is carefully harvested, cured, dried, and processed to preserve its colour and active compounds. Whether supplied as whole fingers or finely ground powder, our turmeric delivers consistency, purity, and export-quality standards.",
    ],
    image: turmericImg,
    specs: [
      { label: "Origin", value: "India" },
      { label: "Forms", value: "Whole Fingers, Powder" },
      { label: "Curcumin Content", value: "Available upon request" },
      { label: "Moisture", value: "Below 10%" },
      { label: "Colour", value: "Bright Golden Yellow" },
      { label: "Organic Quality", value: "Available" },
      { label: "Packaging", value: "Bulk Bags, Retail Packs, Private Label" },
    ],
    applications: ["Food Industry", "Spice Blends", "Health Foods", "Nutraceuticals"],
  },
  {
    slug: "jaggery",
    title: "Organic Jaggery",
    shortDescription: "Traditionally made jaggery in powder, cube, and block form.",
    tagline: "Traditional Sweetness Crafted Naturally",
    paragraphs: [
      "Made from freshly extracted sugarcane juice using traditional processing methods, jaggery has been enjoyed in India for centuries as a wholesome alternative to refined sugar. Its rich caramel flavour and natural mineral content make it increasingly popular among health-conscious consumers worldwide.",
      "Our jaggery is produced with careful attention to purity and consistency while retaining its authentic taste and nutritional value.",
    ],
    image: jaggeryImg,
    specs: [
      { label: "Origin", value: "India" },
      { label: "Forms", value: "Powder, Cubes, Blocks" },
      { label: "Colour", value: "Golden Brown" },
      { label: "Moisture", value: "Controlled" },
      { label: "Packaging", value: "Bulk and Retail" },
      { label: "Organic Quality", value: "Available" },
    ],
    applications: ["Food Manufacturing", "Bakery", "Confectionery", "Retail"],
  },
  {
    slug: "fresh-ginger",
    title: "Fresh Ginger",
    shortDescription: "Export-grade fresh ginger with exceptional aroma and pungency.",
    tagline: "Freshness Straight from Indian Farms",
    paragraphs: [
      "India's fertile soils and favourable climate produce ginger with exceptional aroma, pungency, and flavour. Our fresh ginger is harvested at optimal maturity and carefully selected to meet export quality standards, ensuring freshness throughout the supply chain.",
      "Ideal for fresh produce distributors, supermarkets, food processors, and restaurants.",
    ],
    image: freshGingerImg,
    specs: [
      { label: "Origin", value: "India" },
      { label: "Product", value: "Fresh Ginger" },
      { label: "Size", value: "Export Grades Available" },
      { label: "Shelf Life", value: "Long with Proper Storage" },
      { label: "Packaging", value: "Cartons and Mesh Bags" },
    ],
    applications: ["Retail", "Restaurants", "Food Processing"],
  },
  {
    slug: "dry-ginger-powder",
    title: "Dry Ginger Powder",
    shortDescription: "Finely milled dry ginger powder with concentrated flavour.",
    tagline: "Naturally Processed for Maximum Aroma",
    paragraphs: [
      "Prepared from carefully selected mature ginger roots, our dry ginger powder offers concentrated flavour and excellent shelf stability. Hygienically processed and finely milled, it is suitable for food manufacturing, spice blends, beverages, and nutraceutical applications.",
    ],
    image: dryGingerImg,
    specs: [
      { label: "Origin", value: "India" },
      { label: "Form", value: "Fine Powder" },
      { label: "Moisture", value: "Controlled" },
      { label: "Packaging", value: "Bulk and Private Label" },
    ],
    applications: ["Spice Industry", "Beverages", "Health Products"],
  },
  {
    slug: "green-chillies",
    title: "Green Chillies (G4)",
    shortDescription: "Crisp G4 green chillies with medium pungency and long shelf life.",
    tagline: "Fresh, Vibrant and Export Ready",
    paragraphs: [
      "The G4 variety of green chilli is highly regarded for its attractive appearance, crisp texture, medium pungency, and extended shelf life. Cultivated under favourable climatic conditions, these chillies maintain freshness and vibrant colour throughout transportation.",
      "Suitable for fresh produce distributors, supermarkets, and food service industries.",
    ],
    image: chilliesImg,
    specs: [
      { label: "Variety", value: "G4" },
      { label: "Origin", value: "India" },
      { label: "Colour", value: "Bright Green" },
      { label: "Shelf Life", value: "Export Quality" },
      { label: "Packaging", value: "Cartons" },
    ],
    applications: ["Fresh Retail", "Restaurants", "Food Service"],
  },
  {
    slug: "pomegranate",
    title: "Pomegranate",
    shortDescription: "Export-grade Indian pomegranates with deep red arils.",
    tagline: "Premium Indian Pomegranates with Exceptional Quality",
    paragraphs: [
      "India produces some of the world's finest pomegranates, appreciated for their deep red arils, natural sweetness, and excellent juice content. Our export-grade fruits are carefully sorted and packed to maintain freshness and visual appeal throughout international transportation.",
    ],
    image: pomegranateImg,
    specs: [
      { label: "Origin", value: "India" },
      { label: "Variety", value: "Available upon Request" },
      { label: "Colour", value: "Deep Red" },
      { label: "Shelf Life", value: "Excellent" },
      { label: "Packaging", value: "Export Cartons" },
    ],
    applications: ["Retail", "Wholesale", "Juice Industry"],
  },
  {
    slug: "dragon-fruit",
    title: "Dragon Fruit",
    shortDescription: "Export-quality white and red flesh dragon fruit.",
    tagline: "Exotic Fruit Grown with Modern Farming Practices",
    paragraphs: [
      "Dragon fruit has become one of the fastest-growing premium fruits in international markets. Our export-quality dragon fruits are cultivated using modern agricultural techniques to ensure excellent sweetness, vibrant appearance, and consistent quality.",
    ],
    image: dragonFruitImg,
    specs: [
      { label: "Origin", value: "India" },
      { label: "Varieties", value: "White Flesh, Red Flesh" },
      { label: "Packaging", value: "Export Cartons" },
      { label: "Shelf Life", value: "Good Export Quality" },
    ],
    applications: ["Retail Chains", "Fresh Produce Markets", "Hospitality"],
  },
  {
    slug: "makhana",
    title: "Makhana (Fox Nuts)",
    shortDescription: "Premium graded fox nuts — a naturally gluten-free superfood.",
    tagline: "India's Ancient Superfood for Modern Consumers",
    paragraphs: [
      "Harvested from lotus ponds and traditionally processed by skilled artisans, makhana has been consumed in India for centuries. Naturally gluten-free, low in fat, and rich in plant-based nutrients, it has gained worldwide recognition as a premium healthy snack.",
      "Our makhana is carefully graded for uniform size, crispness, and premium appearance, making it ideal for retail, food processing, and private label brands.",
    ],
    image: makhanaImg,
    specs: [
      { label: "Origin", value: "India" },
      { label: "Product", value: "Premium Fox Nuts" },
      { label: "Grades", value: "Multiple Sizes Available" },
      { label: "Moisture", value: "Controlled" },
      { label: "Packaging", value: "Bulk and Retail" },
      { label: "Private Label", value: "Available" },
    ],
    applications: ["Healthy Snacks", "Food Processing", "Retail"],
  },
  {
    slug: "guar-gum",
    title: "Guar Gum",
    shortDescription: "Natural thickening and stabilizing agent with consistent viscosity.",
    tagline: "Reliable Functional Ingredient for Global Industries",
    paragraphs: [
      "Derived from premium guar beans cultivated in the arid regions of India, guar gum is a versatile natural thickening and stabilizing agent widely used across multiple industries. Our guar gum is manufactured under strict quality controls to ensure consistent viscosity and performance.",
    ],
    image: guarImg,
    specs: [
      { label: "Origin", value: "India" },
      { label: "Product Forms", value: "Powder" },
      { label: "Viscosity", value: "4000–5000 cps, 5000–6000 cps, 6000–7000 cps" },
      { label: "Packaging", value: "25kg Bags" },
      { label: "Private Label", value: "Available" },
    ],
    applications: ["Food", "Oil & Gas", "Pharmaceuticals", "Cosmetics", "Textile", "Paper"],
  },
  {
    slug: "honey",
    title: "Honey",
    shortDescription: "Pure, unprocessed natural honey for food and pharma.",
    tagline: "Raw and Unprocessed, Straight from Select Apiaries",
    paragraphs: [
      "Our honey is sourced from select apiaries, raw and unprocessed to preserve natural enzymes and nutritional value.",
      "We supply multifloral and unifloral varieties in bulk for food processing, pharmaceutical, and retail markets.",
    ],
    image: honeyImg,
    specs: [
      { label: "Type", value: "Multifloral / Unifloral" },
      { label: "Moisture", value: "≤ 20%" },
      { label: "HMF", value: "≤ 40 mg/kg" },
      { label: "Diastase", value: "≥ 8 DN" },
      { label: "Color", value: "Light Amber to Dark Amber" },
      { label: "Packaging", value: "Drums (290 kg), Jars" },
    ],
    applications: ["Food Processing", "Pharmaceuticals", "Retail & Private Label"],
  },
];
