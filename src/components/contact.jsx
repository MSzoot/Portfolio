import { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encodeFormData({
        "form-name": "contact",
        ...this.state,
      }),
    })
      .then(() => alert("Success! Your message has been sent."))
      .catch((error) => alert(error));
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  encodeFormData = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <form
        className="mx-auto mb-10 flex w-8/12 flex-col md:w-4/12"
        onSubmit={this.handleSubmit}
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
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
              value={name}
              onChange={this.handleChange}
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
              value={email}
              onChange={this.handleChange}
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
              value={message}
              onChange={this.handleChange}
              required
            ></textarea>
          </label>
        </div>

        <button type="submit" className="btn-secondary btn">
          Send
        </button>
      </form>
    );
  }
}

export default ContactForm;
