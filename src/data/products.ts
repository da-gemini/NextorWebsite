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
    slug: "cotton-tissues",
    title: "Cotton Tissues",
    shortDescription: "Premium absorbent cotton for medical and personal care.",
    description:
      "Our cotton tissues are manufactured from high-grade, long-staple raw cotton. They are processed to meet pharmaceutical and cosmetic standards, offering superior absorbency, softness, and purity. Available in rolls, sheets, and custom formats for industrial buyers.",
    image: cottonImg,
    specs: [
      { label: "Material", value: "100% Pure Cotton" },
      { label: "Absorbency", value: "≥ 25g/g" },
      { label: "Fiber Length", value: "28–32mm (Long Staple)" },
      { label: "Whiteness", value: "≥ 80%" },
      { label: "Moisture", value: "≤ 8%" },
      { label: "Packaging", value: "Rolls, Sheets, Custom" },
    ],
    applications: ["Medical & Surgical", "Personal Care & Cosmetics", "Industrial Wiping"],
  },
  {
    slug: "guar-gum",
    title: "Guar Gum",
    shortDescription: "Industrial-grade thickening agent for diverse applications.",
    description:
      "We supply refined and fast-hydrating guar gum powder sourced from premium guar beans. Our product serves multiple industries including food processing, oil drilling, textile printing, and pharmaceuticals. Consistent viscosity and purity guaranteed.",
    image: guarImg,
    specs: [
      { label: "Viscosity", value: "5000–5500 cps (1% solution)" },
      { label: "Moisture", value: "≤ 12%" },
      { label: "Granulation", value: "200 mesh (95% through)" },
      { label: "pH", value: "5.5–7.0" },
      { label: "Protein", value: "≤ 5%" },
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
