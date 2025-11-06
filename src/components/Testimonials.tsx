import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophia Martinez',
  quote: 'Ara Style transformed my wardrobe. The quality and elegance are unmatched!',
    role: 'Fashion Blogger',
  },
  {
    id: 2,
    name: 'Emma Thompson',
    quote: 'Every piece feels like it was made just for me. Absolutely stunning designs.',
    role: 'Executive',
  },
  {
    id: 3,
    name: 'Isabella Chen',
    quote: 'The perfect blend of classic and contemporary. My go-to brand for special occasions.',
    role: 'Entrepreneur',
  },
];

export default function Testimonials() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <motion.h3
        className="text-4xl md:text-5xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        What Our Clients Say
      </motion.h3>

      <motion.p
        className="text-center text-gray-600 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
  Hear from the women who trust Ara Style
      </motion.p>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="w-80 p-8 rounded-xl shadow-lg bg-gray-50 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <Quote className="text-rose-400 w-10 h-10 mb-4" />
            <p className="text-gray-700 mb-6 italic leading-relaxed">
              "{testimonial.quote}"
            </p>
            <div className="border-t border-gray-300 pt-4">
              <h4 className="font-semibold text-lg">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
