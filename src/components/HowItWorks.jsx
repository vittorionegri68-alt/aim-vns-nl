// HowItWorks.jsx — AI'm by VNS NL
// v2.0 — tekst herschreven voor niet-technisch publiek — juni 2026
import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'We analyseren',
    desc: "We controleren of ChatGPT, Perplexity en Gemini weten dat jij bestaat. Binnen 48 uur vertellen we je precies waar je staat, met een duidelijke score. Geen vakjargon: alleen wat werkt en wat niet.",
  },
  {
    num: '02',
    title: 'We handelen',
    desc: "We maken de nodige aanpassingen aan je website zodat AI-zoekmachines begrijpen wie je bent, wat je doet en waar je actief bent. De automatische blog blijft continu werken om je zichtbaarheid in de loop van de tijd te behouden.",
  },
  {
    num: '03',
    title: 'We meten',
    desc: "We laten je resultaten zien met echte cijfers, vergelijkbaar in de tijd. Elk kwartaal een duidelijk rapport. Als iets niet groeit zoals het zou moeten, grijpen we opnieuw in.",
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return (
    <section id="hoe-het-werkt" ref={ref}
      style={{ background: '#0d0d0d', padding: 'clamp(64px,8vw,120px) 0', borderTop: '1px solid #141414' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(24px,4vw,64px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', marginBottom: 'clamp(40px,5vw,64px)' }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700,
            fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A0782A' }}>Hoe het werkt</div>
          <div style={{ height: '1px', flex: 1, background: '#141414', margin: '0 1.5rem' }} />
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px',
            color: '#222', letterSpacing: '0.15em' }}>01 — 03</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          gap: '1px', background: '#141414' }} className="steps-grid">
          {steps.map((s, i) => (
            <div key={i} className="reveal"
              style={{ background: '#0a0a0a', padding: 'clamp(28px,3vw,48px) clamp(20px,2.5vw,36px)',
                transitionDelay: `${i * 0.1}s` }}>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                fontSize: '11px', color: '#A0782A', letterSpacing: '0.2em',
                marginBottom: '1.5rem', textTransform: 'uppercase' }}>{s.num}</div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                fontSize: 'clamp(28px,2.5vw,40px)', color: '#ffffff',
                textTransform: 'uppercase', letterSpacing: '0.02em',
                marginBottom: '1rem', lineHeight: 1 }}>{s.title}</div>
              <div style={{ width: '24px', height: '1px', background: '#1A1A1A', marginBottom: '1rem' }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400,
                fontSize: 'clamp(13px,1vw,15px)', color: '#444', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .steps-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
