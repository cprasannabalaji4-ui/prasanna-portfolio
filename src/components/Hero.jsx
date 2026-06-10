'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section style={{
      minHeight: '92vh',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      position: 'relative',
      background: 'var(--bg)',
      overflow: 'hidden',
    }}>

      {/* LEFT */}
      <div style={{
        padding: '5rem 3rem 4rem 3.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(91,79,232,0.08)',
          border: '1.5px solid rgba(91,79,232,0.2)',
          padding: '7px 18px',
          borderRadius: 50,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: '2rem',
          width: 'fit-content',
        }}>
          <div style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#1DB87A',
            boxShadow: '0 0 6px #1DB87A',
            animation: 'pulse 2s infinite',
          }} />
          Available for work
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 72,
          fontWeight: 800,
          lineHeight: 0.88,
          letterSpacing: '-3px',
          marginBottom: '1.5rem',
        }}>
          <div style={{ color: 'var(--text)' }}>PRASANNA</div>
          <div style={{ color: 'var(--accent)' }}>BALAJI</div>
          <div style={{ color: 'var(--accent2)' }}>C</div>
        </h1>

        {/* Description */}
        <p style={{
          fontSize: 16,
          color: 'var(--muted)',
          lineHeight: 1.8,
          maxWidth: 420,
          marginBottom: '2.5rem',
        }}>
          UI/UX Designer & Part-time Developer from{' '}
          <strong style={{ color: 'var(--text)' }}>Chennai, TN.</strong> I craft{' '}
          <strong style={{ color: 'var(--text)' }}>bold, user-centered</strong>{' '}
          experiences — Figma to production.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '14px 32px',
              borderRadius: 50,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              background: 'var(--accent)',
              color: '#fff',
              border: 'none',
              boxShadow: '0 8px 24px rgba(91,79,232,0.3)',
            }}
          >
            View My Work →
          </button>
          <button
            onClick={() => window.open('https://www.behance.net/prasannabalajic')}
            style={{
              padding: '14px 32px',
              borderRadius: 50,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              background: 'transparent',
              color: 'var(--text)',
              border: '2px solid rgba(0,0,0,0.15)',
            }}
          >
            Behance ↗
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[['6+', 'Projects'], ['2', 'Internships'], ['7+', 'Certs']].map(([n, l]) => (
            <div key={l} style={{
              background: 'var(--white)',
              borderRadius: 16,
              padding: '1.2rem 1.5rem',
              textAlign: 'center',
              boxShadow: '6px 6px 16px rgba(0,0,0,0.12), -4px -4px 12px rgba(255,255,255,0.95)',
            }}>
              <div style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 30,
                fontWeight: 800,
                color: 'var(--accent)',
              }}>{n}</div>
              <div style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--hint)',
                marginTop: 4,
              }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — PHOTO */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(135deg,#EDE8FF 0%,#F5F3EE 60%,#FFE8F0 100%)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* Deco circles */}
        <div style={{
          position: 'absolute', borderRadius: '50%',
          width: 300, height: 300, top: -80, right: -80,
          background: 'rgba(91,79,232,0.08)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', borderRadius: '50%',
          width: 200, height: 200, bottom: 80, right: 20,
          background: 'rgba(232,91,138,0.08)', pointerEvents: 'none',
        }} />

        <Image
          src="/photo.png"
          alt="Prasanna Balaji C — UI/UX Designer"
          width={480}
          height={640}
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
            height: '82vh',
            width: 'auto',
            position: 'relative',
            zIndex: 2,
          }}
        />

        {/* Float chips */}
        <div style={{
          position: 'absolute', top: '18%', left: '5%', zIndex: 3,
          background: 'rgba(255,255,255,0.75)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.9)',
          borderRadius: 14, padding: '12px 18px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          animation: 'float 4s ease-in-out infinite',
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--hint)' }}>Degree</div>
          <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--text)', fontFamily: 'Syne, sans-serif', marginTop: 2 }}>B.E CSE</div>
          <div style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 600, marginTop: 1 }}>80% · 2025</div>
        </div>

        <div style={{
          position: 'absolute', bottom: '28%', left: '5%', zIndex: 3,
          background: 'rgba(255,255,255,0.75)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.9)',
          borderRadius: 14, padding: '12px 18px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          animation: 'float 4s ease-in-out infinite 2s',
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--hint)' }}>Tools</div>
          <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--text)', fontFamily: 'Syne, sans-serif', marginTop: 2 }}>Figma · Framer</div>
          <div style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 600, marginTop: 1 }}>+ VS Code, Notion</div>
        </div>
      </div>
    </section>
  )
}