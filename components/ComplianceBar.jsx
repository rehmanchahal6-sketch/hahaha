import Link from 'next/link';
import { company } from '@/lib/company';

export default function ComplianceBar() {
  return (
    <div className="compliance-bar">
      <div className="container compliance-bar-inner">
        <span>{company.legalName}</span>
        <span aria-hidden>·</span>
        <span>{company.stateOfFormation}, USA</span>
        <span aria-hidden>·</span>
        <a href={`mailto:${company.email}`}>{company.email}</a>
        {company.phone && company.phoneDisplay ? (
          <>
            <span aria-hidden>·</span>
            <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
          </>
        ) : null}
        <span aria-hidden>·</span>
        <span>{company.hours}</span>
        <Link href="/company" className="compliance-bar-link">
          Corporate information
        </Link>
      </div>
    </div>
  );
}
