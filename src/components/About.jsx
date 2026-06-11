export default function About() {
  return (
    <section
      id="about"
      className="section-wrap"
      style={{
        padding: "5rem 3.5rem",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "0.5rem",
        }}
      >
        01 — About
      </div>

      <h2
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: 48,
          fontWeight: 800,
          letterSpacing: "-2px",
          color: "var(--text)",
          lineHeight: 1,
          marginBottom: "3rem",
        }}
      >
        Designer who <span style={{ color: "var(--accent)" }}>Codes</span>
      </h2>

      <div
        className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Left — Bio + Education */}
        <div
          style={{
            background: "var(--white)",
            borderRadius: 28,
            padding: "2.5rem",
            boxShadow:
              "8px 8px 24px rgba(0,0,0,0.12), -6px -6px 18px rgba(255,255,255,0.95)",
          }}
        >
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.9,
              color: "var(--muted)",
              marginBottom: "2rem",
            }}
          >
            Hi — I am{" "}
            <strong style={{ color: "var(--text)" }}>
              Prasanna Balaji C
            </strong>
            , a passionate UI/UX designer with a strong foundation in
            user-centered design principles. I love bringing creative ideas to
            life — designing to inspire positivity in every viewer.
            <br />
            <br />
            With additional expertise in{" "}
            <strong style={{ color: "var(--text)" }}>
              full-stack development
            </strong>
            , I combine creativity and technology to deliver scalable,
            user-focused applications. Fresh B.E graduate from{" "}
            <strong style={{ color: "var(--text)" }}>
              Indra Ganesan College
            </strong>
            , Manikandam — currently available for full-time or freelance
            opportunities.
          </p>

          {[
            {
              deg: "B.E Computer Science & Engineering",
              school: "Indra Ganesan College, Manikandam",
              yr: "2021–25 · 80%",
            },
            {
              deg: "12th Standard",
              school: "Govt. Boy's Hr Sec School, Manapparai",
              yr: "2019–21 · 80%",
            },
            {
              deg: "10th Standard",
              school: "St Antony's Hr Sec School, Manapparai",
              yr: "2018–19 · 65%",
            },
          ].map((e, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg)",
                borderRadius: 14,
                padding: "13px 18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
                boxShadow:
                  "3px 3px 10px rgba(0,0,0,0.1), -3px -3px 8px rgba(255,255,255,0.95)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--text)",
                  }}
                >
                  {e.deg}
                </div>

                <div
                  style={{
                    fontSize: 11,
                    color: "var(--hint)",
                    marginTop: 2,
                  }}
                >
                  {e.school}
                </div>
              </div>

              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "var(--accent)",
                  background: "rgba(91,79,232,0.08)",
                  padding: "5px 12px",
                  borderRadius: 50,
                  whiteSpace: "nowrap",
                }}
              >
                {e.yr}
              </div>
            </div>
          ))}
        </div>

        {/* Right — Stats */}
        <div
          className="stats-col"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {[
            { n: "6+", l: "Projects Done" },
            { n: "2", l: "Internships" },
            { n: "7+", l: "Certificates" },
          ].map(({ n, l }) => (
            <div
              className="stat-card-wrap"
              key={l}
              style={{
                background: "var(--white)",
                borderRadius: 20,
                padding: "1.5rem",
                textAlign: "center",
                boxShadow:
                  "6px 6px 18px rgba(0,0,0,0.12), -4px -4px 14px rgba(255,255,255,0.95)",
              }}
            >
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: 40,
                  fontWeight: 800,
                  color: "var(--accent)",
                  lineHeight: 1,
                }}
              >
                {n}
              </div>

              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--hint)",
                  marginTop: 6,
                }}
              >
                {l}
              </div>

              <div
                style={{
                  height: 3,
                  borderRadius: 50,
                  background:
                    "linear-gradient(90deg,var(--accent),var(--accent2))",
                  marginTop: 12,
                  opacity: 0.3,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}