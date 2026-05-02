// Diensten.jsx — AI'm by VNS NL
import { useEffect, useRef } from 'react'

const pakketten = [
  {
    nome: 'Starter',
    tag: 'Technische optimalisatie',
    desc: 'GEO/AEO baseline analyse en volledige optimalisatie van een bestaande of nieuwe website. Schema.org, llms.txt, ai.txt, robots.txt met expliciete AI-crawlers. Set van 10 vragen samen met jou opgesteld.',
    incluso: [
      '10 vragen samen opgesteld',
      'Volledige gevalideerde schema.org',
      'llms.txt + ai.txt',
      'robots.txt met AI-crawlers',
      'Initieel baseline rapport',
    ],
    cta: 'Neem contact op',
    highlight: false,
  },
  {
    nome: 'Growth',
    tag: 'Starter + automatisering',
    desc: 'Alles van Starter plus tweewekelijkse geautomatiseerde GEO/AEO-blog en kwartaalrapportage. Na elk rapport worden de nodige correctieve acties uitgevoerd op basis van de resultaten en de concurrentieanalyse AI.',
    incluso: [
      'Alles van Starter',
      'Geautomatiseerde GEO/AEO-blog (N8N)',
      'Kwartaalrapportage GEO-score',
      'Correctieve acties na rapport',
      'Concurrentieanalyse AI',
      'E-mailondersteuning',
    ],
    cta: 'Neem contact op',
    highlight: true,
  },
  {
    nome: 'Pro',
    tag: 'Growth + Instagram',
    desc: 'Alles van Growth plus Instagram automatisering, geavanceerde AI-concurrentieanalyse en prioriteitsondersteuning.',
    incluso: [
      'Alles van Growth',
      'Instagram automatisering (N8N)',
      'Geavanceerde AI-concurrentieanalyse',
      'Prioriteitsondersteuning WhatsApp',
      'Maandelijks check-in videogesprek',
    ],
    cta: 'Neem contact op',
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
            letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A0782A', marginBottom: '1rem' }}>Pakketten</div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
            fontSize: 'clamp(36px,4vw,64px)', textTransform: 'uppercase', letterSpacing: '0.02em', color: '#ffffff', lineHeight: 0.95 }}>
            KIES JE<br /><span style={{ color: '#A0782A' }}>STARTPUNT.</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: '#141414' }} className="packs-grid">
          {pakketten.map((p, i) => (
            <div key={i} className="reveal" style={{
              background: p.highlight ? '#0f0f0f' : '#0a0a0a',
              padding: 'clamp(28px,3vw,48px) clamp(20px,2.5vw,36px)',
              borderTop: p.highlight ? '2px solid #A0782A' : '2px solid transparent',
              transitionDelay: `${i * 0.1}s`, display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '9px',
                color: p.highlight ? '#A0782A' : '#333', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{p.tag}</div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                fontSize: 'clamp(28px,2.5vw,40px)', color: '#ffffff', textTransform: 'uppercase',
                letterSpacing: '0.02em', marginBottom: '1rem', lineHeight: 1 }}>{p.nome}</div>
              <div style={{ width: '24px', height: '1px', background: '#1A1A1A', marginBottom: '1rem' }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(13px,1vw,14px)',
                color: '#444', lineHeight: 1.7, marginBottom: '1.5rem' }}>{p.desc}</p>
              <ul style={{ listStyle: 'none', marginBottom: '2rem', flex: 1 }}>
                {p.incluso.map((item, j) => (
                  <li key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#555',
                    padding: '6px 0', borderBottom: '1px solid #141414', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#A0782A', fontSize: '10px' }}>—</span>{item}
                  </li>
                ))}
              </ul>
              <a href="#contact" style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '11px',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: p.highlight ? '#080808' : '#ffffff',
                background: p.highlight ? '#A0782A' : 'transparent',
                border: p.highlight ? 'none' : '1px solid #1A1A1A',
                padding: '12px 24px', borderRadius: 0, textDecoration: 'none',
                display: 'inline-block', transition: 'all 0.2s', textAlign: 'center',
              }}
              onMouseEnter={e => {
                if (p.highlight) e.currentTarget.style.opacity = '0.85'
                else { e.currentTarget.style.borderColor = '#A0782A'; e.currentTarget.style.color = '#A0782A' }
              }}
              onMouseLeave={e => {
                if (p.highlight) e.currentTarget.style.opacity = '1'
                else { e.currentTarget.style.borderColor = '#1A1A1A'; e.currentTarget.style.color = '#ffffff' }
              }}
              >{p.cta} →</a>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#333',
          letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '1.5rem', textAlign: 'center' }}>
          Prijzen op aanvraag · NL en IT · Neem contact op voor een offerte
        </p>
      </div>
      <style>{`@media (max-width: 768px) { .packs-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}
