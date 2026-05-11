// ============================================
// AgriPulse Pro — Crop Intelligence Database
// ============================================
// Comprehensive crop data extracted from the
// agricultural survey CSV. Each record contains
// growing conditions, seasonal info, and an
// Unsplash image reference.

const cropDatabase = [
  {
    id: "rice",
    name: "Rice",
    season: "Kharif",
    duration: "90–150 days",
    ph: "5.5–7.0",
    moisture: "Very High",
    temp: "20–35°C",
    rainfall: "100–200 cm",
    image: "https://images.unsplash.com/photo-1536304993881-2f31308f4308?w=600&q=80",
    description: "Staple cereal crop thriving in waterlogged paddies with high humidity and tropical warmth.",
  },
  {
    id: "wheat",
    name: "Wheat",
    season: "Rabi",
    duration: "110–140 days",
    ph: "6.0–7.5",
    moisture: "Moderate",
    temp: "10–25°C",
    temp: "10–25°C",
    rainfall: "50–100 cm",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80",
    description: "Major winter cereal requiring cool, dry conditions during grain filling and maturation.",
  },
  {
    id: "maize",
    name: "Maize",
    season: "Kharif / Rabi",
    duration: "80–110 days",
    ph: "5.5–7.5",
    moisture: "Moderate",
    temp: "18–27°C",
    rainfall: "50–100 cm",
    image: "https://images.unsplash.com/photo-1601312036470-48ce6aebedbc?w=600&q=80",
    description: "Versatile cereal cultivated across seasons, well-suited to warm days and moderate irrigation.",
  },
  {
    id: "barley",
    name: "Barley",
    season: "Rabi",
    duration: "90–120 days",
    ph: "6.0–7.5",
    moisture: "Low–Moderate",
    temp: "12–25°C",
    rainfall: "30–80 cm",
    image: "https://images.unsplash.com/photo-1631022911544-1e080e66c2e8?w=600&q=80",
    description: "Hardy, drought-tolerant cereal often used for animal feed, brewing, and soil improvement rotations.",
  },
  {
    id: "oats",
    name: "Oats",
    season: "Rabi",
    duration: "90–120 days",
    ph: "5.0–6.5",
    moisture: "Moderate",
    temp: "15–25°C",
    rainfall: "40–80 cm",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80",
    description: "Cool-season cereal valued for nutritious grain and use as a cover crop in crop-rotation systems.",
  },
  {
    id: "sorghum",
    name: "Sorghum",
    season: "Kharif",
    duration: "90–120 days",
    ph: "5.5–8.5",
    moisture: "Low",
    temp: "25–35°C",
    rainfall: "40–100 cm",
    image: "https://images.unsplash.com/photo-1593106410288-caf65eca7c9d?w=600&q=80",
    description: "Heat- and drought-resistant millet-family grain grown extensively in semi-arid regions.",
  },
  {
    id: "millets",
    name: "Millets",
    season: "Kharif",
    duration: "60–90 days",
    ph: "5.5–7.0",
    moisture: "Low",
    temp: "25–35°C",
    rainfall: "25–75 cm",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80",
    description: "Ancient, climate-resilient small grains packed with micronutrients; ideal for arid farmlands.",
  },
  {
    id: "grapes",
    name: "Grapes",
    season: "Perennial",
    duration: "150–180 days",
    ph: "5.5–7.0",
    moisture: "Moderate",
    temp: "15–35°C",
    rainfall: "50–80 cm",
    image: "https://images.unsplash.com/photo-1596363505729-4190a9506133?w=600&q=80",
    description: "Perennial vine fruit cultivated for table consumption, juice, and wine production.",
  },
  {
    id: "pineapple",
    name: "Pineapple",
    season: "Year-round",
    duration: "18–24 months",
    ph: "4.5–6.5",
    moisture: "Moderate–High",
    temp: "22–32°C",
    rainfall: "100–150 cm",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=600&q=80",
    description: "Tropical bromeliad fruit requiring warm, humid climate and well-drained acidic soils.",
  },
  {
    id: "papaya",
    name: "Papaya",
    season: "Year-round",
    duration: "9–11 months",
    ph: "5.5–7.0",
    moisture: "High",
    temp: "22–33°C",
    rainfall: "100–200 cm",
    image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=600&q=80",
    description: "Fast-growing tropical fruit tree yielding nutrient-rich fruit within the first year of planting.",
  },
  {
    id: "watermelon",
    name: "Watermelon",
    season: "Kharif / Summer",
    duration: "80–110 days",
    ph: "6.0–7.0",
    moisture: "Moderate–High",
    temp: "24–35°C",
    rainfall: "40–60 cm",
    image: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=600&q=80",
    description: "Warm-season cucurbit needing long, frost-free growing periods and sandy, well-drained soil.",
  },
  {
    id: "strawberry",
    name: "Strawberry",
    season: "Rabi / Winter",
    duration: "60–90 days",
    ph: "5.5–6.5",
    moisture: "High",
    temp: "10–25°C",
    rainfall: "50–80 cm",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&q=80",
    description: "Cool-climate berry crop with high water demands, grown under protected cultivation for premium yield.",
  },
  {
    id: "coconut",
    name: "Coconut",
    season: "Perennial",
    duration: "5–6 years (first yield)",
    ph: "5.0–8.0",
    moisture: "High",
    temp: "20–30°C",
    rainfall: "100–250 cm",
    image: "https://images.unsplash.com/photo-1580984969071-a8da8afc144a?w=600&q=80",
    description: "Long-lived tropical palm producing copra, oil, and water; tolerates coastal salinity.",
  },
  {
    id: "peach",
    name: "Peach",
    season: "Spring / Summer",
    duration: "80–120 days",
    ph: "6.0–7.0",
    moisture: "Moderate",
    temp: "12–25°C",
    rainfall: "50–80 cm",
    image: "https://images.unsplash.com/photo-1595124784924-d3d1e5e64b25?w=600&q=80",
    description: "Deciduous stone fruit needing winter chill hours and well-drained loamy soils.",
  },
  {
    id: "cherry",
    name: "Cherry",
    season: "Spring",
    duration: "60–90 days",
    ph: "6.0–7.5",
    moisture: "Moderate",
    temp: "5–22°C",
    rainfall: "60–100 cm",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&q=80",
    description: "Temperate stone fruit requiring significant winter chill and protection from late frosts.",
  },
  {
    id: "pear",
    name: "Pear",
    season: "Summer / Autumn",
    duration: "100–150 days",
    ph: "6.0–7.5",
    moisture: "Moderate",
    temp: "15–25°C",
    rainfall: "60–100 cm",
    image: "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?w=600&q=80",
    description: "Deciduous fruit tree thriving in deep, fertile soil with moderate irrigation during fruit development.",
  },
];

/**
 * Determine a suitability badge based on moisture and temperature ranges.
 * Returns { label, class } for rendering.
 */
function getSuitabilityBadge(crop) {
  const moistureLower = crop.moisture.toLowerCase();
  const isHighMoisture =
    moistureLower.includes("high") || moistureLower.includes("very high");
  const isLowMoisture = moistureLower === "low";

  // Parse lower bound of temperature
  const tempMatch = crop.temp.match(/(\d+)/);
  const tempLow = tempMatch ? parseInt(tempMatch[1], 10) : 20;

  if (isHighMoisture && tempLow >= 20) {
    return { label: "Optimal", variant: "optimal" };
  }
  if (isLowMoisture) {
    return { label: "Drought Tolerant", variant: "caution" };
  }
  if (tempLow <= 10) {
    return { label: "Cold Hardy", variant: "info" };
  }
  return { label: "Moderate", variant: "neutral" };
}

export { cropDatabase, getSuitabilityBadge };
