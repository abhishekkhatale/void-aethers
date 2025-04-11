import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiCreditCard, FiTruck, FiCheckCircle, FiLock } from 'react-icons/fi'

const Checkout = () => {
  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [otp, setOtp] = useState('')

  const steps = [
    { id: 1, name: 'Customer Info', icon: <FiUser className="w-5 h-5" /> },
    { id: 2, name: 'Shipping Info', icon: <FiTruck className="w-5 h-5" /> },
    { id: 3, name: 'Payment', icon: <FiCreditCard className="w-5 h-5" /> },
    { id: 4, name: 'Review', icon: <FiCheckCircle className="w-5 h-5" /> }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step < 4) {
      setStep(step + 1)
    } else {
      // Submit order
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Checkout Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <nav className="flex items-center justify-center">
            <ol className="flex items-center space-x-8">
              {steps.map((item, index) => (
                <li key={item.id} className="flex items-center">
                  {index > 0 && (
                    <div className="h-px w-16 bg-gray-300 mx-4"></div>
                  )}
                  <button
                    onClick={() => item.id <= step && setStep(item.id)}
                    className={`flex items-center ${step >= item.id ? 'text-orange-500' : 'text-gray-400'}`}
                  >
                    <span className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= item.id ? 'bg-orange-100' : 'bg-gray-200'} mr-2`}>
                      {item.icon}
                    </span>
                    <span className={`font-medium ${step === item.id ? 'text-black' : ''}`}>{item.name}</span>
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Checkout Form */}
            <div className="md:w-2/3 p-8">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold mb-6">Customer Information</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                          <input 
                            type="text" 
                            id="firstName" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                          <input 
                            type="text" 
                            id="lastName" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                          required
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                        <input 
                          type="text" 
                          id="address" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="address2" className="block text-sm font-medium text-gray-700 mb-1">Apt, Suite, etc. (Optional)</label>
                        <input 
                          type="text" 
                          id="address2" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                          <input 
                            type="text" 
                            id="city" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                          <select 
                            id="state" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                            required
                          >
                            <option value="">Select</option>
                            <option value="CA">California</option>
                            <option value="TX">Texas</option>
                            <option value="NY">New York</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                          <input 
                            type="text" 
                            id="zip" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-4">
                          <button
                            type="button"
                            onClick={() => setPaymentMethod('credit')}
                            className={`flex items-center justify-center w-full py-3 px-4 border rounded-md ${paymentMethod === 'credit' ? 'border-orange-500 bg-orange-50' : 'border-gray-300'}`}
                          >
                            <FiCreditCard className="w-5 h-5 mr-2" />
                            <span>Credit Card</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setPaymentMethod('paypal')}
                            className={`flex items-center justify-center w-full py-3 px-4 border rounded-md ${paymentMethod === 'paypal' ? 'border-orange-500 bg-orange-50' : 'border-gray-300'}`}
                          >
                            <img src="https://cdn.worldvectorlogo.com/logos/paypal-3.svg" alt="PayPal" className="h-5 mr-2" />
                            <span>PayPal</span>
                          </button>
                        </div>
                      </div>

                      {paymentMethod === 'credit' && (
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                            <div className="relative">
                              <input 
                                type="text" 
                                id="cardNumber" 
                                placeholder="1234 5678 9012 3456"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                                required
                              />
                              <div className="absolute right-3 top-2 flex space-x-1">
                                <img src="https://cdn.worldvectorlogo.com/logos/visa-1.svg" alt="Visa" className="h-6" />
                                <img src="https://cdn.worldvectorlogo.com/logos/mastercard-2.svg" alt="Mastercard" className="h-6" />
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                              <input 
                                type="text" 
                                id="expiry" 
                                placeholder="MM/YY"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                              <div className="relative">
                                <input 
                                  type="text" 
                                  id="cvv" 
                                  placeholder="123"
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                                  required
                                />
                                <button type="button" className="absolute right-3 top-2 text-gray-400 hover:text-gray-600">
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div>
                            <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                            <input 
                              type="text" 
                              id="nameOnCard" 
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                              required
                            />
                          </div>
                        </div>
                      )}

                      {paymentMethod === 'paypal' && (
                        <div className="text-center py-8">
                          <p className="mb-4">You will be redirected to PayPal to complete your payment</p>
                          <button
                            type="button"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md inline-flex items-center"
                          >
                            <img src="https://cdn.worldvectorlogo.com/logos/paypal-3.svg" alt="PayPal" className="h-5 mr-2" />
                            Continue with PayPal
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold mb-6">Review Your Order</h2>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="font-bold mb-2">Shipping Address</h3>
                        <p>John Doe</p>
                        <p>123 Main St</p>
                        <p>Apt 4B</p>
                        <p>New York, NY 10001</p>
                        <p>United States</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="font-bold mb-2">Payment Method</h3>
                        <p>Visa ending in 4242</p>
                        <p>Expires 04/2025</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="font-bold mb-2">Order Summary</h3>
                        <div className="divide-y divide-gray-200">
                          <div className="py-2 flex justify-between">
                            <span>Steel Security Gate</span>
                            <span>$1,299.00</span>
                          </div>
                          <div className="py-2 flex justify-between">
                            <span>Aluminum Fencing (20ft)</span>
                            <span>$850.00</span>
                          </div>
                          <div className="py-2 flex justify-between">
                            <span>Shipping</span>
                            <span>$120.00</span>
                          </div>
                          <div className="py-2 flex justify-between font-bold">
                            <span>Total</span>
                            <span>$2,269.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="mt-8 flex justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="flex items-center text-gray-600 hover:text-gray-800"
                    >
                      <FiChevronLeft className="mr-1" /> Back
                    </button>
                  ) : (
                    <div></div>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full flex items-center"
                  >
                    {step < 4 ? 'Continue' : 'Place Order'}
                    {step === 4 && <FiLock className="ml-2" />}
                  </motion.button>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="md:w-1/3 bg-gray-50 p-8 border-l border-gray-200">
              <h3 className="text-lg font-bold mb-6">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Steel Security Gate × 1</span>
                  <span>$1,299.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Aluminum Fencing × 20ft</span>
                  <span>$850.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$2,149.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$120.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$172.72</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>$2,441.72</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <img src="https://cdn.worldvectorlogo.com/logos/visa-1.svg" alt="Visa" className="h-8" />
                  <img src="https://cdn.worldvectorlogo.com/logos/mastercard-2.svg" alt="Mastercard" className="h-8" />
                  <img src="https://cdn.worldvectorlogo.com/logos/paypal-3.svg" alt="PayPal" className="h-8" />
                </div>
                <div className="text-center text-sm text-gray-500">
                  <p className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                    Secure Checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout