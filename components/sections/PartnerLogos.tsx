const partners = [
  { name: 'Zinc' },
  { name: 'Guar Steel' },
  { name: 'BHM' },
  { name: 'Asset Management Co.' },
  { name: 'Capital' },
  { name: 'MiniOO Mines' },
  { name: '8i' },
  { name: 'Kodo' },
];

export function PartnerLogos() {
  return (
    <section className="partner-logos-section">
      <div className="partner-logos-inner">
        {/* Section label */}
        <p className="partner-logos-label">Companies We&apos;ve Worked With</p>

        {/* Logo strip */}
        <div className="partner-logos-strip">
          {partners.map((partner) => (
            <div key={partner.name} className="partner-logo-slot">
              {/* logo: {partner.name} */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src=""
                alt={`${partner.name} logo`}
                width={140}
                height={56}
                className="partner-logo-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
