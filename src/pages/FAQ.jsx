import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const FAQ = () => {
  const faqs = [
    {
      question: "What materials do you use for your gates and fences?",
      answer: "We use a variety of high-quality materials including steel, aluminum, wrought iron, wood, and vinyl. Each material is selected for its durability, aesthetic appeal, and suitability for different applications and environments.",
      category: "products"
    },
    {
      question: "How long does installation typically take?",
      answer: "Installation time varies depending on the project size and complexity. Most residential installations take 1-3 days, while larger commercial projects may take 1-2 weeks. We'll provide a detailed timeline during your consultation.",
      category: "installation"
    },
    {
      question: "Do you offer warranties on your products?",
      answer: "Yes, all our products come with warranties ranging from 1 year to lifetime coverage depending on the product. Our steel gates, for example, come with a 10-year warranty against rust and corrosion.",
      category: "warranty"
    },
    {
      question: "Can you customize gates to match my property's style?",
      answer: "Absolutely! We specialize in custom designs that complement your property's architecture. Our design team will work with you to create a gate that meets both your aesthetic preferences and security needs.",
      category: "customization"
    },
    {
      question: "What maintenance is required for your products?",
      answer: "Maintenance requirements vary by material. Aluminum and vinyl products require minimal maintenance, while steel and wrought iron may need occasional cleaning and touch-ups. We provide detailed care instructions with every product.",
      category: "maintenance"
    },
    {
      question: "How do I get a quote for my project?",
      answer: "You can request a free quote through our website, by phone, or by visiting our showroom. We'll need some basic information about your project to provide an accurate estimate.",
      category: "quotes"
    },
    {
      question: "Do you service existing gates and fences not installed by your company?",
      answer: "Yes, we provide repair and maintenance services for all types of gates and fences, regardless of who installed them. Our technicians are trained to work with all major brands and materials.",
      category: "services"
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily serve the greater metropolitan area and surrounding counties. For projects outside our standard service area, additional travel fees may apply. Contact us to confirm if we service your location.",
      category: "coverage"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'products', name: 'Products' },
    { id: 'installation', name: 'Installation' },
    { id: 'warranty', name: 'Warranty' },
    { id: 'customization', name: 'Customization' },
    { id: 'maintenance', name: 'Maintenance' },
    { id: 'quotes', name: 'Quotes' },
    { id: 'services', name: 'Services' },
    { id: 'coverage', name: 'Coverage' }
  ]

  const [activeCategory, setActiveCategory] = useState('all')
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory)

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600566752355-250ed79470a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md ${activeCategory === category.id ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100"
                >
                  <h3 className="font-medium">{faq.question}</h3>
                  {openIndex === index ? (
                    <FiChevronUp className="text-orange-500" />
                  ) : (
                    <FiChevronDown className="text-orange-500" />
                  )}
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-4 py-3 bg-white"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Support CTA */}
          <div className="mt-16 bg-orange-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our support team is ready to help you with any additional questions you may have about our products and services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 font-bold py-3 px-8 rounded-full"
              >
                Request a Quote
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ