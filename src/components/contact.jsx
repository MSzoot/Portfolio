import { useState } from "react";

const Contact = () => {
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
  };

  return (
    <form
      className="mx-auto mb-10 flex w-8/12 flex-col md:w-4/12"
      id="contact"
      onSubmit={handleSubmit}
      method="POST"
      netlify
    >
      <h2 className="my-10 text-center text-4xl font-bold">Contact</h2>
      <div className="mb-4">
        <label htmlFor="name" className="form-control w-full">
          Name:
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
          Email:
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
          Message:
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

export default Contact;
