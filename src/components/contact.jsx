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
    <form onSubmit={handleSubmit} className="mx-auto mt-8 w-10/12">
      <div className="mb-4">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input
            type="text"
            id="name"
            placeholder="Type here"
            className="input-bordered input w-full max-w-xs"
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your email?</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input-bordered input w-full max-w-xs"
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Your bio</span>
          </div>
          <textarea
            className="textarea-bordered textarea h-24"
            placeholder="Bio"
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
