'use client'

import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
]

const CONTACT = {
  phone: '+919790188656',
  email: 'cprasannabalaji4@gmail.com',
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* ===========================
      Scroll To Section
      (same pattern as Hero.jsx scrollToProjects)
  =========================== */

  const scrollToSection = (e, id) => {
    e.preventDefault()

    const section = document.getElementById(id)

    if (!section) {
      console.log(`${id} section not found`)
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

    setMenuOpen(false)
  }

  const scrollToTop = (e) => {
    e.preventDefault()

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  /* ===========================
      Scroll Detection (navbar bg)
  =========================== */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    onScroll()

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      >
        {/* Logo */}

        <a
          href="#home"
          onClick={scrollToTop}
          className={styles.logo}
        >
          <span className={styles.logoDot}></span>

          <div>
            <h3>Prasanna</h3>
            <p>UI / UX Designer</p>
          </div>
        </a>

        {/* Desktop Nav */}

        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={styles.navItem}
            >
              <span className={styles.navGlow}></span>
              <span className={styles.navText}>{item.label}</span>
              <span className={styles.navTextGradient}>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right */}

        <div className={styles.right}>
          <div className={styles.contactGroup}>
            <a
              href={`tel:${CONTACT.phone}`}
              className={styles.contactBtn}
              aria-label="Call Prasanna"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className={styles.contactBtnFilled}
              aria-label="Email Prasanna"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <path d="m22 6-10 7L2 6"/>
              </svg>
              Email
            </a>
          </div>

          {/* Mobile Menu Button */}

          <button
            className={`${styles.menuBtn} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

      <aside className={`${styles.mobileMenu} ${menuOpen ? styles.show : ''}`}>
        <div className={styles.mobileInner}>
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={styles.mobileLink}
            >
              <small>0{index + 1}</small>
              <span>{item.label}</span>
              <strong>↗</strong>
            </a>
          ))}

          <div className={styles.mobileContactRow}>
            <a
              href={`tel:${CONTACT.phone}`}
              className={styles.mobileContactBtn}
            >
              Call
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className={styles.mobileContactBtnFilled}
            >
              Email
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}