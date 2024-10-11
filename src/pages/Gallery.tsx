import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const galleryImages = {
  wedding: [
    '/public/wedding/DSC04820.jpg',
    '/public/wedding/1639922598484-01.jpeg',
    '/public/wedding/1.jpg',
    '/public/wedding/2.jpg',
    '/public/wedding/3.jpg',
    '/public/wedding/4.jpg',
    '/public/wedding/5.jpg',
    '/public/wedding/6.jpg',
    '/public/wedding/7.jpg',
    '/public/wedding/8.jpg',
    '/public/wedding/9.jpg',
    '/public/wedding/10.jpg',
    '/public/wedding/11.jpg',
    '/public/wedding/12.jpg',
    '/public/wedding/13.jpg',
  ],
  prewedding: [
    '/public/engagement/1.jpg',
    '/public/engagement/2.jpg',
    '/public/engagement/4.jpg',
    '/public/engagement/5.jpg',
    '/public/engagement/6.jpg',
    '/public/engagement/7.jpg',
    '/public/engagement/8.jpg',
    '/public/engagement/9.jpg',
    '/public/engagement/11.jpg',
    '/public/engagement/12.jpg',
  ],
  kids: [
    '/public/baby/1.jpg',
    '/public/baby/2.jpg',
    '/public/baby/3.jpg',
    '/public/baby/4.jpg',
    '/public/baby/5.jpg',
    '/public/baby/6.jpg',
    '/public/baby/7.jpg',
    '/public/baby/8.jpg',
    '/public/baby/9.jpg',
    '/public/baby/10.jpg',
    '/public/baby/11.jpg',
    '/public/baby/12.jpg',
    '/public/baby/13.jpg',
    '/public/baby/14.jpg',
    '/public/baby/15.jpg',
  ],
  architecture: [
    '/public/archicture/26ka_ku26-20241011-0003.webp',
    '/public/archicture/26ka_ku26-20241011-0005.webp',
    '/public/archicture/26ka_ku26-20241011-0001.jpg'
  ],
  commercial: [
    '/public/commericial/26ka_ku26-20241011-0005.jpg',
    '/public/commericial/26ka_ku26-20241011-0006.jpg',
    '/public/commericial/26ka_ku26-20241011-0007.jpg'
  ]
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

const Gallery: React.FC = () => {
  const { service } = useParams<{ service: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = service && service !== 'all' ? galleryImages[service as keyof typeof galleryImages] : Object.values(galleryImages).flat();

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {service === 'all' ? 'All Photos' : `${service?.charAt(0).toUpperCase() + service?.slice(1)} Photography`}
        </motion.h1>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openLightbox(image)}
            >
              <motion.img 
                src={image} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <motion.div 
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.span 
                  className="text-white text-lg font-semibold"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  View Image
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.img
              src={selectedImage}
              alt="Selected image"
              className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;

