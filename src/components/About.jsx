'use client'

import styles from './About.module.css'

export default function About() {
  const achievements = [
    {
      number: '06+',
      label: 'Projects Completed',
      desc: 'Real-world UI/UX & Frontend Projects',
      icon: '✦',
    },
    {
      number: '02',
      label: 'Internships',
      desc: 'Industry Experience',
      icon: '◉',
    },
    {
      number: '2025',
      label: 'Graduate',
      desc: 'B.E Computer Science',
      icon: '▲',
    },
  ]

  const education = [
    {
      year: '2021 — 2025',
      title: 'B.E Computer Science & Engineering',
      college: 'Indra Ganesan College of Engineering',
      score: 'CGPA 8.0',
    },
    {
      year: '2019 — 2021',
      title: 'Higher Secondary Education',
      college: "Govt. Boys Higher Secondary School",
      score: '80%',
    },
    {
      year: '2018 — 2019',
      title: 'Secondary School Education',
      college: "St. Antony's Higher Secondary School",
      score: '65%',
    },
  ]

  const skills = [
    'Figma',
    'UI Design',
    'UX Research',
    'Wireframing',
    'Prototype',
    'React',
    'Next.js',
    'Tailwind CSS',
    'JavaScript',
    'HTML',
    'CSS',
    'Git',
  ]

  return (
    <section id="about" className={styles.about}>
      {/* Aurora Background */}
      <div className={`${styles.aurora} ${styles.aurora1}`}></div>
      <div className={`${styles.aurora} ${styles.aurora2}`}></div>
      <div className={styles.noise}></div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.sectionTop}>
          <span className={styles.sectionTag}>ABOUT ME</span>

          <h2 className={styles.title}>
            Designing
            <span> Meaningful Experiences</span>
            <br />
            Beyond Beautiful Interfaces.
          </h2>

          <p className={styles.subtitle}>
            I&apos;m
            <strong> Prasanna Balaji </strong>
            — a passionate UI/UX Designer and Frontend Developer
            who loves crafting modern digital products with
            elegant experiences, thoughtful interactions and
            pixel-perfect interfaces.
          </p>
        </div>

        {/* Main Grid */}
        <div className={styles.aboutGrid}>
          {/* Left */}
          <div className={styles.aboutLeft}>
            <div className={styles.glassCard}>
              <span className={styles.smallTitle}>WHO AM I</span>

              <h3>
                Turning ideas into
                premium digital
                experiences.
              </h3>

              <p>
                I specialize in creating intuitive user
                interfaces that combine modern aesthetics
                with functional usability.
              </p>

              <p>
                My workflow starts from research,
                wireframes and prototypes inside
                Figma, then transforms into
                responsive websites using
                React, Next.js and modern
                frontend technologies.
              </p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span>📍</span>
                  Chennai, Tamil Nadu
                </div>

                <div className={styles.infoItem}>
                  <span>💼</span>
                  Open for UI/UX Opportunities
                </div>

                <div className={styles.infoItem}>
                  <span>⚡</span>
                  Immediate Joiner
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className={styles.aboutRight}>
            {achievements.map((item) => (
              <div key={item.label} className={styles.statCard}>
                <div className={styles.statIcon}>{item.icon}</div>

                <div>
                  <h3>{item.number}</h3>
                  <h4>{item.label}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===============================
            SKILLS SHOWCASE
        =============================== */}
        <div className={styles.skillsSection}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionNumber}>01</span>
            <h3>Core Expertise</h3>
          </div>

          <div className={styles.skillsWrapper}>
            {skills.map((skill) => (
              <div key={skill} className={styles.skillPill}>
                <span className={styles.skillDot}></span>
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* ===============================
            EDUCATION
        =============================== */}
        <div className={styles.educationSection}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionNumber}>02</span>
            <h3>Education Journey</h3>
          </div>

          <div className={styles.timeline}>
            {education.map((item) => (
              <div key={item.year} className={styles.timelineItem}>
                <div className={styles.timelineLeft}>
                  <span className={styles.timelineYear}>{item.year}</span>
                </div>

                <div className={styles.timelineDot}></div>

                <div className={styles.timelineCard}>
                  <h4>{item.title}</h4>
                  <p>{item.college}</p>
                  <span className={styles.timelineScore}>{item.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===============================
            DESIGN PHILOSOPHY
        =============================== */}
        <div className={styles.philosophy}>
          <div className={`${styles.glassCard} ${styles.philosophyCard}`}>
            <span className={styles.smallTitle}>DESIGN PHILOSOPHY</span>

            <h3>Good design should feel invisible.</h3>

            <p>
              Every interface should guide users
              naturally without making them think.
              I focus on accessibility, usability,
              consistency and delightful
              micro-interactions to build products
              people genuinely enjoy using.
            </p>
          </div>
        </div>

        {/* ===============================
            LET'S BUILD
        =============================== */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <span className={styles.smallTitle}>LET&apos;S CONNECT</span>

            <h2>
              Building digital
              products that people
              remember.
            </h2>

            <p>
              I&apos;m currently looking for UI/UX Design
              opportunities where I can contribute,
              learn and create meaningful digital
              experiences with passionate teams.
            </p>

            <div className={styles.ctaButtons}>
              <a
                href="mailto:cprasannabalaji4@gmail.com"
                className={styles.primaryBtn}
              >
                Hire Me ↗
              </a>

              <a
                href="https://www.behance.net/prasannabalajic"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
              >
                Behance ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}