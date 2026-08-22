import Link from 'next/link';
import { company } from '@/lib/company';

export default function ComplianceBar() {
  return (
    <div className="compliance-bar">
      <div className="container compliance-bar-inner">
        <span>{company.legalName}</span>
        <span aria-hidden>·</span>
        <a href={`mailto:${company.email}`}>{company.email}</a>
        <Link href="/company" className="compliance-bar-link">
          Corporate information
        </Link>
      </div>
    </div>
  );
}
