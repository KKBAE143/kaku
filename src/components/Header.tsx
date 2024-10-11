import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Camera className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold text-text">Karthik Photography</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-text hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/services" className="text-text hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/gallery/all" className="text-text hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link to="/about" className="text-text hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/cart" className="text-text hover:text-primary transition-colors">Cart</Link></li>
          </ul>
        </nav>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
};

export default Header;