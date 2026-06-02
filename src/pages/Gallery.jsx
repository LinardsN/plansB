import React from 'react';
import { GrainOverlay } from '../shared/components.jsx';
import { COPY } from '../shared/copy.js';

// Anomaly Gallery — separate /galerija page for band promo photos.
// Same dark palette as ConceptAnomaly. View-only (no download buttons), bigger grid.

export default function ConceptAnomalyGallery({ lang = 'lv', grain = 0.08 }) {
  const t = COPY[lang];
  const paper = '#161310';
  const ink = '#F0E8D8';
  const oxblood = '#B23A3F';
  const cream = '#F5EFE2';

  // Band promo photos — different content from /bildes (event photos)
  const photos = [
    { src: '/photos/best.jpg', ar: '4/5', pos: 'center' },
    { src: '/photos/band-hero.jpg', ar: '3/2', pos: 'center 35%' },
    { src: '/photos/seated.jpg', ar: '1', pos: 'center' },
    { src: '/photos/blur.jpg', ar: '1', pos: 'center' },
    { src: '/photos/singer.jpg', ar: '4/5', pos: 'center 20%' },
    { src: '/photos/drumlogo.jpg', ar: '4/5', pos: 'center 25%' },
    { src: '/photos/band-stage.jpg', ar: '3/2', pos: 'center 30%' },
    { src: '/photos/beard.jpg', ar: '4/5', pos: 'center' },
    { src: '/photos/hat.jpg', ar: '1', pos: 'center' },
    { src: '/photos/group.jpg', ar: '3/2', pos: 'center 35%' },
    { src: '/photos/circle.jpg', ar: '4/5', pos: 'center' },
    { src: '/photos/suit.jpg', ar: '4/5', pos: 'center' },
  ];

  const css = `
    .ag-root { font-family: 'Inter', sans-serif; color: ${ink}; background: ${paper}; min-height: 100vh; }
    .ag-display { font-family: 'Archivo', 'Inter', sans-serif; font-weight: 900; letter-spacing: -0.025em; line-height: 0.92; text-transform: uppercase; }
    .ag-mono { font-family: 'JetBrains Mono', monospace; letter-spacing: 0.14em; text-transform: uppercase; }
    .ag-link { color: ${ink}; text-decoration: none; opacity: 0.78; transition: opacity .2s ease; }
    .ag-link:hover { opacity: 1; }
    .ag-card { overflow: hidden; background: ${paper}; }
    .ag-card img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .5s ease, filter .3s ease; filter: brightness(0.85) contrast(1.05); }
    .ag-card:hover img { transform: scale(1.03); filter: brightness(0.95) contrast(1.05); }
  `;

  return (
    <div className="ag-root" style={{ position: 'relative' }}>
      <style>{css}</style>

      {/* Top nav */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 60px', borderBottom: `1px solid ${ink}15` }}>
        <a href="/" className="ag-mono ag-link" style={{ fontSize: 11, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <span>←</span> {lang === 'lv' ? '/ATPAKAĻ' : '/BACK'}
        </a>
        <a href="/" style={{ display: 'inline-flex' }}>
          <img src="/photos/logo-plans-b.png" alt="Plāns B" style={{ height: 56, width: 'auto', display: 'block' }} />
        </a>
        <div className="ag-mono" style={{ fontSize: 11, opacity: 0.6 }}>
          /{lang === 'lv' ? 'GALERIJA' : 'GALLERY'}
        </div>
      </header>

      {/* Page title */}
      <section style={{ padding: '100px 60px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
          <span className="ag-mono" style={{ fontSize: 11, color: oxblood }}>/{lang === 'lv' ? 'NO SKATUVES' : 'FROM THE STAGE'}</span>
          <span style={{ width: 40, height: 1, background: `${ink}40` }} />
          <span className="ag-mono" style={{ fontSize: 10, opacity: 0.5 }}>{String(photos.length).padStart(2, '0')} {lang === 'lv' ? 'BILDES' : 'PHOTOS'}</span>
        </div>
        <h1 className="ag-display" style={{ fontSize: 112, margin: 0, lineHeight: 0.9, color: ink }}>
          {lang === 'lv' ? <>Galerija.<br /><em style={{ fontStyle: 'italic', color: oxblood }}>Mēs uz skatuves.</em></> : <>Gallery.<br /><em style={{ fontStyle: 'italic', color: oxblood }}>On stage.</em></>}
        </h1>
      </section>

      {/* Masonry-style grid using CSS columns for varied heights */}
      <section style={{ padding: '0 60px 120px' }}>
        <div style={{ columnCount: 3, columnGap: 16 }}>
          {photos.map((p, i) => (
            <figure key={i} style={{ margin: 0, marginBottom: 16, breakInside: 'avoid' }}>
              <div className="ag-card" style={{ aspectRatio: p.ar }}>
                <img src={p.src} alt="" loading="lazy" decoding="async" style={{ objectPosition: p.pos }} />
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 60px', borderTop: `1px solid ${ink}15`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        <img src="/photos/logo-plans-b.png" alt="Plāns B" style={{ height: 44, width: 'auto', display: 'block' }} />
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          {[
            ['Instagram', 'https://www.instagram.com/plans.b'],
            ['YouTube', 'https://www.youtube.com/@plans-b'],
            ['Facebook', 'https://www.facebook.com/profile.php?id=61589813964001'],
          ].map(([s, href], i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="ag-mono ag-link" style={{ fontSize: 11 }}>
              /{s.toUpperCase()} ↗
            </a>
          ))}
          <a href="/privatums/" className="ag-mono ag-link" style={{ fontSize: 11 }}>
            /{t.privacyLink.toUpperCase()}
          </a>
        </div>
        <span className="ag-mono" style={{ fontSize: 10, opacity: 0.5 }}>© {new Date().getFullYear()} · PLANS-B.LV · LIEPĀJA</span>
      </footer>

      <GrainOverlay opacity={grain} blend="multiply" />
    </div>
  );
}
