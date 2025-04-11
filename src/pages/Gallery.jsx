import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: 'p1.jpg',
      title: 'Modern Steel Gate Installation',
      category: 'gates'
    },
    {
      id: 2,
      src: 'p2.jpg',
      title: 'Wrought Iron Fence Project',
      category: 'fencing'
    },
    {
      id: 3,
      src: 'p3.jpg',
      title: 'Automatic Gate Opener',
      category: 'openers'
    },
    {
      id: 4,
      src: 'p4.jpg',
      title: 'Aluminum Railing System',
      category: 'railings'
    },
    {
      id: 5,
      src: 'p5.jpg',
      title: 'Security Fence Panel',
      category: 'fencing'
    },
    {
      id: 6,
      src: 'p6.jpg',
      title: 'Wooden Privacy Fence',
      category: 'fencing'
    },
    {
      id: 7,
      src: 'p7.jpg',
      title: 'Custom Driveway Gate',
      category: 'gates'
    },
    {
      id: 8,
      src: 'p8.jpg',
      title: 'Commercial Chain Link Fence',
      category: 'fencing'
    },
    {
      id: 9,
      src: 'p6.jpg',
      title: 'Residential Security Gate',
      category: 'gates'
    }
  ]

  const categories = ['All', 'Gates', 'Fencing', 'Openers', 'Railings']
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory.toLowerCase())

  const openLightbox = (img, index) => {
    setSelectedImage(img)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigate = (direction) => {
    let newIndex
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
    }
    setSelectedImage(filteredImages[newIndex])
    setCurrentIndex(newIndex)
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600566753190-250ed79470a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Gallery
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our completed projects and installations
          </p>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              onClick={() => openLightbox(img, index)}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="w-full p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-medium">{img.title}</h3>
                  <span className="text-orange-300 text-sm capitalize">{img.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-orange-500"
            >
              <FiX className="w-8 h-8" />
            </button>
            <button 
              onClick={() => navigate('prev')}
              className="absolute left-4 text-white hover:text-orange-500"
            >
              <FiChevronLeft className="w-8 h-8" />
            </button>
            <div className="max-w-4xl mx-auto">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="max-h-screen max-w-full object-contain"
              />
              <div className="text-center mt-4 text-white">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-orange-300 capitalize">{selectedImage.category}</p>
              </div>
            </div>
            <button 
              onClick={() => navigate('next')}
              className="absolute right-4 text-white hover:text-orange-500"
            >
              <FiChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery