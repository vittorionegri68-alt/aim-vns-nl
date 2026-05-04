// Servizi.jsx — AI'm by VNS NL
// v1.1 — 04/05/2026 — testi pacchetti aggiornati
import { useEffect, useRef } from 'react'

const pacchetti = [
  {
    nome: 'Starter',
    tag: 'Eerste stap',
    desc: 'Je hebt al een website, maar je weet niet of ChatGPT, Gemini of Perplexity je kunnen vinden? We meten je huidige zichtbaarheid op AI-zoekmachines, laten zien wat er ontbreekt en leveren de geoptimaliseerde technische bestanden om de gaten te dichten. Eenmalige betaling, geen abonnement.',
    incluso: [
      'Gratis baseline-analyse in het eerste gesprek — geen verdere verplichtingen',
      'Volledige audit: schema.org, robots.txt, llms.txt, ai.txt, sitemap',
      'Geoptimaliseerde technische bestanden klaar voor gebruik in jouw sector',
      'Tweede baseline na 30 dagen om verbeteringen te meten',
      'Google Business Profile-advies',
    ],
    prezzo: 'Vanaf 180 €',
    prezzoSub: 'Eenmalige betaling · Geen abonnement',
    cta: 'Vraag jouw audit aan',
    highlight: false,
  },
  {
    nome: 'Growth',
    tag: 'Kernservice',
    desc: 'We bouwen je site vanaf nul, geoptimaliseerd om gevonden te worden door ChatGPT, Perplexity en Gemini vanaf de eerste dag. Daarna houden we die site levend met verse content en laten we zien hoe je zichtbaarheid groeit, met echte cijfers. Heb je al een site en wil je die behouden, neem dan contact op: we beoordelen elke situatie individueel.',
    incluso: [
      'Baseline-analyse voordat we beginnen',
      'React-site vanaf nul gebouwd, AI-geoptimaliseerd',
      'Google Business Profile — aanmaak en configuratie inbegrepen',
      'Rich Results Test-validatie voor de livegang',
      '10 gevalideerde GEO/AEO-vragen voor jouw sector',
      'Blogpost om de twee weken, geautomatiseerd',
      'Maandelijkse rapporten gedurende de eerste 3 maanden, daarna per kwartaal',
      'Gesprek na elk rapport met Vittorio om de gegevens te analyseren',
      'Uitvoering van corrigerende acties',
      'Doorlopende e-mailondersteuning',
    ],
    prezzo: 'Vanaf 480 €',
    prezzoSub: '+ jaarabonnement vanaf 500 €',
    cta: 'Praat over jouw project',
    highlight: true,
  },
  {
    nome: 'Pro',
    tag: 'Maximale zichtbaarheid',
    desc: 'Alles uit Growth, plus een publieke Q&A-sectie op de site, een gepersonaliseerd dashboard met jouw AI-zichtbaarheidsdata altijd up-to-date en geautomatiseerde Instagram-publicatie. De relatie met je volgers blijft bij jou.',
    incluso: [
      'Alles uit het Growth-pakket',
      'Publiek Q&A-blok met de 10 gevalideerde vragen en volledige antwoorden',
      'Persoonlijk online dashboard — AI-zichtbaarheidsdata altijd up-to-date',
      'Geautomatiseerde Instagram-publicatie',
      'Maandelijkse rapporten in plaats van per kwartaal',
    ],
    prezzo: 'Vanaf 580 €',
    prezzoSub: '+ jaarabonnement vanaf 780 €',
    cta: 'Praat over jouw project',
    highlight: false,
  },
]

export default function Servizi() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="diensten" ref={ref}
      style={{ background: '#0d0d0d', padding: 'clamp(64px,8vw,120px) 0',
        borderTop: '1px solid #141414' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(24px,4vw,64px)' }}>

        {/* Header */}
        <div style={{ marginBottom: 'clamp(40px,5vw,64px)' }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '10px',
            letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A0782A',
            marginBottom: '1rem' }}>Pakketten</div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
            fontSize: 'clamp(36px,4vw,64px)', textTransform: 'uppercase',
            letterSpacing: '0.02em', color: '#ffffff', lineHeight: 0.95 }}>
            KIES JOUW<br />
            <span style={{ color: '#A0782A' }}>STARTPUNT.</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(13px,1vw,15px)',
            color: '#444', lineHeight: 1.7, marginTop: '1.5rem', maxWidth: '600px' }}>
            Elk AI'm by VNS-project is een directe samenwerking met Vittorio.
            Geen tussenpersonen, geen standaardoplossingen: elke aanpak wordt samen
            met jou opgebouwd en gevalideerd voordat die live gaat.
            We zijn er om jou samen te laten groeien.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          gap: '1px', background: '#141414' }}
          className="packs-grid">
          {pacchetti.map((p, i) => (
            <div key={i} className="reveal"
              style={{
                background: p.highlight ? '#0f0f0f' : '#0a0a0a',
                padding: 'clamp(28px,3vw,48px) clamp(20px,2.5vw,36px)',
                borderTop: p.highlight ? '2px solid #A0782A' : '2px solid transparent',
                transitionDelay: `${i * 0.1}s`,
                display: 'flex', flexDirection: 'column',
              }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700,
                fontSize: '9px', color: p.highlight ? '#A0782A' : '#333',
                letterSpacing: '0.25em', textTransform: 'uppercase',
                marginBottom: '0.5rem' }}>{p.tag}</div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                fontSize: 'clamp(28px,2.5vw,40px)', color: '#ffffff',
                textTransform: 'uppercase', letterSpacing: '0.02em',
                marginBottom: '1rem', lineHeight: 1 }}>{p.nome}</div>
              <div style={{ width: '24px', height: '1px', background: '#1A1A1A', marginBottom: '1rem' }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(13px,1vw,14px)',
                color: '#444', lineHeight: 1.7, marginBottom: '1.5rem' }}>{p.desc}</p>

              <ul style={{ listStyle: 'none', marginBottom: '2rem', flex: 1 }}>
                {p.incluso.map((item, j) => (
                  <li key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px',
                    color: '#555', padding: '6px 0', borderBottom: '1px solid #141414',
                    display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#A0782A', fontSize: '10px' }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Prijsblok */}
              <div style={{ borderTop: '1px solid #141414', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                  fontSize: 'clamp(24px,2vw,32px)', color: p.highlight ? '#A0782A' : '#ffffff',
                  letterSpacing: '0.02em', lineHeight: 1 }}>{p.prezzo}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px',
                  color: '#444', marginTop: '4px', letterSpacing: '0.05em' }}>{p.prezzoSub}</div>
              </div>

              <a href="#contact" style={{
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

        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#333',
          letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '1.5rem',
          textAlign: 'center' }}>
          Alle prijzen zijn exclusief btw · Extra taal 100 € · Minimale looptijd 12 maanden voor Growth en Pro
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .packs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
