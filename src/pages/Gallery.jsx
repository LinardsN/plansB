import React from 'react';
import { GrainOverlay } from '../shared/components.jsx';
import { COPY } from '../shared/copy.js';

// Anomaly Gallery — separate /galerija page for band promo photos.
// Same dark palette as ConceptAnomaly. View-only (no download buttons), bigger grid.
// Click any photo to open a full-screen lightbox; Escape or backdrop click closes,
// Arrow keys cycle through the set.

export default function ConceptAnomalyGallery({ lang = 'lv', grain = 0.08 }) {
  const t = COPY[lang];
  const paper = '#161310';
  const ink = '#F0E8D8';
  const oxblood = '#B23A3F';
  const cream = '#F5EFE2';
  const [openIndex, setOpenIndex] = React.useState(null);

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
    .ag-trigger { all: unset; cursor: zoom-in; display: block; width: 100%; }
    .ag-trigger:focus-visible { outline: 2px solid ${oxblood}; outline-offset: 2px; }
    .ag-lightbox { position: fixed; inset: 0; z-index: 1000; background: rgba(11,9,7,0.94); display: flex; align-items: center; justify-content: center; padding: 32px; animation: agFade .15s ease-out; }
    .ag-lightbox img { max-width: 100%; max-height: 100%; object-fit: contain; cursor: zoom-out; filter: none; }
    .ag-lb-btn { position: absolute; top: 20px; background: transparent; border: 1px solid ${ink}; color: ${ink}; padding: 8px 14px; cursor: pointer; font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; transition: background .15s ease, color .15s ease; }
    .ag-lb-btn:hover { background: ${ink}; color: ${paper}; }
    .ag-lb-nav { position: absolute; top: 50%; transform: translateY(-50%); background: transparent; border: 1px solid ${ink}40; color: ${ink}; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 20px; transition: background .15s ease, border-color .15s ease; }
    .ag-lb-nav:hover { background: ${ink}; color: ${paper}; border-color: ${ink}; }
    .ag-lb-counter { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); color: ${ink}80; font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.16em; }
    @keyframes agFade { from { opacity: 0; } to { opacity: 1; } }
    @media (max-width: 600px) {
      .ag-lightbox { padding: 16px; }
      .ag-lb-nav { width: 40px; height: 40px; }
    }
  `;

  const close = React.useCallback(() => setOpenIndex(null), []);
  const next = React.useCallback(() => setOpenIndex((i) => (i + 1) % photos.length), [photos.length]);
  const prev = React.useCallback(() => setOpenIndex((i) => (i - 1 + photos.length) % photos.length), [photos.length]);

  React.useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, next, prev]);

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
              <button
                type="button"
                className="ag-trigger"
                onClick={() => setOpenIndex(i)}
                aria-label={lang === 'lv' ? `Atvērt bildi ${i + 1} no ${photos.length}` : `Open photo ${i + 1} of ${photos.length}`}>
                <div className="ag-card" style={{ aspectRatio: p.ar }}>
                  <img src={p.src} alt="" loading="lazy" decoding="async" style={{ objectPosition: p.pos }} />
                </div>
              </button>
            </figure>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          className="ag-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lang === 'lv' ? 'Bildes skats' : 'Photo viewer'}
          onClick={close}>
          <img
            src={photos[openIndex].src}
            alt=""
            onClick={(e) => e.stopPropagation()} />
          <button
            type="button"
            className="ag-lb-btn"
            style={{ right: 20 }}
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label={lang === 'lv' ? 'Aizvērt' : 'Close'}>
            {lang === 'lv' ? 'Aizvērt ×' : 'Close ×'}
          </button>
          <button
            type="button"
            className="ag-lb-nav"
            style={{ left: 20 }}
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label={lang === 'lv' ? 'Iepriekšējā' : 'Previous'}>←</button>
          <button
            type="button"
            className="ag-lb-nav"
            style={{ right: 20 }}
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label={lang === 'lv' ? 'Nākamā' : 'Next'}>→</button>
          <span className="ag-lb-counter">{String(openIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}</span>
        </div>
      )}

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
