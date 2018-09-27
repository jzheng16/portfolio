import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(e) {
    e.preventDefault();
    const template_params = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };
    const template_id = process.env.REACT_APP_TEMPLATE_ID;
    window.emailjs.send('default_service', template_id, template_params, process.env.REACT_APP_EMAILJS_USER_ID);
  }

  render() {
    return (
      <section id="contact" className="contact">
        <h1>Contact</h1>
        <form ref={this.form} onSubmit={this.handleForm} className="contact-form">
          <input type="text" id="name" name="name" placeholder="Name" />
          <input type="email" id="email" name="email" placeholder="Enter email" />
          <textarea cols="30" rows="10" name="message" placeholder="Your message..." />
          <button type="submit"> Submit </button>
        </form>
      </section>
    );
  }
}

export default Contact;
