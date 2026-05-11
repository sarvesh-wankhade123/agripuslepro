import json
import re
import random

# Read the existing cropData.js to preserve existing images/descriptions if possible
existing_data_text = ""
with open('src/cropData.js', 'r', encoding='utf-8') as f:
    existing_data_text = f.read()

# Naive extraction of existing items
# We'll just build a dictionary of existing crops by id
existing_crops = {}
# A bit tricky to parse JS object with python regex, let's just use generic defaults 
# and maybe extract images where possible
img_pattern = re.compile(r'id:\s*"([^"]+)",[\s\S]*?image:\s*"([^"]+)",[\s\S]*?description:\s*"([^"]+)"')
for match in img_pattern.finditer(existing_data_text):
    c_id, image, desc = match.groups()
    existing_crops[c_id] = {"image": image, "description": desc}

# Generic images for different types
generic_images = [
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80", # field
    "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&q=80", # agriculture
    "https://images.unsplash.com/photo-1592982537447-6f2c6a0c5c4d?w=600&q=80", # crops
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80", # harvest
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80"  # farm
]

crops = []
with open('_crop_data_dump.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for line in lines:
    if line.startswith("Row "):
        # Extract JSON array part
        json_str_match = re.search(r'\[.*\]', line)
        if json_str_match:
            try:
                row_data = json.loads(json_str_match.group(0))
                # Skip header or empty
                if row_data[0] == "Crop" or not row_data[0]:
                    continue
                
                name = row_data[0].strip()
                season = row_data[1].strip()
                duration = row_data[2].strip()
                ph = row_data[3].strip()
                moisture = row_data[4].strip()
                temp = row_data[5].strip()
                rainfall = row_data[6].strip()
                
                c_id = name.lower().split(' ')[0].split('(')[0].replace(',', '')
                
                # Format things
                if "days" not in duration and "months" not in duration and "years" not in duration:
                    duration += " days"
                if "°C" not in temp and temp:
                    temp += "°C"
                if "cm" not in rainfall and rainfall:
                    rainfall += " cm"
                    
                image = existing_crops.get(c_id, {}).get('image', random.choice(generic_images))
                desc = existing_crops.get(c_id, {}).get('description', f"Detailed data available for {name}.")
                
                crops.append({
                    "id": c_id,
                    "name": name,
                    "season": season,
                    "duration": duration,
                    "ph": ph,
                    "moisture": moisture,
                    "temp": temp,
                    "rainfall": rainfall,
                    "image": image,
                    "description": desc
                })
            except Exception as e:
                print(f"Error parsing line: {line} - {e}")

# Build the JS output
js_out = """// ============================================
// AgriPulse Pro — Crop Intelligence Database
// ============================================
// Comprehensive crop data extracted from the
// agricultural survey CSV. Each record contains
// growing conditions, seasonal info, and an
// Unsplash image reference.

const cropDatabase = [
"""
for c in crops:
    js_out += "  {\n"
    for k, v in c.items():
        js_out += f'    {k}: "{v}",\n'
    js_out += "  },\n"
js_out += """];

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
"""

with open('src/cropData.js', 'w', encoding='utf-8') as f:
    f.write(js_out)

print(f"Successfully wrote {len(crops)} crops to src/cropData.js")
