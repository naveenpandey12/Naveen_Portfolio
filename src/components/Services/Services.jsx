import "./Services.css";

import services from "../../data/services";

import SectionTitle from "../Common/SectionTitle/SectionTitle";

import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section
      id="services"
      className="services"
    >
      <div className="container">

        <SectionTitle
          subtitle="My Services"
          title="What I Can Do For You"
          description="Helping businesses build fast, modern and engaging web experiences."
        />

        <div className="services-grid">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;