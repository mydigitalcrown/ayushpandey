import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaInstagram, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'
import { HiAcademicCap, HiCalendar, HiLocationMarker } from 'react-icons/hi'
import './Team.css'

const teamMembers = [
  {
    name: 'Ayush Pandey',
    role: 'The Visionary',
    initial: 'A',
    bio: 'A forward-thinking leader who turns ideas into reality. Ayush brings the vision and direction that guides the team towards success.',
    school: 'Silver Grove School',
    schoolLocation: 'Maheshpur, Varanasi',
    birthday: '12 January 2011',
    age: 14,
    gradient: 'linear-gradient(135deg, #6c35de, #c468ff)',
    accentColor: '#6c35de',
    socials: { instagram: '#', linkedin: '#', github: '#', twitter: '#' },
    image: null,
  },
  {
    name: 'Shivam Pandey',
    role: 'The Strategist',
    initial: 'S',
    bio: 'The analytical mind behind every decision. Shivam crafts strategies that transform challenges into opportunities.',
    school: 'WH Smith Memorial School',
    schoolLocation: 'Varanasi',
    birthday: '21 October 2009',
    age: 16,
    gradient: 'linear-gradient(135deg, #ff6b6b, #ffd93d)',
    accentColor: '#ff6b6b',
    socials: { instagram: '#', linkedin: '#', github: '#', twitter: '#' },
    image: null,
  },
  {
    name: 'Om Tiwari',
    role: 'The Creator',
    initial: 'O',
    bio: 'A creative force who brings imagination to life. Om\'s innovative approach adds magic to everything the team builds.',
    school: 'Vanita Public School',
    schoolLocation: 'Varanasi',
    birthday: '4 April 2008',
    age: 17,
    gradient: 'linear-gradient(135deg, #00d2ff, #6c35de)',
    accentColor: '#00d2ff',
    socials: { instagram: '#', linkedin: '#', github: '#', twitter: '#' },
    image: null,
  },
]

const TeamCard = ({ member, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className="team-card"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
    >
      <div className="card-glow" style={{ background: member.gradient, opacity: 0.1 }} />

      <div className="card-image-wrapper">
        {member.image ? (
          <img src={member.image} alt={member.name} className="card-image" />
        ) : (
          <div className="card-avatar" style={{ background: member.gradient }}>
            <span className="avatar-initial">{member.initial}</span>
          </div>
        )}
        <div className="card-ring" style={{ borderColor: member.accentColor }} />
      </div>

      <div className="card-content">
        <h3 className="card-name">{member.name}</h3>
        <span className="card-role" style={{ background: member.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {member.role}
        </span>
        <p className="card-bio">{member.bio}</p>

        {/* School & Birthday Details */}
        <div className="card-details">
          <div className="card-detail-item">
            <HiAcademicCap size={16} style={{ color: member.accentColor }} />
            <div>
              <span className="detail-label">School</span>
              <span className="detail-value">{member.school}</span>
            </div>
          </div>
          <div className="card-detail-item">
            <HiLocationMarker size={16} style={{ color: member.accentColor }} />
            <div>
              <span className="detail-label">Location</span>
              <span className="detail-value">{member.schoolLocation}</span>
            </div>
          </div>
          <div className="card-detail-item">
            <HiCalendar size={16} style={{ color: member.accentColor }} />
            <div>
              <span className="detail-label">Birthday</span>
              <span className="detail-value">{member.birthday}</span>
            </div>
          </div>
        </div>

        <div className="card-socials">
          <a href={member.socials.instagram} className="social-link" aria-label="Instagram">
            <FaInstagram size={18} />
          </a>
          <a href={member.socials.linkedin} className="social-link" aria-label="LinkedIn">
            <FaLinkedinIn size={18} />
          </a>
          <a href={member.socials.github} className="social-link" aria-label="GitHub">
            <FaGithub size={18} />
          </a>
          <a href={member.socials.twitter} className="social-link" aria-label="Twitter">
            <FaTwitter size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const Team = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="team" className="section team-section">
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">The Team</span>
          <h2 className="section-title">Meet The Brothers</h2>
          <p className="section-subtitle">
            Three young minds from Varanasi, each shaping their future at different schools
            while building something extraordinary together.
          </p>
        </motion.div>

        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
