import filterCoffeeImage from './images/filter-coffee-dabara.jpg';

export const products = [
  {
    id: 1,
    name: "Mudigere Estate Reserve",
    type: "100% Arabica · Medium roast",
    notes: "Bright, fruity, incredibly smooth.",
    price: "$24.00",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "The Ancestor's Filter Coffee",
    type: "Heritage roast",
    notes: "Dark cocoa, roasted hazelnut, caramel, chicory.",
    price: "$22.00",
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
    type: "Dark roast",
    notes: "Earthy, bold, low-acidity.",
    price: "$26.00",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=800"
  }
];
