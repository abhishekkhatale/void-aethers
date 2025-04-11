import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'

const Newsletter = () => {
  return (
    <div className="bg-gray-100 rounded-xl p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="bg-orange-100 text-orange-500 rounded-full p-3 mr-4">
            <FiMail className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Stay Updated</h3>
            <p className="text-gray-600">Subscribe to our newsletter for the latest products and offers</p>
          </div>
        </div>
        <form className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 rounded-l-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 w-full"
            required
          />
          <motion.button
            whileHover={{ backgroundColor: '#f97316' }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-r-lg"
          >
            Subscribe
          </motion.button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter