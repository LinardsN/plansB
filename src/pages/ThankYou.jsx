import React from 'react';

// Bilingual thank-you page shown after a successful form submission.
// Reached only via Netlify Forms redirect (action="/paldies/").

export default function ThankYou() {
  const paper = '#161310';
  const ink = '#F0E8D8';
  const oxblood = '#B23A3F';
  const cream = '#F5EFE2';

  const css = `
    .ty-root { font-family: 'Inter', sans-serif; color: ${ink}; background: ${paper}; min-height: 100vh; display: flex; flex-direction: column; }
    .ty-display { font-family: 'Archivo', sans-serif; font-weight: 900; letter-spacing: -0.03em; line-height: 0.9; text-transform: uppercase; }
    .ty-mono { font-family: 'JetBrains Mono', monospace; letter-spacing: 0.16em; text-transform: uppercase; font-size: 11px; }
    .ty-cta { display: inline-flex; align-items: center; gap: 12px; padding: 16px 28px; background: ${oxblood}; color: ${cream}; text-decoration: none; font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; transition: background .2s ease, color .2s ease; }
    .ty-cta:hover { background: ${ink}; color: ${paper}; }
  `;

  return (
    <div className="ty-root">
      <style>{css}</style>

      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 60px', borderBottom: `1px solid ${ink}15` }}>
        <a href="/" style={{ display: 'inline-flex' }}>
          <img src="/photos/logo-plans-b.png" alt="Plāns B" style={{ height: 56, width: 'auto', display: 'block' }} />
        </a>
        <div className="ty-mono" style={{ opacity: 0.6 }}>/PALDIES</div>
      </header>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 32px', maxWidth: 900, margin: '0 auto', width: '100%' }}>
        <span className="ty-mono" style={{ color: oxblood, marginBottom: 24 }}>/PIEPRASĪJUMS SAŅEMTS · REQUEST RECEIVED</span>
        <h1 className="ty-display" style={{ fontSize: 96, margin: '0 0 32px', color: ink, lineHeight: 0.9 }}>
          Paldies.<br /><em style={{ fontStyle: 'italic', color: oxblood }}>Atbildam 24h.</em>
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.78, maxWidth: 560, margin: '0 0 12px' }}>
          Mēs saņēmām jūsu ziņojumu un atbildēsim 24 stundu laikā uz norādīto e-pastu.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.6, opacity: 0.55, fontStyle: 'italic', maxWidth: 560, margin: '0 0 40px' }}>
          We received your message and will reply within 24 hours.
        </p>
        <div>
          <a href="/" className="ty-cta">← Atpakaļ uz sākumlapu / Back home</a>
        </div>
      </main>

      <footer style={{ padding: '24px 60px', borderTop: `1px solid ${ink}15` }}>
        <span className="ty-mono" style={{ opacity: 0.5, fontSize: 10 }}>© {new Date().getFullYear()} · PLANS-B.LV · LIEPĀJA</span>
      </footer>
    </div>
  );
}
