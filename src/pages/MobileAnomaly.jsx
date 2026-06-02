import React from 'react';
import { COPY } from '../shared/copy.js';
import { WEB3FORMS_KEY, FORM_MIN_DWELL_MS } from '../shared/config.js';

// MobileAnomaly — mobile-first version of the anomaly-dark concept.
// Designed for ~390px viewport. Big hero image, burger menu, generous tap
// targets, single-column flow.

export default function MobileAnomaly({ lang = 'lv', setLang }) {
  const t = COPY[lang];
  const [menuOpen, setMenuOpen] = React.useState(false);
  const mountedAt = React.useRef(Date.now());

  // Palette (matches anomaly-dark)
  const bg = '#161310';
  const ink = '#F0E8D8';
  const oxblood = '#B23A3F';
  const cream = '#F5EFE2';
  const muted = '#F0E8D880';

  const css = `
    .ma-root { font-family: 'Inter', sans-serif; color: ${ink}; background: ${bg}; min-height: 100%; }
    .ma-root img { filter: brightness(0.85) contrast(1.05) saturate(0.95); }
    .ma-display { font-family: 'Archivo', sans-serif; font-weight: 900; letter-spacing: -0.025em; line-height: 0.9; text-transform: uppercase; }
    .ma-mono { font-family: 'JetBrains Mono', monospace; letter-spacing: 0.16em; text-transform: uppercase; font-size: 10px; }
    .ma-link { color: ${ink}; text-decoration: none; }
    .ma-cta { display: block; text-align: center; padding: 18px 24px; background: ${oxblood}; color: ${cream}; text-decoration: none; font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 700; }
    .ma-cta-ghost { background: transparent; border: 1px solid ${ink}; color: ${ink}; }
    .ma-input { border: none; border-bottom: 1px solid ${cream}30; padding: 12px 0; background: transparent; font-size: 15px; outline: none; font-family: inherit; color: ${cream}; width: 100%; }
    .ma-input:focus { border-color: ${oxblood}; }
    .ma-input::placeholder { color: ${cream}30; font-style: italic; }
    .ma-section-head { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
    .ma-section-rule { flex: 1; height: 1px; background: ${ink}25; }
    /* Scroll offsets so anchor-jump lands the title/form near the middle of the viewport */
    #contact { scroll-margin-top: 24px; }
    #about, #services, #gallery { scroll-margin-top: 18vh; }
    #forma { scroll-margin-top: 24vh; }
  `;

  const SectionHead = ({ num, label }) => (
    <div className="ma-section-head">
      <span className="ma-mono" style={{ color: oxblood }}>/{num}</span>
      <span className="ma-section-rule" />
      <span className="ma-mono" style={{ opacity: 0.6 }}>{label}</span>
    </div>
  );

  return (
    <div className="ma-root" style={{ position: 'relative' }}>
      <style>{css}</style>

      {/* Sticky header with burger */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 30,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 20px', background: `${bg}f5`, backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${ink}10`,
      }}>
        <a href="#" style={{ display: 'inline-flex' }}>
          <img src="/photos/logo-plans-b.png" alt="Plāns B" style={{ height: 56, width: 'auto', filter: 'none' }} />
        </a>
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Menu"
          style={{ background: 'none', border: 'none', padding: 10, cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5 }}>
          <span style={{ width: 22, height: 2, background: ink, display: 'block' }} />
          <span style={{ width: 22, height: 2, background: ink, display: 'block' }} />
          <span style={{ width: 16, height: 2, background: ink, display: 'block', alignSelf: 'flex-end' }} />
        </button>
      </header>

      {/* Burger overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 100, background: bg,
          display: 'flex', flexDirection: 'column', padding: '70px 24px 32px',
        }}>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close"
            style={{ position: 'absolute', top: 18, right: 16, background: 'none', border: 'none', padding: 10, color: ink, fontSize: 24, cursor: 'pointer' }}>
            ×
          </button>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 40 }}>
            {[
              ['#about', t.nav.about],
              ['#services', t.nav.services],
              ['/galerija/', t.nav.gallery],
              ['/bildes/', lang === 'lv' ? 'Bildes' : 'Photos'],
              ['#contact', t.nav.contact],
            ].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}
                 className="ma-display" style={{ fontSize: 36, color: ink, textDecoration: 'none' }}>
                /{label.toLowerCase()}
              </a>
            ))}
          </nav>
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'flex', gap: 14, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.18em' }}>
              <button
                type="button"
                onClick={() => setLang && setLang('lv')}
                aria-pressed={lang === 'lv'}
                style={{ all: 'unset', cursor: 'pointer', color: lang === 'lv' ? oxblood : muted, fontWeight: 700 }}>LV</button>
              <span style={{ opacity: 0.3 }}>/</span>
              <button
                type="button"
                onClick={() => setLang && setLang('en')}
                aria-pressed={lang === 'en'}
                style={{ all: 'unset', cursor: 'pointer', color: lang === 'en' ? oxblood : muted, fontWeight: 700 }}>EN</button>
            </div>
            <a href="#forma" onClick={() => setMenuOpen(false)} className="ma-cta">
              {lang === 'lv' ? 'Rezervēt' : 'Book'} →
            </a>
          </div>
        </div>
      )}

      {/* HERO — big edge-to-edge photo, text below */}
      <section style={{ position: 'relative' }}>
        <div style={{ aspectRatio: '3/4', overflow: 'hidden', position: 'relative' }}>
          <img src="/photos/band-hero.jpg" alt="" fetchPriority="high" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, ${bg}40 0%, transparent 30%, ${bg}99 100%)` }} />
          {/* meta strip overlay */}
          <div style={{ position: 'absolute', top: 16, left: 20, right: 20, display: 'flex', justifyContent: 'space-between', fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: cream, opacity: 0.85 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 6, height: 6, background: oxblood, borderRadius: '50%' }} />
              /{lang === 'lv' ? 'PIEEJAMI 2026' : 'BOOKING 2026'}
            </span>
            <span>/LIEPĀJA</span>
          </div>
        </div>

        <div style={{ padding: '32px 20px 40px' }}>
          <h1 className="ma-display" style={{ fontSize: 52, margin: 0, color: ink, lineHeight: 0.9 }}>
            {lang === 'lv' ? <>Vakars,<br />kuru <em style={{ fontStyle: 'italic', fontWeight: 900, color: oxblood }}>atcerēsies.</em></> : <>The night you'll <em style={{ fontStyle: 'italic', fontWeight: 900, color: oxblood }}>remember.</em></>}
          </h1>
          <a href="#forma" className="ma-cta" style={{ marginTop: 32 }}>
            {lang === 'lv' ? 'Rezervēt vakaru' : 'Book the night'} →
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '40px 20px 56px' }}>
        <SectionHead num="01" label={lang === 'lv' ? 'KLUSAIS SASTĀVS' : 'QUIET FORMATION'} />
        <h2 className="ma-display" style={{ fontSize: 32, margin: '0 0 24px', color: ink }}>
          {lang === 'lv' ? <>Pieci no Liepājas,<br />viens vakars <em style={{ fontStyle: 'italic', color: oxblood }}>prieš tevis.</em></> : <>Five from Liepāja,<br />one night <em style={{ fontStyle: 'italic', color: oxblood }}>for you.</em></>}
        </h2>
        <div style={{ aspectRatio: '3/2', overflow: 'hidden', marginBottom: 20 }}>
          <img src="/photos/band-stage.jpg" alt="" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
        </div>
        <div style={{ background: oxblood, color: cream, padding: '24px', marginBottom: 28 }}>
          <div className="ma-mono" style={{ marginBottom: 14, opacity: 0.75 }}>/{lang === 'lv' ? 'MANIFESTS' : 'MANIFESTO'}</div>
          <p className="ma-display" style={{ fontSize: 20, margin: 0, lineHeight: 1.1 }}>
            {lang === 'lv'
              ? 'No nogurušām stundām un nepateiktiem vārdiem, kolektīvs, kas radies ap skaņas un kustības pulsu.'
              : 'From sleepless hours and unspoken thoughts, a collective formed around the pulse of sound and movement.'}
          </p>
        </div>
        <p style={{ fontSize: 15, lineHeight: 1.65, opacity: 0.85, margin: 0 }}>
          {t.aboutBody}
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '0 20px 56px' }}>
        <SectionHead num="02" label={lang === 'lv' ? 'KO SPĒLĒJAM' : 'WHAT WE PLAY'} />
        <h2 className="ma-display" style={{ fontSize: 32, margin: '0 0 24px', color: ink }}>
          {t.eventsTitle}
        </h2>
        <div style={{ borderTop: `1px solid ${ink}20` }}>
          {(t.events || []).map((ev, i) => (
            <div key={i} style={{ padding: '20px 0', borderBottom: `1px solid ${ink}20` }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
                <span className="ma-mono" style={{ color: oxblood, fontSize: 10 }}>0{i + 1}</span>
                <h3 className="ma-display" style={{ fontSize: 22, margin: 0 }}>{ev.title}</h3>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.7, margin: '0 0 0 28px' }}>{ev.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ padding: '0 0 56px' }}>
        <div style={{ padding: '0 20px' }}>
          <SectionHead num="03" label={lang === 'lv' ? 'NO SKATUVES' : 'FROM THE STAGE'} />
          <h2 className="ma-display" style={{ fontSize: 32, margin: '0 0 24px', color: ink }}>
            {t.galleryTitle}
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, padding: '0 4px' }}>
          {[
            ['/photos/best.jpg', 'center', '4/5'],
            ['/photos/seated.jpg', 'center', '4/5'],
            ['/photos/blur.jpg', 'center', '1'],
            ['/photos/drumlogo.jpg', 'center 25%', '1'],
            ['/photos/singer.jpg', 'center 20%', '4/5'],
            ['/photos/band-stage.jpg', 'center 30%', '4/5'],
          ].map(([src, pos, ar], i) => (
            <div key={i} style={{ aspectRatio: ar, overflow: 'hidden' }}>
              <img src={src} alt="" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos }} />
            </div>
          ))}
        </div>
        <div style={{ padding: '20px 20px 0', textAlign: 'center' }}>
          <a href="/galerija/" className="ma-mono" style={{ color: oxblood, textDecoration: 'none', borderBottom: `1px solid ${oxblood}`, paddingBottom: 3 }}>
            {lang === 'lv' ? 'Vairāk foto →' : 'More photos →'}
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '40px 20px 56px' }}>
        <div style={{ marginBottom: 32 }}>
          <span className="ma-mono" style={{ color: oxblood }}>/{lang === 'lv' ? 'KĀZAS' : 'WEDDINGS'}</span>
          <p className="ma-display" style={{ fontSize: 22, lineHeight: 1.2, margin: '14px 0 12px' }}>
            {t.quoteWedding}
          </p>
          <span className="ma-mono" style={{ opacity: 0.55 }}>{t.quoteWeddingBy}</span>
        </div>
        <div>
          <span className="ma-mono" style={{ color: oxblood }}>/{lang === 'lv' ? 'KORPORATĪVAIS' : 'CORPORATE'}</span>
          <p className="ma-display" style={{ fontSize: 22, lineHeight: 1.2, margin: '14px 0 12px' }}>
            {t.quoteCorp}
          </p>
          <span className="ma-mono" style={{ opacity: 0.55 }}>{t.quoteCorpBy}</span>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ background: '#0B0907', color: cream, position: 'relative' }}>
        <div style={{ aspectRatio: '16/8', overflow: 'hidden', position: 'relative' }}>
          <img src="/photos/band-floor.jpg" alt="" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }} />
          <div style={{ position: 'absolute', inset: 0, background: oxblood, mixBlendMode: 'multiply', opacity: 0.6 }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 40%, ${oxblood}cc 100%)` }} />
        </div>
        <div id="contact" style={{ padding: '48px 20px 40px' }}>
          <SectionHead num="04" label={lang === 'lv' ? 'SAZINIES' : 'GET IN TOUCH'} />
          <h2 className="ma-display" style={{ fontSize: 36, margin: '0 0 16px', color: cream, lineHeight: 1 }}>
            {t.contactTitle}
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.7, margin: '0 0 32px' }}>
            {t.contactSub} {lang === 'lv'
              ? 'Aizpildiet formu vai sazinieties tieši.'
              : 'Fill the form or reach out directly.'}
          </p>

          <div style={{ marginBottom: 32 }}>
            <div className="ma-mono" style={{ opacity: 0.55, marginBottom: 6, fontSize: 9 }}>/E-MAIL</div>
            <a href="mailto:info@plans-b.lv" style={{ color: cream, fontSize: 18, textDecoration: 'none', fontFamily: 'Archivo, sans-serif', fontWeight: 700 }}>info@plans-b.lv</a>
          </div>

          <form
            id="forma"
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={(e) => {
              if (Date.now() - mountedAt.current < FORM_MIN_DWELL_MS) {
                e.preventDefault();
              }
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
            <input type="hidden" name="subject" value="Plāns B — jauns pieprasījums" />
            <input type="hidden" name="from_name" value="plans-b.lv" />
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />

            {[
              ['name', t.fields.name, 'text'],
              ['email', t.fields.email, 'email'],
              ['date', t.fields.date, 'date'],
              ['venue', t.fields.venue, 'text'],
            ].map(([k, l, type]) => (
              <label key={k} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span className="ma-mono" style={{ opacity: 0.55, fontSize: 9 }}>/{l}</span>
                <input type={type} name={k} className="ma-input" required autoComplete={k === 'email' ? 'email' : k === 'name' ? 'name' : 'off'} />
              </label>
            ))}
            <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span className="ma-mono" style={{ opacity: 0.55, fontSize: 9 }}>/{t.fields.message}</span>
              <textarea name="message" rows={3} className="ma-input" style={{ resize: 'none' }} required />
            </label>
            <button type="submit" className="ma-cta" style={{ marginTop: 12 }}>
              {t.submit} →
            </button>
            <span className="ma-mono" style={{ opacity: 0.5, textAlign: 'center', fontSize: 9 }}>
              /{lang === 'lv' ? 'ATBILDAM 24 STUNDU LAIKĀ' : 'WE REPLY WITHIN 24 HOURS'}
            </span>
          </form>
        </div>

        {/* Footer */}
        <footer style={{ padding: '32px 20px 60px', borderTop: `1px solid ${cream}1a`, display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
          <img src="/photos/logo-plans-b.png" alt="Plāns B" style={{ height: 40, width: 'auto', filter: 'none' }} />
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            {[
              ['Instagram', 'https://www.instagram.com/plans.b'],
              ['YouTube', 'https://www.youtube.com/@plans-b'],
              ['Facebook', 'https://www.facebook.com/profile.php?id=61589813964001'],
            ].map(([s, href]) => (
              <a key={s} href={href} target="_blank" rel="noopener noreferrer" className="ma-mono" style={{ color: cream, opacity: 0.7, textDecoration: 'none', fontSize: 10 }}>
                /{s.toUpperCase()} ↗
              </a>
            ))}
            <a href="/privatums/" className="ma-mono" style={{ color: cream, opacity: 0.55, textDecoration: 'none', fontSize: 10 }}>
              /{t.privacyLink.toUpperCase()}
            </a>
          </div>
          <span className="ma-mono" style={{ opacity: 0.5, fontSize: 9 }}>© {new Date().getFullYear()} · PLANS-B.LV · LIEPĀJA</span>
        </footer>
      </section>
    </div>
  );
}
