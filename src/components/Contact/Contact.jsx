import "./Contact.css";

import { motion } from "framer-motion";

import SectionTitle from "../Common/SectionTitle/SectionTitle";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section
      id="contact"
      className="contact"
    >
      <div className="container">

        <SectionTitle
          subtitle="Contact"
          title="Let's Work Together"
          description="Have a project in mind? I'd love to hear from you."
        />

        <div className="contact-grid">

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .6,
            }}
            viewport={{
              once: true,
            }}
          >
            <ContactInfo />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .6,
            }}
            viewport={{
              once: true,
            }}
          >
            <ContactForm />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;