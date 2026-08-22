import Link from 'next/link';
import { company, addressBlock, policyLinks } from '@/lib/company';

const extraRows = [
  { label: 'Trade name', value: company.tradeName },
  { label: 'Managing member', value: company.managingMember },
  {
    label: 'Business email',
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    label: 'Support email',
    value: company.supportEmail,
    href: `mailto:${company.supportEmail}`,
  },
];

if (company.phone && company.phoneDisplay) {
  extraRows.push({
    label: 'Phone',
    value: company.phoneDisplay,
    href: `tel:${company.phone}`,
  });
}

const rows = [
  { label: 'Legal name', value: company.legalName },
  { label: 'Entity type', value: company.entityType },
  { label: 'State of formation', value: company.stateOfFormation },
  { label: 'Country', value: company.country },
  { label: 'Website', value: company.websiteDisplay, href: company.website },
  ...extraRows,
  { label: 'Registered office', value: addressBlock },
  { label: 'Address purpose', value: company.addressPurpose },
  { label: 'Operations', value: company.operationsModel },
  {
    label: 'Business activity',
    value: `${company.businessActivity} Product focus: ${company.productFocus}.`,
  },
  { label: 'Industry', value: company.industry },
  { label: 'NAICS', value: company.naics },
  { label: 'Sales channels', value: company.salesChannels.join(' · ') },
  { label: 'Business hours', value: company.hours },
  { label: 'Time zone', value: company.timezone },
];

export default function CompanyDetails({ title = 'Company information' }) {
  return (
    <div className="company-details">
      {title ? <h3 className="company-details-title">{title}</h3> : null}
      <dl className="info-table">
        {rows.map((row) => (
          <div className="info-row" key={row.label}>
            <dt>{row.label}</dt>
            <dd>
              {row.href ? (
                <a
                  href={row.href}
                  target={row.href.startsWith('http') ? '_blank' : undefined}
                  rel={row.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {row.value}
                </a>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
      <div className="info-table-footer">
        <p>
          Full corporate disclosure:{' '}
          <Link href="/company" className="text-link">
            Corporate Information page
          </Link>
        </p>
        <div className="policy-links-row">
          {policyLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
