'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'

const techStack = [
  'Figma',
  'React',
  'Next.js',
  'Tailwind',
  'Framer',
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  /* ===========================
      Scroll To Projects
  =========================== */

  const scrollToProjects = (e) => {
    e.preventDefault()

    const section = document.getElementById('projects')

    if (!section) {
      console.log('Projects section not found')
      return
    }

    const navbarHeight = 90

    const top =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight

    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  }

  return (
    <section id="home" className={styles.hero}>

      {/* Background */}

      <div className={styles.grid}></div>

      <div className={styles.glowOne}></div>

      <div className={styles.glowTwo}></div>

      <div className={styles.glowThree}></div>

      <div className={styles.container}>

        {/* LEFT */}

        <div className={styles.left}>

          <div className={styles.badge}>
            <span className={styles.dot}></span>
            Available for Full Time
          </div>

          <h1 className={styles.title}>
            Crafting
            <span> Premium </span>
            Digital
            <br />
            Experiences.
          </h1>

          <p className={styles.desc}>
            Hi, I&apos;m
            <strong> Prasanna Balaji </strong>
            — UI / UX Designer and Frontend Developer
            who creates premium interfaces,
            meaningful user experiences
            and high-performance web applications.
          </p>

          {/* Buttons */}

          <div className={styles.actions}>

            <a
              href="#projects"
              onClick={scrollToProjects}
              className={styles.primaryBtn}
            >
              Explore Projects
              <span>↗</span>
            </a>

            <a
              href="https://www.behance.net/prasannabalajic"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              Behance
              <span>↗</span>
            </a>

          </div>

          {/* Tech Stack */}

          <div className={styles.techRow}>

            {techStack.map((tech) => (

              <div
                key={tech}
                className={styles.tech}
              >
                {tech}
              </div>

            ))}

          </div>

          {/* Stats */}

          <div className={styles.stats}>

            <div>

              <h2>
                {mounted ? '10+' : '10+'}
              </h2>

              <span>
                Projects
              </span>

            </div>

            <div>

              <h2>
                {mounted ? '02' : '02'}
              </h2>

              <span>
                Internships
              </span>

            </div>

          </div>

        </div>
                {/* RIGHT */}

        <div className={styles.right}>

          <div className={styles.photoWrap}>

            <div className={styles.photoGlow}></div>

            <Image
              src="/photo.png"
              alt="Prasanna Balaji"
              width={650}
              height={820}
              priority
              className={styles.photo}
            />

            <div className={styles.overlay}></div>

          </div>

          {/* Floating Card */}

          <div
            className={`${styles.card} ${styles.cardTop}`}
          >
            <small>
              Focus
            </small>

            <strong>
              UI / UX Design
            </strong>
          </div>

          <div
            className={`${styles.card} ${styles.cardBottom}`}
          >
            <small>
              Based in
            </small>

            <strong>
              Chennai, India
            </strong>
          </div>

          {/* Orbit */}

          <div className={styles.orbit}></div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className={styles.scroll}>

        <span>
          Scroll Down
        </span>

      </div>

    </section>
  )
}