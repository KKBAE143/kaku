import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);

  const slides = [
    '/public/wedding/DSC04820.jpg',
    '/public/engagement/2.jpg',
    '/public/wedding/_05A4300.jpg'
  ];

  const quotes = [
    "Capturing Moments That Last Forever",
    "A photograph is the pause button of life",
    "Photography is the story I fail to put into words",
    "A picture is worth a thousand words",
    "Photography is the beauty of life captured"
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    const quoteInterval = setInterval(() => {
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
    }, 7000);

    return () => {
      clearInterval(slideInterval);
      clearInterval(quoteInterval);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              className="text-5xl font-bold text-white mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Karthik Photography
            </motion.h1>
            <motion.p
              className="text-2xl text-white mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {quotes[currentQuote].split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="/services"
                className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors mr-4"
              >
                Book Now
              </Link>
              <Link
                to="/gallery/all"
                className="bg-secondary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                View Portfolio
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-text mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Wedding', 'prewedding', 'Kids', 'Architecture', 'Commercial'].map((service) => (
              <motion.div
                key={service}
                className="service-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-text dark:text-white">{service} Photography</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Professional {service.toLowerCase()} photography services.</p>
                <Link
                  to={`/gallery/${service.toLowerCase()}`}
                  className="text-primary hover:underline"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-text dark:text-white mb-12">Testimonials</h2>
          <div className="overflow-hidden">
            <div className="testimonial-scroll">
              {[
                { name: 'Sarah', text: 'Karthik captured our wedding beautifully. The photos are amazing!' },
                { name: 'Aravind Swami', text: 'The family portraits exceeded our expectations. Highly recommended!' },
                { name: 'Mohan Naidu', text: 'Professional and creative. Our product photos look stunning.' },
                { name: 'Ramesh Babu', text: 'Karthik has an eye for detail. Our architecture shots are perfect!' },
                { name: 'Sravani', text: 'The baby photoshoot was so much fun. We love the results!' },
                { name: "Dinesh ", text: "Karthik's commercial photography took o..." } // Using double quotes
              ].map((testimonial, index) => (
                <div key={index} className="w-1/2 px-4">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold text-text dark:text-white">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-text dark:text-white mb-8">Ready to capture your moments?</h2>
          <Link
            to="/services"
            className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Book a Session
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;