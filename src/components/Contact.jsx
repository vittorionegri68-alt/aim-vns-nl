// Contact.jsx — AI'm by VNS NL
import { useState } from 'react'
import { config } from '../config.js'

export default function Contact() {
  const [form, setForm] = useState({ naam: '', email: '', bericht: '' })
  const [verstuurd, setVerstuurd] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Aanvraag van ${form.naam} — AI'm by VNS`)
    const body = encodeURIComponent(`Naam: ${form.naam}\nE-mail: ${form.email}\n\n${form.bericht}`)
    window.location.href = `mailto:info@aim-vns.com?subject=${subject}&body=${body}`
    setVerstuurd(true)
  }

  const inputStyle = {
    width: '100%', background: '#0a0a0a', border: '1px solid #1A1A1A',
    borderRadius: 0, padding: '14px 16px', color: '#ffffff',
    fontFamily: "'Inter', sans-serif", fontSize: '14px',
    outline: 'none', transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" style={{ background: '#080808', padding: 'clamp(64px,8vw,120px) 0', borderTop: '1px solid #141414' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(24px,4vw,64px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,96px)', alignItems: 'start' }} className="contact-grid">

          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '10px',
              letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A0782A', marginBottom: '1rem' }}>Contact</div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
              fontSize: 'clamp(36px,4vw,64px)', textTransform: 'uppercase', letterSpacing: '0.02em',
              color: '#ffffff', lineHeight: 0.95, marginBottom: '2rem' }}>
              BEGIN<br /><span style={{ color: '#A0782A' }}>HIER.</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#555', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '360px' }}>
              Gratis eerste analyse. Geen verplichtingen. Ontdek waar je vandaag staat op AI-zoekmachines en wat er verbeterd kan worden.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#141414' }}>
              <a href={config.brand.whatsapp} target="_blank" rel="noopener noreferrer"
                style={{ background: '#0a0a0a', padding: '20px 24px', display: 'flex', alignItems: 'center',
                  gap: '16px', textDecoration: 'none', transition: 'background 0.2s', borderLeft: '2px solid #25D366' }}
                onMouseEnter={e => e.currentTarget.style.background = '#0d0d0d'}
                onMouseLeave={e => e.currentTarget.style.background = '#0a0a0a'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '11px',
                    color: '#25D366', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2px' }}>WhatsApp</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#888' }}>{config.brand.telefonoDisplay}</div>
                </div>
                <span style={{ marginLeft: 'auto', color: '#333', fontSize: '16px' }}>→</span>
              </a>

              <a href={`mailto:${config.brand.email}`} style={{ background: '#0a0a0a', padding: '16px 24px',
                display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#0d0d0d'}
                onMouseLeave={e => e.currentTarget.style.background = '#0a0a0a'}>
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" style={{ flexShrink: 0 }}>
                  <rect x="0.5" y="0.5" width="17" height="13" rx="0" stroke="#555"/>
                  <path d="M1 1l8 6 8-6" stroke="#555" strokeWidth="1"/>
                </svg>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '11px',
                    color: '#555', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2px' }}>E-mail</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#888' }}>{config.brand.email}</div>
                </div>
              </a>

              <a href={config.brand.linkedin} target="_blank" rel="noopener noreferrer"
                style={{ background: '#0a0a0a', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#0d0d0d'}
                onMouseLeave={e => e.currentTarget.style.background = '#0a0a0a'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#555" style={{ flexShrink: 0 }}>
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                </svg>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '11px',
                    color: '#555', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2px' }}>LinkedIn</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#888' }}>AI'm by VNS</div>
                </div>
              </a>
            </div>
          </div>

          <div>
            {verstuurd ? (
              <div style={{ background: '#0a0a0a', padding: '48px', borderTop: '2px solid #A0782A', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '32px',
                  color: '#A0782A', textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: '1rem' }}>Bericht verstuurd</div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#555' }}>We nemen binnen 24 uur contact met je op via e-mail of WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#141414' }}>
                {[
                  { name: 'naam', label: 'Naam', type: 'text', placeholder: 'Jouw naam' },
                  { name: 'email', label: 'E-mail', type: 'email', placeholder: 'jouw@email.nl' },
                ].map(f => (
                  <div key={f.name} style={{ background: '#0a0a0a', padding: '20px 28px' }}>
                    <label style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '10px',
                      color: '#333', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>{f.label}</label>
                    <input name={f.name} type={f.type} value={form[f.name]} onChange={handleChange}
                      required placeholder={f.placeholder} style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#A0782A'}
                      onBlur={e => e.target.style.borderColor = '#1A1A1A'} />
                  </div>
                ))}
                <div style={{ background: '#0a0a0a', padding: '20px 28px' }}>
                  <label style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '10px',
                    color: '#333', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Bericht</label>
                  <textarea name="bericht" value={form.bericht} onChange={handleChange}
                    required placeholder="Vertel ons over jouw bedrijf en wat je wilt verbeteren..." rows={5}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    onFocus={e => e.target.style.borderColor = '#A0782A'}
                    onBlur={e => e.target.style.borderColor = '#1A1A1A'} />
                </div>
                <div style={{ background: '#0a0a0a', padding: '20px 28px 28px' }}>
                  <button type="submit" style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '12px',
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: '#080808', background: '#A0782A', border: 'none',
                    padding: '14px 32px', borderRadius: 0, cursor: 'pointer',
                    transition: 'opacity 0.2s', width: '100%',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >Verstuur bericht →</button>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: '#333',
                    letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '12px', textAlign: 'center' }}>
                    Reactie binnen 24u · Geen verplichtingen
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}
