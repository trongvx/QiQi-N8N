import { motion } from "motion/react";

/**
 * ClientsSection Component
 * Grayscale logogrid with high-impact reveal animations.
 */
const logos = [
  "Google", "n8n", "Telegram", "OpenAI", "Zapier", "WhatsApp", "Discord", "Trello"
];

const ClientsSection = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/20 text-[10px] font-black uppercase tracking-[0.5em] mb-16"
        >
          TRUSTED BY INNOVATORS & INTEGRATED WITH
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.3, y: 0 }}
              whileHover={{ scale: 1.1, opacity: 1, color: "#22d3ee" }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="text-xl md:text-3xl font-bold font-heading text-white cursor-default select-none transition-all duration-300 tracking-tight"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
