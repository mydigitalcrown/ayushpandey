import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCode, HiDesktopComputer, HiColorSwatch, HiChartBar, HiCog, HiLightBulb } from 'react-icons/hi'
import './Skills.css'

const skills = [
  {
    icon: <HiCode size={32} />,
    title: 'Web Development',
    desc: 'Building modern, responsive websites and web applications with cutting-edge technologies.',
    tags: ['React', 'Node.js', 'JavaScript'],
  },
  {
    icon: <HiColorSwatch size={32} />,
    title: 'UI/UX Design',
    desc: 'Crafting beautiful, intuitive interfaces that deliver exceptional user experiences.',
    tags: ['Figma', 'Design Systems', 'Prototyping'],
  },
  {
    icon: <HiDesktopComputer size={32} />,
    title: 'Software Engineering',
    desc: 'Writing clean, scalable code that powers robust applications.',
    tags: ['Python', 'Java', 'APIs'],
  },
  {
    icon: <HiChartBar size={32} />,
    title: 'Digital Strategy',
    desc: 'Creating digital strategies that drive growth and maximize impact.',
    tags: ['SEO', 'Analytics', 'Growth'],
  },
  {
    icon: <HiCog size={32} />,
    title: 'Problem Solving',
    desc: 'Tackling complex challenges with creative and efficient solutions.',
    tags: ['Algorithms', 'Architecture', 'Optimization'],
  },
  {
    icon: <HiLightBulb size={32} />,
    title: 'Innovation',
    desc: 'Exploring new technologies and pushing boundaries to stay ahead.',
    tags: ['AI/ML', 'Blockchain', 'IoT'],
  },
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section skills-section">
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-subtitle">
            A combined arsenal of skills that makes us versatile and unstoppable.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              className="skill-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
              <div className="skill-tags">
                {skill.tags.map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
