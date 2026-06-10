export default function Footer() {
  const links = [
    { label: 'cprasannabalaji4@gmail.com', href: 'mailto:cprasannabalaji4@gmail.com' },
    { label: 'Behance ↗', href: 'https://www.behance.net/prasannabalajic' },
    { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/prasanna-balaji-c-169879365/' },
    { label: '+91 9790158656', href: 'tel:9790158656' },
  ]

  return (
    <footer style={{
      background: 'var(--text)',
      padding: '5rem 3.5rem 3rem',
      textAlign: 'center',
    }}>
      <div style={{
        fontFamily: 'Syne, sans-serif',
        fontSize: 64,
        fontWeight: 800,
        letterSpacing: '-3px',
        lineHeight: 0.88,
        color: '#fff',
        marginBottom: '1rem',
      }}>
        <span style={{ color: '#F5C518' }}>LET&apos;S</span><br />
        <span style={{ color: '#C4B5FD' }}>BUILD</span><br />
        TOGETHER.
      </div>

      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', marginBottom: '2.5rem', marginTop: '1rem' }}>
        Open for full-time roles, freelance projects & collaborations
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: '3rem' }}>
        {links.map(l => (
          <a key={l.label} href={l.href} style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 50, padding: '11px 22px',
            fontSize: 12, fontWeight: 600, letterSpacing: '0.08em',
            color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
          }}>
            {l.label}
          </a>
        ))}
      </div>

      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
        © 2026 Prasanna Balaji C — Erode, Tamil Nadu
      </div>
    </footer>
  )
}