import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background shadow-md mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-text mb-2">Karthik Photography</h3>
            <p className="text-text">Capturing Moments That Last Forever</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold text-text mb-2">Contact</h4>
            <p className="text-text">Email: Kakufotography@gmail.com</p>
            <p className="text-text">Phone: 8008484321</p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold text-text mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/fairytalesbykaku" className="text-text hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-text hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-text hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-text">
          <p>&copy; 2024 Karthik Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;