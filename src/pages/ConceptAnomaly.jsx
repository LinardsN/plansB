import React from 'react';
import { COPY } from '../shared/copy.js';
import { GrainOverlay } from '../shared/components.jsx';
import { WEB3FORMS_KEY, FORM_MIN_DWELL_MS } from '../shared/config.js';

// Concept — ANOMALY (editorial / poster-zine, ref: 10am Space "Anoma")
// Layout DNA:
// - Cream paper with subtle stock texture
// - Oversized geometric uppercase sans (Archivo or Anton-style) for everything that matters
// - Oxblood/burgundy color blocks layered over band photos
// - Slash-prefixed mono labels: /TOUR DATES, /QUIET FORMATION
// - Asymmetric grids — photo + manifesto card side-by-side with deliberate offset
// - Small thumbnail strips for "discography" / "lineup"

export default function ConceptAnomaly({ lang, setLang, grain = 0.10, theme = 'light' }) {
  const t = COPY[lang];
  const dark = theme === 'dark';
  const mountedAt = React.useRef(Date.now());

  // Palette
  const paper = dark ? '#161310' : '#EFE9DC'; // bg
  const ink = dark ? '#F0E8D8' : '#15110D';   // primary text/foreground
  const oxblood = dark ? '#B23A3F' : '#7A1F22'; // accent (richer red on dark for contrast)
  const oxbloodDeep = dark ? '#7A1F22' : '#5A1518'; // hover for tour rows
  const cream = dark ? '#F5EFE2' : '#F5EFE2'; // text inside oxblood blocks (always cream)
  const muted = dark ? '#F0E8D880' : '#15110D80';
  const onInk = dark ? '#161310' : '#EFE9DC'; // CTA text on dark button (used to be paper)
  const photoFilter = dark ? 'brightness(0.78) contrast(1.05) saturate(0.95)' : 'none';
  const borderTone = dark ? '#F0E8D8' : ink;

  const css = `
    .anom-root { font-family: 'Inter', sans-serif; color: ${ink}; background: ${paper}; }
    .anom-root img { filter: ${photoFilter}; }
    .anom-display { font-family: 'Archivo', 'Inter', sans-serif; font-weight: 900; letter-spacing: -0.025em; line-height: 0.92; text-transform: uppercase; }
    .anom-mono { font-family: 'JetBrains Mono', monospace; letter-spacing: 0.14em; text-transform: uppercase; }
    .anom-link { color: ${ink}; text-decoration: none; opacity: 0.78; transition: opacity .2s ease; position: relative; padding-bottom: 4px; }
    .anom-link:hover { opacity: 1; }
    .anom-link:hover::after { transform: scaleX(1); }
    .anom-link::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 1px; background: ${ink}; transform: scaleX(0); transform-origin: left; transition: transform .25s ease; }
    .anom-cta { display: inline-flex; align-items: center; gap: 14px; padding: 18px 32px; border: 1px solid ${ink}; color: ${onInk}; background: ${ink}; text-decoration: none; font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; transition: all .25s ease; cursor: pointer; }
    .anom-cta:hover { background: ${oxblood}; border-color: ${oxblood}; color: ${cream}; }
    .anom-cta-arrow { display: inline-block; transition: transform .25s ease; }
    .anom-cta:hover .anom-cta-arrow { transform: translateX(4px); }
    .anom-input { border: none; border-bottom: 1px solid ${cream}40; padding: 10px 0; background: transparent; font-size: 14px; outline: none; font-family: inherit; color: ${cream}; transition: border-color .25s ease; -webkit-text-fill-color: ${cream}; caret-color: ${cream}; }
    .anom-input:focus { border-color: ${cream}; }
    .anom-input::placeholder { color: ${cream}30; font-style: italic; }
    .anom-input:-webkit-autofill, .anom-input:-webkit-autofill:hover, .anom-input:-webkit-autofill:focus, .anom-input:-webkit-autofill:active { -webkit-text-fill-color: ${cream} !important; -webkit-box-shadow: 0 0 0 1000px ${dark ? '#0B0907' : ink} inset !important; transition: background-color 5000s ease-in-out 0s; caret-color: ${cream}; }
    .anom-row-link { display: grid; grid-template-columns: 80px 1fr 1fr 1fr; gap: 24px; padding: 20px 24px; align-items: baseline; color: ${cream}; text-decoration: none; border-top: 1px solid ${cream}1a; transition: background .2s; }
    .anom-row-link:hover { background: ${oxbloodDeep}; }
    #contact { scroll-margin-top: 40px; }
    #about, #services, #gallery, #forma { scroll-margin-top: 14vh; }
  `;

  // Slash-prefixed eyebrow used everywhere
  const Slash = ({ children, color }) =>
  <span className="anom-mono" style={{ fontSize: 11, color: color || ink, opacity: 0.65 }}>
      /{children}
    </span>;


  const SectionHead = ({ slash, num, title, kicker }) =>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, marginBottom: 48 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <Slash>{slash}</Slash>
          <span style={{ width: 40, height: 1, background: `${ink}40` }} />
          <span className="anom-mono" style={{ fontSize: 10, opacity: 0.5 }}>{num}</span>
        </div>
        <h2 className="anom-display" style={{ fontSize: 64, margin: 0, color: ink }}>{title}</h2>
      </div>
      {kicker}
    </div>;


  return (
    <div className="anom-root" style={{ position: 'relative', overflow: 'hidden' }}>
      <style>{css}</style>

      {/* Top nav */}
      <header style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '24px 60px', borderBottom: `1px solid ${ink}15`, columnGap: 40 }}>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', justifySelf: 'start' }}>
          <img src="/photos/logo-plans-b.png" alt="Plāns B — dzīva mūzika" style={{ height: 72, width: 'auto', display: 'block' }} />
        </a>
        <nav style={{ display: 'flex', gap: 36, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', alignItems: 'center', justifySelf: 'center' }}>
          <a className="anom-link" href="#about">/{t.nav.about}</a>
          <a className="anom-link" href="#services">/{t.nav.services}</a>
          <a className="anom-link" href="/galerija/">/{t.nav.gallery}</a>
          <a className="anom-link" href="/bildes/">/{lang === 'lv' ? 'BILDES' : 'PHOTOS'}</a>
          <a className="anom-link" href="#contact">/{t.nav.contact}</a>
        </nav>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', justifySelf: 'end' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.18em' }}>
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
          </span>
          <a href="#forma" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 22px', background: oxblood, color: cream, textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', transition: 'background .2s' }}
          onMouseEnter={(e) => {e.currentTarget.style.background = ink;}}
          onMouseLeave={(e) => {e.currentTarget.style.background = oxblood;}}>
            {lang === 'lv' ? 'Rezervēt' : 'Book'} <span>→</span>
          </a>
        </div>
      </header>

      {/* HERO — wide band photo top, oversized headline below sliding into oxblood block */}
      <section style={{ padding: '32px 32px 0', position: 'relative' }}>
        {/* Top meta strip */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 0 24px', fontSize: 11, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.65 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 8, height: 8, background: oxblood, borderRadius: '50%' }} />
            /{lang === 'lv' ? 'PIEEJAMI 2026' : 'BOOKING 2026'}
          </span>
          <span>/N°01 — {lang === 'lv' ? 'DZĪVĀ MŪZIKA' : 'LIVE MUSIC'}</span>
          <span>/LIEPĀJA — LV</span>
        </div>

        {/* Wide band photo */}
        <div style={{ aspectRatio: '16/7', overflow: 'hidden' }}>
          <img src="/photos/band-hero.jpg" alt="" width="2400" height="1050" fetchPriority="high" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', display: 'block' }} />
        </div>

        {/* Headline directly under the photo */}
        <div style={{ padding: '40px 0 80px' }}>
          <h1 className="anom-display" style={{ fontSize: 156, margin: 0, color: ink, lineHeight: 0.88 }}>
            {lang === 'lv' ? <>Vakars,<br />kuru <em style={{ fontStyle: 'italic', fontWeight: 900, color: oxblood }}>atcerēsies.</em></> : <>The night you’ll <em style={{ fontStyle: 'italic', fontWeight: 900, color: oxblood }}>remember.</em></>}
          </h1>
        </div>
      </section>

      {/* ABOUT — manifesto block, oxblood block over photo */}
      <section id="about" style={{ padding: '120px 60px 60px', position: 'relative' }}>
        <SectionHead slash={lang === 'lv' ? 'KLUSAIS SASTĀVS' : 'QUIET FORMATION'} num="01 / 03" title={lang === 'lv' ? 'Pieci no Liepājas, viens vakars priekš tevis.' : 'Five from Liepāja, one night for you.'} />

        <div style={{ position: 'relative', marginTop: 24 }}>
          {/* big background photo — full group shot */}
          <div style={{ aspectRatio: '16/8', overflow: 'hidden' }}>
            <img src="/photos/band-stage.jpg" alt="" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }} />
          </div>
          {/* oxblood block over the photo */}
          <div style={{ position: 'absolute', left: '6%', bottom: '-60px', width: '64%', background: oxblood, color: cream, padding: '48px 56px' }}>
            <div className="anom-mono" style={{ fontSize: 10, color: cream, opacity: 0.7, marginBottom: 28 }}>
              /{lang === 'lv' ? 'KLUSAIS SASTĀVS' : 'QUIET FORMATION'}
            </div>
            <p className="anom-display" style={{ fontSize: 32, margin: 0, lineHeight: 1.05 }}>
              {lang === 'lv' ? <>No nogurušām stundām un nepateiktiem vārdiem<span style={{ color: '#E8C7B0' }}>,</span> kolektīvs<span style={{ color: '#E8C7B0' }}>,</span> kas radies ap skaņas un kustības pulsu<span style={{ color: '#E8C7B0' }}>.</span></> : <>From fragments of sleepless hours and unspoken thoughts<span style={{ color: '#E8C7B0' }}>,</span> a collective formed around the pulse of sound and movement<span style={{ color: '#E8C7B0' }}>.</span></>}
            </p>
          </div>
        </div>

        {/* sub-paragraph below */}
        <div style={{ marginTop: 140, display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, maxWidth: 1100 }}>
          <div className="anom-mono" style={{ fontSize: 10, opacity: 0.55 }}>
            /{lang === 'lv' ? 'PAR MUMS' : 'ABOUT'}<br />
            <span style={{ display: 'inline-block', marginTop: 12, opacity: 1 }}>{t.aboutLead}</span>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.65, margin: 0, color: ink }}>
            {t.aboutBody}
          </p>
        </div>
      </section>

      {/* SERVICES — typographic list, no cards */}
      <section id="services" style={{ padding: '120px 60px 60px' }}>
        <SectionHead slash={lang === 'lv' ? 'KO SPĒLĒJAM' : 'WHAT WE PLAY'} num="02 / 03" title={t.eventsTitle} />
        <div style={{ borderTop: `1px solid ${ink}20` }}>
          {t.events.map((ev, i) =>
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 2fr', gap: 32, padding: '32px 0', borderBottom: `1px solid ${ink}20`, alignItems: 'baseline' }}>
              <span className="anom-mono" style={{ fontSize: 11, color: oxblood }}>0{i + 1}</span>
              <h3 className="anom-display" style={{ fontSize: 36, margin: 0 }}>{ev.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.55, margin: 0, opacity: 0.75, maxWidth: 460 }}>{ev.body}</p>
            </div>
          )}
        </div>
      </section>

      {/* GALLERY — interesting asymmetric grid */}
      <section id="gallery" style={{ padding: '120px 0 60px' }}>
        <div style={{ padding: '0 60px' }}>
          <SectionHead slash={lang === 'lv' ? 'NO SKATUVES' : 'FROM THE STAGE'} num="03 / 03" title={t.galleryTitle} />
        </div>
        {/* Minimal-style asymmetric grid: 1.4fr / 1fr / 1fr with 7:10 left + 2x2 squares right */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 8, padding: '0 8px' }}>
          <div style={{ aspectRatio: '7/10', overflow: 'hidden' }}>
            <img src="/photos/best.jpg" alt="" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
              <img src="/photos/seated.jpg" alt="" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
              <img src="/photos/blur.jpg" alt="" loading="lazy" decoding="async" style={{ width: '100%', objectFit: 'cover', height: "360.062px" }} />
            </div>
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
              <img src="/photos/drumlogo.jpg" alt="" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%' }} />
            </div>
            <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
              <img src="/photos/singer.jpg" alt="" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
            </div>
          </div>
        </div>
        <div style={{ padding: '24px 60px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="anom-mono" style={{ fontSize: 10, opacity: 0.55 }}>/{t.galleryCaption}</span>
          <a href="/galerija/" className="anom-mono" style={{ fontSize: 11, color: oxblood, textDecoration: 'none' }}>
            {lang === 'lv' ? 'Vairāk foto →' : 'More photos →'}
          </a>
        </div>
      </section>

      {/* PRESS / TESTIMONIALS — two-column quote block */}
      <section style={{ padding: '120px 60px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <Slash>{lang === 'lv' ? 'KĀZAS' : 'WEDDINGS'}</Slash>
            <p className="anom-display" style={{ fontSize: 28, lineHeight: 1.15, marginTop: 20, marginBottom: 20, fontStyle: 'normal' }}>
              {t.quoteWedding}
            </p>
            <span className="anom-mono" style={{ fontSize: 10, opacity: 0.55 }}>{t.quoteWeddingBy}</span>
          </div>
          <div>
            <Slash>{lang === 'lv' ? 'KORPORATĪVAIS' : 'CORPORATE'}</Slash>
            <p className="anom-display" style={{ fontSize: 28, lineHeight: 1.15, marginTop: 20, marginBottom: 20 }}>
              {t.quoteCorp}
            </p>
            <span className="anom-mono" style={{ fontSize: 10, opacity: 0.55 }}>{t.quoteCorpBy}</span>
          </div>
        </div>
      </section>

      {/* CONTACT — red-overlay photo banner + dark form */}
      <section style={{ background: dark ? '#0B0907' : ink, color: cream, position: 'relative' }}>
        {/* Atmosphere photo with red wash leading into the contact form */}
        <div style={{ aspectRatio: '16/4', overflow: 'hidden', position: 'relative' }}>
          <img src="/photos/band-floor.jpg" alt="" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', display: 'block', filter: 'saturate(0.85)' }} />
          <div style={{ position: 'absolute', inset: 0, background: oxblood, mixBlendMode: 'multiply', opacity: 0.55 }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 40%, ${oxblood}aa 100%)` }} />
        </div>

        <div id="contact" style={{ padding: '120px 60px 80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, marginBottom: 56 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <Slash color={cream}>{lang === 'lv' ? 'SAZINIES' : 'GET IN TOUCH'}</Slash>
              <span style={{ width: 40, height: 1, background: `${cream}40` }} />
              <span className="anom-mono" style={{ fontSize: 10, opacity: 0.5, color: cream }}>04 / 03</span>
            </div>
            <h2 className="anom-display" style={{ fontSize: 72, margin: 0, color: cream, maxWidth: 800 }}>
              {t.contactTitle}
            </h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, maxWidth: 1180 }}>
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.72, maxWidth: 360, margin: '0 0 48px' }}>
              {t.contactSub} {lang === 'lv' ?
              'Aizpildiet formu vai sazinieties tieši — pasakiet pasākuma datumu, vietu un cik viesu.' :
              'Fill the form or reach out directly — tell us the date, venue and how many guests.'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <div className="anom-mono" style={{ fontSize: 9, opacity: 0.55, marginBottom: 6 }}>/E-MAIL</div>
                <a href="mailto:info@plans-b.lv" style={{ color: cream, fontSize: 22, textDecoration: 'none', fontFamily: 'Archivo, sans-serif', fontWeight: 700, letterSpacing: '-0.01em' }}>info@plans-b.lv</a>
              </div>
              <div>
                <div className="anom-mono" style={{ fontSize: 9, opacity: 0.55, marginBottom: 6 }}>/{lang === 'lv' ? 'BĀZE' : 'BASED IN'}</div>
                <div style={{ fontSize: 15, opacity: 0.85 }}>Liepāja, Latvija</div>
              </div>
            </div>
          </div>

          <div>
            <form
              id="forma"
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={(e) => {
                // Honeypot: humans can't submit faster than the minimum dwell.
                if (Date.now() - mountedAt.current < FORM_MIN_DWELL_MS) {
                  e.preventDefault();
                }
              }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
              <input type="hidden" name="subject" value="Plāns B — jauns pieprasījums" />
              <input type="hidden" name="from_name" value="plans-b.lv" />
              {/* Web3Forms honeypot: filled by bots, ignored by Web3Forms otherwise. */}
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />
              {[
              ['name', t.fields.name, '', 'text'],
              ['email', t.fields.email, '', 'email'],
              ['date', t.fields.date, '', 'text'],
              ['venue', t.fields.venue, '', 'text']].
              map(([k, l, ph, type]) =>
              <label key={k} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <span className="anom-mono" style={{ fontSize: 9, opacity: 0.55 }}>/{l}</span>
                  <input type={type} name={k} placeholder={ph} className="anom-input" required autoComplete={k === 'email' ? 'email' : k === 'name' ? 'name' : 'off'} />
                </label>
              )}
              <label style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span className="anom-mono" style={{ fontSize: 9, opacity: 0.55 }}>/{t.fields.message}</span>
                <textarea name="message" rows={3} placeholder="" className="anom-input" style={{ resize: 'none' }} required />
              </label>
              <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
                <span className="anom-mono" style={{ fontSize: 9, opacity: 0.55 }}>
                  /{lang === 'lv' ? 'ATBILDAM 24 STUNDU LAIKĀ' : 'WE REPLY WITHIN 24 HOURS'}
                </span>
                <button type="submit" className="anom-cta" style={{ background: oxblood, borderColor: oxblood }}>
                  {t.submit} <span className="anom-cta-arrow">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div style={{ marginTop: 100, paddingTop: 32, borderTop: `1px solid ${cream}1f`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <img src="/photos/logo-plans-b.png" alt="Plāns B" style={{ height: 48, width: 'auto', display: 'block' }} />
          <span className="anom-mono" style={{ fontSize: 10, opacity: 0.5 }}>© {new Date().getFullYear()} · PLANS-B.LV · LIEPĀJA</span>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            {[
              ['Instagram', 'https://www.instagram.com/plans.b'],
              ['YouTube', 'https://www.youtube.com/@plans-b'],
              ['Facebook', 'https://www.facebook.com/profile.php?id=61589813964001'],
            ].map(([s, href], i) =>
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="anom-mono" style={{ color: cream, opacity: 0.7, textDecoration: 'none', fontSize: 11 }}>
                /{s.toUpperCase()} ↗
              </a>
            )}
            <a href="/privatums/" className="anom-mono" style={{ color: cream, opacity: 0.55, textDecoration: 'none', fontSize: 11 }}>
              /{t.privacyLink.toUpperCase()}
            </a>
          </div>
        </div>

        </div>
      </section>

      <GrainOverlay opacity={grain} blend="multiply" />
    </div>);

}
