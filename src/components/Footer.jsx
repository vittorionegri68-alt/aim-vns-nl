// Footer.jsx — AI'm by VNS NL
import { config } from '../config.js'

export default function Footer() {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid #0f0f0f' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(24px,4vw,64px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '32px 0', borderBottom: '1px solid #0f0f0f', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '16px',
              letterSpacing: '0.04em', color: '#A0782A', textTransform: 'uppercase' }}>AI</span>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '16px',
              letterSpacing: '0.04em', color: '#1A1A1A', textTransform: 'uppercase' }}>'M</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '8px',
              color: '#1A1A1A', letterSpacing: '0.2em', textTransform: 'uppercase',
              borderLeft: '1px solid #1A1A1A', paddingLeft: '6px' }}>BY VNS</span>
          </div>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '10px',
            color: '#A0782A', letterSpacing: '0.2em', textTransform: 'uppercase' }}>AIM-VNS.COM</span>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {[
              { label: 'Instagram', url: config.brand.instagram },
              { label: 'LinkedIn',  url: config.brand.linkedin },
              { label: 'Facebook',  url: config.brand.facebook },
            ].map(s => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '9px',
                  color: '#888', letterSpacing: '0.15em', textTransform: 'uppercase',
                  textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#ffffff'}
                onMouseLeave={e => e.target.style.color = '#888'}
              >{s.label}</a>
            ))}
            <a href={config.brand.whatsapp} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '9px',
                color: '#888', letterSpacing: '0.15em', textTransform: 'uppercase',
                textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#25D366'}
              onMouseLeave={e => e.target.style.color = '#888'}
            >WhatsApp</a>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '20px 0', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '9px', color: '#888',
            letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            © 2026 AI'm by VNS · Vittorio Negri Services · Nijkerk NL
          </span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="/privacy.html" style={{ fontFamily: "'Inter', sans-serif", fontSize: '9px',
              color: '#888', letterSpacing: '0.15em', textTransform: 'uppercase',
              textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#ffffff'}
              onMouseLeave={e => e.target.style.color = '#888'}
            >Privacybeleid</a>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '9px', color: '#888',
              letterSpacing: '0.15em', textTransform: 'uppercase' }}>IT · EN · NL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
