const partners = [
  { name: 'Zinc',                 src: '/assets/zinc.jpg' },
  { name: 'Guar Steel',           src: '/assets/guarsteel.jpg' },
  { name: 'BHM',                  src: '/assets/bhmh.jpg' },
  { name: 'Asset Management Co.', src: '/assets/asset.png' },
  { name: 'Capital',              src: '/assets/capital.jpg' },
  { name: 'MiniOO Mines',         src: '/assets/minomines.png' },
  { name: '8i',                   src: '/assets/8i.jpg' },
  { name: 'Kodo',                 src: '/assets/kodo.png' },
];

export function PartnerLogos() {
  return (
    <section className="py-14 px-6 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">

        {/* Section label — identical class string used across all other sections */}
        <span className="text-xs font-semibold tracking-widest text-text uppercase">
          Companies We&apos;ve Worked With
        </span>

        {/* Logo strip */}
        <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-10 sm:gap-x-16">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              {/* logo: {partner.name} */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.src}
                alt={`${partner.name} logo`}
                width={140}
                height={56}
                className="partner-logo-img w-[140px] h-[56px]"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
