import { motion } from 'framer-motion'
import { FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart logic here
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Wishlist logic here
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Quick view logic here
  };

  // Safely get the description text
  const getDescription = () => {
    if (!product.description) return ''; // Return empty string if no description
    return product.description.length > 60 
      ? `${product.description.substring(0, 60)}...`
      : product.description;
  };

  return (
    <Link to="/productdetails" className="block">
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
      >
        <div className="relative flex-1">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <button 
              onClick={handleWishlist}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
              aria-label="Add to wishlist"
            >
              <FiHeart className="text-gray-600" />
            </button>
            <button 
              onClick={handleQuickView}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
              aria-label="Quick view"
            >
              <FiEye className="text-gray-600" />
            </button>
          </div>
          {product.isNew && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
              NEW
            </div>
          )}
          {product.discount && (
            <div className="absolute bottom-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
              -{product.discount}%
            </div>
          )}
        </div>
        
        <div className="p-4 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-gray-800 hover:text-orange-500">
              {product.name}
            </h3>
            <div className="flex items-center">
              <span className="text-orange-500 font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-400 text-sm line-through ml-2">${product.originalPrice}</span>
              )}
            </div>
          </div>
          
          <div className="flex items-center mb-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < (product.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500 text-xs ml-1">({product.reviews || 0})</span>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 flex-1">
            {getDescription()}
          </p>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-xs hover:text-orange-500">
              View Details
            </span>
            <motion.button
              onClick={handleAddToCart}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm flex items-center gap-1 z-10"
            >
              <FiShoppingCart /> Add to Cart
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default ProductCard