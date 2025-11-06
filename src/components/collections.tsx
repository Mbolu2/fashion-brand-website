import { motion } from 'framer-motion';

const items = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Elegant Dress',
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Evening Gown',
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Casual Wear',
  },
  {
    id: 4,
    img: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Business Attire',
  },
  {
    id: 5,
    img: 'https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Summer Collection',
  },
  {
    id: 6,
    img: 'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Winter Elegance',
  },
];

export default function Collections() {
  return (
    <section id="collections" className="py-20 px-6 bg-gray-50">
      <motion.h3
        className="text-4xl md:text-5xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Collections
      </motion.h3>

      <motion.p
        className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Explore our curated selection of sophisticated designs
      </motion.p>

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="w-80 rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
            </div>
            <div className="p-6 bg-white">
              <h4 className="font-semibold text-xl text-center">{item.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
