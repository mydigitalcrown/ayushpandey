import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Animated background elements */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="badge-dot" />
          Three Brothers &bull; One Vision
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          We Are{' '}
          <span className="hero-gradient-text">
            Ayush<span className="hero-separator">,</span>{' '}
            Shivam<span className="hero-separator"> &</span>{' '}
            Om
          </span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Three brothers bound by blood, united by passion. We create, we innovate,
          and we build the future — together.
        </motion.p>

        {/* Banner Image */}
        <motion.div
          className="hero-banner"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <img
            src="/images/banner-ayush.jpeg"
            alt="Ayush, Shivam & Om — The Three Brothers"
            className="hero-banner-img"
          />
        </motion.div>

        <motion.div
          className="hero-names"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="hero-name-card">
            <span className="hero-initial">A</span>
            <div>
              <h3>Ayush Pandey</h3>
              <p>The Visionary</p>
            </div>
          </div>
          <div className="hero-name-divider" />
          <div className="hero-name-card">
            <span className="hero-initial">S</span>
            <div>
              <h3>Shivam Pandey</h3>
              <p>The Strategist</p>
            </div>
          </div>
          <div className="hero-name-divider" />
          <div className="hero-name-card">
            <span className="hero-initial">O</span>
            <div>
              <h3>Om Tiwari</h3>
              <p>The Creator</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <a href="#about" className="btn-primary">
            Discover Our Story
          </a>
          <a href="#team" className="btn-outline">
            Meet The Team
          </a>
        </motion.div>

        <motion.a
          href="#about"
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { delay: 1.5, duration: 2, repeat: Infinity },
          }}
        >
          <HiArrowDown size={20} />
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
