'use client'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'exp' },
  ]

  return (
    <>
      <nav className="nav-wrap" style={{
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
      }}>
        {/* Logo */}
        <div style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 20,
          fontWeight: 800,
          color: 'var(--text)',
          letterSpacing: '-0.5px',
        }}>
          Prasanna <span style={{ color: 'var(--accent)' }}>.</span>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links" style={{
          display: 'flex',
          gap: '2.5rem',
          listStyle: 'none',
        }}>
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <a onClick={() => scrollTo(id)} style={{
                fontSize: 13, fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'var(--muted)', textDecoration: 'none', cursor: 'pointer',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + Mobile Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            onClick={() => window.open('mailto:cprasannabalaji4@gmail.com')}
            style={{
              background: 'var(--accent)', color: '#fff',
              padding: '9px 22px', borderRadius: 50,
              fontSize: 12, fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              border: 'none', cursor: 'pointer',
            }}>
            Hire Me ↗
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none', border: 'none',
              cursor: 'pointer', padding: 4,
              flexDirection: 'column', gap: 5,
            }}
            className="hamburger"
            aria-label="Menu"
          >
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--text)', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--text)', borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: 'all 0.2s' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--text)', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 60, left: 0, right: 0,
          background: 'rgba(245,243,238,0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          zIndex: 99, padding: '1.5rem',
          display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {navItems.map(({ label, id }) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '12px 16px', borderRadius: 12,
              fontSize: 15, fontWeight: 700,
              textAlign: 'left', color: 'var(--text)',
              letterSpacing: '0.05em',
            }}>
              {label}
            </button>
          ))}
          <button
            onClick={() => window.open('mailto:cprasannabalaji4@gmail.com')}
            style={{
              marginTop: 8, background: 'var(--accent)', color: '#fff',
              padding: '12px 16px', borderRadius: 12,
              fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer',
            }}>
            Hire Me ↗
          </button>
        </div>
      )}

      {/* Hamburger show on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .hamburger { display: flex !important; }
          .nav-links { display: none !important; }
          .nav-wrap { padding: 1rem 1.2rem !important; }
        }
      `}</style>
    </>
  )
}