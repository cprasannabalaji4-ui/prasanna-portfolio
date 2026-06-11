const jobs = [
  {
    company: 'AgilenSmart',
    role: 'Full Stack Development Intern',
    period: 'Jul – Aug 2024',
    desc: 'Hands-on experience building real-world web applications using MERN stack. Worked on frontend UI, REST APIs, and database integration in a professional team environment.',
  },
  {
    company: 'Digidz India',
    role: 'Digital Marketing Intern',
    period: 'May – Jun 2023',
    desc: 'Managed social media campaigns, created content strategies, and analyzed performance metrics for real clients. Gained experience in SEO, paid ads, and brand communication.',
  },
]

export default function Experience() {
  return (
    <section
      id="exp"
      className="section-wrap"
      style={{
        padding: '5rem 3.5rem',
        maxWidth: 1100,
        margin: '0 auto',
      }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: '0.5rem',
        }}
      >
        04 — Experience
      </div>

      <h2
        className="sec-h"
        style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 48,
          fontWeight: 800,
          letterSpacing: '-2px',
          color: 'var(--text)',
          lineHeight: 1,
          marginBottom: '3rem',
        }}
      >
        Where I&apos;ve <span style={{ color: 'var(--accent)' }}>Worked</span>
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
        }}
      >
        {jobs.map((j, i) => (
          <div
            key={i}
            style={{
              background: 'var(--white)',
              borderRadius: 22,
              padding: '2rem 2.5rem',
              boxShadow:
                '6px 6px 20px rgba(0,0,0,0.12), -4px -4px 14px rgba(255,255,255,0.95)',
            }}
          >
            <div
              className="exp-card-inner"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '2rem',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: 20,
                    fontWeight: 800,
                    color: 'var(--text)',
                    marginBottom: 4,
                  }}
                >
                  {j.company}
                </div>

                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                  }}
                >
                  {j.role}
                </div>

                <div
                  style={{
                    fontSize: 13,
                    color: 'var(--muted)',
                    marginTop: 10,
                    maxWidth: 520,
                    lineHeight: 1.7,
                  }}
                >
                  {j.desc}
                </div>
              </div>

              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: 'var(--accent)',
                  background: 'rgba(91,79,232,0.08)',
                  border: '1.5px solid rgba(91,79,232,0.15)',
                  padding: '8px 18px',
                  borderRadius: 50,
                  whiteSpace: 'nowrap',
                }}
              >
                {j.period}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}