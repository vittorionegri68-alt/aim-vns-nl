// Hero.jsx — AI'm by VNS NL
// v2.0 — tekst herschreven voor niet-technisch publiek — juni 2026
import { config } from '../config.js'

export default function Hero() {
  return (
    <section style={{ background: '#080808', paddingTop: '64px', minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>

      {/* Wordmark decorativo background */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 0,
      }}>
        <span style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(120px, 22vw, 340px)',
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          lineHeight: 1,
          whiteSpace: 'nowrap',
          color: '#111111',
        }}>
          <span style={{ color: '#111111' }}>AI</span>
          <span style={{ color: '#0d0d0d' }}>'M</span>
        </span>
      </div>

      {/* Contenuto */}
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(24px,4vw,64px)',
        position: 'relative', zIndex: 1 }}>

        {/* Eyebrow */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px',
          border: '1px solid #1A1A1A', padding: '6px 14px', marginBottom: '2.5rem' }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#A0782A' }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700,
            fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#555' }}>
            Voor kleine bedrijven zonder marketingteam
          </span>
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
          fontSize: 'clamp(48px, 9vw, 132px)', letterSpacing: '0.02em',
          textTransform: 'uppercase', lineHeight: 0.92, marginBottom: '2.5rem' }}>
          <span style={{ display: 'block', color: '#ffffff' }}>MINDER AANVRAGEN</span>
          <span style={{ display: 'block', color: '#A0782A' }}>DAN VROEGER?</span>
          <span style={{ display: 'block', color: '#1f1f1f',
            fontSize: 'clamp(28px, 5.5vw, 80px)' }}>HET IS NIET JOUW SCHULD.</span>
        </h1>

        {/* Subline + CTA */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto',
          gap: '2rem', alignItems: 'flex-end', marginBottom: '3rem' }}
          className="hero-bottom">
          <div>
            <div style={{ width: '40px', height: '2px', background: '#A0782A', marginBottom: '1rem' }} />
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: 'clamp(15px,1.2vw,17px)', color: '#555', lineHeight: 1.7, maxWidth: '460px' }}>
              Mensen zoeken niet meer alleen via Google.
              Ze stellen hun vraag aan ChatGPT. Als jouw bedrijf daar niet verschijnt,
              gaan die klanten naar iemand anders.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
            <a href="https://calendly.com/aim-vns-info/30min" target="_blank" rel="noopener" style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 700,
              fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#080808', background: '#A0782A',
              padding: '14px 28px', borderRadius: 0,
              transition: 'opacity 0.2s', textDecoration: 'none', whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >Ontdek of ze jou kunnen vinden - gratis</a>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px',
              color: '#333', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Reactie binnen 48 uur · geen verplichtingen
            </span>
          </div>
        </div>

        {/* Data strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          gap: '1px', background: '#141414', borderTop: '1px solid #141414' }}
          className="data-strip">
          {[
            { num: '4.3', label: 'Perplexity score', sub: 'Casa Cavour · apr 2026' },
            { num: '3.2', label: 'Gemini score', sub: 'Casa Cavour · apr 2026' },
            { num: '8.2', label: 'AEO score', sub: 'RAB Romagna' },
            { num: 'IT+NL', label: 'Actieve markten', sub: '2026' },
          ].map((d, i) => (
            <div key={i} style={{ background: '#0d0d0d', padding: 'clamp(16px,2vw,28px) clamp(12px,1.5vw,24px)' }}>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                fontSize: 'clamp(28px,3.5vw,48px)', letterSpacing: '0.02em',
                color: i < 2 ? '#A0782A' : '#ffffff', lineHeight: 1 }}>{d.num}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700,
                fontSize: '9px', color: '#333', letterSpacing: '0.2em',
                textTransform: 'uppercase', marginTop: '6px' }}>{d.label}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '9px',
                color: '#222', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' }}>{d.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-bottom { grid-template-columns: 1fr !important; }
          .hero-bottom > div:last-child { align-items: flex-start !important; }
          .data-strip { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}