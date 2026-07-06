import contact from "../../data/contact";

function ContactInfo() {
  return (
    <div className="contact-info">
      {contact.map((item) => {
        const Icon = item.icon;

        return (
          <div
            className="info-card"
            key={item.id}
          >
            <div className="info-icon">
              <Icon />
            </div>

            <div>
              <h4>{item.title}</h4>
              <p>{item.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ContactInfo;