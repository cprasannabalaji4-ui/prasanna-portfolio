'use client'

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.2rem 3rem',
        background: 'rgba(245,243,238,0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 20,
          fontWeight: 800,
          color: 'var(--text)',
          letterSpacing: '-0.5px',
        }}
      >
        Prasanna <span style={{ color: 'var(--accent)' }}></span>
      </div>

      {/* Menu */}
      <ul
        style={{
          display: 'flex',
          gap: '2.5rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {[
          { label: 'About', id: 'about' },
          { label: 'Projects', id: 'projects' },
          { label: 'Skills', id: 'skills' },
          { label: 'Experience', id: 'exp' },
        ].map(({ label, id }) => (
          <li key={id}>
            <a
              onClick={() => scrollTo(id)}
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) =>
                (e.target.style.color = 'var(--accent)')
              }
              onMouseLeave={(e) =>
                (e.target.style.color = 'var(--muted)')
              }
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={() =>
          window.open('mailto:cprasannabalaji4@gmail.com')
        }
        style={{
          background: 'var(--accent)',
          color: '#fff',
          padding: '9px 22px',
          borderRadius: '50px',
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Hire Me ↗
      </button>
    </nav>
  )
}