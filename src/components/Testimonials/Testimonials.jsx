import "./Testimonials.css";

import { motion } from "framer-motion";

import SectionTitle from "../Common/SectionTitle/SectionTitle";

import testimonials from "../../data/testimonials";

import TestimonialCard from "./TestimonialCard";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="testimonials"
    >
      <div className="container">

        <SectionTitle
          subtitle="Testimonials"
          title="What Clients Say"
          description="Feedback from clients and collaborators."
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .6,
          }}
          viewport={{
            once: true,
          }}
        >

          <Swiper
            modules={[
              Navigation,
              Pagination,
              Autoplay,
            ]}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 3500,
            }}
            pagination={{
              clickable: true,
            }}
            navigation
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >

            {testimonials.map((item) => (

              <SwiperSlide key={item.id}>
                <TestimonialCard testimonial={item} />
              </SwiperSlide>

            ))}

          </Swiper>

        </motion.div>

      </div>
    </section>
  );
}

export default Testimonials;