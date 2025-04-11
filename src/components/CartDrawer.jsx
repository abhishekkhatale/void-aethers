import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiShoppingCart, FiPlus, FiMinus } from 'react-icons/fi'

const CartDrawer = ({ isOpen, onClose }) => {
  const cartItems = [
    {
      id: 1,
      name: "Modern Steel Gate",
      price: 1299,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1600566752229-250ed79470a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Aluminum Fencing (20ft)",
      price: 850,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1600566752229-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-xl z-50 flex flex-col"
          >
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <div className="flex items-center">
                <FiShoppingCart className="w-6 h-6 mr-2" />
                <h3 className="text-xl font-bold">Your Cart ({cartItems.length})</h3>
              </div>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <FiShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
                  <h4 className="text-xl font-bold mb-2">Your cart is empty</h4>
                  <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet</p>
                  <button 
                    onClick={onClose}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full"
                  >
                    Browse Products
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex border-b border-gray-100 pb-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-20 h-20 object-cover rounded mr-4"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-orange-500 font-bold">${item.price.toFixed(2)}</p>
                        <div className="flex items-center mt-2">
                          <button className="text-gray-500 hover:text-orange-500 p-1">
                            <FiMinus className="w-4 h-4" />
                          </button>
                          <span className="mx-2 w-8 text-center">{item.quantity}</span>
                          <button className="text-gray-500 hover:text-orange-500 p-1">
                            <FiPlus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-red-500 self-start">
                        <FiX className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-bold">$120.00</span>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-full">
                  Checkout
                </button>
                <p className="text-center text-xs text-gray-500 mt-2">
                  Free shipping on orders over $1,000
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer