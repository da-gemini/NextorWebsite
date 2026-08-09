import guarImg from "@/assets/guar-gum-hero.jpg";
import riceImg from "@/assets/rice-hero.jpg";
import honeyImg from "@/assets/honey-hero.jpg";
import turmericImg from "@/assets/turmeric.jpg";
import jaggeryImg from "@/assets/jaggery.jpg";
import gingerImg from "@/assets/fresh-ginger.jpg";
import chilliesImg from "@/assets/green-chillies.jpg";
import pomegranateImg from "@/assets/pomegranate.jpg";
import dragonFruitImg from "@/assets/dragon-fruit.jpg";
import makhanaImg from "@/assets/makhana.jpg";
import saffronImg from "@/assets/saffron.jpg";
import cinnamonImg from "@/assets/cinnamon.jpg";
import cardamomImg from "@/assets/cardamom.jpg";
import pearlMilletImg from "@/assets/pearl-millet.jpg";
import foxtailMilletImg from "@/assets/foxtail-millet.jpg";
import fingerMilletImg from "@/assets/finger-millet.jpg";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  /** URL of the product page, e.g. "/products/turmeric" */
  slug: string;
  /** Product name shown on cards and the product page */
  title: string;
  /** Section this product appears under on the Products page */
  category: string;
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

/**
 * Order of the sections on the Products page.
 * To reorder sections, just move a name up or down in this list.
 * Every product's `category` must match one of these names.
 */
export const categoryOrder: string[] = [
  "Guar Gum",
  "Makhana",
  "Rice",
  "Spices",
  "Jaggery",
  "Turmeric",
  "Ginger",
  "Honey",
  "Fruits",
  "Chillies",
  "Millets",
];

export const products: Product[] = [
  {
    slug: "guar-gum",
    title: "Guar Gum Powder",
    category: "Guar Gum",
    shortDescription: "Industrial and food grade guar gum with consistent viscosity.",
    tagline: "Reliable Functional Ingredient for Global Industries",
    paragraphs: [
      "Derived from premium guar beans cultivated in the arid regions of India, guar gum is a versatile natural thickening and stabilizing agent widely used across multiple industries. Our guar gum is manufactured under strict quality controls to ensure consistent viscosity and performance.",
      "Available in both industrial grade and food grade, in 100 mesh and 200 mesh, with viscosity tailored to your application.",
    ],
    image: guarImg,
    specs: [
      { label: "Origin", value: "India" },
      { label: "Grades", value: "Industrial Grade, Food Grade" },
      { label: "Form", value: "Powder — 100 Mesh, 200 Mesh" },
      { label: "Viscosity (100 Mesh)", value: "2500–3000 cps; 4000–5000 cps max" },
      { label: "Viscosity (200 Mesh)", value: "2500–3000 cps; 6000–7000 cps max" },
      { label: "Packaging", value: "25kg Bags" },
      { label: "Private Label", value: "Available" },
    ],
    applications: ["Food", "Oil & Gas", "Pharmaceuticals", "Cosmetics", "Textile", "Paper"],
  },
  {
    slug: "makhana",
    title: "Makhana (Fox Nuts)",
    category: "Makhana",
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
    slug: "rice",
    title: "Rice",
    category: "Rice",
    shortDescription: "Indrayani, basmati and non-basmati varieties for export.",
    tagline: "Authentic Indian Rice, Consistent Across Every Grade",
    paragraphs: [
      "We supply a full range of Indian rice — from aromatic heritage varieties to established export grades — sourced directly from certified farms, processed in modern mills, and subjected to rigorous quality checks.",
      "Indrayani rice is one of Maharashtra's most cherished traditional varieties, cultivated for generations in the fertile valleys of the Sahyadri mountain range. This medium-grain rice is renowned for its naturally rich aroma, soft texture, and slightly sticky consistency after cooking. While a staple in western India, authentic Indrayani remains relatively unknown in many international markets, making it a unique opportunity for retailers and distributors.",
      "Alongside Indrayani, we export premium long-grain basmati (1121) and non-basmati varieties such as IR-64 and Sona Masoori, available in bulk for wholesale and industrial buyers with packaging and grading matched to your specifications.",
    ],
    image: riceImg,
    specs: [
      { label: "Varieties", value: "Indrayani, Basmati 1121, IR-64, Sona Masoori" },
      { label: "Origin", value: "India (Indrayani: Sahyadri Valley, Maharashtra)" },
      { label: "Grain Length", value: "≥ 8.3mm (Basmati)" },
      { label: "Moisture", value: "≤ 14%" },
      { label: "Broken", value: "2%, 5%, 10%, 25%" },
      { label: "Packaging", value: "5 / 10 / 25 / 50 kg bags" },
      { label: "Private Label", value: "Available" },
    ],
    applications: ["Wholesale Distribution", "Food Service & HORECA", "Retail Private Label", "Grocery Chains"],
  },
  {
    slug: "saffron",
    title: "Saffron",
    category: "Spices",
    shortDescription: "Hand-picked saffron threads with deep colour and aroma.",
    tagline: "The World's Most Precious Spice",
    paragraphs: [
      "Our saffron is hand-picked and carefully dried to preserve its deep crimson colour, distinctive aroma, and high colouring strength. Each lot is sorted to remove style and floral waste, delivering pure stigma threads suited to premium culinary and retail use.",
      "Supplied in sealed, light-protected packaging to maintain potency through international transit.",
    ],
    image: saffronImg,
    specs: [
      { label: "Form", value: "Whole Threads" },
      { label: "Grade", value: "Premium, All-Red Stigma" },
      { label: "Moisture", value: "Below 10%" },
      { label: "Packaging", value: "Grams to Bulk, Private Label" },
    ],
    applications: ["Gourmet Retail", "Restaurants", "Confectionery", "Nutraceuticals"],
  },
  {
    slug: "cinnamon",
    title: "Cinnamon",
    category: "Spices",
    shortDescription: "Aromatic cinnamon in quills, cut and powder form.",
    tagline: "Warm, Sweet and Naturally Aromatic",
    paragraphs: [
      "Our cinnamon is sourced from established growing regions and processed to retain its natural oil content and warm, sweet aroma. Available as whole quills, cut pieces, or finely milled powder to suit food manufacturing, spice blending, and retail packing.",
    ],
    image: cinnamonImg,
    specs: [
      { label: "Forms", value: "Quills, Cut, Powder" },
      { label: "Moisture", value: "Controlled" },
      { label: "Volatile Oil", value: "Available upon request" },
      { label: "Packaging", value: "Bulk Bags, Retail Packs, Private Label" },
    ],
    applications: ["Spice Blends", "Bakery", "Beverages", "Retail"],
  },
  {
    slug: "cardamom",
    title: "Cardamom",
    category: "Spices",
    shortDescription: "Green cardamom pods graded for size and aroma.",
    tagline: "The Queen of Spices",
    paragraphs: [
      "Green cardamom from India is prized for its intense fragrance and sweet, complex flavour. Our pods are graded for size, colour, and oil content, and packed to preserve freshness through export.",
      "Available in whole pods, seeds, and ground form for food manufacturers, spice houses, and retail brands.",
    ],
    image: cardamomImg,
    specs: [
      { label: "Origin", value: "India" },
      { label: "Forms", value: "Whole Pods, Seeds, Powder" },
      { label: "Colour", value: "Natural Green" },
      { label: "Grades", value: "Multiple Sizes (mm) Available" },
      { label: "Packaging", value: "Bulk and Retail" },
    ],
    applications: ["Spice Industry", "Bakery", "Beverages", "Retail"],
  },
  {
    slug: "jaggery",
    title: "Organic Jaggery",
    category: "Jaggery",
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
    slug: "turmeric",
    title: "Organic Turmeric",
    category: "Turmeric",
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
    slug: "ginger",
    title: "Ginger",
    category: "Ginger",
    shortDescription: "Export-grade fresh ginger and finely milled dry ginger powder.",
    tagline: "Freshness Straight from Indian Farms",
    paragraphs: [
      "India's fertile soils and favourable climate produce ginger with exceptional aroma, pungency, and flavour. Our fresh ginger is harvested at optimal maturity and carefully selected to meet export quality standards, ensuring freshness throughout the supply chain.",
      "We also supply dry ginger powder prepared from carefully selected mature roots. Hygienically processed and finely milled, it offers concentrated flavour and excellent shelf stability for food manufacturing, spice blends, beverages, and nutraceutical applications.",
    ],
    image: gingerImg,
    specs: [
      { label: "Origin", value: "India" },
      { label: "Forms", value: "Fresh Ginger, Dry Ginger Powder" },
      { label: "Size (Fresh)", value: "Export Grades Available" },
      { label: "Powder", value: "Fine Milled, Controlled Moisture" },
      { label: "Shelf Life", value: "Long with Proper Storage" },
      { label: "Packaging", value: "Cartons, Mesh Bags, Bulk & Private Label" },
    ],
    applications: ["Retail", "Restaurants", "Food Processing", "Spice Industry", "Beverages"],
  },
  {
    slug: "honey",
    title: "Honey",
    category: "Honey",
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
  {
    slug: "pomegranate",
    title: "Pomegranate",
    category: "Fruits",
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
    category: "Fruits",
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
    slug: "green-chillies",
    title: "Green Chillies (G4)",
    category: "Chillies",
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
    slug: "pearl-millet",
    title: "Pearl Millet (Bajra)",
    category: "Millets",
    shortDescription: "Nutrient-dense bajra grain, whole or milled to flour.",
    tagline: "A Resilient Ancient Grain for Modern Diets",
    paragraphs: [
      "Pearl millet, known in India as bajra, is a naturally gluten-free whole grain rich in protein, iron, and dietary fibre. Grown in dryland regions with minimal irrigation, it is one of the most sustainable cereals available.",
      "We supply cleaned, sortex-grade grain as well as freshly milled flour for bakery, health food, and retail applications.",
    ],
    image: pearlMilletImg,
    specs: [
      { label: "Origin", value: "India" },
      { label: "Forms", value: "Whole Grain, Flour" },
      { label: "Purity", value: "Sortex Cleaned" },
      { label: "Moisture", value: "Below 12%" },
      { label: "Packaging", value: "Bulk and Retail, Private Label" },
    ],
    applications: ["Health Foods", "Bakery", "Retail", "Food Processing"],
  },
  {
    slug: "foxtail-millet",
    title: "Foxtail Millet",
    category: "Millets",
    shortDescription: "Low glycaemic index millet with a light, nutty flavour.",
    tagline: "Light, Nutty and Naturally Gluten-Free",
    paragraphs: [
      "Foxtail millet is valued for its low glycaemic index, high fibre content, and delicate nutty taste. It cooks quickly and works well as a rice substitute, in breakfast cereals, and in health-focused packaged foods.",
      "Supplied cleaned and polished to uniform grade, with milled options available on request.",
    ],
    image: foxtailMilletImg,
    specs: [
      { label: "Origin", value: "India" },
      { label: "Forms", value: "Whole Grain, Rava, Flour" },
      { label: "Purity", value: "Sortex Cleaned" },
      { label: "Moisture", value: "Below 12%" },
      { label: "Packaging", value: "Bulk and Retail, Private Label" },
    ],
    applications: ["Health Foods", "Breakfast Cereals", "Retail", "Food Processing"],
  },
  {
    slug: "finger-millet",
    title: "Finger Millet (Ragi)",
    category: "Millets",
    shortDescription: "Calcium-rich ragi grain and flour for health foods.",
    tagline: "One of the Richest Plant Sources of Calcium",
    paragraphs: [
      "Finger millet, or ragi, is exceptionally rich in calcium and iron, making it a staple of infant nutrition and health foods across India. Its earthy flavour suits porridges, flatbreads, baked goods, and malted beverages.",
      "Available as whole grain or stone-ground flour, cleaned to export standards.",
    ],
    image: fingerMilletImg,
    specs: [
      { label: "Origin", value: "India" },
      { label: "Forms", value: "Whole Grain, Flour" },
      { label: "Purity", value: "Sortex Cleaned" },
      { label: "Moisture", value: "Below 12%" },
      { label: "Packaging", value: "Bulk and Retail, Private Label" },
    ],
    applications: ["Health Foods", "Infant Nutrition", "Bakery", "Retail"],
  },
];

/** Products grouped into sections, in `categoryOrder` order. */
export const productsByCategory = categoryOrder
  .map((category) => ({ category, items: products.filter((p) => p.category === category) }))
  .filter((group) => group.items.length > 0);
