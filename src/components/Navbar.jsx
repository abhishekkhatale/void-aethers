import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products', subLinks: [
      { name: 'Gates', path: '/products?category=gates' },
      { name: 'Fencing', path: '/products?category=fencing' },
      { name: 'Railings', path: '/products?category=railings' },
      { name: 'Openers', path: '/products?category=openers' },
      { name: 'Access Control', path: '/products?category=access-control' },
    ]},
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all bg-white duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-black">Gates<span className="text-orange-500">NFences</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  to={link.path} 
                  className="text-black hover:text-orange-500 transition-colors font-medium"
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {link.subLinks.map((subLink) => (
                      <Link 
                        key={subLink.name} 
                        to={subLink.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="text-black hover:text-orange-500">
              <FiSearch className="w-5 h-5" />
            </button>
            <Link to="/cart" className="text-black hover:text-orange-500 relative">
              <FiShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <button 
              className="md:hidden text-black hover:text-orange-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg rounded-lg mt-4 p-4"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link 
                    to={link.path} 
                    className="block text-black hover:text-orange-500 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="pl-4 mt-2 space-y-2">
                      {link.subLinks.map((subLink) => (
                        <Link 
                          key={subLink.name} 
                          to={subLink.path}
                          className="block text-gray-600 hover:text-orange-500 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Navbar