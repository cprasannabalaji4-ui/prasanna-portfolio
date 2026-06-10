const groups = [
  { icon: '🎨', bg: '#EDE8FF', title: 'Technical Skills', tags: ['UI/UX Design','Wireframing','Prototyping','User Flow','Graphic Design','MERN Stack','Blockchain','Digital Marketing'], accent: true },
  { icon: '🛠️', bg: '#FFE8F0', title: 'Design Tools', tags: ['Figma','Framer','Canva','Overflow','Notion','VS Code'], accent: true },
  { icon: '💡', bg: '#E8F5E9', title: 'Personal Skills', tags: ['Creative Thinking','Design Thinking','Problem Solving','Team Work','Leadership','Punctuality'], accent: false },
  { icon: '🌐', bg: '#FFF3E0', title: 'Languages', tags: ['Tamil — Native','English — Intermediate'], accent: false },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '5rem 3.5rem', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>03 — Skills</div>
      <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 48, fontWeight: 800, letterSpacing: '-2px', color: 'var(--text)', lineHeight: 1, marginBottom: '3rem' }}>
        What I <span style={{ color: 'var(--accent)' }}>Bring</span>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {groups.map(g => (
          <div key={g.title} style={{
            background: 'var(--white)', borderRadius: 24, padding: '2rem',
            boxShadow: '6px 6px 18px rgba(0,0,0,0.12), -4px -4px 14px rgba(255,255,255,0.95)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.2rem' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: g.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{g.icon}</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>{g.title}</div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {g.tags.map(tag => (
                <span key={tag} style={{
                  fontSize: 12, fontWeight: 600, padding: '7px 16px', borderRadius: 50,
                  background: g.accent ? 'rgba(91,79,232,0.06)' : 'var(--bg)',
                  color: g.accent ? 'var(--accent)' : 'var(--muted)',
                  boxShadow: '3px 3px 8px rgba(0,0,0,0.1), -3px -3px 8px rgba(255,255,255,0.95)',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}