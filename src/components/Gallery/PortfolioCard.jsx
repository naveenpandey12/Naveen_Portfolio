import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

function PortfolioCard({ project }) {
  return (
    <motion.article
      className="portfolio-card"
      layout
      whileHover={{
        y: -8,
      }}
    >
      <img
        src={project.image}
        alt={project.title}
      />

      <div className="portfolio-overlay">
        <h3>{project.title}</h3>

        <p>{project.category}</p>

        <div className="portfolio-links">

          <a href={project.live}>
            <FaExternalLinkAlt />
          </a>

          <a href={project.github}>
            <FaGithub />
          </a>

        </div>

      </div>
    </motion.article>
  );
}

export default PortfolioCard;