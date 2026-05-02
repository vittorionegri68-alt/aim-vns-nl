// Hero.jsx — AI'm by VNS NL
export default function Hero() {
  return (
    <section style={{ background: '#080808', paddingTop: '64px', minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      position: 'relative', overflow: 'hidden' }}>

      <div aria-hidden="true" style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: "'Oswald', sans-serif", fontWeight: 700,
        fontSize: 'clamp(120px, 22vw, 340px)',
        letterSpacing: '0.02em', textTransform: 'uppercase',
        color: '#0f0f0f', whiteSpace: 'nowrap',
        pointerEvents: 'none', userSelect: 'none', zIndex: 0, lineHeight: 1,
      }}>
        <span style={{ color: '#111111' }}>AI</span>
        <span style={{ color: '#0d0d0d' }}>'M</span>
      </div>

      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(24px,4vw,64px)',
        position: 'relative', zIndex: 1 }}>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px',
          border: '1px solid #1A1A1A', padding: '6px 14px', marginBottom: '2.5rem' }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#A0782A' }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700,
            fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#555' }}>
            Gevalideerd systeem · Casa Cavour · RAB Romagna
          </span>
        </div>

        <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
          fontSize: 'clamp(56px, 10vw, 148px)', letterSpacing: '0.02em',
          textTransform: 'uppercase', lineHeight: 0.92, marginBottom: '2.5rem' }}>
          <span style={{ display: 'block', color: '#A0782A' }}>CHATGPT</span>
          <span style={{ display: 'block', color: '#ffffff' }}>VINDT JOU.</span>
          <span style={{ display: 'block', color: '#1f1f1f' }}>OF NIET.</span>
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto',
          gap: '2rem', alignItems: 'flex-end', marginBottom: '3rem' }}
          className="hero-bottom">
          <div>
            <div style={{ width: '40px', height: '2px', background: '#A0782A', marginBottom: '1rem' }} />
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: 'clamp(15px,1.2vw,17px)', color: '#555', lineHeight: 1.7, maxWidth: '420px' }}>
              Wij analyseren jouw zichtbaarheid op AI-zoekmachines en grijpen in om die te verbeteren.
              Voor kleine ondernemingen zonder marketingteam, in Nederland en Italië.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
            <a href="#contact" style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 700,
              fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#080808', background: '#A0782A',
              padding: '14px 28px', borderRadius: 0, transition: 'opacity 0.2s',
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >Analyseer jouw zichtbaarheid</a>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px',
              color: '#333', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Gratis · geen verplichtingen
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          gap: '1px', background: '#141414', borderTop: '1px solid #141414' }}
          className="data-strip">
          {[
            { num: '4.3', label: 'Perplexity score', sub: 'Casa Cavour' },
            { num: '3.2', label: 'Gemini score',     sub: 'Casa Cavour' },
            { num: '8.2', label: 'AEO score',        sub: 'RAB Romagna' },
            { num: 'NL+IT', label: 'Actieve markten', sub: '2026' },
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
