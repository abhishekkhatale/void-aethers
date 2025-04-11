import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiFilter, FiX, FiChevronDown, FiChevronUp, FiStar } from 'react-icons/fi'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'

const Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState('Featured')
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedTypes, setSelectedTypes] = useState([])

  const sortOptions = [
    'Featured',
    'Price: Low to High',
    'Price: High to Low',
    'Most Popular',
    'Newest',
    'Highest Rated'
  ]

  const materials = ['Steel', 'Aluminum', 'Wood', 'Wrought Iron', 'Vinyl', 'Chain Link']
  const types = ['Residential', 'Commercial', 'Industrial', 'Decorative', 'Security']

  const toggleMaterial = (material) => {
    if (selectedMaterials.includes(material)) {
      setSelectedMaterials(selectedMaterials.filter(m => m !== material))
    } else {
      setSelectedMaterials([...selectedMaterials, material])
    }
  }

  const toggleType = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type))
    } else {
      setSelectedTypes([...selectedTypes, type])
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600566752229-250ed79470a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
          >
            Our Products
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Premium quality gates, fencing, and access control solutions for every need
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-6 xl:gap-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 shadow-xs"
            >
              <FiFilter className="w-5 h-5" />
              <span className="font-medium">Filters</span>
              {selectedMaterials.length + selectedTypes.length > 0 && (
                <span className="bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {selectedMaterials.length + selectedTypes.length}
                </span>
              )}
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 shadow-xs"
              >
                <span className="font-medium">Sort: {selectedSort}</span>
                {sortOpen ? <FiChevronUp className="w-5 h-5" /> : <FiChevronDown className="w-5 h-5" />}
              </button>
              
              <AnimatePresence>
                {sortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-20 border border-gray-200"
                  >
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSelectedSort(option)
                          setSortOpen(false)
                        }}
                        className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                          selectedSort === option ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Filter Sidebar */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed inset-0 z-50 lg:hidden"
              >
                <div 
                  className="absolute inset-0 bg-black bg-opacity-50"
                  onClick={() => setIsFilterOpen(false)}
                />
                <div className="absolute inset-y-0 left-0 w-4/5 max-w-sm bg-white overflow-y-auto">
                  <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="text-xl font-bold">Filters</h3>
                    <button 
                      onClick={() => setIsFilterOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <FiX className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="p-4">
                    {/* Price Range */}
                    <div className="mb-6">
                      <h4 className="font-bold mb-3 text-gray-800">Price Range</h4>
                      <div className="px-2">
                        <input 
                          type="range" 
                          min="0" 
                          max="5000" 
                          step="100"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                          className="w-full mb-3"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>${priceRange[0]}</span>
                          <span>${priceRange[1]}</span>
                        </div>
                      </div>
                    </div>

                    {/* Materials */}
                    <div className="mb-6">
                      <h4 className="font-bold mb-3 text-gray-800">Materials</h4>
                      <div className="space-y-2">
                        {materials.map((material) => (
                          <div key={material} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`mobile-material-${material}`}
                              checked={selectedMaterials.includes(material)}
                              onChange={() => toggleMaterial(material)}
                              className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                            />
                            <label 
                              htmlFor={`mobile-material-${material}`}
                              className="ml-2 text-gray-700"
                            >
                              {material}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Types */}
                    <div className="mb-6">
                      <h4 className="font-bold mb-3 text-gray-800">Types</h4>
                      <div className="space-y-2">
                        {types.map((type) => (
                          <div key={type} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`mobile-type-${type}`}
                              checked={selectedTypes.includes(type)}
                              onChange={() => toggleType(type)}
                              className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                            />
                            <label 
                              htmlFor={`mobile-type-${type}`}
                              className="ml-2 text-gray-700"
                            >
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button 
                        onClick={() => {
                          setSelectedMaterials([])
                          setSelectedTypes([])
                          setPriceRange([0, 5000])
                        }}
                        className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                      >
                        Clear All
                      </button>
                      <button 
                        onClick={() => setIsFilterOpen(false)}
                        className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg"
                      >
                        Apply Filters
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block w-64 xl:w-72 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-5 sticky top-4">
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-bold mb-3 text-gray-800">Price Range</h4>
                <div className="px-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="5000" 
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full mb-3"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Materials */}
              <div className="mb-6">
                <h4 className="font-bold mb-3 text-gray-800">Materials</h4>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <div key={material} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`desktop-material-${material}`}
                        checked={selectedMaterials.includes(material)}
                        onChange={() => toggleMaterial(material)}
                        className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <label 
                        htmlFor={`desktop-material-${material}`}
                        className="ml-2 text-gray-700"
                      >
                        {material}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Types */}
              <div className="mb-6">
                <h4 className="font-bold mb-3 text-gray-800">Types</h4>
                <div className="space-y-2">
                  {types.map((type) => (
                    <div key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`desktop-type-${type}`}
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleType(type)}
                        className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <label 
                        htmlFor={`desktop-type-${type}`}
                        className="ml-2 text-gray-700"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                  setSelectedMaterials([])
                  setSelectedTypes([])
                  setPriceRange([0, 5000])
                }}
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort Bar */}
            <div className="hidden lg:flex bg-white rounded-lg shadow-sm p-4 mb-6 justify-between items-center">
              <p className="text-gray-600">
                Showing <span className="font-bold">12</span> of <span className="font-bold">{products.length}</span> products
              </p>
              <div className="relative">
                <button 
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 shadow-xs"
                >
                  <span className="font-medium">Sort by: {selectedSort}</span>
                  {sortOpen ? <FiChevronUp className="w-5 h-5" /> : <FiChevronDown className="w-5 h-5" />}
                </button>
                <AnimatePresence>
                  {sortOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-10 border border-gray-200"
                    >
                      {sortOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setSelectedSort(option)
                            setSortOpen(false)
                          }}
                          className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                            selectedSort === option ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center gap-1">
                <button className="px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                  Previous
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-orange-500 text-white">
                  1
                </button>
                <button className="px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                  2
                </button>
                <button className="px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                  3
                </button>
                <span className="px-2 text-gray-500">...</span>
                <button className="px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                  8
                </button>
                <button className="px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products