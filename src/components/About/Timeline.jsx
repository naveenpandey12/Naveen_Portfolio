const timeline = [
  {
    year: "2025",
    title: "Senior Frontend Developer",
  },
  {
    year: "2023",
    title: "React Developer",
  },
  {
    year: "2021",
    title: "Frontend Developer",
  },
];

function Timeline() {
  return (
    <div className="timeline">

      {timeline.map((item) => (

        <div
          key={item.year}
          className="timeline-item"
        >

          <h4>{item.year}</h4>

          <p>{item.title}</p>

        </div>

      ))}

    </div>
  );
}

export default Timeline;