import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { education } from '../data/portfolio'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${edu.period}`}
              className="glass rounded-2xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="flex items-start gap-4">
                <div className="glass-dark p-4 rounded-lg">
                  <FaGraduationCap className="text-cyan-400 text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-cyan-400 text-lg mb-2">{edu.degree}</p>
                  <p className="text-white/60">{edu.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
