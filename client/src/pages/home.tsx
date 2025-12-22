import { motion } from "framer-motion";
import logo from "@assets/IDBDesignLogo_1766439748813.png";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 40, damping: 20 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - Full viewport with background image */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2992&auto=format&fit=crop"
            alt="Elegant senior living space"
            className="w-full h-full object-cover"
          />
          {/* Dark wash overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-8">
            <img 
              src={logo} 
              alt="IDBH Design" 
              className="h-16 md:h-20 mx-auto invert brightness-200"
              data-testid="img-logo"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p 
            variants={itemVariants}
            className="text-white/70 uppercase tracking-[0.3em] text-xs md:text-sm mb-6 font-light"
            data-testid="text-tagline"
          >
            Spaces That Inspire Care
          </motion.p>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-white text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8"
            data-testid="text-headline"
          >
            Designing Environments<br />
            <span className="italic">for Healing.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            variants={itemVariants}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
            data-testid="text-description"
          >
            IDBH Design specializes in healthcare interiors for assisted living communities, nursing homes, and senior care facilities. Our new website is coming soon.
          </motion.p>

          {/* Coming Soon Badge */}
          <motion.div variants={itemVariants}>
            <span 
              className="inline-block text-white/90 text-sm uppercase tracking-[0.2em] border-b border-white/40 pb-2"
              data-testid="text-coming-soon"
            >
              Website Coming Soon
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2958&auto=format&fit=crop"
                alt="Modern interior design"
                className="w-full aspect-[4/5] object-cover"
                data-testid="img-about"
              />
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 
                className="text-4xl md:text-5xl font-serif text-foreground mb-6"
                data-testid="text-about-title"
              >
                Our Vision
              </h2>
              <p className="text-lg md:text-xl font-serif italic text-muted-foreground mb-8">
                We don't just design spaces; we create environments that nurture.
              </p>
              <p 
                className="text-muted-foreground leading-relaxed mb-8"
                data-testid="text-about-description"
              >
                Led by Debbie Beyman, IDBH Design brings decades of expertise to healthcare interiors. We understand that assisted living facilities, nursing homes, and senior care communities require thoughtful design that balances beauty with functionality, comfort with safety.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our portfolio-driven approach ensures every project is visually stunning while meeting the unique needs of healthcare environments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <img 
            src={logo} 
            alt="IDBH Design" 
            className="h-10 mx-auto mb-6 invert brightness-200 opacity-80"
          />
          <p className="text-neutral-400 text-sm" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} IDBH Design. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
