// FAQ.jsx — AI'm by VNS NL
import { useState } from 'react'
import { qanda } from '../data/qanda.jsx'

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" style={{ background: '#080808', padding: 'clamp(64px,8vw,120px) 0', borderTop: '1px solid #141414' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(24px,4vw,64px)' }}>
        <div style={{ marginBottom: 'clamp(40px,5vw,64px)' }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '10px',
            letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A0782A', marginBottom: '1rem' }}>Veelgestelde vragen</div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
            fontSize: 'clamp(36px,4vw,64px)', textTransform: 'uppercase', letterSpacing: '0.02em', color: '#ffffff', lineHeight: 0.95 }}>
            DE ANTWOORDEN<br /><span style={{ color: '#1f1f1f' }}>DIE JE ZOEKT.</span>
          </h2>
        </div>
        <div style={{ maxWidth: '800px' }}>
          {qanda.map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid #141414' }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                padding: 'clamp(16px,2vw,24px) 0',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', textAlign: 'left',
              }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700,
                  fontSize: 'clamp(14px,1.1vw,16px)', color: open === i ? '#ffffff' : '#888',
                  lineHeight: 1.4, transition: 'color 0.2s' }}>{item.q}</span>
                <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '18px',
                  color: '#A0782A', flexShrink: 0,
                  transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
              </button>
              {open === i && (
                <div style={{ paddingBottom: 'clamp(16px,2vw,24px)' }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400,
                    fontSize: 'clamp(13px,1vw,15px)', color: '#555', lineHeight: 1.7 }}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
