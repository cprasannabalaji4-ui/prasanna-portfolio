'use client'

const featured = [
  { id: '01', cat: 'UI/UX Design · Figma', name: 'Smart Career Path App', desc: 'Designed a clean, intuitive interface to help students discover their ideal career path. Created complete user flows, wireframes, and high-fidelity screens.', emoji: '🎯', bg: 'linear-gradient(135deg,#EDE8FF,#D4CCFF)' },
  { id: '02', cat: 'UI/UX Design · Figma', name: 'EduPlan — Study Planner', desc: 'A productivity app designed for students — focused on easy task creation, smart scheduling, and reminders with clean UI and delightful micro-interactions.', emoji: '📚', bg: 'linear-gradient(135deg,#FFE8F0,#FFD4E5)' },
]

const small = [
  { id: '03', cat: 'UI Design', name: 'Eventory — Events', desc: 'Intuitive UI for organizing small-scale events with visual clarity.' },
  { id: '04', cat: 'Web App UI', name: 'MoodFood Recipe App', desc: 'Mood & weather-based recipe recommendation interface.' },
  { id: '05', cat: 'UI Contribution', name: 'WheelFix Web App', desc: 'UI layout for a traveler vehicle-assistance platform.' },
  { id: '06', cat: 'Mobile UI · AR', name: 'Pathaura AR Risk Zone', desc: 'Mobile UI for AR-based high-risk zone alerts.' },
  { id: '07', cat: 'Design System', name: 'Component Library', desc: 'Full Figma component library — buttons, cards, inputs, modals.' },
  { id: '08', cat: 'Full Stack · MERN', name: 'Portfolio Web App', desc: 'Personal portfolio built with Next.js, deployed on Vercel.' },
]

const neuroCard = {
  background: 'var(--white)',
  boxShadow: '6px 6px 20px rgba(0,0,0,0.12), -4px -4px 14px rgba(255,255,255,0.95)',
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '5rem 3.5rem', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>02 — Work</div>
      <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 48, fontWeight: 800, letterSpacing: '-2px', color: 'var(--text)', lineHeight: 1, marginBottom: '3rem' }}>
        Selected <span style={{ color: 'var(--accent2)' }}>Projects</span>
      </h2>

      {/* Featured 2 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        {featured.map(p => (
          <div key={p.id} style={{ ...neuroCard, borderRadius: 24, padding: '2rem', cursor: 'pointer', transition: 'transform 0.3s, box-shadow 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '10px 10px 28px rgba(0,0,0,0.14),-2px -2px 8px rgba(255,255,255,0.95)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = neuroCard.boxShadow }}
          >
            <div style={{ height: 160, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 52, marginBottom: '1.2rem', background: p.bg }}>{p.emoji}</div>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8, display: 'block' }}>{p.cat}</span>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 10, lineHeight: 1.2 }}>{p.name}</div>
            <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{p.desc}</div>
            <div style={{ marginTop: 16, fontSize: 12, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.05em' }}>View Project →</div>
          </div>
        ))}
      </div>

      {/* Small 6 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {small.map(p => (
          <div key={p.id} style={{ ...neuroCard, borderRadius: 20, padding: '1.5rem', cursor: 'pointer', transition: 'transform 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 28, fontWeight: 800, color: 'rgba(91,79,232,0.1)', marginBottom: 8 }}>{p.id}</div>
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: 6, display: 'block' }}>{p.cat}</span>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{p.name}</div>
            <div style={{ fontSize: 12, color: 'var(--hint)', lineHeight: 1.6 }}>{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}