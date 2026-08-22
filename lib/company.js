export const company = {
  legalName: 'Paudelon LLC',
  entityType: 'Wyoming limited liability company',
  stateOfFormation: 'Wyoming',
  country: 'United States',
  website: 'https://paudelon.com',
  websiteDisplay: 'paudelon.com',
  email: 'sujanpaudel368@gmail.com',
  address: {
    line1: '30 N Gould St Ste R',
    city: 'Sheridan',
    state: 'WY',
    zip: '82801',
    country: 'United States',
  },
  businessActivity:
    'The company engages in e-commerce, online retail, wholesale, dropshipping, and other lawful business activities.',
  productFocus: 'Pet products for dogs, cats, and household pets',
  industry: 'E-commerce · Online retail · Pet supplies',
  naics: '454110 — Electronic Shopping and Mail-Order Houses',
  salesChannels: ['Shopify', 'Amazon', 'Wholesale', 'Dropshipping'],
  hours: 'Monday – Friday, 9:00 AM – 5:00 PM (Mountain Time)',
  responseTime: 'Within one business day',
};

export const addressBlock = `${company.address.line1}, ${company.address.city}, ${company.address.state} ${company.address.zip}, ${company.address.country}`;

export const faqItems = [
  {
    category: 'Company',
    q: 'Is Paudelon LLC a registered US business?',
    a: `Yes. ${company.legalName} is a ${company.entityType} formed in the State of ${company.stateOfFormation}, United States. Our registered mailing address is ${addressBlock}.`,
  },
  {
    category: 'Company',
    q: 'What is the official website for Paudelon LLC?',
    a: `Our official website is ${company.websiteDisplay}. Business inquiries, order support, and company information are published at this domain.`,
  },
  {
    category: 'Company',
    q: 'What does Paudelon LLC do?',
    a: `${company.legalName} is an e-commerce company that sells pet products through online retail, wholesale, and dropshipping. ${company.businessActivity} Sales are conducted primarily through Shopify and Amazon.`,
  },
  {
    category: 'Company',
    q: 'Where is the company registered?',
    a: `${company.legalName} is registered in ${company.stateOfFormation}. Our registered office and mailing address is ${addressBlock}.`,
  },
  {
    category: 'Company',
    q: 'How does the company generate revenue?',
    a: 'Revenue is generated through the online sale of pet products to retail customers on Shopify and Amazon, wholesale orders to businesses, and related e-commerce fulfillment activities.',
  },
  {
    category: 'Company',
    q: 'What industry is Paudelon LLC in?',
    a: `${company.industry}. Our primary activity aligns with NAICS ${company.naics}.`,
  },
  {
    category: 'Company',
    q: 'Who can contact the company for business verification?',
    a: `For business verification, banking, or partnership inquiries, email ${company.email} or use the contact form on ${company.websiteDisplay}. Include your organization name and reason for the request.`,
  },
  {
    category: 'General',
    q: 'What products do you sell?',
    a: 'We sell pet food and treats, toys, grooming supplies, beds, health products, and everyday accessories for dogs, cats, and other household pets.',
  },
  {
    category: 'General',
    q: 'What are your business hours?',
    a: `${company.hours}. Email inquiries received outside business hours are answered on the next business day.`,
  },
  {
    category: 'Sales',
    q: 'Where can customers buy your products?',
    a: 'Retail customers can purchase through our Shopify store and Amazon listings. Wholesale buyers should contact us directly for bulk pricing and availability.',
  },
  {
    category: 'Sales',
    q: 'Do you offer wholesale or bulk orders?',
    a: 'Yes. We supply retailers, groomers, and pet businesses with wholesale pricing on select product lines. Include your company name and estimated order volume when you reach out.',
  },
  {
    category: 'Sales',
    q: 'Do you use dropshipping?',
    a: 'Yes. Paudelon LLC uses dropshipping and supplier fulfillment partnerships as part of our e-commerce operations, alongside standard inventory-based sales.',
  },
  {
    category: 'Sales',
    q: 'What payment methods are accepted for orders?',
    a: 'Retail orders on Shopify and Amazon follow each platform’s accepted payment methods, including major credit and debit cards. Wholesale payment terms are confirmed in writing before fulfillment.',
  },
  {
    category: 'Orders',
    q: 'How are orders fulfilled?',
    a: 'Orders placed on Shopify or Amazon are processed through our standard e-commerce fulfillment workflow. Wholesale orders follow delivery terms agreed at the time of purchase.',
  },
  {
    category: 'Orders',
    q: 'What is your return policy?',
    a: 'Product returns follow the policy stated at checkout on each sales channel. See our Returns & Refunds page for general guidelines, or contact us for order-specific questions.',
  },
  {
    category: 'Orders',
    q: 'How long does shipping take?',
    a: 'Delivery times depend on the sales channel, product availability, and destination. See our Shipping Policy for full details. Estimated delivery windows are shown at checkout on Shopify and Amazon.',
  },
  {
    category: 'Compliance',
    q: 'How do you handle customer data and privacy?',
    a: 'We collect only information needed to process orders and respond to inquiries. We do not sell personal data. See our Privacy Policy for full details on data collection, use, and your rights.',
  },
  {
    category: 'Compliance',
    q: 'Where can I read your terms and policies?',
    a: 'Our Privacy Policy, Terms of Service, Shipping Policy, and Returns & Refunds policy are linked in the website footer and available at all times on paudelon.com.',
  },
  {
    category: 'Contact',
    q: 'How do I reach Paudelon LLC?',
    a: `Email ${company.email} or use the contact form at ${company.websiteDisplay}/contact. We handle retail support, wholesale inquiries, and general business questions.`,
  },
  {
    category: 'Contact',
    q: 'Do you work with suppliers or partners?',
    a: 'We evaluate supplier and partnership opportunities related to pet product sourcing and e-commerce fulfillment. Send a brief overview of your company and proposal.',
  },
];

export const homepageFaqs = faqItems.filter((item) =>
  [
    'Is Paudelon LLC a registered US business?',
    'What does Paudelon LLC do?',
    'Where can customers buy your products?',
    'What products do you sell?',
    'Who can contact the company for business verification?',
    'How do I reach Paudelon LLC?',
  ].includes(item.q)
);
