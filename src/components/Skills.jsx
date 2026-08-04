'use client'

import {
  FaFigma,
  FaReact,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa'

import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiCanva,
  SiFramer,
} from 'react-icons/si'

const categories = [
  {
    id: '01',
    title: 'UI / UX Design',
    subtitle: 'Designing meaningful digital experiences',
    color: '#7C3AED',

    skills: [
      {
        icon: <FaFigma />,
        name: 'Figma',
        level: 98,
      },
      {
        icon: <SiFramer />,
        name: 'Framer',
        level: 90,
      },
      {
        icon: <SiCanva />,
        name: 'Canva',
        level: 92,
      },
    ],
  },

  {
    id: '02',
    title: 'Frontend Development',
    subtitle: 'Building modern interfaces',

    color: '#06B6D4',

    skills: [
      {
        icon: <FaReact />,
        name: 'React',
        level: 92,
      },
      {
        icon: <SiNextdotjs />,
        name: 'Next.js',
        level: 90,
      },
      {
        icon: <SiJavascript />,
        name: 'JavaScript',
        level: 94,
      },
      {
        icon: <SiTailwindcss />,
        name: 'Tailwind',
        level: 96,
      },
    ],
  },

  {
    id: '03',
    title: 'Backend',
    subtitle: 'Scalable applications',

    color: '#10B981',

    skills: [
      {
        icon: <FaNodeJs />,
        name: 'Node.js',
        level: 80,
      },
      {
        icon: <SiMongodb />,
        name: 'MongoDB',
        level: 82,
      },
      {
        icon: <FaGithub />,
        name: 'GitHub',
        level: 94,
      },
    ],
  },
]

export default function Skills() {

  const styles = {

    section: {
      background: '#070707',
      color: '#fff',
      minHeight: '100vh',
      padding: '140px 6%',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Inter,sans-serif',
    },

    container: {
      maxWidth: '1450px',
      margin: 'auto',
    },

    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 18px',
      border: '1px solid rgba(255,255,255,.08)',
      borderRadius: 100,
      color: '#9ca3af',
      fontSize: 12,
      letterSpacing: 2,
      textTransform: 'uppercase',
      marginBottom: 35,
      background: 'rgba(255,255,255,.03)',
      backdropFilter: 'blur(20px)',
    },

    dot: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '#8B5CF6',
    },

    heading: {
      fontSize: 'clamp(65px,8vw,120px)',
      fontWeight: 900,
      lineHeight: .9,
      letterSpacing: '-5px',
      margin: 0,
    },

    gradient: {
      background:
        'linear-gradient(90deg,#8B5CF6,#06B6D4)',

      WebkitBackgroundClip: 'text',

      color: 'transparent',
    },

    intro: {
      width: 600,
      maxWidth: '100%',
      color: '#9CA3AF',
      fontSize: 18,
      marginTop: 30,
      lineHeight: 1.9,
    },

    grid: {
      display: 'grid',
      gridTemplateColumns:
        'repeat(auto-fit,minmax(380px,1fr))',
      gap: 30,
      marginTop: 90,
    },

  }

  return (

    <section
      id="skills"
      style={styles.section}
    >

      <div style={styles.container}>

        <div style={styles.badge}>

          <div style={styles.dot} />

          SKILLS & EXPERTISE

        </div>

        <h2 style={styles.heading}>

          Building
          <br />

          <span style={styles.gradient}>
            Digital Products
          </span>

        </h2>

        <p style={styles.intro}>

          My expertise combines UI/UX Design,
          Frontend Development and modern
          technologies to build premium digital
          experiences that are beautiful,
          scalable and user-focused.

        </p>

        <div style={styles.grid}>
          {categories.map((category) => (

  <div
    key={category.id}
    style={{
      position: 'relative',
      overflow: 'hidden',

      background:
        'linear-gradient(145deg,rgba(255,255,255,.05),rgba(255,255,255,.02))',

      border: '1px solid rgba(255,255,255,.08)',

      borderRadius: 30,

      padding: 35,

      backdropFilter: 'blur(20px)',

      transition: '.35s',
    }}
  >

    {/* Top */}

    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 45,
      }}
    >

      <span
        style={{
          color: category.color,
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 2,
        }}
      >
        {category.id}
      </span>

      <div
        style={{
          width: 55,
          height: 55,
          borderRadius: '50%',
          background: `${category.color}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: category.color,
          fontSize: 22,
        }}
      >
        ✦
      </div>

    </div>

    {/* Heading */}

    <h3
      style={{
        fontSize: 34,
        margin: 0,
        fontWeight: 800,
        letterSpacing: '-1px',
      }}
    >
      {category.title}
    </h3>

    <p
      style={{
        marginTop: 12,
        color: '#9CA3AF',
        lineHeight: 1.8,
        fontSize: 15,
      }}
    >
      {category.subtitle}
    </p>

    {/* Skills */}

    <div
      style={{
        marginTop: 40,
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
      }}
    >

    {category.skills.map((skill, index) => (

  <div
    key={index}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 18,
    }}
  >

    {/* Icon */}

    <div
      style={{
        width: 55,
        height: 55,
        borderRadius: 18,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        fontSize: 24,

        color: category.color,

        background:
          `${category.color}12`,

        border:
          `1px solid ${category.color}30`,

        flexShrink: 0,
      }}
    >

      {skill.icon}

    </div>


    {/* Content */}

    <div
      style={{
        flex: 1,
      }}
    >

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',

          marginBottom: 10,
        }}
      >

        <span
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: '#fff',
          }}
        >
          {skill.name}
        </span>


        <span
          style={{
            fontSize: 13,
            color: category.color,
            fontWeight: 700,
          }}
        >
          {skill.level}%
        </span>


      </div>


      {/* Progress Bar */}

      <div
        style={{
          height: 6,

          width: '100%',

          background:
            'rgba(255,255,255,.08)',

          borderRadius: 50,

          overflow: 'hidden',
        }}
      >

        <div
          style={{
            width: `${skill.level}%`,

            height: '100%',

            borderRadius: 50,

            background:
              `linear-gradient(90deg,
              ${category.color},
              rgba(255,255,255,.8))`,

            transition:
              'width 1s ease',
          }}
        />

      </div>


    </div>


  </div>

))}

    </div>


    {/* Bottom Glow */}

    <div
      style={{
        position: 'absolute',

        width: 180,
        height: 180,

        right: -80,
        bottom: -80,

        borderRadius: '50%',

        background:
          category.color,

        opacity: .12,

        filter:
          'blur(60px)',

        pointerEvents: 'none',
      }}
    />


  </div>

))}

        </div>

      </div>

    </section>

  )

}
