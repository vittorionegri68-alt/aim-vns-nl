// Resultaten.jsx — AI'm by VNS NL
import { useEffect, useRef, useState } from 'react'

const cases = [
  {
    nome: 'Casa Cavour',
    luogo: 'Bertinoro, FC',
    settore: 'Vakantieverhuur',
    url: 'casa-cavour.com',
    siteUrl: 'https://www.casa-cavour.com',
    metriche: [
      { motore: 'Perplexity', before: 0, after: 4.3 },
      { motore: 'Gemini',     before: 0, after: 3.2 },
    ],
    nota: 'GEO baseline score 27/04/2026 — na volledige technische optimalisatie',
  },
  {
    nome: 'RAB Romagna',
    luogo: 'Romagna, IT',
    settore: 'Vakantieverhuur multi-unit',
    url: 'romagna-affitti-brevi.it',
    siteUrl: 'https://www.romagna-affitti-brevi.it',
    metriche: [
      { motore: 'AEO', before: 0, after: 8.2 },
      { motore: 'SEO', before: 0, after: 7.2 },
      { motore: 'GEO', before: 0, after: 7.8 },
    ],
    nota: 'Volledige audit 30/04/2026 — systeem gevalideerd voor commercialisering',
  },
]

function Bar({ before, after, animate }) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Voor</span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#333' }}>{before}/10</span>
      </div>
      <div style={{ background: '#141414', height: '3px' }}>
        <div style={{ background: '#333', height: '3px', width: `${before * 10}%`, transition: 'width 0.8s ease' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0 4px' }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#A0782A', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Na</span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#A0782A', fontWeight: 700 }}>{after}/10</span>
      </div>
      <div style={{ background: '#141414', height: '3px' }}>
        <div style={{ background: '#A0782A', height: '3px', width: animate ? `${after * 10}%` : '0%', transition: 'width 0.8s ease' }} />
      </div>
    </div>
  )
}

export default function Resultaten() {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) setAnimate(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="resultaten" ref={ref}
      style={{ background: '#080808', padding: 'clamp(64px,8vw,120px) 0', borderTop: '1px solid #141414' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(24px,4vw,64px)' }}>
        <div style={{ marginBottom: 'clamp(40px,5vw,64px)' }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '10px',
            letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A0782A', marginBottom: '1rem' }}>Gemeten resultaten</div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
            fontSize: 'clamp(36px,4vw,64px)', textTransform: 'uppercase', letterSpacing: '0.02em', color: '#ffffff', lineHeight: 0.95 }}>
            SYSTEEM GEVALIDEERD<br /><span style={{ color: '#1f1f1f' }}>OP ECHTE CASES.</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1px', background: '#141414' }} className="cases-grid">
          {cases.map((c, i) => (
            <div key={i} style={{ background: '#0a0a0a', padding: 'clamp(28px,3vw,48px) clamp(20px,2.5vw,36px)' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '9px',
                letterSpacing: '0.25em', color: '#333', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{c.settore}</div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                fontSize: 'clamp(22px,2vw,32px)', color: '#ffffff', textTransform: 'uppercase',
                letterSpacing: '0.02em', marginBottom: '0.25rem' }}>{c.nome}</div>
              <a href={c.siteUrl} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#333',
                  letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2rem',
                  display: 'block', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#A0782A'}
                onMouseLeave={e => e.currentTarget.style.color = '#333'}>
                {c.luogo} · {c.url} ↗
              </a>
              {c.metriche.map((m, j) => (
                <div key={j} style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '10px',
                    color: '#555', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>{m.motore}</div>
                  <Bar before={m.before} after={m.after} animate={animate} />
                </div>
              ))}
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: '#222',
                letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '1rem',
                borderTop: '1px solid #141414', paddingTop: '1rem' }}>{c.nota}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .cases-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}
