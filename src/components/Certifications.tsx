import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { certifications } from '../data/portfolio'
import { FaCertificate } from 'react-icons/fa'

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="certifications" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="flex items-start gap-4">
                <div className="glass-dark p-3 rounded-lg">
                  <FaCertificate className="text-blue-400 text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-white/60 text-sm">{cert.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
