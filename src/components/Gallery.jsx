import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize } from 'react-icons/fi';

const Gallery = ({ images = [], preview = false }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample images if none provided
  const galleryImages = images.length > 0 ? images : [
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
    }
  ];

  const previewImages = preview ? galleryImages.slice(0, 6) : galleryImages;

  const openLightbox = (img, index) => {
    setSelectedImage(img);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? previewImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === previewImages.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(previewImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="gallery-container">
      {/* Gallery Grid */}
      <div className={`grid grid-cols-1 ${preview ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'} gap-4 md:gap-6`}>
        {previewImages.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => openLightbox(img, index)}
          >
            <img 
              src={img.src} 
              alt={img.title} 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
              <div className="w-full p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-medium">{img.title}</h3>
                <span className="text-orange-300 text-sm capitalize">{img.category}</span>
              </div>
            </div>
            {preview && index === 5 && previewImages.length > 6 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white text-xl font-bold">+{galleryImages.length - 6} more</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-orange-500 z-50"
              aria-label="Close lightbox"
            >
              <FiX className="w-8 h-8" />
            </button>

            <button 
              onClick={() => navigate('prev')}
              className="absolute left-4 text-white hover:text-orange-500 z-50 p-2"
              aria-label="Previous image"
            >
              <FiChevronLeft className="w-8 h-8" />
            </button>

            <div className="relative max-w-6xl w-full max-h-screen">
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[90vh] max-w-full mx-auto object-contain"
              />
              <div className="text-center mt-4 text-white">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-orange-300 capitalize">{selectedImage.category}</p>
              </div>
            </div>

            <button 
              onClick={() => navigate('next')}
              className="absolute right-4 text-white hover:text-orange-500 z-50 p-2"
              aria-label="Next image"
            >
              <FiChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <div className="flex space-x-2">
                {previewImages.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => {
                      setSelectedImage(img);
                      setCurrentIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-orange-500' : 'bg-white bg-opacity-50'}`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {preview && (
        <div className="mt-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full"
            onClick={() => openLightbox(galleryImages[0], 0)}
          >
            View Full Gallery
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Gallery;