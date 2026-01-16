import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personalInfo } from '../data/portfolio'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'View my work',
      href: 'https://github.com',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          className="glass rounded-3xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white/80 mb-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-dark rounded-xl p-6 hover:bg-white/10 transition-all group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="glass p-4 rounded-full group-hover:bg-cyan-400/20 transition-colors">
                    <method.icon className="text-2xl text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{method.label}</h3>
                    <p className="text-white/70 text-sm">{method.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="mt-12 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
