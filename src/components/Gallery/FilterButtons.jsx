const filters = [
  "All",
  "React",
  "UI/UX",
  "Landing Page",
];

function FilterButtons({
  active,
  setActive,
}) {
  return (
    <div className="gallery-filter">
      {filters.map((item) => (
        <button
          key={item}
          className={
            active === item
              ? "filter-btn active"
              : "filter-btn"
          }
          onClick={() => setActive(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;