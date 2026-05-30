// Shared copy + utilities for all four concepts.

const COPY = {
  lv: {
    nav: { about: 'Par mums', services: 'Pakalpojumi', gallery: 'Galerija', shows: 'Koncerti', contact: 'Sazināties' },
    cta: 'Rezervēt vakaru',
    ctaShort: 'Rezervēt',
    book: 'Pieprasīt cenu',
    listen: 'Klausīties',
    tagline: 'Dzīvā mūzika jūsu vakaram',
    heroSub: 'Pieci mūziķi no Liepājas. Vakars, ko atcerēsies.',
    yearsTogether: 'Liepāja',
    aboutLead: 'Mēs spēlējam to, ko gribi dzirdēt. Un to, ko vēl nezini, ka gribi.',
    aboutBody: 'Plāns B ir piecu cilvēku sastāvs no Liepājas. Klasika, mūsdienu hīti, latviešu zelta fonds, drīzumā arī oriģinālmūzika. Vakara repertuāru lasām pēc telpas.',
    eventsTitle: 'Kur mēs spēlējam',
    eventsSub: 'No klusas viesistabas līdz pilnai zālei.',
    events: [
      { title: 'Kāzas', body: 'No pirmā deju soļa līdz pēdējam tostam.' },
      { title: 'Korporatīvi', body: 'Gada balles, atklāšanas, prezentācijas.' },
      { title: 'Privatas ballītes', body: 'Jubilejas, kāzu jubilejas, slēgti pasākumi.' },
      { title: 'Festivāli', body: 'Brīvdabas skatuves un pilsētas svētki.' },
    ],
    galleryTitle: 'No skatuves',
    galleryCaption: 'Vakars mēģinājumu telpā · 2026',
    showsTitle: 'Tuvākie koncerti',
    showsSub: 'Atvērti pasākumi — visi laipni gaidīti.',
    shows: [
      { date: '14.06', city: 'Rīga', venue: 'Hanzas Perons', tag: 'Vasaras atklāšana' },
      { date: '28.06', city: 'Cēsis', venue: 'Pils parks', tag: 'Brīvdabas koncerts' },
      { date: '12.07', city: 'Liepāja', venue: 'Lielais dzintars', tag: 'Jūras festivāls' },
      { date: '02.08', city: 'Sigulda', venue: 'Siguldas estrāde', tag: 'Augusta vakari' },
    ],
    quoteWedding: '“Visu vakaru deju grīda nebija tukša ne minūti. Pat vecmāmiņa dejoja.”',
    quoteWeddingBy: '— Anna & Mārtiņš, kāzas Cēsīs',
    quoteCorp: '“Profesionāli, punktuāli, un viesi joprojām runā par to vakaru.”',
    quoteCorpBy: '— SEB Baltika, gada balle',
    contactTitle: 'Pastāstiet par savu vakaru',
    contactSub: 'Atbildam 24 stundu laikā.',
    fields: { name: 'Vārds', email: 'E-pasts', phone: 'Telefons', date: 'Datums', venue: 'Norises vieta', type: 'Pasākuma veids', message: 'Pastāstiet vairāk' },
    submit: 'Nosūtīt pieprasījumu',
    footer: 'Plāns B · Liepāja · ',
    listenOn: 'Klausies',
    setlistLabel: 'Repertuārs',
    setlist: 'No Raimonda Paula līdz Daft Punk. Latviešu, krievu, angļu — pēc vakara noskaņas.',
    aboutFigures: [
      { n: '5', l: 'mūziķi' },
      { n: 'Liepāja', l: 'mājas pilsēta' },
      { n: '180+', l: 'pasākumi' },
    ],
    scrollHint: 'Ritiniet',
  },
  en: {
    nav: { about: 'About', services: 'Services', gallery: 'Gallery', shows: 'Shows', contact: 'Contact' },
    cta: 'Book the night',
    ctaShort: 'Book now',
    book: 'Request a quote',
    listen: 'Listen',
    tagline: 'Live music for the night you remember',
    heroSub: 'Five musicians from Liepāja. A night you remember.',
    yearsTogether: 'Liepāja',
    aboutLead: 'We play what you want to hear. And what you didn\'t know you wanted.',
    aboutBody: 'Plāns B is a five-piece from Liepāja. Standards, modern hits, Latvian classics, and originals on the way. We read the room.',
    eventsTitle: 'Where we play',
    eventsSub: 'From a quiet living room to a full hall.',
    events: [
      { title: 'Weddings', body: 'From first dance to last toast.' },
      { title: 'Corporate', body: 'Year-end parties, openings, launches.' },
      { title: 'Private parties', body: 'Birthdays, anniversaries, closed events.' },
      { title: 'Festivals', body: 'Open-air stages and city celebrations.' },
    ],
    galleryTitle: 'From the stage',
    galleryCaption: 'A night in the rehearsal room · 2026',
    showsTitle: 'Upcoming shows',
    showsSub: 'Open events — everyone welcome.',
    shows: [
      { date: 'Jun 14', city: 'Riga',    venue: 'Hanzas Perons',     tag: 'Summer opener' },
      { date: 'Jun 28', city: 'Cēsis',   venue: 'Castle park',       tag: 'Open air' },
      { date: 'Jul 12', city: 'Liepāja', venue: 'Great Amber',       tag: 'Sea festival' },
      { date: 'Aug 02', city: 'Sigulda', venue: 'Sigulda bandshell', tag: 'August nights' },
    ],
    quoteWedding: '“The dance floor was never empty. Even grandma was dancing.”',
    quoteWeddingBy: '— Anna & Mārtiņš, wedding in Cēsis',
    quoteCorp: '“Professional, on time, and our guests are still talking about it.”',
    quoteCorpBy: '— SEB Baltic, annual gala',
    contactTitle: 'Tell us about your night',
    contactSub: 'We reply within 24 hours.',
    fields: { name: 'Name', email: 'Email', phone: 'Phone', date: 'Date', venue: 'Venue', type: 'Event type', message: 'Tell us more' },
    submit: 'Send request',
    footer: 'Plāns B · Liepāja · ',
    listenOn: 'Listen',
    setlistLabel: 'Setlist',
    setlist: 'Raimonds Pauls to Daft Punk. Latvian, Russian, English — read by the room.',
    aboutFigures: [
      { n: '5', l: 'musicians' },
      { n: 'Liepāja', l: 'home town' },
      { n: '180+', l: 'shows played' },
    ],
    scrollHint: 'Scroll',
  },
};

// Photo placeholder for missing gallery shots
function PhotoPlaceholder({ seed = 1, label = 'Foto', tone = 'warm', children }) {
  const palettes = {
    warm:  ['#3b2a20', '#6b4a35', '#a37752', '#d8b48a'],
    cool:  ['#1d2330', '#2c3a4a', '#4d6076', '#9aaec0'],
    sepia: ['#2a1f17', '#4f3a26', '#8a6b47', '#c8a878'],
    ink:   ['#0e0e10', '#1f1f22', '#2c2c30', '#5a5a60'],
    rose:  ['#2a1818', '#5a2a2a', '#a85a4a', '#e8b6a0'],
    plum:  ['#1a0d22', '#3a1a44', '#6e3a6e', '#c08aa8'],
  };
  const [c1, c2, c3, c4] = palettes[tone] || palettes.warm;
  const ang = (seed * 47) % 360;
  const ox = 30 + ((seed * 17) % 40);
  const oy = 25 + ((seed * 31) % 50);
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%', overflow: 'hidden',
      background: `radial-gradient(ellipse at ${ox}% ${oy}%, ${c4} 0%, ${c3} 25%, ${c2} 55%, ${c1} 100%)`,
    }}>
      <svg viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice"
           style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', mixBlendMode: 'multiply', opacity: 0.55 }}>
        <g transform={`translate(${200}, 320) rotate(${(seed % 2) ? -3 : 4})`}>
          <ellipse cx="-120" cy="-40" rx="32" ry="40" fill={c2} opacity="0.85" />
          <ellipse cx="-40" cy="-60" rx="34" ry="42" fill={c2} opacity="0.85" />
          <ellipse cx="40" cy="-50" rx="32" ry="40" fill={c2} opacity="0.85" />
          <ellipse cx="120" cy="-35" rx="30" ry="38" fill={c2} opacity="0.85" />
          <path d="M -180 80 Q -120 0 -60 30 Q 0 -10 60 25 Q 120 -5 180 60 L 200 220 L -200 220 Z" fill={c2} opacity="0.9" />
        </g>
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
        opacity: 0.35, mixBlendMode: 'overlay', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', left: 10, bottom: 8,
        fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.12em',
        color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase',
      }}>· {label} ·</div>
      {children}
    </div>
  );
}

// Reusable grain overlay
function GrainOverlay({ opacity = 0.18, blend = 'overlay', zIndex = 50 }) {
  if (!opacity) return null;
  return (
    <div aria-hidden style={{
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex,
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
      opacity, mixBlendMode: blend,
    }} />
  );
}

// Concept brief card next to each artboard
function ConceptBrief({ number, name, mood, palette, type, photography, accent = '#1c1c1c', bg = '#F2EDE3' }) {
  return (
    <div style={{
      width: 300, padding: '32px 28px', background: bg, color: accent,
      fontFamily: 'Inter, sans-serif', border: `1px solid ${accent}1a`,
      display: 'flex', flexDirection: 'column', gap: 18, borderRadius: 4,
    }}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.55 }}>
        Concept {number}
      </div>
      <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: '-0.01em' }}>
        {name}
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.55, opacity: 0.78 }}>{mood}</div>
      <div style={{ height: 1, background: `${accent}1f` }} />
      <BriefRow label="Palette">
        <div style={{ display: 'flex', gap: 6, marginTop: 6, flexWrap: 'wrap' }}>
          {palette.map((p) => (
            <div key={p.hex} title={`${p.name} ${p.hex}`} style={{
              display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, fontFamily: 'JetBrains Mono, monospace',
            }}>
              <div style={{ width: 14, height: 14, background: p.hex, borderRadius: 2, border: '1px solid rgba(0,0,0,0.1)' }} />
              <span style={{ opacity: 0.7 }}>{p.hex}</span>
            </div>
          ))}
        </div>
      </BriefRow>
      <BriefRow label="Type">{type}</BriefRow>
      <BriefRow label="Photography">{photography}</BriefRow>
    </div>
  );
}

function BriefRow({ label, children }) {
  return (
    <div>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontSize: 12.5, lineHeight: 1.5 }}>{children}</div>
    </div>
  );
}

// Top nav (shared shell — restyled per concept via props)
function TopNav({ lang, setLang, t, accent, onAccent, font, sticky, onCta, divider }) {
  const cells = [
    ['about', t.nav.about],
    ['services', t.nav.services],
    ['gallery', t.nav.gallery],
    ['shows', t.nav.shows],
    ['contact', t.nav.contact],
  ];
  return (
    <div style={{
      position: sticky ? 'sticky' : 'relative',
      top: 0, zIndex: 30,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 32px', color: accent, fontFamily: font || 'Inter, sans-serif',
      borderBottom: divider ? `1px solid ${accent}26` : 'none',
      background: 'transparent',
    }}>
      <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: 18, letterSpacing: '0.01em' }}>
        Plāns B
      </div>
      <div style={{ display: 'flex', gap: 28, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {cells.map(([k, v]) => (
          <a key={k} href={`#${k}`} style={{ color: 'inherit', textDecoration: 'none', opacity: 0.85 }}>{v}</a>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 11, letterSpacing: '0.12em' }}>
        <button onClick={() => setLang('lv')}
          style={{ all: 'unset', cursor: 'pointer', opacity: lang === 'lv' ? 1 : 0.45, fontWeight: 600 }}>LV</button>
        <span style={{ opacity: 0.3 }}>/</span>
        <button onClick={() => setLang('en')}
          style={{ all: 'unset', cursor: 'pointer', opacity: lang === 'en' ? 1 : 0.45, fontWeight: 600 }}>EN</button>
      </div>
    </div>
  );
}

// Form fields shared
function ContactForm({ t, accent, bg, font, inputBg = 'transparent', borderStyle = 'underline', buttonStyle }) {
  const fields = t.fields;
  const inputBase = {
    fontFamily: 'inherit', fontSize: 14, color: accent, background: inputBg,
    width: '100%', padding: '14px 0', border: 'none', outline: 'none',
    borderBottom: borderStyle === 'underline' ? `1px solid ${accent}40` : 'none',
  };
  const wrapBoxed = borderStyle === 'box' ? {
    border: `1px solid ${accent}33`, padding: '12px 16px',
  } : {};
  const Input = (props) => (
    <div style={wrapBoxed}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.55 }}>
        {props.label}
      </div>
      <input {...props} placeholder="" style={{ ...inputBase, ...(borderStyle === 'box' ? { borderBottom: 'none', padding: '4px 0 0' } : {}) }} />
    </div>
  );
  return (
    <form onSubmit={(e) => { e.preventDefault(); alert(t.submit + ' ✓'); }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, fontFamily: font, color: accent }}>
      <Input label={fields.name} name="name" />
      <Input label={fields.email} name="email" type="email" />
      <Input label={fields.date} name="date" type="text" />
      <Input label={fields.venue} name="venue" />
      <div style={{ gridColumn: '1 / -1' }}>
        <Input label={fields.type} name="type" />
      </div>
      <div style={{ gridColumn: '1 / -1', ...wrapBoxed }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.55 }}>
          {fields.message}
        </div>
        <textarea rows={3} style={{ ...inputBase, resize: 'none', ...(borderStyle === 'box' ? { borderBottom: 'none', padding: '4px 0 0' } : {}) }} />
      </div>
      <button type="submit" style={{
        gridColumn: '1 / -1', cursor: 'pointer', justifySelf: 'start',
        ...buttonStyle,
      }}>{t.submit} →</button>
    </form>
  );
}

// Tweaks-aware photo. Real photo if loaded, placeholder otherwise.
function Photo({ src, alt, tone, seed, label, filter, style, children, fit = 'cover' }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', ...style }}>
      {src ? (
        <img src={src} alt={alt || ''} style={{ width: '100%', height: '100%', objectFit: fit, display: 'block', filter }} />
      ) : (
        <PhotoPlaceholder tone={tone} seed={seed} label={label} />
      )}
      {children}
    </div>
  );
}

Object.assign(window, { COPY, PhotoPlaceholder, GrainOverlay, ConceptBrief, BriefRow, TopNav, ContactForm, Photo });
