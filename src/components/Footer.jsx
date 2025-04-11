import { motion } from 'framer-motion'
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Footer = () => {
  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "Gates", url: "/products?category=gates" },
        { name: "Fencing", url: "/products?category=fencing" },
        { name: "Railings", url: "/products?category=railings" },
        { name: "Openers", url: "/products?category=openers" },
        { name: "Access Control", url: "/products?category=access-control" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", url: "/about" },
        { name: "Gallery", url: "/gallery" },
        { name: "Blog", url: "/blog" },
        { name: "Careers", url: "/careers" },
        { name: "Testimonials", url: "/testimonials" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", url: "/contact" },
        { name: "FAQs", url: "/faq" },
        { name: "Shipping Policy", url: "/policies/shipping" },
        { name: "Returns Policy", url: "/policies/returns" },
        { name: "Privacy Policy", url: "/policies/privacy" },
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Gates<span className="text-orange-500">NFences</span></h3>
            <p className="text-gray-400 mb-4">
              Premium quality gates and fencing solutions for residential and commercial properties.
            </p>
            <div className="flex space-x-4 mb-6">
              <motion.a 
                whileHover={{ y: -3 }}
                href="#" 
                className="text-gray-400 hover:text-orange-500"
              >
                <FiFacebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="#" 
                className="text-gray-400 hover:text-orange-500"
              >
                <FiTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="#" 
                className="text-gray-400 hover:text-orange-500"
              >
                <FiInstagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="#" 
                className="text-gray-400 hover:text-orange-500"
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                  >
                    <a 
                      href={link.url} 
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Fence Street, Gated Community, GC 12345</span>
              </li>
              <li className="flex items-center">
                <FiMail className="text-orange-500 mr-3" />
                <span className="text-gray-400">info@gatesnfences.com</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="text-orange-500 mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Newsletter</h4>
              <p className="text-gray-400 mb-3">Subscribe for updates and offers</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                />
                <motion.button
                  whileHover={{ backgroundColor: '#f97316' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 text-white px-4 py-2 rounded-r"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GatesNFences. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-orange-500 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer