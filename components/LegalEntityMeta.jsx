import { company } from '@/lib/company';

export default function LegalEntityMeta({ className = '' }) {
  return (
    <p className={`legal-entity-meta ${className}`.trim()}>
      <strong>{company.legalName}</strong>
      {' · '}
      {company.jurisdiction}
      {' · '}
      NAICS {company.naics}
    </p>
  );
}
