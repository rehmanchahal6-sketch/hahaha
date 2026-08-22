export const productCategories = [
  'All',
  'Food & treats',
  'Toys & enrichment',
  'Grooming & hygiene',
  'Beds & travel',
  'Health & wellness',
  'Feeding accessories',
];

export const categoryImages = {
  'Food & treats': '/images/category_food_treats.png',
  'Toys & enrichment': '/images/category_toys.png',
  'Grooming & hygiene': '/images/category_grooming.png',
  'Beds & travel': '/images/category_beds_travel.png',
  'Health & wellness': '/images/category_health.png',
  'Feeding accessories': '/images/category_feeding.png',
};

export function getProductImage(product) {
  return categoryImages[product.category] || '/images/category_food_treats.png';
}

export const products = [
  {
    slug: 'natural-dog-treats-variety-pack',
    name: 'Natural Dog Treats Variety Pack',
    category: 'Food & treats',
    forPet: 'Dogs',
    price: '$24.99',
    shortDesc: 'Assorted all-natural treats for daily rewards and training.',
    description:
      'A curated variety pack of natural dog treats made without artificial colors or fillers. Suitable for everyday rewards, training sessions, and positive reinforcement. Sold through Paudelon LLC on Shopify and Amazon.',
    highlights: ['All-natural ingredients', 'No artificial colors', 'Resealable packaging', 'Suitable for adult dogs'],
    sku: 'PDL-DT-001',
  },
  {
    slug: 'interactive-cat-feather-wand',
    name: 'Interactive Cat Feather Wand',
    category: 'Toys & enrichment',
    forPet: 'Cats',
    price: '$12.99',
    shortDesc: 'Engaging wand toy that encourages active play and exercise.',
    description:
      'Lightweight interactive feather wand designed to stimulate natural hunting instincts in cats. Durable handle with replaceable feather attachment for extended use.',
    highlights: ['Encourages active play', 'Replaceable attachment', 'Lightweight handle', 'Indoor-friendly design'],
    sku: 'PDL-TY-002',
  },
  {
    slug: 'gentle-pet-grooming-brush',
    name: 'Gentle Pet Grooming Brush',
    category: 'Grooming & hygiene',
    forPet: 'Dogs & cats',
    price: '$16.99',
    shortDesc: 'Soft-bristle brush for everyday coat maintenance and de-shedding.',
    description:
      'Ergonomic grooming brush with gentle bristles for regular coat care. Helps reduce loose fur and keeps coats smooth without irritating sensitive skin.',
    highlights: ['Soft bristles', 'Ergonomic grip', 'Works on short & medium coats', 'Easy to clean'],
    sku: 'PDL-GR-003',
  },
  {
    slug: 'orthopedic-pet-bed-medium',
    name: 'Orthopedic Pet Bed — Medium',
    category: 'Beds & travel',
    forPet: 'Dogs & cats',
    price: '$49.99',
    shortDesc: 'Supportive cushion bed for comfortable rest and joint support.',
    description:
      'Medium-sized orthopedic pet bed with supportive foam core and removable cover. Designed for everyday comfort in home living spaces.',
    highlights: ['Supportive foam core', 'Removable washable cover', 'Non-slip base', 'Medium size (28" × 22")'],
    sku: 'PDL-BD-004',
  },
  {
    slug: 'pet-dental-chew-sticks',
    name: 'Pet Dental Chew Sticks',
    category: 'Health & wellness',
    forPet: 'Dogs',
    price: '$19.99',
    shortDesc: 'Daily dental chews that support oral hygiene between brushings.',
    description:
      'Textured dental chew sticks formulated to help reduce plaque and tartar buildup while giving dogs an enjoyable chewing experience.',
    highlights: ['Supports oral hygiene', 'Textured surface', 'Single-serve portions', 'Daily use formula'],
    sku: 'PDL-HW-005',
  },
  {
    slug: 'stainless-steel-pet-bowl-set',
    name: 'Stainless Steel Pet Bowl Set',
    category: 'Feeding accessories',
    forPet: 'Dogs & cats',
    price: '$22.99',
    shortDesc: 'Two-bowl set for food and water with non-slip rubber base.',
    description:
      'Durable stainless steel bowl set with rubberized base to prevent sliding. Rust-resistant, dishwasher-safe, and suitable for daily feeding routines.',
    highlights: ['Stainless steel construction', 'Non-slip base', 'Dishwasher safe', 'Set of two bowls'],
    sku: 'PDL-FA-006',
  },
  {
    slug: 'cat-scratching-post-compact',
    name: 'Compact Cat Scratching Post',
    category: 'Toys & enrichment',
    forPet: 'Cats',
    price: '$29.99',
    shortDesc: 'Space-saving scratching post with sisal wrap and stable base.',
    description:
      'Compact scratching post ideal for apartments and smaller living spaces. Sisal-wrapped post with stable base to encourage healthy scratching behavior.',
    highlights: ['Sisal-wrapped post', 'Stable weighted base', 'Compact footprint', 'Easy assembly'],
    sku: 'PDL-TY-007',
  },
  {
    slug: 'salmon-cat-treats',
    name: 'Salmon Flavor Cat Treats',
    category: 'Food & treats',
    forPet: 'Cats',
    price: '$9.99',
    shortDesc: 'Soft salmon-flavor treats for cats of all ages.',
    description:
      'Soft, bite-sized cat treats with salmon flavor. Suitable as an occasional reward or training aid for cats of all life stages.',
    highlights: ['Salmon flavor', 'Soft texture', 'Small bite-sized pieces', 'Resealable pouch'],
    sku: 'PDL-DT-008',
  },
  {
    slug: 'pet-shampoo-sensitive-skin',
    name: 'Pet Shampoo for Sensitive Skin',
    category: 'Grooming & hygiene',
    forPet: 'Dogs & cats',
    price: '$14.99',
    shortDesc: 'Mild cleansing formula for pets with sensitive or dry skin.',
    description:
      'Gentle pet shampoo formulated for sensitive skin. Free from harsh sulfates and designed to cleanse without stripping natural coat oils.',
    highlights: ['Mild formula', 'Sensitive skin friendly', 'Pleasant light scent', '16 fl oz bottle'],
    sku: 'PDL-GR-009',
  },
  {
    slug: 'portable-pet-travel-carrier',
    name: 'Portable Pet Travel Carrier',
    category: 'Beds & travel',
    forPet: 'Small dogs & cats',
    price: '$39.99',
    shortDesc: 'Lightweight carrier for vet visits, travel, and everyday transport.',
    description:
      'Portable soft-sided pet carrier with mesh ventilation panels and secure zip closure. Suitable for small dogs and cats during travel or vet appointments.',
    highlights: ['Mesh ventilation', 'Secure zip closure', 'Lightweight design', 'Top and side entry'],
    sku: 'PDL-BD-010',
  },
  {
    slug: 'joint-support-pet-supplement',
    name: 'Joint Support Pet Supplement',
    category: 'Health & wellness',
    forPet: 'Dogs',
    price: '$27.99',
    shortDesc: 'Daily supplement chews with glucosamine for active and aging dogs.',
    description:
      'Daily joint support supplement chews with glucosamine and chondroitin. Formulated for active and senior dogs as part of a balanced wellness routine.',
    highlights: ['Glucosamine & chondroitin', 'Soft chew format', '60-count container', 'Daily use'],
    sku: 'PDL-HW-011',
  },
  {
    slug: 'slow-feeder-pet-bowl',
    name: 'Slow Feeder Pet Bowl',
    category: 'Feeding accessories',
    forPet: 'Dogs & cats',
    price: '$18.99',
    shortDesc: 'Maze-design bowl that slows eating pace and supports digestion.',
    description:
      'Slow feeder bowl with maze pattern to encourage slower eating habits. Helps reduce gulping and supports healthier digestion during mealtimes.',
    highlights: ['Maze design', 'BPA-free material', 'Dishwasher safe', 'Non-slip rim'],
    sku: 'PDL-FA-012',
  },
];

export function getProductRating(slug) {
  const seed = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return {
    rating: Math.round((4.5 + (seed % 6) * 0.08) * 10) / 10,
    count: 48 + (seed % 140),
  };
}

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product, limit = 3) {
  return products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, limit);
}
