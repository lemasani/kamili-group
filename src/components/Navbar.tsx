import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Clock, MapPin, Eye } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"
import { TextRoll } from "./ui/text-roll"
import homebanner from "@/assets/home-banner.jpg"
import { navItems } from "@/data/navLinks"
import { 
  mobileMenuVariants, 
  mobileItemVariants,
  logoVariants,
  navigationItemVariants,
  underlineVariants
} from "@/lib/animationVariants"

export default function KamiliHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const [navProgress, setNavProgress] = useState(0)

  const location = useLocation()
  const navigate = useNavigate()

  console.log(navProgress)

  const IsHomePage = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (href: string) => {
    if (location.pathname !== href) {
      setIsNavigating(true)
      setNavProgress(0)
      
      // Simulate navigation progress
      const progressInterval = setInterval(() => {
        setNavProgress(prev => {
          if (prev >= 80) {
            clearInterval(progressInterval)
            return 80
          }
          return prev + Math.random() * 20
        })
      }, 50)

      setTimeout(() => {
        setNavProgress(100)
        setTimeout(() => {
          navigate(href)
          setIsMobileMenuOpen(false)
          setIsNavigating(false)
          clearInterval(progressInterval)
        }, 200)
      }, 300)
    }
  }

  return (
    <div className="relative">
      {/* Navigation Progress Bar */}
      {isNavigating && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-amber-500 z-50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: navProgress / 100 }}
          transition={{ duration: 0.1 }}
          style={{ transformOrigin: "left" }}
        />
      )}

      {/* Top Contact Bar */}
      <div className="bg-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between py-2 text-sm lg:flex-row">
            <div className="flex flex-col items-center space-y-1 lg:flex-row lg:space-x-8 lg:space-y-0">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>info@kamiligroup.co.tz</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon to Fri: 9:00am to 6:00pm</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Tegeta, Dar Es Salaam</span>
              </div>
            </div>
            <motion.button
              className="mt-2 flex items-center space-x-2 rounded bg-amber-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-600 lg:mt-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Eye className="h-4 w-4" />
              <span>View Our Gallery</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.header
        className={`sticky top-0 z-50 bg-white shadow-sm transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              variants={logoVariants}
              initial="initial"
              whileHover="hover"
            >
              <button onClick={() => handleNavigation('/')} className="flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="Kamili Group Logo"
                  className="h-20 w-30 rounded-full"
                />
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-1 xl:flex">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href 
                      ? "text-amber-500" 
                      : "text-slate-700 hover:text-amber-500"
                  }`}
                  variants={navigationItemVariants}
                  initial="initial"
                  whileHover="hover"
                  animate={location.pathname === item.href ? "active" : "initial"}
                  whileTap={{ scale: 0.95 }}
                  disabled={isNavigating}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                      layoutId="navbar-underline"
                      variants={underlineVariants}
                      initial="initial"
                      animate="animate"
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="rounded-lg p-2 text-slate-700 transition-colors duration-200 hover:bg-slate-100 xl:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              disabled={isNavigating}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="overflow-hidden border-t border-slate-200 xl:hidden"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div className="space-y-1 py-4">
                  {navItems.map((item) => (
                    <motion.div key={item.name} variants={mobileItemVariants}>
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 disabled:opacity-50 ${
                          location.pathname === item.href
                            ? "bg-amber-50 text-amber-500"
                            : "text-slate-700 hover:bg-slate-50 hover:text-amber-500"
                        }`}
                        disabled={isNavigating}
                      >
                        {item.name}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {IsHomePage && (
        <section className="relative h-[600px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${homebanner})`,
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="text-center text-white">
              <TextRoll className="text-5xl md:text-5xl font-bold tracking-tight">
                Build with Kamili Group
              </TextRoll>
              <motion.p
                className="mt-4 text-lg md:text-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Creating lasting structures with trust and quality
              </motion.p>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}