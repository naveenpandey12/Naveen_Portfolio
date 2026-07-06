import "./Hero.css";
import { motion } from "framer-motion";
import HeroTyping from "./HeroTyping";
import HeroStats from "./HeroStats";
import HeroShapes from "./HeroShapes";
import HeroSocial from "./HeroSocial";
import HeroBadges from "./HeroBadges";
import {
    FaGithub,
    FaLinkedinIn,
    FaFacebookF,
    FaArrowDown,
} from "react-icons/fa";

function Hero() {
    return (
        <section id="home" className="hero">
            <HeroShapes />
            <div className="container hero-container">

                {/* Left */}

                <motion.div
                    className="hero-image"
                    animate={{
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >

                    <span className="hero-tag">
                        👋 Hello, I'm
                    </span>

                    <h1>
                        Naveen <span>Pandey</span>
                    </h1>

                    <HeroTyping />

                    <p>
                        I build responsive, modern and high-performance websites
                        using React, JavaScript, HTML, CSS and modern UI libraries.
                        Passionate about creating beautiful digital experiences.
                    </p>

                    <div className="hero-buttons">

                        <a href="#contact" className="btn">
                            Hire Me
                        </a>

                        <a
                            href="#gallery"
                            className="btn btn-outline"
                        >
                            View Work
                        </a>

                    </div>

                    <HeroSocial />
                    <HeroStats />

                </motion.div>

                {/* Right */}

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                >

                    <img
                        src="/images/hero.jpg"
                        alt="Developer"
                    />

                </motion.div>

            </div>

            <a href="#about" className="scroll-down">
                <FaArrowDown />
            </a>

        </section>
    );
}

export default Hero;