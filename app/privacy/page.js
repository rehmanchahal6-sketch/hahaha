export const metadata = {
  title: 'Privacy Policy | Paudelon',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container" style={{ maxWidth: 820 }}>
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p>Last updated: August 9, 2026</p>
        </div>
      </section>
      <section className="section">
        <div className="container legal-copy" style={{ maxWidth: 820 }}>
          <h3>1. Overview & information we collect</h3>
          <p>
            Paudelon respects your privacy. This policy explains how we collect, process, and protect personal and business data when you visit our website or engage our services. We collect information you provide through forms and consultations, including name, business email, company name, phone number, and project details.
          </p>
          <h3>2. How we use your information</h3>
          <p>We use collected information for legitimate business purposes:</p>
          <ul>
            <li>Fulfilling quote requests and technical inquiries</li>
            <li>Delivering contracted IT, email, and web services</li>
            <li>Sending administrative notices and service updates</li>
            <li>Securing our systems and improving the site experience</li>
          </ul>
          <h3>3. Data protection & confidentiality</h3>
          <p>
            We use industry-standard security measures including encryption and access controls. We do not sell, rent, or trade your personal or client list data to third-party marketers.
          </p>
          <h3>4. Third-party service providers</h3>
          <p>
            We work with trusted infrastructure and platform providers as needed to deliver services. They process data only as required for their function and under confidentiality obligations.
          </p>
          <h3>5. Your rights & contact</h3>
          <p>
            You may request access to, correction of, or deletion of your personal data. Contact{' '}
            <a href="mailto:hello@paudelon.com">hello@paudelon.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
