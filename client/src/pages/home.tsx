import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import logo from "@assets/IDBDesignLogo_1766439748813.png";

const sliderImages = [
  { src: "/images/lobby.jpg", alt: "Lobby Design" },
  { src: "/images/gym.jpg", alt: "Fitness Center" },
  { src: "/images/patient-room.jpg", alt: "Patient Room" },
  { src: "/images/hallway.jpg", alt: "Hallway Design" },
  { src: "/images/dining.jpg", alt: "Dining Room" },
  { src: "/images/lounge.jpg", alt: "Lounge Area" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

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
            src="/images/lobby.jpg"
            alt="IDBH Design - Senior Living Lobby"
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
            className="text-white text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6"
            data-testid="text-headline"
          >
            Website Under Construction,<br />
            <span className="italic">Premiering Soon.</span>
          </motion.h1>

          {/* Subtext - Designing Environments for Healing */}
          <motion.p 
            variants={itemVariants}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
            data-testid="text-description"
          >
            Designing environments for healing. IDBH specializes in healthcare interiors for assisted living communities, nursing homes, and senior care facilities.
          </motion.p>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-white/90 text-sm md:text-base mb-2">
              <a 
                href="mailto:info@idbh.com" 
                className="hover:text-white transition-colors"
                data-testid="link-email"
              >
                info@idbh.com
              </a>
            </p>
            <p className="text-white/90 text-sm md:text-base">
              <a 
                href="tel:732-813-8500" 
                className="hover:text-white transition-colors"
                data-testid="link-phone"
              >
                732-813-8500
              </a>
            </p>
          </motion.div>

          {/* Decorative line */}
          <motion.div variants={itemVariants}>
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section with Image Slider */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Slider Column */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={sliderImages[currentSlide].src}
                    alt={sliderImages[currentSlide].alt}
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    data-testid={`img-slider-${currentSlide}`}
                  />
                </AnimatePresence>
                
                {/* Slider Controls */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center transition-all hover:bg-white"
                    data-testid="button-prev-slide"
                  >
                    <ChevronLeft className="w-5 h-5 text-neutral-800" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center transition-all hover:bg-white"
                    data-testid="button-next-slide"
                  >
                    <ChevronRight className="w-5 h-5 text-neutral-800" />
                  </button>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {sliderImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide ? "bg-white w-6" : "bg-white/50"
                      }`}
                      data-testid={`button-slide-indicator-${index}`}
                    />
                  ))}
                </div>
              </div>
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
                IDBH brings decades of expertise to the healthcare industry. We understand that assisted living facilities, nursing homes, and senior care communities require thoughtful design that balances beauty with functionality, comfort with safety.
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
