import { motion } from "framer-motion";

const stats = [
    {
        number: "50+",
        title: "Projects",
    },
    {
        number: "5+",
        title: "Years Experience",
    },
    {
        number: "30+",
        title: "Happy Clients",
    },
];

function HeroStats() {
    return (
        <div className="hero-stats">
            {stats.map((item, index) => (
                <motion.div
                    className="stat-card"
                    key={index}
                    whileHover={{
                        y: -8,
                    }}
                >
                    <h3>{item.number}</h3>
                    <p>{item.title}</p>
                </motion.div>
            ))}
        </div>
    );
}

export default HeroStats;