import { company } from '@/lib/company';

export default function OperationalDisclaimer({ className = '' }) {
  return (
    <p className={`operational-disclaimer ${className}`.trim()}>
      {company.operationalDisclaimer}
    </p>
  );
}
