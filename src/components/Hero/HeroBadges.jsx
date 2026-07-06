const skills = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Tailwind",
];

function HeroBadges() {
  return (
    <div className="hero-badges">
      {skills.map((skill) => (
        <span key={skill} className="badge">
          {skill}
        </span>
      ))}
    </div>
  );
}

export default HeroBadges;