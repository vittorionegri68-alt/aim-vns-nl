// Diensten-NL.jsx — AI'm by VNS NL
// v2.0 — tekst herschreven voor niet-technisch publiek — juni 2026
import { useEffect, useRef } from 'react'

const pakketten = [
  {
    nome: 'Starter',
    tag: 'Eerste stap',
    desc: "Je hebt een website maar weet niet of ChatGPT jou kan vinden? We controleren hoe het er nu voor staat, vertellen je wat niet werkt en leveren alles wat nodig is om het te verbeteren. Eenmalige betaling, geen abonnement.",
    incluso: [
      'Gratis eerste analyse — geen verplichtingen',
      'Volledige controle van hoe AI-zoekmachines jou zien',
      'Geoptimaliseerde technische bestanden klaar voor je website',
      'Tweede controle na 30 dagen om verbeteringen te meten',
      'Aanbevelingen voor Google Bedrijfsprofiel',
    ],
    prezzo: 'Vanaf 180 EUR',
    prezzoSub: 'Eenmalige betaling · Geen abonnement',
    cta: 'Vraag je audit aan',
    highlight: false,
  },
  {
    nome: 'Growth',
    tag: 'Hoofddienst',
    desc: "We bouwen je website vanaf nul, ontworpen om vanaf dag een gevonden te worden door ChatGPT. Daarna houden we hem actueel met nieuwe content en laten we je zien hoe de resultaten groeien, met echte cijfers. Heb je al een website? Laten we praten: we beoordelen elke situatie samen.",
    incluso: [
      'Analyse van je huidige situatie voor we beginnen',
      'Nieuwe website gebouwd voor AI-zoekmachines',
      'Google Bedrijfsprofiel — installatie inbegrepen',
      'Technische verificatie voor publicatie',
      'Content gebouwd rond de echte vragen van je klanten',
      'Blogartikel elke twee weken, automatisch',
      'Maandelijkse rapporten de eerste 3 maanden, daarna per kwartaal',
      'Gesprek met Vittorio om de data samen te bespreken',
      'Corrigerende acties inbegrepen',
      'Doorlopende ondersteuning per e-mail',
    ],
    prezzo: 'Vanaf 480 EUR',
    prezzoSub: '+ jaarabonnement vanaf 500 EUR',
    cta: 'Bespreek je project',
    highlight: true,
  },
  {
    nome: 'Pro',
    tag: 'Maximale zichtbaarheid',
    desc: "Alles uit Growth, plus een Q&A-pagina op je website, een persoonlijk dashboard met je zichtbaarheidsdata altijd actueel, en geautomatiseerde publicatie op Instagram. De relatie met je klanten blijft bij jou.",
    incluso: [
      'Alles uit Growth',
      'Q&A-pagina met de 10 echte vragen van je klanten',
      'Persoonlijk dashboard — je zichtbaarheidsdata altijd live',
      'Geautomatiseerde Instagram-publicatie',
      'Maandelijkse rapporten in plaats van per kwartaal',
    ],
    prezzo: 'Vanaf 580 EUR',
    prezzoSub: '+ jaarabonnement vanaf 780 EUR',
    cta: 'Bespreek je project',
    highlight: false,
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
                    <span style={{ color: '#A0782A', fontSize: '10px' }}>—</span>{item}
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
          Alle prijzen zijn exclusief BTW · Extra taal 100 EUR · Minimale looptijd 12 maanden voor Growth en Pro
        </p>
      </div>
      <style>{`
        @media (max-width: 768px) { .packs-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
