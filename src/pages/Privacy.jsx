import React from 'react';

// Privacy notice — bilingual (LV primary, EN secondary).
// Covers the GDPR essentials for a contact form that routes through Web3Forms.
// Plain text page, no form, no scripts, no tracking.

export default function Privacy() {
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
    .pv-en { opacity: 0.55; font-size: 13px; font-style: italic; margin-top: 8px; padding-left: 14px; border-left: 1px solid ${ink}30; }
  `;

  return (
    <div className="pv-root">
      <style>{css}</style>

      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 60px', borderBottom: `1px solid ${ink}15` }}>
        <a href="/" className="pv-mono" style={{ color: ink, textDecoration: 'none', opacity: 0.78, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <span>←</span> /ATPAKAĻ
        </a>
        <a href="/" style={{ display: 'inline-flex' }}>
          <img src="/photos/logo-plans-b.png" alt="Plāns B" style={{ height: 56, width: 'auto', display: 'block' }} />
        </a>
        <div className="pv-mono" style={{ opacity: 0.6 }}>/PRIVĀTUMS</div>
      </header>

      <main style={{ maxWidth: 780, margin: '0 auto', padding: '80px 32px 120px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
          <span className="pv-mono" style={{ color: oxblood }}>/PRIVĀTUMA PAZIŅOJUMS</span>
          <span style={{ flex: 1, height: 1, background: `${ink}30` }} />
          <span className="pv-mono" style={{ opacity: 0.5, fontSize: 10 }}>v1 · 2026</span>
        </div>

        <h1 className="pv-display" style={{ fontSize: 56, margin: '0 0 48px' }}>
          Kā mēs apstrādājam<br /><em style={{ color: oxblood }}>tavus datus.</em>
        </h1>

        <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.9, marginBottom: 48 }}>
          Šis paziņojums skaidro, kādus personas datus mēs ievācam, kad
          aizpildi mūsu kontaktformu, kāpēc mēs tos vācam un kādas ir tavas
          tiesības saskaņā ar GDPR.
        </p>
        <p className="pv-en" style={{ marginTop: -40, marginBottom: 56 }}>
          This notice explains what personal data we collect when you fill in
          our contact form, why we collect it, and your rights under GDPR.
        </p>

        <div className="pv-section">
          <h2>1. Pārzinis</h2>
          <p>Plāns B — neformāls mūziķu kolektīvs, Liepāja, Latvija. Saziņa: <a className="pv-link" href="mailto:info@plans-b.lv">info@plans-b.lv</a>.</p>
          <p className="pv-en">Controller: Plāns B — informal musicians’ collective, Liepāja, Latvia. Contact: info@plans-b.lv.</p>
        </div>

        <div className="pv-section">
          <h2>2. Kādus datus mēs ievācam</h2>
          <p>Kad aizpildi kontaktformu, mēs ievācam:</p>
          <ul>
            <li>Vārdu</li>
            <li>E-pasta adresi</li>
            <li>Plānoto pasākuma datumu</li>
            <li>Norises vietu</li>
            <li>Tavu ziņojumu</li>
          </ul>
          <p>Mēs neievācam sīkdatnes (cookies), neizmantojam analītiku, neveicam
            izsekošanu un nepārvietojam datus reklāmas tīkliem.</p>
          <p className="pv-en">What we collect (name, email, event date, venue,
            your message). No cookies, no analytics, no tracking, no advertising
            networks.</p>
        </div>

        <div className="pv-section">
          <h2>3. Kāpēc mēs tos apstrādājam</h2>
          <p>Lai atbildētu uz tavu pieprasījumu par pasākumu un sagatavotu
            piedāvājumu. Juridiskais pamats: pirms-līguma pasākumi (GDPR
            6. panta 1. punkta b) apakšpunkts) vai mūsu likumīgās intereses
            atbildēt uz ienākošajiem ziņojumiem (6. panta 1. punkta f) apakšpunkts).</p>
          <p className="pv-en">Purpose: to respond to your booking inquiry.
            Lawful basis: pre-contractual steps (GDPR Art. 6(1)(b)) or
            legitimate interest in responding to inquiries (Art. 6(1)(f)).</p>
        </div>

        <div className="pv-section">
          <h2>4. Kam datus nodod</h2>
          <p>Formas iesniegšanu apstrādā <strong>Web3Forms</strong> (Notionics
            Technologies Pvt. Ltd.) kā mūsu datu apstrādātājs — viņi pārsūta
            ziņojumu uz info@plans-b.lv un to neizmanto citiem mērķiem. Web3Forms
            servera infrastruktūra atrodas ārpus ES; pārsūtīšana balstās uz
            EK standarta līguma klauzulām. Plašāka informācija:{' '}
            <a className="pv-link" href="https://web3forms.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">web3forms.com/legal/privacy-policy</a>.
          </p>
          <p>Saturu redz tikai Plāns B dalībnieki, kas atbild uz pieprasījumiem.
            Mēs nepārdodam un nedalāmies ar datiem.</p>
          <p className="pv-en">Recipients: form submissions are routed through
            Web3Forms (Notionics Technologies Pvt. Ltd.) as our processor; they
            forward the message to info@plans-b.lv. Web3Forms infrastructure is
            outside the EU; transfers rely on EC Standard Contractual Clauses.
            Only Plāns B members read the messages. We do not sell or share data.</p>
        </div>

        <div className="pv-section">
          <h2>5. Cik ilgi datus glabājam</h2>
          <p>Tavu ziņojumu mēs glabājam savā e-pasta arhīvā tik ilgi, cik nepieciešams
            sarakstei un, ja jūs kļūstat par mūsu klientu, attiecīgajām finanšu
            uzskaites prasībām. Pieprasījumus, kas neturpinās līdz rezervācijai,
            mēs dzēšam pēc 12 mēnešiem.</p>
          <p className="pv-en">Retention: we keep your message in our email
            archive as long as needed for the conversation, and for accounting
            requirements if you become a client. Inquiries that do not lead to a
            booking are deleted after 12 months.</p>
        </div>

        <div className="pv-section">
          <h2>6. Tavas tiesības</h2>
          <p>Tev ir tiesības:</p>
          <ul>
            <li>Piekļūt saviem datiem un saņemt to kopiju</li>
            <li>Lūgt labot vai dzēst datus</li>
            <li>Ierobežot vai iebilst pret apstrādi</li>
            <li>Lūgt datu pārnesamību</li>
            <li>Atsaukt piekrišanu (ja tā tika sniegta)</li>
            <li>Iesniegt sūdzību uzraudzības iestādei — Latvijā tā ir Datu
              valsts inspekcija (<a className="pv-link" href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer">dvi.gov.lv</a>)</li>
          </ul>
          <p>Lai izmantotu kādu no šīm tiesībām, raksti mums uz{' '}
            <a className="pv-link" href="mailto:info@plans-b.lv">info@plans-b.lv</a>.
            Mēs atbildam viena mēneša laikā.</p>
          <p className="pv-en">Your rights: access, rectification, erasure,
            restriction, objection, portability, withdrawal of consent, and
            complaint to the Latvian DPA (dvi.gov.lv). To exercise any of these,
            email info@plans-b.lv — we respond within one month.</p>
        </div>

        <div className="pv-section">
          <h2>7. Automātiska lēmumu pieņemšana</h2>
          <p>Mēs neveicam automātisku lēmumu pieņemšanu vai profilēšanu.</p>
          <p className="pv-en">We do not carry out automated decision-making or
            profiling.</p>
        </div>

        <div className="pv-section">
          <h2>8. Izmaiņas šajā paziņojumā</h2>
          <p>Ja paziņojumu mainām, atjaunojam versijas datumu šīs lapas augšpusē.</p>
          <p className="pv-en">Changes: if we update this notice, we update the
            version date at the top of this page.</p>
        </div>
      </main>

      <footer style={{ padding: '32px 60px', borderTop: `1px solid ${ink}15`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        <img src="/photos/logo-plans-b.png" alt="Plāns B" style={{ height: 36, width: 'auto', display: 'block' }} />
        <span className="pv-mono" style={{ opacity: 0.5, fontSize: 10 }}>© {new Date().getFullYear()} · PLANS-B.LV · LIEPĀJA</span>
      </footer>
    </div>
  );
}
