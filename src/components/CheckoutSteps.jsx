import { FiUser, FiTruck, FiCreditCard, FiCheckCircle } from 'react-icons/fi'

const CheckoutSteps = ({ currentStep }) => {
  const steps = [
    { id: 1, name: 'Customer Info', icon: <FiUser className="w-5 h-5" /> },
    { id: 2, name: 'Shipping Info', icon: <FiTruck className="w-5 h-5" /> },
    { id: 3, name: 'Payment', icon: <FiCreditCard className="w-5 h-5" /> },
    { id: 4, name: 'Review', icon: <FiCheckCircle className="w-5 h-5" /> }
  ]

  return (
    <div className="max-w-4xl mx-auto mb-8">
      <nav className="flex items-center justify-center">
        <ol className="flex items-center space-x-4 md:space-x-8">
          {steps.map((step, index) => (
            <li key={step.id} className="flex items-center">
              {index > 0 && (
                <div className="h-px w-8 md:w-16 bg-gray-300 mx-4"></div>
              )}
              <div className={`flex flex-col items-center ${currentStep >= step.id ? 'text-orange-500' : 'text-gray-400'}`}>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= step.id ? 'bg-orange-100' : 'bg-gray-100'} mb-2`}>
                  {step.icon}
                </div>
                <span className={`text-sm font-medium ${currentStep === step.id ? 'text-black' : ''}`}>
                  {step.name}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}

export default CheckoutSteps