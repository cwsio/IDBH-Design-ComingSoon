import { motion } from "framer-motion";
import logo from "@assets/IDBDesignLogo_1766439748813.png";

export default function HomeMinimal() {
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
    <div className="min-h-screen bg-black flex items-center justify-center">
      <motion.div 
        className="text-center px-6 max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="mb-12">
          <img 
            src={logo} 
            alt="IDBH Design" 
            className="h-16 md:h-24 mx-auto invert brightness-200"
            data-testid="img-logo"
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-white text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-10"
          data-testid="text-headline"
        >
          Website Under Construction,<br />
          <span className="italic">Premiering Soon.</span>
        </motion.h1>

        {/* Contact Info */}
        <motion.div variants={itemVariants}>
          <p className="text-white/80 text-base md:text-lg mb-2">
            <a 
              href="mailto:info@idbh.com" 
              className="hover:text-white transition-colors"
              data-testid="link-email"
            >
              info@idbh.com
            </a>
          </p>
          <p className="text-white/80 text-base md:text-lg">
            <a 
              href="tel:732-813-8500" 
              className="hover:text-white transition-colors"
              data-testid="link-phone"
            >
              732-813-8500
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
