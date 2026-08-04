'use client'

import Image from 'next/image'
import styles from './Projects.module.css'

const projects = [
  {
    id: '01',
    title: 'Thulir Enterprises',
    category: 'UI / UX Design',
    year: '2026',
    image: '/projects/project1.png',
    tags: ['Research', 'Wireframe', 'Prototype', 'Figma'],
    figma: 'https://www.figma.com/@prasannabalajic',
    live: 'https://www.thulirenterprises.co.in/',
  },
  {
    id: '02',
    title: 'Guider',
    category: 'Dashboard Design',
    year: '2026',
    image: '/projects/project2.png',
    tags: ['Design System', 'UX', 'Web App'],
    figma: 'https://www.figma.com/@prasannabalajic',
    live: 'https://www.behance.net/prasannabalajic',
  },
  {
    id: '03',
    title: 'Lumera Beauty Studio',
    category: 'Mobile App',
    year: '2026',
    image: '/projects/project3.png',
    tags: ['Mobile', 'Prototype', 'UI Kit'],
    figma: 'https://www.figma.com/@prasannabalajic',
    live: 'https://www.behance.net/prasannabalajic',
  },
  {
    id: '04',
    title: 'Gurd Path',
    category: 'Mobile App',
    year: '2026',
    image: '/projects/project4.png',
    tags: ['Mobile', 'Prototype', 'UI Kit'],
    figma: 'https://www.figma.com/@prasannabalajic',
    live: 'https://www.behance.net/prasannabalajic',
  },
  {
    id: '05',
    title: 'WheelFix',
    category: 'Mobile App',
    year: '2026',
    image: '/projects/project5.png',
    tags: ['Mobile', 'Prototype', 'UI Kit'],
    figma: 'https://www.figma.com/@prasannabalajic',
    live: 'https://www.behance.net/prasannabalajic',
  },
  {
    id: '06',
    title: 'Jivium',
    category: 'Mobile App',
    year: '2026',
    image: '/projects/project6.png',
    tags: ['Mobile', 'Prototype', 'UI Kit'],
    figma: 'https://www.figma.com/@prasannabalajic',
    live: 'https://www.behance.net/prasannabalajic',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className={styles.projectsSection}
    >
      <div className={styles.projectsBgGrid}></div>

      <div
        className={`${styles.projectsGlow} ${styles.glowOne}`}
      ></div>

      <div
        className={`${styles.projectsGlow} ${styles.glowTwo}`}
      ></div>

      <div className={styles.projectsContainer}>

        {/* HEADER */}

        <div className={styles.projectsHeader}>

          <div>

            <span className={styles.sectionTag}>
              MY WORK
            </span>

            <div className={styles.sectionNumberRow}>
              <span className={styles.sectionNumber}>
                03
              </span>
            </div>

            <h2 className={styles.projectsTitle}>
              Selected

              <span> Works</span>

              <strong>2026</strong>
            </h2>

            <p className={styles.projectsDescription}>

              Every interface is designed with
              strategy, usability and motion.

              My goal is to create products that
              people love using.

            </p>

          </div>

          <div className={styles.headerActions}>

            <button
              className={styles.figmaBtn}
              onClick={() =>
                window.open(
                  'https://www.figma.com/@prasannabalajic',
                  '_blank'
                )
              }
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2a5 5 0 0 0 0 10h5a5 5 0 0 0 0-10h-5zm0 10a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-5-5a5 5 0 1 0 5 5V7H7zm0 10a5 5 0 1 0 5 5v-5H7z"/>
              </svg>

              <span>Figma Profile</span>

              <span>↗</span>

            </button>

          </div>

        </div>

        {/* PROJECT GRID */}

        <div className={styles.projectsGrid}>
                    {projects.map((project) => (

            <article
              key={project.id}
              className={styles.projectCard}
            >

              {/* IMAGE */}

              <div className={styles.projectImage}>

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={project.id === '01'}
                  className={styles.projectImg}
                />

                <div className={styles.imageOverlay}></div>

              </div>

              {/* CONTENT */}

              <div className={styles.projectContent}>

                <div className={styles.projectTop}>

                  <span className={styles.projectId}>
                    {project.id}
                  </span>

                  <span className={styles.projectYear}>
                    {project.year}
                  </span>

                </div>

                <span className={styles.projectCategory}>
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <div className={styles.tagList}>

                  {project.tags.map((tag) => (

                    <span key={tag}>
                      {tag}
                    </span>

                  ))}

                </div>

                <div className={styles.projectButtons}>

                  <button
                    onClick={() =>
                      window.open(
                        project.figma,
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                  >
                    Figma ↗
                  </button>

                  <button
                    onClick={() =>
                      window.open(
                        project.live,
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                  >
                    Live ↗
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* FOOTER CTA - matches About section's CTA card style */}

        <div className={styles.projectsFooter}>

          <div className={styles.footerCard}>

            <span className={styles.smallTitle}>
              WANT MORE?
            </span>

            <h3>
              More projects live
              on my Figma profile.
            </h3>

            <a
              href="https://www.figma.com/@prasannabalajic"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerBtn}
            >
              View All Work ↗
            </a>

          </div>

        </div>

      </div>

    </section>

  )
}