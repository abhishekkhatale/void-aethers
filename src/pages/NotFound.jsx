import { motion } from 'framer-motion'
import { FiHome, FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="mb-8"
          >
            <div className="text-orange-500 text-9xl font-bold">404</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full flex items-center justify-center gap-2"
            >
              <FiHome /> Go to Homepage
            </Link>
            <Link 
              to="/products" 
              className="border border-orange-500 text-orange-500 hover:bg-orange-50 font-bold py-3 px-8 rounded-full flex items-center justify-center gap-2"
            >
              <FiSearch /> Browse Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound