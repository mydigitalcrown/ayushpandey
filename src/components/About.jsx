import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiHeart, HiLightningBolt, HiStar, HiGlobe } from 'react-icons/hi'
import './About.css'

const values = [
  {
    icon: <HiHeart size={28} />,
    title: 'Brotherhood',
    desc: 'Bound by blood, strengthened by trust. Our bond is our greatest asset.',
    color: '#ff6b6b',
  },
  {
    icon: <HiLightningBolt size={28} />,
    title: 'Innovation',
    desc: 'We push boundaries and challenge conventions to create something extraordinary.',
    color: '#ffd93d',
  },
  {
    icon: <HiStar size={28} />,
    title: 'Excellence',
    desc: 'We pursue perfection in every endeavor, never settling for mediocrity.',
    color: '#c468ff',
  },
  {
    icon: <HiGlobe size={28} />,
    title: 'Impact',
    desc: 'Building solutions that make a real difference in people\'s lives.',
    color: '#00d2ff',
  },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section about-section">
      <div className="about-glow" />
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">About Us</span>
          <h2 className="section-title">Our Story</h2>
          <p className="section-subtitle">
            Three brothers with different talents, one shared dream — to leave a mark
            on the world through creativity and technology.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="about-heading">
              Three Minds,<br />
              <span className="gradient-text">One Mission</span>
            </h3>
            <p>
              We are <strong>Ayush Pandey</strong>, <strong>Shivam Pandey</strong>, and{' '}
              <strong>Om Tiwari</strong> — three brothers from the holy city of <strong>Varanasi</strong>,
              who share not just a bond of family, but a burning passion for building amazing things.
            </p>
            <p>
              Currently pursuing our education at different schools across Varanasi —
              Silver Grove School, WH Smith Memorial School, and Vanita Public School —
              each of us brings unique strengths to the table. Together, we form an
              unstoppable force that combines vision, strategy, and creativity into
              everything we do.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Brothers</span>
              </div>
              <div className="stat">
                <span className="stat-number">1</span>
                <span className="stat-label">Team</span>
              </div>
              <div className="stat">
                <span className="stat-number">∞</span>
                <span className="stat-label">Possibilities</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-values"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * i + 0.5 }}
                whileHover={{ x: 8 }}
              >
                <div className="value-icon" style={{ color: item.color, background: `${item.color}15` }}>
                  {item.icon}
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
