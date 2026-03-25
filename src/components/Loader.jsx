import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div
      className="loader-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0a0a0f',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        gap: '30px',
      }}
    >
      <motion.svg
        viewBox="0 0 200 200"
        width={120}
        height={120}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <defs>
          <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6c35de" />
            <stop offset="50%" stopColor="#c468ff" />
            <stop offset="100%" stopColor="#ff6b9d" />
          </linearGradient>
        </defs>

        <motion.polygon
          points="100,8 185,54 185,146 100,192 15,146 15,54"
          fill="none"
          stroke="url(#loaderGrad)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />

        <motion.text
          x="100" y="75"
          textAnchor="middle" dominantBaseline="central"
          fill="url(#loaderGrad)"
          fontFamily="'Playfair Display', serif"
          fontSize="42" fontWeight="800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          A
        </motion.text>

        <motion.text
          x="58" y="145"
          textAnchor="middle" dominantBaseline="central"
          fill="url(#loaderGrad)"
          fontFamily="'Playfair Display', serif"
          fontSize="42" fontWeight="800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          S
        </motion.text>

        <motion.text
          x="142" y="145"
          textAnchor="middle" dominantBaseline="central"
          fill="url(#loaderGrad)"
          fontFamily="'Playfair Display', serif"
          fontSize="42" fontWeight="800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          O
        </motion.text>
      </motion.svg>

      <motion.p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '14px',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: '#b8b8d4',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        Three Brothers • One Vision
      </motion.p>

      <motion.div
        style={{
          width: '200px',
          height: '2px',
          background: '#1a1a2e',
          borderRadius: '2px',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #6c35de, #c468ff, #ff6b9d)',
            borderRadius: '2px',
          }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  )
}

export default Loader
