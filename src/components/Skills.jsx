'use client'

import {
  FaFigma,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLightbulb,
  FaUsers,
  FaLanguage,
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
        name: 'Tailwind CSS',
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



const personalSkills = [

  {
    icon:<FaLightbulb/>,
    name:'Creative Thinking',
  },

  {
    icon:<FaLightbulb/>,
    name:'Design Thinking',
  },

  {
    icon:<FaLightbulb/>,
    name:'Problem Solving',
  },

  {
    icon:<FaUsers/>,
    name:'Team Work',
  },

  {
    icon:<FaUsers/>,
    name:'Leadership',
  },

  {
    icon:<FaLightbulb/>,
    name:'Punctuality',
  },

]



const languages = [

  {
    name:'Tamil',
    level:'Native',
  },

  {
    name:'English',
    level:'Intermediate',
  },

]



export default function Skills(){


const styles = {


section:{

background:'#070707',

color:'#fff',

minHeight:'100vh',

padding:'120px 6%',

overflow:'hidden',

fontFamily:'Inter,sans-serif',

},



container:{

maxWidth:'1450px',

margin:'auto',

},



badge:{

display:'inline-flex',

alignItems:'center',

gap:10,

padding:'8px 18px',

border:'1px solid rgba(255,255,255,.08)',

borderRadius:100,

color:'#9CA3AF',

fontSize:12,

letterSpacing:2,

textTransform:'uppercase',

marginBottom:35,

background:'rgba(255,255,255,.03)',

},



dot:{

width:8,

height:8,

borderRadius:'50%',

background:'#8B5CF6',

},



heading:{

fontSize:'clamp(42px,7vw,110px)',

fontWeight:900,

lineHeight:.95,

letterSpacing:'-4px',

margin:0,

},



gradient:{

background:'linear-gradient(90deg,#8B5CF6,#06B6D4)',

WebkitBackgroundClip:'text',

color:'transparent',

},



intro:{

maxWidth:620,

color:'#9CA3AF',

fontSize:'clamp(15px,2vw,18px)',

marginTop:30,

lineHeight:1.9,

},



grid:{

display:'grid',

gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',

gap:30,

marginTop:80,

},



card:{

position:'relative',

overflow:'hidden',

background:
'linear-gradient(145deg,rgba(255,255,255,.06),rgba(255,255,255,.02))',

border:'1px solid rgba(255,255,255,.08)',

borderRadius:30,

padding:35,

backdropFilter:'blur(20px)',

},


}

return (

<section
id="skills"
style={styles.section}
>

<div style={styles.container}>


<div style={styles.badge}>

<div style={styles.dot}></div>

SKILLS & EXPERTISE

</div>



<h2 style={styles.heading}>

Building

<br/>

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


{categories.map((category)=>(


<div
key={category.id}
style={styles.card}
>

<div
style={{
display:'flex',
justifyContent:'space-between',
alignItems:'center',
marginBottom:40
}}
>


<span
style={{
color:category.color,
fontSize:13,
fontWeight:700,
letterSpacing:2
}}
>

{category.id}

</span>


<div
style={{
width:55,
height:55,
borderRadius:'50%',
display:'flex',
alignItems:'center',
justifyContent:'center',
background:`${category.color}15`,
color:category.color,
fontSize:22
}}
>

✦

</div>


</div>
      <h3
        style={{
          fontSize:'clamp(24px,3vw,34px)',
          margin:0,
          fontWeight:800,
          letterSpacing:'-1px',
        }}
      >

        {category.title}

      </h3>



      <p
        style={{
          marginTop:12,
          color:'#9CA3AF',
          lineHeight:1.8,
          fontSize:15,
        }}
      >

        {category.subtitle}

      </p>



      <div
        style={{
          marginTop:40,
          display:'flex',
          flexDirection:'column',
          gap:24,
        }}
      >



      {
        category.skills.map((skill,index)=>(


        <div
          key={index}
          style={{
            display:'flex',
            alignItems:'center',
            gap:16,
          }}
        >


          <div
            style={{
              width:52,
              height:52,
              minWidth:52,

              borderRadius:18,

              display:'flex',
              alignItems:'center',
              justifyContent:'center',

              fontSize:23,

              color:category.color,

              background:
              `${category.color}12`,

              border:
              `1px solid ${category.color}30`,
            }}
          >

            {skill.icon}

          </div>



          <div
            style={{
              flex:1,
              minWidth:0,
            }}
          >


            <div
              style={{
                display:'flex',

                justifyContent:'space-between',

                alignItems:'center',

                gap:10,

                marginBottom:10,
              }}
            >


              <span
                style={{
                  fontSize:15,
                  fontWeight:600,
                  color:'#fff',
                }}
              >

                {skill.name}

              </span>



              <span
                style={{
                  fontSize:13,
                  color:category.color,
                  fontWeight:700,
                }}
              >

                {skill.level}%

              </span>


            </div>



            <div
              style={{
                height:6,

                width:'100%',

                background:
                'rgba(255,255,255,.08)',

                borderRadius:50,

                overflow:'hidden',
              }}
            >


              <div
                style={{
                  width:`${skill.level}%`,

                  height:'100%',

                  borderRadius:50,

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


        ))
      }


      </div>



      <div
        style={{
          position:'absolute',

          width:180,

          height:180,

          right:-80,

          bottom:-80,

          borderRadius:'50%',

          background:category.color,

          opacity:.12,

          filter:'blur(60px)',

          pointerEvents:'none',
        }}
      />


</div>


))}


</div>





{/* PERSONAL SKILLS */}


<div
style={{
marginTop:100,
}}
>


<div
style={{
display:'flex',
alignItems:'center',
gap:15,
marginBottom:40,
}}
>


<div
style={{
width:8,
height:8,
borderRadius:'50%',
background:'#8B5CF6',
}}
/>


<h3
style={{
fontSize:'clamp(28px,4vw,45px)',
margin:0,
fontWeight:800,
letterSpacing:'-1px',
}}
>

Personal Skills

</h3>


</div>





<div
style={{
display:'grid',

gridTemplateColumns:
'repeat(auto-fit,minmax(220px,1fr))',

gap:20,
}}
>


{
personalSkills.map((item,index)=>(


<div
key={index}
style={{
background:
'rgba(255,255,255,.04)',

border:
'1px solid rgba(255,255,255,.08)',

borderRadius:22,

padding:'25px 22px',

display:'flex',

alignItems:'center',

gap:15,

backdropFilter:'blur(20px)',

}}
>


<div
style={{
width:45,

height:45,

borderRadius:14,

display:'flex',

alignItems:'center',

justifyContent:'center',

background:
'rgba(139,92,246,.15)',

color:'#8B5CF6',

fontSize:20,
}}
>

{item.icon}

</div>



<span
style={{
fontSize:16,

fontWeight:600,

color:'#fff',
}}
>

{item.name}

</span>


</div>


))
}



</div>


</div>





{/* LANGUAGE SECTION */}


<div
style={{
marginTop:70,
display:'grid',

gridTemplateColumns:
'repeat(auto-fit,minmax(280px,1fr))',

gap:30,
}}
>


<div
style={{
background:
'linear-gradient(145deg,rgba(255,255,255,.06),rgba(255,255,255,.02))',

border:
'1px solid rgba(255,255,255,.08)',

borderRadius:30,

padding:35,

backdropFilter:'blur(20px)',
}}
>


<div
style={{
display:'flex',

alignItems:'center',

gap:15,

marginBottom:30,
}}
>


<div
style={{
width:50,

height:50,

borderRadius:16,

display:'flex',

alignItems:'center',

justifyContent:'center',

background:'rgba(6,182,212,.15)',

color:'#06B6D4',

fontSize:22,
}}
>

<FaLanguage/>

</div>


<h3
style={{
margin:0,

fontSize:30,

fontWeight:800,
}}
>

Languages

</h3>


</div>
        {
          languages.map((lang,index)=>(


          <div
          key={index}
          style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',

            padding:'18px 0',

            borderBottom:
            index !== languages.length - 1
            ?
            '1px solid rgba(255,255,255,.08)'
            :
            'none',
          }}
          >

            <span
            style={{
              fontSize:17,
              fontWeight:600,
            }}
            >

              {lang.name}

            </span>


            <span
            style={{
              color:'#06B6D4',
              fontSize:14,
              fontWeight:700,
            }}
            >

              {lang.level}

            </span>


          </div>


          ))
        }


      </div>


    </div>



  </div>


</section>


)


}