// Anomaly Photos — separate page for downloadable event photos.
// Same dark palette as ConceptAnomaly. No categories — flat grid.
// Each photo offers JPG + PNG downloads via the `download` attribute.

function ConceptAnomalyPhotos({ lang = 'lv', grain = 0.08 }) {
  // Same palette as anomaly-dark
  const paper = '#161310';
  const ink = '#F0E8D8';
  const oxblood = '#B23A3F';
  const cream = '#F5EFE2';
  const muted = '#F0E8D880';
  const onInk = '#161310';

  // Photo manifest — base name + label. Page assumes each photo has both .jpg and .png versions.
  const photos = [
    { base: 'band-hero', label: lang === 'lv' ? 'Sastavs uz skatuves' : 'On stage', event: lang === 'lv' ? 'Liepaja, 2026' : 'Liepāja, 2026' },
  ];

  const css = `
    .ap-root { font-family: 'Inter', sans-serif; color: ${ink}; background: ${paper}; min-height: 100vh; }
    .ap-display { font-family: 'Archivo', 'Inter', sans-serif; font-weight: 900; letter-spacing: -0.025em; line-height: 0.92; text-transform: uppercase; }
    .ap-mono { font-family: 'JetBrains Mono', monospace; letter-spacing: 0.14em; text-transform: uppercase; }
    .ap-link { color: ${ink}; text-decoration: none; opacity: 0.78; transition: opacity .2s ease; }
    .ap-link:hover { opacity: 1; }
    .ap-card { position: relative; overflow: hidden; background: ${paper}; }
    .ap-card img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .4s ease, filter .3s ease; filter: brightness(0.85) contrast(1.05); }
    .ap-card:hover img { transform: scale(1.03); filter: brightness(0.95) contrast(1.05); }
    .ap-actions { position: absolute; left: 0; right: 0; bottom: 0; padding: 20px 24px; display: flex; justify-content: space-between; align-items: flex-end; gap: 12px; background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.85) 100%); transition: opacity .3s ease; }
    .ap-dl { display: inline-flex; align-items: center; gap: 8px; padding: 10px 14px; background: ${oxblood}; color: ${cream}; text-decoration: none; font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; transition: background .2s ease; }
    .ap-dl:hover { background: ${cream}; color: ${onInk}; }
    .ap-dl-ghost { background: transparent; border: 1px solid ${cream}; color: ${cream}; }
    .ap-dl-ghost:hover { background: ${cream}; color: ${onInk}; }
  `;

  return (
    <div className="ap-root" style={{ position: 'relative' }}>
      <style>{css}</style>

      {/* Top nav */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 60px', borderBottom: `1px solid ${ink}15` }}>
        <a href="/" className="ap-mono ap-link" style={{ fontSize: 11, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <span>←</span> {lang === 'lv' ? '/ATPAKAĻ' : '/BACK'}
        </a>
        <a href="/" style={{ display: 'inline-flex' }}>
          <img src="/photos/logo-plans-b.png" alt="Plāns B" style={{ height: 56, width: 'auto', display: 'block' }} />
        </a>
        <div className="ap-mono" style={{ fontSize: 11, opacity: 0.6 }}>
          /{lang === 'lv' ? 'BILDES' : 'PHOTOS'}
        </div>
      </header>

      {/* Page title */}
      <section style={{ padding: '100px 60px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
          <span className="ap-mono" style={{ fontSize: 11, color: oxblood }}>/{lang === 'lv' ? 'BILDES LEJUPIELĀDEI' : 'PHOTOS FOR DOWNLOAD'}</span>
          <span style={{ width: 40, height: 1, background: `${ink}40` }} />
          <span className="ap-mono" style={{ fontSize: 10, opacity: 0.5 }}>{String(photos.length).padStart(2, '0')} {lang === 'lv' ? 'BILDES' : 'PHOTOS'}</span>
        </div>
        <h1 className="ap-display" style={{ fontSize: 112, margin: 0, lineHeight: 0.9, color: ink }}>
          {lang === 'lv' ? <>Bildes no<br /><em style={{ fontStyle: 'italic', color: oxblood }}>pasākumiem.</em></> : <>Photos from<br /><em style={{ fontStyle: 'italic', color: oxblood }}>our nights.</em></>}
        </h1>
        <p style={{ marginTop: 40, maxWidth: 640, fontSize: 16, lineHeight: 1.6, opacity: 0.78 }}>
          {lang === 'lv'
            ? 'Bezmaksas lejupielādei. Atļauts izmantot personiskām vajadzībām un sociālajiem tīkliem ar atsauci uz Plāns B.'
            : 'Free to download. Personal use and social media welcome — please credit Plāns B when sharing.'}
        </p>
      </section>

      {/* Grid */}
      <section style={{ padding: '0 60px 120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 24 }}>
          {photos.map((p, i) => (
            <figure key={p.base} style={{ margin: 0 }}>
              <div className="ap-card" style={{ aspectRatio: '4/5' }}>
                <img src={`/photos/${p.base}.jpg`} alt={p.label} />
                <div className="ap-actions">
                  <div>
                    <div className="ap-display" style={{ fontSize: 16, color: cream, marginBottom: 4 }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="ap-mono" style={{ fontSize: 9, color: cream, opacity: 0.75 }}>
                      /{p.event}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <a className="ap-dl" href={`/photos/${p.base}.jpg`} download={`plansb-${p.base}.jpg`}>JPG ↓</a>
                    <a className="ap-dl ap-dl-ghost" href={`/photos/${p.base}.png`} download={`plansb-${p.base}.png`}>PNG ↓</a>
                  </div>
                </div>
              </div>
              <figcaption className="ap-mono" style={{ marginTop: 14, fontSize: 10, opacity: 0.6, display: 'flex', justifyContent: 'space-between' }}>
                <span>{p.label}</span>
                <span>{p.event}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Empty-state hint when there's only a placeholder */}
        {photos.length < 4 && (
          <div style={{ marginTop: 80, padding: '32px', border: `1px dashed ${ink}30`, textAlign: 'center' }}>
            <div className="ap-mono" style={{ fontSize: 11, opacity: 0.55 }}>
              /{lang === 'lv' ? 'DRĪZUMĀ — VAIRĀK BILŽU NO PASĀKUMIEM' : 'COMING SOON — MORE EVENT PHOTOS'}
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 60px', borderTop: `1px solid ${ink}15`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        <img src="/photos/logo-plans-b.png" alt="Plāns B" style={{ height: 44, width: 'auto', display: 'block' }} />
        <div style={{ display: 'flex', gap: 24 }}>
          {[
            ['Instagram', 'https://www.instagram.com/plans.b'],
            ['YouTube', 'https://www.youtube.com/@plans-b'],
            ['Facebook', 'https://www.facebook.com/profile.php?id=61589813964001'],
          ].map(([s, href], i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer" className="ap-mono ap-link" style={{ fontSize: 11 }}>
              /{s.toUpperCase()} ↗
            </a>
          ))}
        </div>
        <span className="ap-mono" style={{ fontSize: 10, opacity: 0.5 }}>© {new Date().getFullYear()} · PLANS-B.LV · LIEPĀJA</span>
      </footer>

      <GrainOverlay opacity={grain} blend="multiply" />
    </div>
  );
}

window.ConceptAnomalyPhotos = ConceptAnomalyPhotos;
