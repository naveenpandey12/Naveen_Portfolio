import { FaStar } from "react-icons/fa";

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">

      <img
        src={testimonial.image}
        alt={testimonial.name}
      />

      <h3>{testimonial.name}</h3>

      <span>{testimonial.company}</span>

      <div className="rating">
        {[...Array(testimonial.rating)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      <p>"{testimonial.review}"</p>

    </div>
  );
}

export default TestimonialCard;