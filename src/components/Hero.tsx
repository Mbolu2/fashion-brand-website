import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <motion.h2
        className="text-5xl md:text-7xl font-extrabold mb-4 z-10 text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Style Redefined
      </motion.h2>

      <motion.p
        className="text-lg md:text-2xl mb-8 z-10 text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Discover timeless elegance for the modern woman
      </motion.p>

      <motion.button
        className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 rounded-full shadow-lg z-10 font-semibold text-lg transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Shop Now
      </motion.button>
    </section>
  );
}
