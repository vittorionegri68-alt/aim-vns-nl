// Diensten-NL.jsx, AI'm by VNS NL
// v3.0, nieuwe pakketopbouw (Starter, Complete website, Growth), november 2026
import { useEffect, useRef } from 'react'

const pakketten = [
  {
    nome: 'Starter',
    tag: 'Eerste stap',
    desc: "Je hebt een website maar weet niet of ChatGPT jou kan vinden? We controleren hoe het er nu voor staat, vertellen je wat niet werkt en leveren alles wat nodig is om het te verbeteren. Eenmalige betaling, geen abonnement.",
    incluso: [
      'Gratis eerste analyse, geen verplichtingen',
      'Volledige controle van hoe AI-zoekmachines jou zien',
      'Geoptimaliseerde technische bestanden klaar voor je website',
      'Tweede controle na 30 dagen om verbeteringen te meten',
      'Aanbevelingen voor Google Bedrijfsprofiel',
    ],
    prezzo: 'Vanaf 290 EUR',
    prezzoSub: 'Eenmalige betaling · Geen abonnement',
    cta: 'Vraag je audit aan',
    highlight: false,
  },
  {
    nome: 'Complete website',
    tag: 'Om te starten',
    desc: "We bouwen je website vanaf nul, ontworpen om vanaf dag één gevonden te worden door ChatGPT, met de Q&A-pagina met de vragen van je klanten en het eerste blogartikel. Bij oplevering is de website van jou, op je eigen account. Eenmalige betaling, geen abonnement.",
    incluso: [
      'Analyse van je huidige situatie voor we beginnen',
      'Nieuwe website gebouwd voor AI-zoekmachines',
      'Q&A-pagina met de 10 echte vragen van je klanten',
      'Eerste blogartikel',
      'Google Bedrijfsprofiel: installatie inbegrepen',
      'Indexering in zoekmachines',
      'Technische verificatie voor publicatie',
      'Preview binnen 3 dagen na ontvangst van al het materiaal',
      'Controle na 30 dagen om verbeteringen te meten',
    ],
    prezzo: 'Vanaf 800 EUR',
    prezzoSub: 'Eenmalige betaling · Geen abonnement',
    cta: 'Bespreek je project',
    highlight: false,
  },
  {
    nome: 'Growth',
    tag: 'Hoofddienst',
    desc: "Alles uit Complete website, plus doorlopend beheer: elke twee weken een nieuw blogartikel, een dashboard met je zichtbaarheidsdata altijd actueel en rapporten die laten zien hoe de resultaten groeien, met echte cijfers. De relatie met je klanten blijft bij jou.",
    incluso: [
      'Alles uit Complete website',
      'Blogartikel elke twee weken, door ons beheerd',
      'Persoonlijk dashboard: je zichtbaarheidsdata altijd live',
      'Maandelijkse rapporten de eerste 3 maanden, daarna per kwartaal',
      'Gesprek met Vittorio om de data samen te bespreken',
      'Corrigerende acties inbegrepen',
      'Doorlopende ondersteuning per e-mail',
    ],
    prezzo: 'Vanaf 800 EUR',
    prezzoSub: '+ jaarabonnement vanaf 900 EUR',
    cta: 'Bespreek je project',
    highlight: true,
  },
]

export default function Diensten() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return (
    <section id="diensten" ref={ref}
      style={{ background: '#0d0d0d', padding: 'clamp(64px,8vw,120px) 0', borderTop: '1px solid #141414' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(24px,4vw,64px)' }}>
        <div style={{ marginBottom: 'clamp(40px,5vw,64px)' }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '10px',
            letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A0782A',
            marginBottom: '1rem' }}>Pakketten</div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
            fontSize: 'clamp(36px,4vw,64px)', textTransform: 'uppercase',
            letterSpacing: '0.02em', color: '#ffffff', lineHeight: 0.95 }}>
            KIES JE<br />
            <span style={{ color: '#A0782A' }}>STARTPUNT.</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(13px,1vw,15px)',
            color: '#AAAAAA', lineHeight: 1.7, marginTop: '1.5rem', maxWidth: '600px' }}>
            Je werkt rechtstreeks met Vittorio, zonder tussenpersonen.
            Elke aanpak wordt samen met jou opgebouwd, in gewone taal uitgelegd
            en geverifieerd voor publicatie. Geen vakjargon, geen verrassingen.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          gap: '1px', background: '#141414' }} className="packs-grid">
          {pakketten.map((p, i) => (
            <div key={i} className="reveal"
              style={{ background: p.highlight ? '#0f0f0f' : '#0a0a0a',
                padding: 'clamp(28px,3vw,48px) clamp(20px,2.5vw,36px)',
                borderTop: p.highlight ? '2px solid #A0782A' : '2px solid transparent',
                transitionDelay: `${i * 0.1}s`, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700,
                fontSize: '9px', color: p.highlight ? '#A0782A' : '#333',
                letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{p.tag}</div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                fontSize: 'clamp(28px,2.5vw,40px)', color: '#ffffff',
                textTransform: 'uppercase', letterSpacing: '0.02em',
                marginBottom: '1rem', lineHeight: 1 }}>{p.nome}</div>
              <div style={{ width: '24px', height: '1px', background: '#1A1A1A', marginBottom: '1rem' }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(13px,1vw,14px)',
                color: '#AAAAAA', lineHeight: 1.7, marginBottom: '1.5rem' }}>{p.desc}</p>
              <ul style={{ listStyle: 'none', marginBottom: '2rem', flex: 1 }}>
                {p.incluso.map((item, j) => (
                  <li key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px',
                    color: '#AAAAAA', padding: '6px 0', borderBottom: '1px solid #141414',
                    display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#A0782A', fontSize: '10px' }}>-</span>{item}
                  </li>
                ))}
              </ul>
              <div style={{ borderTop: '1px solid #141414', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                  fontSize: 'clamp(24px,2vw,32px)', color: p.highlight ? '#A0782A' : '#ffffff',
                  letterSpacing: '0.02em', lineHeight: 1 }}>{p.prezzo}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px',
                  color: '#AAAAAA', marginTop: '4px', letterSpacing: '0.05em' }}>{p.prezzoSub}</div>
              </div>
              <a href="https://calendly.com/aim-vns-info/30min" target="_blank" rel="noopener" style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 700,
                fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
                color: p.highlight ? '#080808' : '#ffffff',
                background: p.highlight ? '#A0782A' : 'transparent',
                border: p.highlight ? 'none' : '1px solid #1A1A1A',
                padding: '12px 24px', borderRadius: 0,
                textDecoration: 'none', display: 'inline-block',
                transition: 'all 0.2s', textAlign: 'center',
              }}
              onMouseEnter={e => {
                if (p.highlight) { e.currentTarget.style.opacity = '0.85' }
                else { e.currentTarget.style.borderColor = '#A0782A'; e.currentTarget.style.color = '#A0782A' }
              }}
              onMouseLeave={e => {
                if (p.highlight) { e.currentTarget.style.opacity = '1' }
                else { e.currentTarget.style.borderColor = '#1A1A1A'; e.currentTarget.style.color = '#ffffff' }
              }}
              >{p.cta} →</a>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#AAAAAA',
          letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '1.5rem', textAlign: 'center' }}>
          Alle prijzen zijn exclusief BTW · Extra taal 150 EUR · Jaarabonnement: verlengen of opzeggen vóór de einddatum
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#AAAAAA',
          lineHeight: 1.7, margin: '1rem auto 0', maxWidth: '720px', textAlign: 'center' }}>
          Growth afgesloten samen met de bouw van de website: 10% korting op het totaal van het eerste jaar.
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#AAAAAA',
          lineHeight: 1.7, margin: '1rem auto 0', maxWidth: '720px', textAlign: 'center' }}>
          Wil je de website zelf beheren met Claude? Wij richten alles in op je computer, prijs op aanvraag. Eventuele kosten van Claude beoordelen we per geval: in de meeste gevallen is het gratis account nu voldoende.
        </p>
      </div>
      <style>{`
        @media (max-width: 768px) { .packs-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
