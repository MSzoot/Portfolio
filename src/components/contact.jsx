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

    // You can use Netlify Forms or an API endpoint to handle form submissions
    // For simplicity, we'll just log the data to the console
    console.log("Form Data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-10 flex w-8/12 flex-col  md:w-4/12"
    >
      <h2 className="my-10 text-center text-4xl font-bold">Contact</h2>
      <div className="mb-4">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Who you are?</span>
          </div>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="input-bordered input w-full"
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">What is your email?</span>
          </div>
          <input
            type="text"
            placeholder="Email"
            className="input-bordered input w-full"
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Your message</span>
          </div>
          <textarea
            className="textarea-bordered textarea h-24 resize-none"
            placeholder="Your message"
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
