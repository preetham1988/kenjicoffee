import filterCoffeeImage from './images/filter-coffee-dabara.jpg';

// Product details shown on the cards and in Google's search results.
// `size` appears next to the price.
// `roast.level` runs 1 (light) to 5 (dark); leave it null to show only the label.
// `profile` rows (and an optional `summary`) appear in the cupping & sensory profile tabs.
export const products = [
  {
    id: 1,
    name: "Cappuccino",
    shortName: "Cappuccino",
    type: "Single-estate Arabica",
    roast: { label: "Medium roast", level: 3 },
    bestFor: "Cappuccinos and pour-over",
    notes: "Floral, crisp citrus, fresh berries.",
    price: "$24.00",
    size: "1 lb",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800",
    summary: "A pure, unadulterated single-estate Arabica that offers high clarity and vibrant acidity.",
    profile: [
      ["Aroma", "An inviting bouquet featuring pronounced floral hints accompanied by subtle fruity sweetness."],
      ["Flavor", "Bright, lively acidity balanced by smooth, well-rounded body. Key flavor notes include crisp citrus, fresh berries, and a gentle underlying floral sweetness."],
      ["Finish", "Clean, crisp, and refreshing with a gentle, complex lingering aftertaste."],
      ["Roast level", "Medium."]
    ]
  },
  {
    id: 2,
    name: "The Ancestor's Filter Coffee",
    shortName: "Filter coffee",
    type: "South Indian filter coffee",
    roast: { label: "Heritage roast", level: null },
    bestFor: "Filter coffee with milk",
    notes: "Dark cocoa, roasted hazelnut, caramel, chicory.",
    price: "$22.00",
    size: "1 lb",
    image: filterCoffeeImage,
    imageAlt: "Filter coffee being poured between a brass dabara and tumbler",
    profile: [
      ["Aroma", "Strong and earthy, with notes of dark cocoa, roasted nuts, caramel, and chicory."],
      ["Flavor", "Rich chocolate, roasted hazelnut, caramel, and a mild malty sweetness. Blends well with milk."],
      ["Acidity", "Low acidity with a smooth and mellow taste."],
      ["Body", "Thick, creamy, and syrupy with a rich mouthfeel."],
      ["Finish", "Long-lasting, warm, with notes of cocoa and pleasant bittersweetness."]
    ]
  },
  {
    id: 3,
    name: "Baba Budan Espresso",
    shortName: "Espresso",
    type: "Espresso",
    roast: { label: "Dark roast", level: 5 },
    bestFor: "Espresso and moka pot",
    notes: "Dark chocolate, citrus, roasted nuts.",
    price: "$26.00",
    size: "1 lb",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=800",
    profile: [
      ["Aroma", "Citrus, floral, hazelnut, and honey notes."],
      ["Flavor", "Dark chocolate, citrus, roasted nuts, and mild fruity sweetness."],
      ["Acidity", "Clean, moderate, and bright, with a smooth and balanced taste."]
    ]
  }
];

// The farm's "label", shown in the estate section.
// Rows with an empty value are hidden: fill in Altitude, Varieties, Process and Harvest when you have them.
export const origin = [
  ["Farm", "Kenjige Estate"],
  ["Village", "Kenjige, Mudigere"],
  ["Region", "Chikkamagaluru, Karnataka, India"],
  ["Grown", "Shade-grown in the Western Ghats"],
  ["Family", "Three generations, since the 1940s"],
  ["Altitude", ""],
  ["Varieties", ""],
  ["Process", ""],
  ["Harvest", ""]
];
