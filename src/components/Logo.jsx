import { motion } from 'framer-motion'

const Logo = ({ size = 50 }) => {
  return (
    <motion.div
      className="logo-container"
      whileHover={{ scale: 1.05 }}
      style={{
        width: size,
        height: 'auto',
        position: 'relative',
        cursor: 'pointer',
      }}
    >
      <img
        src="/images/logo.png"
        alt="ASO Brothers Logo"
        style={{
          width: size,
          height: 'auto',
          objectFit: 'contain',
        }}
      />
    </motion.div>
  )
}

export default Logo
