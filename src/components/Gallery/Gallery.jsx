import "./Gallery.css";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";

import SectionTitle from "../Common/SectionTitle/SectionTitle";
import portfolio from "../../data/portfolio";
import FilterButtons from "./FilterButtons";
import PortfolioCard from "./PortfolioCard";

function Gallery() {
  const [active, setActive] = useState("All");

  const filteredProjects = useMemo(() => {
    if (active === "All") {
      return portfolio;
    }

    return portfolio.filter(
      (item) => item.category === active
    );
  }, [active]);

  return (
    <section
      id="gallery"
      className="gallery"
    >
      <div className="container">

        <SectionTitle
          subtitle="Portfolio"
          title="Recent Projects"
          description="A selection of projects showcasing responsive design, React development, and modern UI implementation."
        />

        <FilterButtons
          active={active}
          setActive={setActive}
        />

        <div className="portfolio-grid">

          <AnimatePresence>
            {filteredProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
              />
            ))}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

export default Gallery;