import React, { useState } from 'react';
import { motion,} from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import confetti from 'canvas-confetti';


const Cart: React.FC = () => {
  const { items, removeFromCart, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      clearCart();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 2000);
  };

  if (checkoutComplete) {
    return (
      <div className="min-h-screen py-16 bg-background flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-text dark:text-white mb-4">Thank You!</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Your order has been placed successfully.</p>
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/"
              className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Return to Home
            </a>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-text dark:text-white mb-12">Your Cart</h1>
        {items.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-300">Your cart is empty.</p>
        ) : (
          <>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 py-4 last:border-b-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <h3 className="text-lg font-semibold text-text dark:text-white">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold mr-4 text-text dark:text-white">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-right mb-8">
              <p className="text-2xl font-semibold text-text dark:text-white">Total: ₹{total.toLocaleString('en-IN')}</p>
            </div>
            <div className="text-center">
              <motion.button
                onClick={handleCheckout}
                className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? 'Processing...' : 'Checkout'}
              </motion.button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;