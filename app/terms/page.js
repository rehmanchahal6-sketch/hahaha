export const metadata = {
  title: 'Terms of Service | Paudelon',
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container" style={{ maxWidth: 820 }}>
          <span className="eyebrow">Legal</span>
          <h1>Terms of Service</h1>
          <p>Last updated: August 9, 2026</p>
        </div>
      </section>
      <section className="section">
        <div className="container legal-copy" style={{ maxWidth: 820 }}>
          <h3>1. Acceptance of terms</h3>
          <p>
            By accessing this website or engaging Paudelon services, you agree to these Terms of Service and applicable laws.
          </p>
          <h3>2. Scope of services</h3>
          <p>
            Professional services are governed by itemized proposals or Statements of Work. Scope changes must be confirmed in writing.
          </p>
          <h3>3. Intellectual property</h3>
          <p>
            Upon full payment, clients own custom deliverables created for their business. Paudelon retains rights to pre-existing tools and reusable frameworks.
          </p>
          <h3>4. Payment terms</h3>
          <p>
            Invoices follow the schedule in your agreement. Retainers are billed monthly in advance. Late payment may pause active services.
          </p>
          <h3>5. Limitation of liability</h3>
          <p>
            To the maximum extent permitted by law, Paudelon is not liable for indirect or consequential damages, or third-party outages beyond our control.
          </p>
          <h3>6. Contact</h3>
          <p>
            Legal questions: <a href="mailto:sujanpaudel368@gmail.com">sujanpaudel368@gmail.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
