import React from 'react';

// Simple 404 — same dark aesthetic, big "404" wordmark, link back home.

export default function NotFound() {
  const paper = '#161310';
  const ink = '#F0E8D8';
  const oxblood = '#B23A3F';
  const cream = '#F5EFE2';

  const css = `
    .nf-root { font-family: 'Inter', sans-serif; color: ${ink}; background: ${paper}; min-height: 100vh; display: flex; flex-direction: column; }
    .nf-display { font-family: 'Archivo', sans-serif; font-weight: 900; letter-spacing: -0.04em; line-height: 0.85; text-transform: uppercase; }
    .nf-mono { font-family: 'JetBrains Mono', monospace; letter-spacing: 0.16em; text-transform: uppercase; font-size: 11px; }
    .nf-cta { display: inline-flex; align-items: center; gap: 12px; padding: 16px 28px; background: ${oxblood}; color: ${cream}; text-decoration: none; font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; transition: background .2s ease; }
    .nf-cta:hover { background: ${ink}; color: ${paper}; }
  `;

  return (
    <div className="nf-root">
      <style>{css}</style>

      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 60px', borderBottom: `1px solid ${ink}15` }}>
        <a href="/" style={{ display: 'inline-flex' }}>
          <img src="/photos/logo-plans-b.png" alt="Plāns B" style={{ height: 56, width: 'auto', display: 'block' }} />
        </a>
        <div className="nf-mono" style={{ opacity: 0.6 }}>/404</div>
      </header>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 32px', maxWidth: 1000, margin: '0 auto', width: '100%' }}>
        <span className="nf-mono" style={{ color: oxblood, marginBottom: 24 }}>/LAPA NAV ATRASTA · PAGE NOT FOUND</span>
        <h1 className="nf-display" style={{ fontSize: 220, margin: '0 0 32px', color: ink, lineHeight: 0.85 }}>
          4<em style={{ fontStyle: 'italic', color: oxblood }}>0</em>4
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.78, maxWidth: 560, margin: '0 0 40px' }}>
          Šeit nekas nav. Varbūt mēs to esam pārvietojuši, varbūt tas nekad
          nav bijis. Atgriezies mājaslapā.
          <br />
          <span style={{ opacity: 0.6, fontStyle: 'italic' }}>
            Nothing here. Maybe we moved it, maybe it never was. Head home.
          </span>
        </p>
        <div>
          <a href="/" className="nf-cta">← Uz sākumlapu / Home</a>
        </div>
      </main>

      <footer style={{ padding: '24px 60px', borderTop: `1px solid ${ink}15` }}>
        <span className="nf-mono" style={{ opacity: 0.5, fontSize: 10 }}>© {new Date().getFullYear()} · PLANS-B.LV · LIEPĀJA</span>
      </footer>
    </div>
  );
}
