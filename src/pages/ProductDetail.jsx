import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiShoppingCart, FiHeart, FiShare2, FiChevronLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard' 

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  // Static product data
  const product = {
    id: 1,
    name: "Premium Steel Gate",
    category: "gates",
    price: 599.99,
    originalPrice: 749.99,
    discount: 20,
    rating: 4,
    reviews: 24,
    material: "steel",
    type: "security gate",
    description: "Our premium steel gate offers both security and style for your property. Made from high-quality materials with a durable finish that resists rust and corrosion.",
    image: "p4.jpg"
  }

  const images = [
    product.image,
    "p1.jpg",
    "p2.jpg",
    "p3.jpg"
  ]

  // Static related products data
  const relatedProducts = [
    {
      id: 2,
      name: "Ornamental Iron Gate",
      category: "gates",
      price: 699.99,
      rating: 5,
      reviews: 18,
      image: "p1.jpg"
    },
    {
      id: 3,
      name: "Modern Aluminum Gate",
      category: "gates",
      price: 549.99,
      rating: 4,
      reviews: 12,
      image: "p2.jpg"
    },
    {
      id: 4,
      name: "Classic Wrought Iron Gate",
      category: "gates",
      price: 799.99,
      rating: 4,
      reviews: 22,
      image: "p3.jpg"
    },
    {
      id: 5,
      name: "Contemporary Steel Gate",
      category: "gates",
      price: 649.99,
      rating: 5,
      reviews: 15,
      image: "p4.jpg"
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <Link to="/products" className="ml-1 text-sm font-medium text-gray-700 hover:text-orange-500 md:ml-2">
                  Products
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img 
                src={images[selectedImage]} 
                alt={product.name} 
                className="w-full h-96 object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-gray-100 rounded-md overflow-hidden h-20 ${selectedImage === index ? 'ring-2 ring-orange-500' : ''}`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            <Link to="/products" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-4">
              <FiChevronLeft className="mr-1" /> Back to Products
            </Link>
            
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-sm">({product.reviews} reviews)</span>
            </div>

            <div className="mb-6">
              {product.originalPrice && (
                <span className="text-gray-400 line-through mr-2">${product.originalPrice}</span>
              )}
              <span className="text-2xl font-bold text-orange-500">${product.price}</span>
              {product.discount && (
                <span className="ml-2 bg-orange-100 text-orange-600 text-sm font-medium px-2 py-0.5 rounded">
                  Save {product.discount}%
                </span>
              )}
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="mb-6">
              <h3 className="font-bold mb-2">Features</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Durable {product.material} construction</li>
                <li>Weather-resistant finish</li>
                <li>Easy installation</li>
                <li>Low maintenance</li>
                <li>Manufacturer warranty</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-2">Specifications</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Material:</span>
                  <span className="ml-2 font-medium">{product.material}</span>
                </div>
                <div>
                  <span className="text-gray-500">Type:</span>
                  <span className="ml-2 font-medium">{product.type}</span>
                </div>
                <div>
                  <span className="text-gray-500">Height:</span>
                  <span className="ml-2 font-medium">6 ft</span>
                </div>
                <div>
                  <span className="text-gray-500">Width:</span>
                  <span className="ml-2 font-medium">Custom</span>
                </div>
                <div>
                  <span className="text-gray-500">Weight:</span>
                  <span className="ml-2 font-medium">85 lbs</span>
                </div>
                <div>
                  <span className="text-gray-500">Warranty:</span>
                  <span className="ml-2 font-medium">5 years</span>
                </div>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <span className="mr-4 font-medium">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-1">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2"
              >
                <FiShoppingCart /> Add to Cart
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-orange-500 text-orange-500 hover:bg-orange-50 font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2"
              >
                <FiHeart /> Wishlist
              </motion.button>
            </div>

            <div className="flex items-center text-sm text-gray-500">
              <FiShare2 className="mr-2" />
              <span>Share this product</span>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button className="py-4 px-1 border-b-2 font-medium text-sm border-orange-500 text-orange-500">
                Description
              </button>
              <button className="py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Specifications
              </button>
              <button className="py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Reviews ({product.reviews})
              </button>
              <button className="py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Installation
              </button>
            </nav>
          </div>

          <div className="py-6">
            <h3 className="font-bold text-lg mb-4">Product Description</h3>
            <p className="text-gray-700 mb-4">
              Our {product.name} is crafted with precision and attention to detail, offering both security and aesthetic appeal for your property. 
              Made from high-quality {product.material}, this product is designed to withstand the elements while maintaining its elegant appearance.
            </p>
            <p className="text-gray-700 mb-4">
              The {product.name} features a durable powder-coated finish that resists rust and corrosion, ensuring long-lasting performance. 
              Its sturdy construction provides excellent security while complementing your property's architecture.
            </p>
            <h4 className="font-bold mb-2">Key Benefits:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
              <li>Enhanced security and privacy for your property</li>
              <li>Low maintenance design that stands the test of time</li>
              <li>Customizable options available to match your style</li>
              <li>Professional installation services available</li>
              <li>Backed by our comprehensive warranty</li>
            </ul>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <motion.div
                key={relatedProduct.id}
                whileHover={{ y: -5 }}
              >
                <ProductCard product={relatedProduct} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail