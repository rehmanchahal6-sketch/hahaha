import PolicyShell from '@/components/PolicyShell';
import { company, addressBlock } from '@/lib/company';

export const metadata = {
  title: 'Shipping Policy',
};

export default function ShippingPage() {
  return (
    <PolicyShell eyebrow="Customer care" title="Shipping Policy" updated="August 22, 2026">
      <h3>1. Overview</h3>
      <p>
        This Shipping Policy describes how {company.legalName} fulfills and delivers pet product
        orders placed through our e-commerce channels. By placing an order, you agree to the terms
        outlined below.
      </p>

      <h3>2. Sales channels</h3>
      <p>Orders may be placed through:</p>
      <ul>
        <li>Our Shopify online store</li>
        <li>Amazon marketplace listings operated by {company.legalName}</li>
        <li>Direct wholesale arrangements confirmed in writing</li>
      </ul>
      <p>
        Shipping options, costs, and delivery estimates are displayed at checkout on each platform.
      </p>

      <h3>3. Processing time</h3>
      <p>
        Orders are typically processed within <strong>1–3 business days</strong> after payment
        confirmation. Processing may take longer during peak seasons, promotional periods, or when
        inventory verification is required.
      </p>
      <p>Business days are Monday through Friday, excluding US federal holidays.</p>

      <h3>4. Shipping methods & delivery times</h3>
      <p>Available shipping methods depend on the sales channel and destination:</p>
      <ul>
        <li>
          <strong>Standard shipping (US domestic):</strong> typically 5–8 business days after
          processing
        </li>
        <li>
          <strong>Expedited shipping (US domestic):</strong> typically 2–5 business days after
          processing, where offered at checkout
        </li>
        <li>
          <strong>International shipping:</strong> availability and delivery times vary by
          destination and are shown at checkout when available
        </li>
      </ul>
      <p>
        Delivery times are estimates only and are not guaranteed. Carriers may experience delays
        beyond our control.
      </p>

      <h3>5. Shipping costs</h3>
      <p>
        Shipping fees are calculated at checkout based on order weight, dimensions, destination, and
        selected shipping method. Free shipping promotions, when offered, will be clearly displayed
        on the applicable sales channel.
      </p>

      <h3>6. Order tracking</h3>
      <p>
        When your order ships, a tracking number is provided by email or through your order history
        on the platform where the purchase was made. Allow up to 48 hours for tracking information
        to update after shipment.
      </p>

      <h3>7. Dropshipping & fulfillment partners</h3>
      <p>
        {company.legalName} may fulfill orders through approved suppliers and dropshipping partners
        as part of our e-commerce operations. Products are shipped to the address provided at
        checkout. The seller of record remains {company.legalName}.
      </p>

      <h3>8. Wholesale & bulk orders</h3>
      <p>
        Wholesale and bulk shipments follow delivery terms agreed in writing at the time of
        purchase, including lead times, freight method, and shipping costs. Contact{' '}
        <a href={`mailto:${company.email}`}>{company.email}</a> or{' '}
        <a href={`mailto:${company.supportEmail}`}>{company.supportEmail}</a> for wholesale shipping quotes.
      </p>

      <h3>9. Incorrect or incomplete addresses</h3>
      <p>
        Customers are responsible for providing accurate shipping information. {company.legalName} is
        not responsible for delays or losses caused by incorrect addresses. Address correction fees
        charged by carriers may be passed to the customer.
      </p>

      <h3>10. Lost or delayed packages</h3>
      <p>
        If your order is significantly delayed or appears lost, contact us within 14 days of the
        estimated delivery date with your order number. We will work with the carrier to investigate
        and resolve the issue.
      </p>

      <h3>11. Contact</h3>
      <p>
        Shipping questions: <a href={`mailto:${company.email}`}>{company.email}</a>
        {' or '}
        <a href={`mailto:${company.supportEmail}`}>{company.supportEmail}</a>
        <br />
        {company.legalName} · {addressBlock}
        <br />
        Website: <a href={company.website}>{company.websiteDisplay}</a>
      </p>
    </PolicyShell>
  );
}
