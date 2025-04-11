import { motion } from 'framer-motion'
import { FiTrash2, FiArrowLeft, FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Modern Steel Gate",
      price: 1299,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1600566752229-250ed79470a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      material: "Steel",
      delivery: "Standard (5-7 business days)"
    },
    {
      id: 2,
      name: "Aluminum Fencing (20ft)",
      price: 850,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1600566752229-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      material: "Aluminum",
      delivery: "Express (2-3 business days)"
    }
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 120
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Your Cart ({cartItems.length})</h1>
              <Link to="/products" className="text-orange-500 hover:text-orange-600 flex items-center">
                <FiArrowLeft className="mr-1" /> Continue Shopping
              </Link>
            </div>

            {cartItems.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <FiShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
                <p className="text-gray-600 mb-4">Looks like you haven't added anything to your cart yet</p>
                <Link 
                  to="/products" 
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Table Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-100 p-4 font-medium text-gray-700">
                  <div className="col-span-5">Product</div>
                  <div className="col-span-2">Price</div>
                  <div className="col-span-3">Quantity</div>
                  <div className="col-span-2">Total</div>
                </div>

                {/* Cart Items */}
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-b border-gray-200 last:border-0"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
                      {/* Product Info */}
                      <div className="md:col-span-5 flex items-center">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-20 h-20 object-cover rounded mr-4"
                        />
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.material}</p>
                          <p className="text-sm text-gray-500">{item.delivery}</p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="md:col-span-2 flex items-center">
                        <span className="md:hidden font-medium mr-2">Price:</span>
                        <span>${item.price.toFixed(2)}</span>
                      </div>

                      {/* Quantity */}
                      <div className="md:col-span-3 flex items-center">
                        <span className="md:hidden font-medium mr-2">Quantity:</span>
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                            -
                          </button>
                          <span className="px-4 py-1">{item.quantity}</span>
                          <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                            +
                          </button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="md:col-span-2 flex items-center justify-between">
                        <div>
                          <span className="md:hidden font-medium mr-2">Total:</span>
                          <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <button className="text-gray-400 hover:text-red-500">
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Cart Actions */}
                <div className="p-4 flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex items-center">
                    <input 
                      type="text" 
                      placeholder="Coupon code" 
                      className="px-4 py-2 border border-gray-300 rounded-l-md focus:ring-orange-500 focus:border-orange-500"
                    />
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md">
                      Apply
                    </button>
                  </div>
                  <button className="text-gray-600 hover:text-orange-500">
                    Update Cart
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Link 
                to="/checkout" 
                className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-full text-center mb-4"
              >
                Proceed to Checkout
              </Link>

              <div className="text-center text-sm text-gray-500">
                <p className="flex items-center justify-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  Secure Checkout
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-bold mb-2">Accepted Payment Methods</h3>
                <div className="flex flex-wrap gap-2">
                  <img src="https://cdn.worldvectorlogo.com/logos/visa-1.svg" alt="Visa" className="h-8" />
                  <img src="https://cdn.worldvectorlogo.com/logos/mastercard-2.svg" alt="Mastercard" className="h-8" />
                  <img src="https://cdn.worldvectorlogo.com/logos/american-express-2.svg" alt="American Express" className="h-8" />
                  <img src="https://cdn.worldvectorlogo.com/logos/discover-2.svg" alt="Discover" className="h-8" />
                  <img src="https://cdn.worldvectorlogo.com/logos/paypal-3.svg" alt="PayPal" className="h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart