// Blog.jsx — AI'm by VNS NL
import { useState } from 'react'
import { posts } from '../data/posts.jsx'

function ArtikelUitgebreid({ post, onClose }) {
  return (
    <div style={{ background: '#0a0a0a', borderTop: '2px solid #A0782A', padding: 'clamp(28px,3vw,48px) clamp(20px,2.5vw,36px)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '2rem' }}>
        <div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '9px',
            color: '#333', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {post.categoria} · {post.data}
          </div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
            fontSize: 'clamp(22px,2.5vw,36px)', color: '#ffffff', textTransform: 'uppercase',
            letterSpacing: '0.02em', lineHeight: 1.1 }}>{post.titolo}</h2>
        </div>
        <button onClick={onClose} style={{
          background: 'none', border: '1px solid #1A1A1A', cursor: 'pointer',
          fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '10px',
          color: '#555', letterSpacing: '0.15em', textTransform: 'uppercase',
          padding: '8px 14px', borderRadius: 0, flexShrink: 0, transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#A0782A'; e.currentTarget.style.color = '#A0782A' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#1A1A1A'; e.currentTarget.style.color = '#555' }}
        >Sluiten X</button>
      </div>
      <div style={{ width: '40px', height: '1px', background: '#1A1A1A', marginBottom: '2rem' }} />
      <div style={{ maxWidth: '720px' }}>
        {post.contenuto.map((blocco, i) => {
          if (blocco.tipo === 'paragrafo') return (
            <p key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(14px,1vw,16px)', color: '#555', lineHeight: 1.8, marginBottom: '1.5rem' }}>{blocco.testo}</p>
          )
          if (blocco.tipo === 'titoletto') return (
            <h3 key={i} style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(18px,1.8vw,24px)',
              color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: '1rem', marginTop: '2rem' }}>{blocco.testo}</h3>
          )
          if (blocco.tipo === 'link') return (
            <a key={i} href={blocco.testo} style={{
              display: 'inline-block', marginTop: '1rem', fontFamily: "'Inter', sans-serif", fontWeight: 700,
              fontSize: '11px', color: '#A0782A', letterSpacing: '0.15em', textTransform: 'uppercase',
              textDecoration: 'none', borderBottom: '1px solid #A0782A', paddingBottom: '2px', transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >{blocco.etichetta} </a>
          )
          return null
        })}
      </div>
    </div>
  )
}

export default function Blog() {
  const [aperto, setAperto] = useState(null)
  const attivi = posts.filter(p => p.attivo)

  return (
    <section id="blog" style={{ background: '#0d0d0d', padding: 'clamp(64px,8vw,120px) 0', borderTop: '1px solid #141414' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(24px,4vw,64px)' }}>
        <div style={{ marginBottom: 'clamp(40px,5vw,64px)' }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '10px',
            letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A0782A', marginBottom: '1rem' }}>Blog</div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
            fontSize: 'clamp(36px,4vw,64px)', textTransform: 'uppercase', letterSpacing: '0.02em', color: '#ffffff', lineHeight: 0.95 }}>
            AI-ZICHTBAARHEID<br /><span style={{ color: '#1f1f1f' }}>EENVOUDIG UITGELEGD.</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: '#141414' }} className="blog-grid">
          {attivi.map((p) => (
            <article key={p.id} style={{
              background: aperto === p.id ? '#0f0f0f' : '#0a0a0a',
              padding: 'clamp(24px,2.5vw,40px) clamp(20px,2vw,32px)',
              display: 'flex', flexDirection: 'column',
              borderTop: aperto === p.id ? '2px solid #A0782A' : '2px solid transparent',
              transition: 'all 0.2s',
            }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '9px',
                color: '#333', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                {p.categoria} · {p.data}
              </div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                fontSize: 'clamp(18px,1.8vw,24px)', color: '#ffffff', textTransform: 'uppercase',
                letterSpacing: '0.02em', lineHeight: 1.15, marginBottom: '1rem', flex: 1 }}>{p.titolo}</h3>
              <div style={{ width: '24px', height: '1px', background: '#1A1A1A', marginBottom: '1rem' }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#444', lineHeight: 1.7, marginBottom: '1.5rem' }}>{p.sommario}</p>
              <button onClick={() => setAperto(aperto === p.id ? null : p.id)} style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '10px',
                color: aperto === p.id ? '#ffffff' : '#A0782A',
                letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'left', transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >{aperto === p.id ? 'Sluiten' : 'Lees meer'}</button>
            </article>
          ))}
        </div>
        {aperto && (
          <div style={{ background: '#141414', padding: '1px 0 0' }}>
            <ArtikelUitgebreid post={attivi.find(p => p.id === aperto)} onClose={() => setAperto(null)} />
          </div>
        )}
      </div>
      <style>{`
        @media (max-width: 768px) { .blog-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1024px) and (min-width: 769px) { .blog-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  )
}
