// Nav.jsx — AI'm by VNS NL
import { useState, useEffect } from 'react'
import { config } from '../config.js'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Diensten', href: '#diensten' },
    { label: 'Werkwijze', href: '#werkwijze' },
    { label: 'Resultaten', href: '#resultaten' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blog', href: '#blog' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      borderBottom: scrolled ? '1px solid #141414' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: '1440px', margin: '0 auto',
        padding: '0 clamp(24px,4vw,64px)',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: '64px',
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'baseline', gap: '8px', textDecoration: 'none' }}>
          <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
            fontSize: '24px', letterSpacing: '0.04em', color: '#A0782A', textTransform: 'uppercase' }}>AI</span>
          <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
            fontSize: '24px', letterSpacing: '0.04em', color: '#1A1A1A', textTransform: 'uppercase' }}>'M</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700,
            fontSize: '9px', letterSpacing: '0.2em', color: '#1A1A1A', textTransform: 'uppercase',
            alignSelf: 'center', borderLeft: '1px solid #1A1A1A', paddingLeft: '8px', marginLeft: '2px' }}>BY VNS</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="nav-links-desktop">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 700,
              fontSize: '11px', letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#fff'}
            onMouseLeave={e => e.target.style.color = '#555'}
            >{l.label}</a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href={config.brand.whatsapp} target="_blank" rel="noopener noreferrer"
            title="Stuur ons een WhatsApp-bericht"
            style={{ display: 'flex', alignItems: 'center', gap: '6px',
              fontFamily: "'Inter', sans-serif", fontWeight: 700,
              fontSize: '11px', letterSpacing: '0.1em', color: '#555',
              textTransform: 'uppercase', transition: 'color 0.2s', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = '#25D366'}
            onMouseLeave={e => e.currentTarget.style.color = '#555'}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="whatsapp-label">WhatsApp</span>
          </a>

          <a href="#contact" style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 700,
            fontSize: '11px', letterSpacing: '0.12em', color: '#080808',
            textTransform: 'uppercase', background: '#A0782A',
            padding: '10px 20px', borderRadius: 0, transition: 'opacity 0.2s',
            textDecoration: 'none', whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >Gratis analyse</a>

          <div style={{ display: 'flex', gap: '4px', marginLeft: '8px' }}>
            {[
              { code: 'IT', url: 'https://www.aim-vns.com', active: false },
              { code: 'EN', url: 'https://en.aim-vns.com', active: false },
              { code: 'NL', url: 'https://nl.aim-vns.com', active: true },
            ].map(l => (
              <a key={l.code} href={l.url} style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '10px',
                letterSpacing: '0.15em', color: l.active ? '#ffffff' : '#333',
                textDecoration: l.active ? 'underline' : 'none', textUnderlineOffset: '3px', transition: 'color 0.2s',
              }}
              onMouseEnter={e => { if (!l.active) e.target.style.color = '#888' }}
              onMouseLeave={e => { if (!l.active) e.target.style.color = '#333' }}
              >{l.code}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .whatsapp-label { display: none; }
        }
      `}</style>
    </nav>
  )
}
