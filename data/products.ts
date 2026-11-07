export interface Product {
  id: string;
  name: string;
  subName: string;
  price: string;
  description: string;
  folderPath: string;
  themeColor: string;
  gradient: string;
  features: string[];
  stats: { label: string; val: string }[];
  section1: { title: string; subtitle: string };
  section2: { title: string; subtitle: string };
  section3: { title: string; subtitle: string };
  section4: { title: string; subtitle: string };
  detailsSection: { title: string; description: string; imageAlt: string };
  freshnessSection: { title: string; description: string };
  buyNowSection: {
    price: string;
    unit: string;
    processingParams: string[];
    deliveryPromise: string;
    returnPolicy: string;
  };
}

export const products: Product[] = [
  {
    id: "clive",
    name: "Clive Christian",
    subName: "Regal. Rare. Iconic.",
    price: "€395",
    description: "Extrait-level luxury — opulent floral heart — ambered woods",
    folderPath: "/images/clive",
    themeColor: "#D8B36A",
    gradient: "linear-gradient(135deg, #0B0B0F 0%, #D8B36A 120%)",
    features: ["Extrait-level luxury", "Opulent floral heart", "Ambered woods"],
    stats: [
      { label: "Concentration", val: "Extrait" },
      { label: "Longevity", val: "12h+" },
      { label: "Aura", val: "Gold" }
    ],
    section1: { title: "Clive Christian.", subtitle: "Regal. Rare. Iconic." },
    section2: { title: "A crown in a bottle.", subtitle: "Sparkling citrus opens the ceremony, then florals bloom with velvet confidence." },
    section3: { title: "A signature that lingers.", subtitle: "Amber, woods, and vanilla settle like tailored elegance on skin." },
    section4: { title: "Luxury you don’t explain.", subtitle: "You just enter the room—and it’s decided." },
    detailsSection: {
      title: "The Royal Composition",
      description:
        "A perfume crafted like high jewelry—precise, luminous, and unapologetically rich. Expect an opening that feels bright and polished, a heart that blooms in refined florals, and a base that glows with ambered woods and soft vanilla warmth. Every detail is designed to feel expensive, cinematic, and timeless.",
      imageAlt: "Clive Christian Details"
    },
    freshnessSection: {
      title: "Crafted for Presence",
      description:
        "This is not a loud scent—it’s controlled power. A modern luxury structure: bright top notes, a smooth floral core, and a long, warm base that stays close to the skin but refuses to disappear. The result is a fragrance that feels like status without noise."
    },
    buyNowSection: {
      price: "€395",
      unit: "per 50ml bottle",
      processingParams: ["Extrait Concentration", "Luxury Glass", "Collector Presentation"],
      deliveryPromise: "Delivered in premium protective packaging. Signature-ready on arrival.",
      returnPolicy: "If it arrives damaged, instant replacement. No questions asked."
    }
  },
  {
    id: "roja",
    name: "Roja Parfums",
    subName: "Bright. Addictive. Airborne.",
    price: "€285",
    description: "Citrus-aromatic brilliance — refined depth — modern prestige",
    folderPath: "/images/roja",
    themeColor: "#3FE3D1",
    gradient: "linear-gradient(135deg, #041012 0%, #3FE3D1 130%)",
    features: ["Citrus-aromatic brilliance", "Refined depth", "Modern prestige"],
    stats: [
      { label: "Mood", val: "Fresh Luxe" },
      { label: "Projection", val: "Strong" },
      { label: "Vibe", val: "Elite" }
    ],
    section1: { title: "Roja Parfums.", subtitle: "Bright. Addictive. Airborne." },
    section2: { title: "Citrus cut like crystal.", subtitle: "Grapefruit energy with a clean, expensive sparkle." },
    section3: { title: "Depth without heaviness.", subtitle: "Aromatic greens and refined woods keep it sharp and magnetic." },
    section4: { title: "The compliment machine.", subtitle: "Fresh, rare, and impossible to ignore." },
    detailsSection: {
      title: "Precision in Motion",
      description:
        "A scent that feels like a tailored white shirt with a private jet behind it. Bright citrus in the opening, airy aromatics through the heart, and a refined base that adds longevity without turning sweet or dense. Clean luxury, engineered.",
      imageAlt: "Roja Parfums Details"
    },
    freshnessSection: {
      title: "Built for Modern Air",
      description:
        "Designed for presence in motion—office, evening, travel. It stays clean, never turns muddy, and keeps a bright signature even after hours. The structure is deliberately modern: sparkle up top, clarity in the middle, and a smooth base that carries."
    },
    buyNowSection: {
      price: "€285",
      unit: "per 50ml bottle",
      processingParams: ["Citrus-Aromatic", "High Projection", "Luxury Presentation"],
      deliveryPromise: "Ships fast with protective packaging. Ready for gifting.",
      returnPolicy: "Not satisfied? Easy return within 14 days, unopened."
    }
  },
  {
    id: "bleu",
    name: "Bleu de Chanel Parfum",
    subName: "Night. Clean. Powerful.",
    price: "€165",
    description: "Deep aromatic freshness — polished woods — legendary signature",
    folderPath: "/images/bleu",
    themeColor: "#2B57FF",
    gradient: "linear-gradient(135deg, #050A18 0%, #2B57FF 140%)",
    features: ["Deep aromatic freshness", "Polished woods", "Legendary signature"],
    stats: [
      { label: "Style", val: "Timeless" },
      { label: "Wear", val: "Day/Night" },
      { label: "Signature", val: "Blue" }
    ],
    section1: { title: "Bleu de Chanel.", subtitle: "Night. Clean. Powerful." },
    section2: { title: "Freshness with authority.", subtitle: "Citrus sparks, then aromatics sharpen the silhouette." },
    section3: { title: "Smooth woods. Zero effort.", subtitle: "A refined base that feels expensive and composed." },
    section4: { title: "The safe option that wins.", subtitle: "It’s popular for a reason." },
    detailsSection: {
      title: "The Blue Signature",
      description:
        "A modern classic built for confidence: bright opening, aromatic clarity, then woods that stay smooth and elegant. It’s clean without being boring, deep without being heavy—perfect for daily wear and effortless nights.",
      imageAlt: "Bleu de Chanel Details"
    },
    freshnessSection: {
      title: "Clean, Then Deep",
      description:
        "The magic is the balance: fresh top notes that stay crisp, and a base that slowly warms into polished woods. It performs without shouting. The kind of fragrance that makes people lean in, not step back."
    },
    buyNowSection: {
      price: "€165",
      unit: "per 100ml bottle",
      processingParams: ["Parfum Concentration", "Aromatic Woods", "Iconic Profile"],
      deliveryPromise: "Secure packaging, fast delivery, luxury unboxing experience.",
      returnPolicy: "Damaged in transit? Instant replacement available."
    }
  }
];
