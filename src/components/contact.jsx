import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({ "form-name": "contact", ...formData }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      alert("Success! Your message has been sent.");
    } catch (error) {
      alert(
        "There was an error submitting your message. Please try again later."
      );
    }
  };

  const encodeFormData = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return (
    <form
      className="mx-auto mb-10 flex w-8/12 flex-col md:w-4/12"
      onSubmit={handleSubmit}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <h2 className="my-10 text-center text-4xl font-bold">Contact</h2>
      <div className="mb-4">
        <label htmlFor="name" className="form-control w-full">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="input-bordered input w-full"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="form-control w-full">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="input-bordered input w-full"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="form-control w-full">
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="textarea-bordered textarea h-24 resize-none"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
      </div>

      <button type="submit" className="btn-secondary btn">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
