const skills = [
  {
    name: "React",
    percent: 95,
  },
  {
    name: "JavaScript",
    percent: 92,
  },
  {
    name: "HTML",
    percent: 98,
  },
  {
    name: "CSS",
    percent: 96,
  },
];

function Skills() {
  return (
    <div className="skills">

      {skills.map((item) => (

        <div
          key={item.name}
          className="skill"
        >

          <div className="skill-title">

            <span>{item.name}</span>

            <span>{item.percent}%</span>

          </div>

          <div className="progress">

            <div
              className="progress-bar"
              style={{
                width: `${item.percent}%`,
              }}
            />

          </div>

        </div>

      ))}

    </div>
  );
}

export default Skills;