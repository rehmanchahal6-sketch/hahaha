import { company, addressBlock } from '@/lib/company';

const rows = [
  { label: 'Legal name', value: company.legalName },
  { label: 'Entity type', value: company.entityType },
  { label: 'State of formation', value: company.stateOfFormation },
  { label: 'Country', value: company.country },
  { label: 'Website', value: company.websiteDisplay, href: company.website },
  {
    label: 'Email',
    value: company.email,
    href: `mailto:${company.email}`,
  },
  { label: 'Registered address', value: addressBlock },
  { label: 'Business activity', value: `${company.businessActivity} Product focus: ${company.productFocus}.` },
  { label: 'Industry', value: company.industry },
  { label: 'NAICS', value: company.naics },
  { label: 'Sales channels', value: company.salesChannels.join(' · ') },
  { label: 'Business hours', value: company.hours },
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
                <a href={row.href} target={row.href.startsWith('http') ? '_blank' : undefined} rel={row.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  {row.value}
                </a>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
