import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Award, Briefcase, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    { year: 2010, event: 'Started photography as a hobby', icon: Camera },
    { year: 2012, event: 'First wedding photography gig', icon: Camera },
    { year: 2015, event: 'Opened first studio', icon: Briefcase },
    { year: 2018, event: 'Won Best Portrait Photographer award', icon: Award },
    { year: 2020, event: 'Expanded to commercial photography', icon: Briefcase },
    { year: 2023, event: 'Launched online photography courses', icon: BookOpen }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-5xl font-bold text-center text-gray-800 dark:text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Karthik
        </motion.h1>
        
        <div className="flex flex-col md:flex-row items-center mb-16">
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/public/images/admin.jpeg"
              alt="Karthik"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              style={{ maxHeight: '500px' }}
            />
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-white">Karthik - Professional Photographer</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              With over 8+ years of experience, I have established myself as a versatile and passionate photographer. My journey began as a hobby and has since blossomed into a successful career spanning various photography genres. I specialize in wedding, pre-wedding, baby & kids, portrait, and commercial photography, capturing moments that last a lifetime.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My unique style combines technical expertise with an artistic eye, resulting in captivating images that tell compelling stories. Whether it's a wedding, a portrait session, or a commercial project, I bring creativity and professionalism to every shoot. I am dedicated to providing exceptional service and creating stunning images that exceed your expectations. Let's work together to create something beautiful!
            </p>
          </motion.div>
        </div>

        <motion.h2
          className="text-4xl font-semibold text-center mb-12 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Photography Journey
        </motion.h2>
        <div className="relative" ref={ref}>
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700"></div>
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{milestone.year}</h3>
                <p className="text-gray-600 dark:text-gray-300">{milestone.event}</p>
              </div>
              <div className="hidden md:flex w-2/12 justify-center items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                  <milestone.icon size={24} />
                </div>
              </div>
              <div className="w-full md:w-5/12"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-semibold mb-4 text-gray-800 dark:text-white">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Interested in working together? Let's create something amazing!
          </p>
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="mailto:Kakufotography@gmail.com"
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Contact Karthik
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;