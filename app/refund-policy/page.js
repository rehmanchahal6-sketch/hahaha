import { company, addressBlock } from '@/lib/company';

export const metadata = {
  title: 'Returns & Refunds',
};

export default function RefundPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container" style={{ maxWidth: 820 }}>
          <span className="eyebrow">Legal</span>
          <h1>Returns & Refund Policy</h1>
          <p>Last updated: August 22, 2026</p>
        </div>
      </section>
      <section className="section">
        <div className="container legal-copy" style={{ maxWidth: 820 }}>
          <h3>1. Overview</h3>
          <p>
            {company.legalName} stands behind the pet products we sell. This policy explains how
            returns and refunds are handled for orders placed through our e-commerce channels.
          </p>

          <h3>2. Retail orders (Shopify & Amazon)</h3>
          <p>
            Returns and refunds for orders placed on Shopify or Amazon follow the return policy
            displayed at checkout on each platform. Initiate returns through the platform where you
            placed your order. Contact us if you need help locating your order or seller information.
          </p>

          <h3>3. Eligible returns</h3>
          <p>Unused pet products in original packaging may be eligible for return when:</p>
          <ul>
            <li>The return is requested within the timeframe stated on the sales channel</li>
            <li>The item is in resalable condition</li>
            <li>The product is not excluded below</li>
          </ul>

          <h3>4. Non-returnable items</h3>
          <p>The following are generally not eligible for return unless defective or damaged:</p>
          <ul>
            <li>Opened pet food, treats, or consumable nutrition products</li>
            <li>Hygiene products that have been opened or used</li>
            <li>Custom or special-order wholesale items (unless agreed otherwise in writing)</li>
          </ul>

          <h3>5. Damaged, defective, or incorrect items</h3>
          <p>
            If you receive a damaged, defective, or incorrect product, contact us within 7 days of
            delivery with your order number and photos. We will arrange a replacement or refund as
            appropriate.
          </p>

          <h3>6. Wholesale orders</h3>
          <p>
            Wholesale and bulk orders follow return terms agreed in writing at the time of purchase.
            Contact your account representative or email us for wholesale return requests.
          </p>

          <h3>7. Refund processing</h3>
          <p>
            Approved refunds are processed to the original payment method. Processing times depend on
            your bank or payment provider and may take 5–10 business days after approval.
          </p>

          <h3>8. How to request a return or refund</h3>
          <p>
            Email <a href={`mailto:${company.email}`}>{company.email}</a> with:
          </p>
          <ul>
            <li>Your order number</li>
            <li>Sales channel (Shopify or Amazon)</li>
            <li>Reason for the return request</li>
            <li>Photos (for damaged or incorrect items)</li>
          </ul>

          <h3>9. Contact</h3>
          <p>
            {company.legalName}
            <br />
            {addressBlock}
            <br />
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
