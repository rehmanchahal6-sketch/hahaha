import PolicyShell from '@/components/PolicyShell';
import { company, addressBlock } from '@/lib/company';

export const metadata = {
  title: 'Terms of Service',
};

export default function TermsPage() {
  return (
    <PolicyShell eyebrow="Legal" title="Terms of Service" updated="August 22, 2026">
      <h3>1. Agreement to terms</h3>
      <p>
        By accessing {company.websiteDisplay} or purchasing products from {company.legalName},
        you agree to these Terms of Service. {company.legalName} is a {company.entityType}{' '}
        formed in the State of {company.stateOfFormation}, United States.
      </p>

      <h3>2. Business description</h3>
      <p>
        {company.legalName} {company.businessActivity.toLowerCase()} The company sells{' '}
        {company.productFocus.toLowerCase()} through online retail, wholesale, dropshipping, and
        related e-commerce channels including Shopify and Amazon.
      </p>

      <h3>3. Products and sales channels</h3>
      <p>
        Pet products are offered through our website, Shopify store, Amazon listings, and direct
        wholesale arrangements. Product availability, pricing, shipping costs, and payment terms
        may vary by channel and are confirmed at the time of purchase.
      </p>

      <h3>4. Orders and payment</h3>
      <p>
        Orders placed on third-party platforms are governed by those platforms&apos; terms and payment
        policies. Wholesale orders require written confirmation of pricing, quantity, payment
        terms, and delivery before fulfillment begins.
      </p>

      <h3>5. Product descriptions</h3>
      <p>
        We make reasonable efforts to ensure product descriptions, images, and pricing are
        accurate. If a product you receive differs materially from its listing, contact us
        promptly for resolution under our Returns & Refunds policy.
      </p>

      <h3>6. Shipping and delivery</h3>
      <p>
        Delivery times and shipping methods depend on the sales channel, product availability,
        and destination. See our <a href="/shipping">Shipping Policy</a> for full details.
      </p>

      <h3>7. Returns and refunds</h3>
      <p>
        Returns and refunds are handled according to our{' '}
        <a href="/refund-policy">Returns & Refunds policy</a> and the policies of the platform
        where the order was placed.
      </p>

      <h3>8. Acceptable use</h3>
      <p>
        You agree not to misuse this website, attempt unauthorized access to our systems, or use
        our services for unlawful purposes.
      </p>

      <h3>9. Limitation of liability</h3>
      <p>
        To the maximum extent permitted by the laws of the State of {company.stateOfFormation},{' '}
        {company.legalName} is not liable for indirect, incidental, or consequential damages
        arising from product use, shipping delays, or third-party platform outages beyond our
        reasonable control.
      </p>

      <h3>10. Governing law</h3>
      <p>
        These Terms are governed by the laws of the State of {company.stateOfFormation}, United
        States, without regard to conflict-of-law principles.
      </p>

      <h3>11. Contact</h3>
      <p>
        {company.legalName}
        <br />
        {addressBlock}
        <br />
        Website: <a href={company.website}>{company.websiteDisplay}</a>
        <br />
        Contact: <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>
    </PolicyShell>
  );
}
