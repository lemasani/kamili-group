import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Clock, MapPin, Eye } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { TextRoll } from "./ui/text-roll"
import homebanner from "@/assets/home-banner.jpg"


interface NavItem {
  name: string
  href: string
  isActive?: boolean
}

const navItems: NavItem[] = [
  { name: "HOME", href: "/", isActive: true },
  { name: "ABOUT US", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "PROJECTS", href: "/projects" },
  { name: "CLIENTS", href: "/clients" },
  { name: "CORE VALUES", href: "/core-values" },
  { name: "OUR TEAM", href: "/team" },
  { name: "CONTACT US", href: "/contact" },
]

export default function KamiliHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const location = useLocation()

  const IsHomePage = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  }

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <div className="relative">
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
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="Kamili Group Logo"
                  className="h-20 w-30 rounded-full"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-1 xl:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href 
                      ? "text-amber-500" 
                      : "text-slate-700 hover:text-amber-500"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                      layoutId="navbar-underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="rounded-lg p-2 text-slate-700 transition-colors duration-200 hover:bg-slate-100 xl:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
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
                      <Link
                        to={item.href}
                        className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                          location.pathname === item.href
                            ? "bg-amber-50 text-amber-500"
                            : "text-slate-700 hover:bg-slate-50 hover:text-amber-500"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>


      {IsHomePage && (
        <>
          {/* Hero Section */}
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
        </>
      )}

       

    </div>
  )
}
