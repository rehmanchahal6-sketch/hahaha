import PolicyShell from '@/components/PolicyShell';
import { company, addressBlock } from '@/lib/company';

export const metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPage() {
  return (
    <PolicyShell eyebrow="Legal" title="Privacy Policy" updated="August 22, 2026">
      <h3>1. Introduction</h3>
      <p>
        {company.legalName} (&quot;Paudelon,&quot; &quot;we,&quot; &quot;us&quot;) respects your privacy. This Privacy
        Policy explains how we collect, use, disclose, and protect information when you visit{' '}
        {company.websiteDisplay}, purchase pet products through our sales channels, or contact us
        for business inquiries.
      </p>
      <p>
        <strong>Data controller:</strong> {company.legalName}, {addressBlock}. Contact:{' '}
        <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>

      <h3>2. Information we collect</h3>
      <p>We may collect the following categories of information:</p>
      <ul>
        <li>
          <strong>Contact information:</strong> name, email address, company name, and messages
          you submit through our contact form
        </li>
        <li>
          <strong>Order information:</strong> shipping address, order history, and product
          details when you purchase through Shopify or Amazon
        </li>
        <li>
          <strong>Payment information:</strong> processed by Shopify, Amazon, or other payment
          providers—we do not store full payment card numbers on our website
        </li>
        <li>
          <strong>Technical information:</strong> browser type, device information, and basic
          usage data when you visit our website
        </li>
        <li>
          <strong>Wholesale account information:</strong> business details provided for bulk or
          B2B orders
        </li>
      </ul>

      <h3>3. How we use information</h3>
      <ul>
        <li>Processing and fulfilling online retail and wholesale orders</li>
        <li>Providing customer support and responding to inquiries</li>
        <li>Operating e-commerce activities on Shopify, Amazon, and related channels</li>
        <li>Improving our website, products, and services</li>
        <li>Complying with legal, tax, and regulatory obligations</li>
        <li>Responding to business verification requests from banks and partners</li>
      </ul>

      <h3>4. Information sharing</h3>
      <p>
        We do not sell your personal information. We may share information with service providers
        that help us operate our business, including:
      </p>
      <ul>
        <li>E-commerce platforms (Shopify, Amazon)</li>
        <li>Payment processors and financial institutions</li>
        <li>Shipping and fulfillment partners</li>
        <li>Email and hosting providers</li>
      </ul>
      <p>
        These parties process data only as needed to perform their services and are expected to
        protect it appropriately.
      </p>

      <h3>5. Data retention</h3>
      <p>
        We retain personal information for as long as necessary to fulfill the purposes described
        in this policy, comply with legal obligations, resolve disputes, and enforce agreements.
      </p>

      <h3>6. Your rights</h3>
      <p>
        Depending on your location, you may have the right to access, correct, delete, or restrict
        use of your personal data. To exercise these rights, contact{' '}
        <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>

      <h3>7. Security</h3>
      <p>
        We use reasonable administrative, technical, and physical safeguards to protect personal
        information. No method of transmission over the internet is completely secure.
      </p>

      <h3>8. Third-party platforms</h3>
      <p>
        Purchases made on Shopify or Amazon are also subject to those platforms&apos; privacy
        policies. We encourage you to review their policies when placing orders.
      </p>

      <h3>9. Changes to this policy</h3>
      <p>
        We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top
        of this page will reflect any changes.
      </p>

      <h3>10. Contact</h3>
      <p>
        {company.legalName}
        <br />
        {addressBlock}
        <br />
        <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>
    </PolicyShell>
  );
}
