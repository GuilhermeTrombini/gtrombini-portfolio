import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '../data/portfolio'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const categories = Array.from(new Set(skills.map(skill => skill.category)))
  const skillsByCategory = categories.map(category => ({
    category,
    items: skills.filter(skill => skill.category === category),
  }))

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <div ref={ref} className="space-y-8">
          {skillsByCategory.map((categoryGroup, categoryIndex) => (
            <motion.div
              key={categoryGroup.category}
              className="glass rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                {categoryGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {categoryGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="glass-dark px-4 py-2 rounded-full text-sm md:text-base"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: categoryIndex * 0.2 + skillIndex * 0.05,
                      type: 'spring',
                      stiffness: 200,
                    }}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
