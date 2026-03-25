import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import './Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-bg-glow" />
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's Build<br /><span className="gradient-text">Something Great</span></h3>
            <p>
              Whether you have a question, a project idea, or just want to say hello,
              our inbox is always open. Let's create something extraordinary together.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <HiMail size={22} />
                </div>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">hello@asobrothers.com</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <HiPhone size={22} />
                </div>
                <div>
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+91 XXX XXX XXXX</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <HiLocationMarker size={22} />
                </div>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">India</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows="5"
                required
              />
            </div>

            <button type="submit" className="btn-primary submit-btn">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
