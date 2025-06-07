import { motion } from "framer-motion"
import { 
  Target, 
  Eye, 
  Users, 
  Building, 
  Award, 
  TrendingUp,
  Heart,
  Shield,
  Lightbulb,
  Handshake,
  Star,
  CheckCircle
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const stats = [
  {
    icon: Building,
    value: "150+",
    label: "Projects Completed",
    description: "Successfully delivered projects across East Africa"
  },
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
    description: "Satisfied clients who trust our expertise"
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Proven track record in construction industry"
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Success Rate",
    description: "Projects completed on time and within budget"
  }
]

const coreValues = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We conduct our business with the highest ethical standards and transparency in all our dealings."
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We strive for superior quality in every project, exceeding client expectations consistently."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to deliver modern construction."
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We build lasting relationships with clients, suppliers, and communities through trust and collaboration."
  },
  {
    icon: Heart,
    title: "Sustainability",
    description: "We are committed to environmentally responsible construction practices for future generations."
  },
  {
    icon: CheckCircle,
    title: "Reliability",
    description: "Our clients can depend on us to deliver projects on time, within budget, and to specification."
  }
]

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 text-secondary border-amber-200">
            About Kamili Group
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Building Trust, Creating Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 15 years of experience in the construction industry, Kamili Group has established 
            itself as a leading construction company in Tanzania, delivering exceptional projects that 
            stand the test of time.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-amber-100 rounded-lg">
                    <Target className="h-6 w-6 text-amber-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To deliver exceptional construction services that exceed client expectations while 
                  maintaining the highest standards of quality, safety, and environmental responsibility. 
                  We are committed to building lasting structures that contribute to the development 
                  of our communities.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To become the most trusted and innovative construction company in East Africa, 
                  recognized for our commitment to excellence, sustainability, and positive impact 
                  on the communities we serve. We envision a future where every project we undertake 
                  sets new standards in the industry.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Company Stats */}
        <motion.div 
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h3>
            <p className="text-gray-600 text-lg">Measurable results that speak to our commitment and expertise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-amber-100 rounded-full">
                        <stat.icon className="h-8 w-8 text-amber-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                    <p className="text-sm text-gray-500">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide every decision we make and every project we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-amber-100 transition-colors duration-300">
                        <value.icon className="h-6 w-6 text-gray-600 group-hover:text-amber-600 transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Build with Us?</h3>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss your next construction project and bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get a Quote
                </motion.button>
                <motion.button 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Projects
                </motion.button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}