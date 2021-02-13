import React from "react";
import "./qoute-form.css";
// import ValidForm from "react-valid-form-component";

export default class QouteForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xvowpjlp"
        method="POST"
        id="qoute-form"
        nosubmit
      >
        <label>Name:</label>
        <input
          type="text"
          placeholder="full name"
          name="name"
          required
          minLength="3"
          maxLength="50"
        />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Budget:</label>
        <select id="cars" name="budget" placeholder="Select">
          <option value="noteselected">SELECT</option>
          <option value="notesure">Not Sure</option>
          <option value="50k">Under 50k</option>
          <option value="50k-100k">50k - 1lac</option>
          <option value="100k-300k">1lac to 3lac</option>
          <option value="<300k">Above 3lac</option>
        </select>
        <label>Phone Number:</label>
        <input type="number" name="phone" required minLength="10" />
        <label>Message:</label>
        <textarea
          type="text"
          name="message"
          required
          minLength="3"
          maxLength="450"
        />
        {status === "SUCCESS" ? (
          <p>Thank you for response! We will get back to you shortly.</p>
        ) : (
          <button>Submit</button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
