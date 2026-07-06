import "./SectionTitle.css";
import { motion } from "framer-motion";

function SectionTitle({ subtitle, title, description }) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .6 }}
      viewport={{ once: true }}
    >
      <span>{subtitle}</span>

      <h2>{title}</h2>

      {description && (
        <p>{description}</p>
      )}
    </motion.div>
  );
}

export default SectionTitle;