import { motion } from "framer-motion";

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
    >
      <div className="service-icon">
        <Icon />
      </div>

      <h3>{service.title}</h3>

      <p>{service.description}</p>

      <button className="service-btn">
        Learn More →
      </button>
    </motion.article>
  );
}

export default ServiceCard;