// Hero.jsx — AI'm by VNS NL
// v2.1 — muted color #AAAAAA, data strip removed — juni 2026
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
            fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#AAAAAA' }}>
            Voor kleine bedrijven zonder marketingteam
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-h1" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
          fontSize: 'clamp(48px, 9vw, 132px)', letterSpacing: '0.02em',
          textTransform: 'uppercase', lineHeight: 0.92, marginBottom: '2.5rem' }}>
          <span style={{ display: 'block', color: '#ffffff' }}>MINDER AANVRAGEN</span>
          <span style={{ display: 'block', color: '#A0782A' }}>DAN VROEGER?</span>
          <span style={{ display: 'block', color: '#1f1f1f',
            fontSize: 'clamp(24px, 4.5vw, 80px)' }}>HET IS NIET JOUW SCHULD.</span>
        </h1>

        {/* Subline + CTA */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto',
          gap: '2rem', alignItems: 'flex-end', marginBottom: '3rem' }}
          className="hero-bottom">
          <div>
            <div style={{ width: '40px', height: '2px', background: '#A0782A', marginBottom: '1rem' }} />
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: 'clamp(15px,1.2vw,17px)', color: '#AAAAAA', lineHeight: 1.7, maxWidth: '460px' }}>
              Mensen zoeken niet meer alleen via Google.
              Ze stellen hun vraag aan ChatGPT. Als jouw bedrijf daar niet verschijnt,
              gaan die klanten naar iemand anders.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
            <a href="https://calendly.com/aim-vns-info/30min" target="_blank" rel="noopener"
              className="hero-cta"
              style={{
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
              color: '#AAAAAA', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Reactie binnen 48 uur · geen verplichtingen
            </span>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-bottom { grid-template-columns: 1fr !important; }
          .hero-bottom > div:last-child { align-items: flex-start !important; }
          .hero-h1 { font-size: clamp(36px, 8vw, 132px) !important; }
          .hero-cta { white-space: normal !important; text-align: center !important; width: 100% !important; box-sizing: border-box !important; }
        }
      `}</style>
    </section>
  )
}
