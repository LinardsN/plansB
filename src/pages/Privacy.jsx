import React from 'react';

// Privacy notice — renders entirely in the visitor's chosen language.
// Language comes from useLang (localStorage). Covers the GDPR essentials for
// a contact form processed through Netlify Forms.

export default function Privacy({ lang = 'lv' }) {
  const paper = '#161310';
  const ink = '#F0E8D8';
  const oxblood = '#B23A3F';

  const css = `
    .pv-root { font-family: 'Inter', sans-serif; color: ${ink}; background: ${paper}; min-height: 100vh; }
    .pv-display { font-family: 'Archivo', sans-serif; font-weight: 900; letter-spacing: -0.025em; line-height: 0.95; text-transform: uppercase; }
    .pv-mono { font-family: 'JetBrains Mono', monospace; letter-spacing: 0.14em; text-transform: uppercase; font-size: 11px; }
    .pv-link { color: ${oxblood}; text-decoration: underline; text-underline-offset: 3px; }
    .pv-section { margin-bottom: 48px; }
    .pv-section h2 { font-family: 'Archivo', sans-serif; font-weight: 800; font-size: 22px; letter-spacing: -0.01em; margin: 0 0 12px; color: ${ink}; }
    .pv-section p, .pv-section li { font-size: 15px; line-height: 1.65; opacity: 0.85; margin: 0 0 10px; }
    .pv-section ul { padding-left: 22px; margin: 0 0 12px; }
  `;

  const isEn = lang === 'en';
  const t = isEn
    ? {
        backNav: '← /BACK',
        pageLabel: '/PRIVACY',
        eyebrow: '/PRIVACY NOTICE',
        version: 'v1 · 2026',
        heading1: 'How we handle',
        heading2: 'your data.',
        intro: 'This notice explains what personal data we collect when you fill in our contact form, why we collect it, and your rights under GDPR.',
        sections: [
          {
            title: '1. Controller',
            paragraphs: [
              <>Plāns B — an informal musicians’ collective based in Liepāja, Latvia. Contact: <a className="pv-link" href="mailto:info@plans-b.lv">info@plans-b.lv</a>.</>,
            ],
          },
          {
            title: '2. What we collect',
            paragraphs: ['When you fill in the contact form, we collect:'],
            list: ['Your name', 'Email address', 'Planned event date', 'Venue', 'Your message'],
            after: ['We do not use cookies, analytics, tracking, or advertising networks.'],
          },
          {
            title: '3. Why we process it',
            paragraphs: [
              'To respond to your booking inquiry and prepare a proposal. Lawful basis: pre-contractual steps (GDPR Art. 6(1)(b)) or our legitimate interest in responding to inbound inquiries (Art. 6(1)(f)).',
            ],
          },
          {
            title: '4. Recipients',
            paragraphs: [
              <>Form submissions are processed by <strong>FormSubmit</strong> (formsubmit.co) as our data processor — they receive the submission and forward it by email to info@plans-b.lv. FormSubmit's servers are outside the EU; transfers rely on the EC Standard Contractual Clauses. More information: <a className="pv-link" href="https://formsubmit.co/legal/privacy-policy" target="_blank" rel="noopener noreferrer">formsubmit.co/legal/privacy-policy</a>.</>,
              'Only Plāns B members read the messages. We do not sell or share the data.',
            ],
          },
          {
            title: '5. How long we keep it',
            paragraphs: [
              'We keep your message in our email archive as long as needed for the conversation, and for accounting requirements if you become a client. Inquiries that do not lead to a booking are deleted after 12 months.',
            ],
          },
          {
            title: '6. Your rights',
            paragraphs: ['You have the right to:'],
            list: [
              'Access your data and receive a copy',
              'Rectify or erase your data',
              'Restrict or object to processing',
              'Data portability',
              'Withdraw consent (if it was given)',
              <>Lodge a complaint with a supervisory authority — in Latvia: Datu valsts inspekcija (<a className="pv-link" href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer">dvi.gov.lv</a>)</>,
            ],
            after: [
              <>To exercise any of these, email us at <a className="pv-link" href="mailto:info@plans-b.lv">info@plans-b.lv</a>. We respond within one month.</>,
            ],
          },
          {
            title: '7. Automated decision-making',
            paragraphs: ['We do not carry out automated decision-making or profiling.'],
          },
          {
            title: '8. Changes to this notice',
            paragraphs: ['If we update this notice, the version date at the top of this page changes.'],
          },
        ],
      }
    : {
        backNav: '← /ATPAKAĻ',
        pageLabel: '/PRIVĀTUMS',
        eyebrow: '/PRIVĀTUMA PAZIŅOJUMS',
        version: 'v1 · 2026',
        heading1: 'Kā mēs apstrādājam',
        heading2: 'tavus datus.',
        intro: 'Šis paziņojums skaidro, kādus personas datus mēs ievācam, kad aizpildi mūsu kontaktformu, kāpēc mēs tos vācam un kādas ir tavas tiesības saskaņā ar GDPR.',
        sections: [
          {
            title: '1. Pārzinis',
            paragraphs: [
              <>Plāns B — neformāls mūziķu kolektīvs, Liepāja, Latvija. Saziņa: <a className="pv-link" href="mailto:info@plans-b.lv">info@plans-b.lv</a>.</>,
            ],
          },
          {
            title: '2. Kādus datus mēs ievācam',
            paragraphs: ['Kad aizpildi kontaktformu, mēs ievācam:'],
            list: ['Vārdu', 'E-pasta adresi', 'Plānoto pasākuma datumu', 'Norises vietu', 'Tavu ziņojumu'],
            after: ['Mēs neievācam sīkdatnes, neizmantojam analītiku, neveicam izsekošanu un nepārvietojam datus reklāmas tīkliem.'],
          },
          {
            title: '3. Kāpēc mēs tos apstrādājam',
            paragraphs: [
              'Lai atbildētu uz tavu pieprasījumu par pasākumu un sagatavotu piedāvājumu. Juridiskais pamats: pirms-līguma pasākumi (GDPR 6. panta 1. punkta b) apakšpunkts) vai mūsu likumīgās intereses atbildēt uz ienākošajiem ziņojumiem (6. panta 1. punkta f) apakšpunkts).',
            ],
          },
          {
            title: '4. Kam datus nodod',
            paragraphs: [
              <>Formas iesniegšanu apstrādā <strong>FormSubmit</strong> (formsubmit.co) kā mūsu datu apstrādātājs — iesniegums tiek saņemts un pārsūtīts pa e-pastu uz info@plans-b.lv. FormSubmit servera infrastruktūra atrodas ārpus ES; pārsūtīšana balstās uz EK standarta līguma klauzulām. Plašāka informācija: <a className="pv-link" href="https://formsubmit.co/legal/privacy-policy" target="_blank" rel="noopener noreferrer">formsubmit.co/legal/privacy-policy</a>.</>,
              'Saturu redz tikai Plāns B dalībnieki, kas atbild uz pieprasījumiem. Mēs nepārdodam un nedalāmies ar datiem.',
            ],
          },
          {
            title: '5. Cik ilgi datus glabājam',
            paragraphs: [
              'Tavu ziņojumu mēs glabājam savā e-pasta arhīvā tik ilgi, cik nepieciešams sarakstei un, ja jūs kļūstat par mūsu klientu, attiecīgajām finanšu uzskaites prasībām. Pieprasījumus, kas neturpinās līdz rezervācijai, mēs dzēšam pēc 12 mēnešiem.',
            ],
          },
          {
            title: '6. Tavas tiesības',
            paragraphs: ['Tev ir tiesības:'],
            list: [
              'Piekļūt saviem datiem un saņemt to kopiju',
              'Lūgt labot vai dzēst datus',
              'Ierobežot vai iebilst pret apstrādi',
              'Lūgt datu pārnesamību',
              'Atsaukt piekrišanu (ja tā tika sniegta)',
              <>Iesniegt sūdzību uzraudzības iestādei — Latvijā tā ir Datu valsts inspekcija (<a className="pv-link" href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer">dvi.gov.lv</a>)</>,
            ],
            after: [
              <>Lai izmantotu kādu no šīm tiesībām, raksti mums uz <a className="pv-link" href="mailto:info@plans-b.lv">info@plans-b.lv</a>. Mēs atbildam viena mēneša laikā.</>,
            ],
          },
          {
            title: '7. Automātiska lēmumu pieņemšana',
            paragraphs: ['Mēs neveicam automātisku lēmumu pieņemšanu vai profilēšanu.'],
          },
          {
            title: '8. Izmaiņas šajā paziņojumā',
            paragraphs: ['Ja paziņojumu mainām, atjaunojam versijas datumu šīs lapas augšpusē.'],
          },
        ],
      };

  return (
    <div className="pv-root">
      <style>{css}</style>

      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 60px', borderBottom: `1px solid ${ink}15` }}>
        <a href="/" className="pv-mono" style={{ color: ink, textDecoration: 'none', opacity: 0.78, display: 'inline-flex', alignItems: 'center', gap: 10 }}>{t.backNav}</a>
        <a href="/" style={{ display: 'inline-flex' }}>
          <img src="/photos/logo-plans-b.png" alt="Plāns B" style={{ height: 56, width: 'auto', display: 'block' }} />
        </a>
        <div className="pv-mono" style={{ opacity: 0.6 }}>{t.pageLabel}</div>
      </header>

      <main style={{ maxWidth: 780, margin: '0 auto', padding: '80px 32px 120px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
          <span className="pv-mono" style={{ color: oxblood }}>{t.eyebrow}</span>
          <span style={{ flex: 1, height: 1, background: `${ink}30` }} />
          <span className="pv-mono" style={{ opacity: 0.5, fontSize: 10 }}>{t.version}</span>
        </div>

        <h1 className="pv-display" style={{ fontSize: 56, margin: '0 0 48px' }}>
          {t.heading1}<br /><em style={{ color: oxblood }}>{t.heading2}</em>
        </h1>

        <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.9, marginBottom: 56 }}>{t.intro}</p>

        {t.sections.map((section, i) => (
          <div key={i} className="pv-section">
            <h2>{section.title}</h2>
            {section.paragraphs.map((p, j) => <p key={`p${j}`}>{p}</p>)}
            {section.list && (
              <ul>
                {section.list.map((item, j) => <li key={`l${j}`}>{item}</li>)}
              </ul>
            )}
            {section.after && section.after.map((p, j) => <p key={`a${j}`}>{p}</p>)}
          </div>
        ))}
      </main>

      <footer style={{ padding: '32px 60px', borderTop: `1px solid ${ink}15`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        <img src="/photos/logo-plans-b.png" alt="Plāns B" style={{ height: 36, width: 'auto', display: 'block' }} />
        <span className="pv-mono" style={{ opacity: 0.5, fontSize: 10 }}>© {new Date().getFullYear()} · PLANS-B.LV · LIEPĀJA</span>
      </footer>
    </div>
  );
}
