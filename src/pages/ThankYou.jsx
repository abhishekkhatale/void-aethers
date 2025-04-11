import { motion } from 'framer-motion'
import { FiCheckCircle, FiShoppingBag, FiMail, FiPhone } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ThankYou = () => {
  const orderDetails = {
    orderNumber: "GN235689",
    date: "June 15, 2023",
    total: "$2,441.72",
    paymentMethod: "Visa ending in 4242",
    shippingAddress: "123 Main St, Apt 4B, New York, NY 10001",
    items: [
      {
        name: "Modern Steel Gate",
        price: "$1,299.00",
        quantity: 1
      },
      {
        name: "Aluminum Fencing (20ft)",
        price: "$850.00",
        quantity: 2
      }
    ]
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-orange-500 text-white p-8 text-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="inline-block bg-white rounded-full p-4 mb-4"
            >
              <FiCheckCircle className="w-12 h-12 text-orange-500" />
            </motion.div>
            <h1 className="text-3xl font-bold mb-2">Thank You for Your Order!</h1>
            <p className="text-orange-100">
              Your order #{orderDetails.orderNumber} has been received and is being processed.
            </p>
          </div>

          {/* Order Summary */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-xl font-bold mb-6">Order Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Order Information</h3>
                <div className="space-y-1 text-gray-600">
                  <p>Order Number: {orderDetails.orderNumber}</p>
                  <p>Date: {orderDetails.date}</p>
                  <p>Total: {orderDetails.total}</p>
                  <p>Payment Method: {orderDetails.paymentMethod}</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Shipping Information</h3>
                <div className="space-y-1 text-gray-600">
                  <p>{orderDetails.shippingAddress}</p>
                  <p>Shipping Method: Standard (5-7 business days)</p>
                </div>
              </div>
            </div>

            <h3 className="font-medium text-gray-700 mb-2">Order Items</h3>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-12 gap-4 bg-gray-100 p-4 font-medium text-gray-700">
                <div className="col-span-6">Product</div>
                <div className="col-span-3">Price</div>
                <div className="col-span-3">Quantity</div>
              </div>
              {orderDetails.items.map((item, index) => (
                <div key={index} className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 last:border-0">
                  <div className="col-span-6">{item.name}</div>
                  <div className="col-span-3">{item.price}</div>
                  <div className="col-span-3">{item.quantity}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="p-8">
            <h2 className="text-xl font-bold mb-6">What's Next?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="bg-orange-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                  <FiShoppingBag className="text-orange-500" />
                </div>
                <h3 className="font-medium mb-1">Order Processing</h3>
                <p className="text-sm text-gray-600">
                  Your order is being prepared for shipment. We'll notify you when it's on its way.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="bg-orange-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                  <FiMail className="text-orange-500" />
                </div>
                <h3 className="font-medium mb-1">Email Confirmation</h3>
                <p className="text-sm text-gray-600">
                  You'll receive an email with your order details and tracking information.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="bg-orange-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                  <FiPhone className="text-orange-500" />
                </div>
                <h3 className="font-medium mb-1">Need Help?</h3>
                <p className="text-sm text-gray-600">
                  Contact our support team at (555) 123-4567 or email support@gatesnfences.com
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-center"
              >
                Continue Shopping
              </Link>
              <Link 
                to="/account/orders" 
                className="border border-orange-500 text-orange-500 hover:bg-orange-50 font-bold py-3 px-6 rounded-full text-center"
              >
                View Order Status
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYou