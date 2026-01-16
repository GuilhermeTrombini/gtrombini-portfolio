import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personalInfo } from '../data/portfolio'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-gradient"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="prose prose-invert max-w-none"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
              {personalInfo.summary}
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Always reliable, responsible, and open to professional development. Adheres the deadlines and focuses on the customer's requirements, concerned with achieving prime quality while addressing the needs of the stakeholders.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            {[
              { label: 'Years of Experience', value: '8+' },
              { label: 'Projects Completed', value: '20+' },
              { label: 'Technologies', value: '40+' },
              { label: 'Active Users', value: '1M+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center glass-dark p-6 rounded-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
