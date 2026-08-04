'use client'

import styles from './Experience.module.css'

export default function Experience() {
  const experiences = [
    {
      company: 'AgilenSmart',
      role: 'Full Stack Development Intern',
      period: 'Jul 2024 — Aug 2024',
      badge: 'Internship',
      description:
        'Worked on full stack web applications, developed responsive UI components, integrated REST APIs and handled database operations.',
      skills: ['React', 'Node.js', 'MongoDB', 'REST API'],
    },
    {
      company: 'Digidz India',
      role: 'Digital Marketing Intern',
      period: 'May 2023 — Jun 2023',
      badge: 'Internship',
      description:
        'Created digital campaigns, optimized SEO strategies and analyzed marketing performance for real-world projects.',
      skills: ['SEO', 'Google Ads', 'Analytics', 'Content'],
    },
  ]

  return (
    <section id="experience" className={styles.section}>
      {/* Background Grid */}
      <div className={styles.grid}></div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.label}>04 — EXPERIENCE</div>

        <h2 className={styles.title}>
          Professional
          <span> Journey</span>
        </h2>

        <p className={styles.description}>
          My internships and professional experience
          building modern digital products, improving
          user experience and working with development
          teams.
        </p>

        {/* Timeline */}
        <div className={styles.timeline}>
          {experiences.map((item) => (
            <div key={item.company} className={styles.item}>
              <div className={styles.line}></div>

              <div className={styles.dot}></div>

              <div className={styles.card}>
                <div className={styles.header}>
                  <div>
                    <h3>{item.company}</h3>
                    <h4>{item.role}</h4>
                    <p className={styles.period}>{item.period}</p>
                  </div>

                  <div className={styles.badge}>{item.badge}</div>
                </div>

                <p className={styles.text}>{item.description}</p>

                <div className={styles.skills}>
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}