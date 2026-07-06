import "./About.css";

import { motion } from "framer-motion";

import SectionTitle from "../Common/SectionTitle/SectionTitle";
// import HeroStats from "../Hero/HeroStats";

import Skills from "./Skills";
import Timeline from "./Timeline";

function About() {
  return (
    <section
      id="about"
      className="about"
    >
      <div className="container">

        <SectionTitle
          subtitle="About Me"
          title="Building Digital Experiences"
          description="I specialize in creating responsive, accessible, and high-performance web applications with modern frontend technologies."
        />

        <div className="about-grid">

          <motion.div
            className="about-image"
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .8,
            }}
            viewport={{
              once: true,
            }}
          >
            <img
              src="/images/about.jpg"
              alt="About"
            />
          </motion.div>

          <motion.div
            className="about-content"
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .8,
            }}
            viewport={{
              once: true,
            }}
          >

            <h3>
              Frontend Developer
            </h3>

            <p>
              Passionate about creating beautiful,
              responsive and scalable web
              applications using React,
              JavaScript, HTML and CSS.
            </p>

            <Skills />

            <Timeline />

          </motion.div>

        </div>

        {/* <HeroStats /> */}

      </div>
    </section>
  );
}

export default About;