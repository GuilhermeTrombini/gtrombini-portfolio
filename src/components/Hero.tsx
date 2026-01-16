import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { personalInfo } from '../data/portfolio'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/GuilhermeTrombini', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/guilherme-g-trombini/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: 'Email' },
    { icon: FaPhone, href: `tel:${personalInfo.phone}`, label: 'Phone' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-4">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <motion.div
              className="inline-block"
              animate={{
                rotate: [0, 10, -10, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <span className="text-6xl">👋</span>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-gradient">Hi, I'm {personalInfo.name.split(' ')[0]}</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl text-white/80 mb-8"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {personalInfo.heroSummary}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center items-center flex-wrap"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="glass p-4 rounded-full text-2xl hover:text-cyan-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block glass px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Explore My Work
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex justify-center"
            >
              <motion.div
                className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
