export const metadata = {
  title: 'Refund Policy | Nexora Digital',
};

export default function RefundPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container" style={{ maxWidth: 820 }}>
          <span className="eyebrow">Billing</span>
          <h1>Refund & Cancellation Policy</h1>
          <p>Last updated: August 9, 2026</p>
        </div>
      </section>
      <section className="section">
        <div className="container legal-copy" style={{ maxWidth: 820 }}>
          <h3>1. Project deposits</h3>
          <p>
            Because work is custom labor and configuration, kickoff deposits are non-refundable once work has commenced.
          </p>
          <h3>2. Monthly retainers</h3>
          <p>
            Cancel ongoing retainers with 14 days’ written notice before the next billing cycle. Cancellation takes effect at the end of the paid period.
          </p>
          <h3>3. Workmanship guarantee</h3>
          <p>
            If a deliverable does not match the agreed proposal, we provide revision cycles at no extra charge to meet the contracted requirements.
          </p>
          <h3>4. How to cancel</h3>
          <p>
            Email <a href="mailto:hello@nexoradigital.com">hello@nexoradigital.com</a> with your company name, contract reference, and reason for cancellation.
          </p>
        </div>
      </section>
    </>
  );
}
