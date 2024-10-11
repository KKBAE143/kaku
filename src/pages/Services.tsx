import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Camera, User, Baby, Building2, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    id: 'wedding',
    name: 'Wedding Photography',
    price: 100000,
    description: 'Capture your special day with our professional wedding photography services.',
    icon: Camera,
    images: [
      '/public/wedding/DSC04820.jpg',
      '/public/wedding/1639922598484-01.jpeg',
      '/public/wedding/_05A4300.jpg'
    ]
  },
  {
    id: 'prewedding',
    name: 'Pre-Wedding Photography',
    price: 20000,
    description: 'Beautiful and romantic pre-wedding photo sessions for you and your partner.',
    icon: User,
    images: [
      '/public/engagement/1.jpg',
      '/public/engagement/2.jpg',
      '/public/engagement/4.jpg',
    ]
  },
  {
    id: 'kids',
    name: 'Kids & Baby Photography',
    price: 15000,
    description: 'Adorable and fun photo sessions for your little ones.',
    icon: Baby,
    images: [
      '/public/baby/_05A0574.jpg',
      '/public/baby/1698401851451.jpg',
      '/public/baby/_05A8814.jpg'
    ]
  },
  {
    id: 'architecture',
    name: 'Architecture Photography',
    price: 35000,
    description: 'Showcase your property or architectural designs with our expert photography.',
    icon: Building2,
    images: [
      '/public/archicture/26ka_ku26-20241011-0003.webp',
      '/public/archicture/26ka_ku26-20241011-0005.webp',
      '/public/archicture/26ka_ku26-20241011-0001.jpg'
    ]
  },
  {
    id: 'commercial',
    name: 'Commercial Photography',
    price: 50000,
    description: 'High-quality product and brand photography for your business needs.',
    icon: ShoppingBag,
    images: [
      '/public/commericial/26ka_ku26-20241011-0005.jpg',
      '/public/commericial/26ka_ku26-20241011-0006.jpg',
      '/public/commericial/26ka_ku26-20241011-0007.jpg'
    ]
  }
];

const Services: React.FC = () => {
  const { addToCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>({});

  const handleAddToCart = (service: typeof services[0]) => {
    addToCart({ id: service.id, name: service.name, price: service.price, quantity: 1 });
    setSelectedService(service.name);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  const nextImage = (serviceId: string) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [serviceId]: (prev[serviceId] + 1) % 3 || 0
    }));
  };

  const prevImage = (serviceId: string) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [serviceId]: (prev[serviceId] - 1 + 3) % 3 || 0
    }));
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
          Our Photography Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.images[currentImageIndex[service.id] || 0]}
                  alt={`${service.name} - Image ${(currentImageIndex[service.id] || 0) + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => prevImage(service.id)}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
                  aria-label={`Previous image for ${service.name}`}
                >
                  <ChevronLeft className="text-gray-800" aria-hidden="true" />
                </button>
                <button
                  onClick={() => nextImage(service.id)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
                  aria-label={`Next image for ${service.name}`}
                >
                  <ChevronRight className="text-gray-800" aria-hidden="true" />
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{service.name}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-2xl font-bold text-indigo-600 mb-4">₹{service.price.toLocaleString('en-IN')}</p>
                <button
                  onClick={() => handleAddToCart(service)}
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showSuccess && (
        <div
          className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg"
        >
          <p className="font-semibold">{selectedService} added to cart!</p>
        </div>
      )}
    </div>
  );
};

export default Services;