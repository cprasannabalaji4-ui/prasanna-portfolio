export default function Marquee() {
  const items = ['UI/UX Design','Figma','Framer','Next.js','MERN Stack','Design Systems','Blockchain','Photography']

  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid rgba(0,0,0,0.06)',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
      padding: '12px 0',
      background: 'var(--white)',
    }}>
      <div style={{
        display: 'flex',
        gap: '3rem',
        animation: 'scroll 18s linear infinite',
        whiteSpace: 'nowrap',
        width: 'max-content',
      }}>
        {[...items, ...items].map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--hint)',
          }}>
            {item}
            <span style={{ color: 'var(--accent)', fontSize: 14 }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}