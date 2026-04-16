import cottonImg from "@/assets/cotton-hero.jpg";
import guarImg from "@/assets/guar-gum-hero.jpg";
import riceImg from "@/assets/rice-hero.jpg";
import honeyImg from "@/assets/honey-hero.jpg";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  specs: ProductSpec[];
  applications: string[];
}

export const products: Product[] = [
  {
    slug: "tissues-wipes",
    title: "Wet Wipes",
    shortDescription: "Premium tissues and wet wipes for commercial and hospitality use.",
    description:
      "We supply high-quality tissues and wet wipes designed for commercial and hospitality environments. Our products are manufactured from premium raw materials, offering superior absorbency, softness, and durability. Available in bulk for restaurants, event companies, hotels, and facility management businesses.",
    image: cottonImg,
    specs: [
      { label: "Material", value: "100% Pure Cotton / Blended" },
      { label: "Absorbency", value: "≥ 25g/g" },
      { label: "Fiber Length", value: "28–32mm" },
      { label: "Whiteness", value: "≥ 80%" },
      { label: "Moisture", value: "≤ 8%" },
      { label: "Packaging", value: "Rolls, Sheets, Custom" },
    ],
    applications: ["Restaurants & Food Service", "Hotels & Hospitality", "Event Companies", "Facility Management"],
  },
  {
    slug: "guar-gum",
    title: "Guar Gum Powder",
    shortDescription: "Industrial and food-grade guar gum powder for diverse applications.",
    description:
      "We supply refined guar gum powder in both industrial and food-grade variants, sourced from premium guar beans. Our product serves multiple industries including food processing, oil drilling, textile printing, and pharmaceuticals. Consistent viscosity and purity guaranteed across all grades.",
    image: guarImg,
    specs: [
      { label: "Grades", value: "Industrial & Food Grade" },
      { label: "100 Mesh Viscosity", value: "2500–3000 cps (min), 4000–5000 cps (max)" },
      { label: "200 Mesh Viscosity", value: "2500–3000 cps (min), 6000–7000 cps (max)" },
      { label: "Moisture", value: "≤ 12%" },
      { label: "pH", value: "5.5–7.0" },
      { label: "Packaging", value: "25 kg / 50 kg bags" },
    ],
    applications: ["Food & Beverage", "Oil & Gas Drilling", "Textile & Paper", "Pharmaceuticals"],
  },
  {
    slug: "rice",
    title: "Rice",
    shortDescription: "Premium basmati and non-basmati varieties for export.",
    description:
      "We export premium long-grain basmati and non-basmati rice varieties. Our rice is sourced directly from certified farms, processed in modern mills, and undergoes rigorous quality checks. Available in bulk for wholesale and industrial buyers.",
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
    slug: "honey",
    title: "Honey",
    shortDescription: "Pure, unprocessed natural honey for food and pharma.",
    description:
      "Our honey is sourced from select apiaries, raw and unprocessed to preserve natural enzymes and nutritional value. We supply multifloral and unifloral varieties in bulk for food processing, pharmaceutical, and retail markets.",
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
