import { motion } from 'framer-motion'
import { FiMessageSquare, FiPhone } from 'react-icons/fi'

const StickyCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="flex flex-col items-end space-y-3">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="tel:+15551234567"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center"
        >
          <FiPhone className="w-6 h-6" />
        </motion.a>
        
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/15551234567"
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
        >
          <div className="relative">
            <FiMessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-white text-orange-500 rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
              3
            </span>
          </div>
          <span className="ml-2 font-medium hidden sm:inline">Get a Quote</span>
        </motion.a>
      </div>
    </div>
  )
}

export default StickyCTA