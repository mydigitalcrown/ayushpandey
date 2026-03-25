import { FaInstagram, FaLinkedinIn, FaGithub, FaTwitter, FaHeart } from 'react-icons/fa'
import Logo from './Logo'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-line" />
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <Logo size={50} />
            </div>
            <p className="footer-tagline">
              Three brothers, one vision — building the future together.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#team">Team</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-links">
            <h4>The Brothers</h4>
            <a href="#team">Ayush Pandey</a>
            <a href="#team">Shivam Pandey</a>
            <a href="#team">Om Tiwari</a>
          </div>

          <div className="footer-social-section">
            <h4>Follow Us</h4>
            <div className="footer-socials">
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="footer-social-link" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} ASO Brothers. Made with{' '}
            <FaHeart className="footer-heart" size={12} /> by Ayush, Shivam & Om
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
