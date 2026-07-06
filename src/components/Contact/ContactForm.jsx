import { useState } from "react";
import InputField from "./InputField";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent successfully!");

    setForm(initialState);
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >
      <InputField
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <InputField
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <InputField
        label="Subject"
        name="subject"
        value={form.subject}
        onChange={handleChange}
      />

      <InputField
        label="Message"
        textarea
        name="message"
        value={form.message}
        onChange={handleChange}
      />

      <button className="btn">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;