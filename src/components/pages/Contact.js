import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [messageInvalid, setMessageInvalid] = useState(false);

  function validateUserName(e) {
    // const form = e.currentTarget;
    const name = e.target.value;
    if (name.length <= 0) {
      setNameInvalid(true);
    } else {
      setNameInvalid(false);
    }
  }

  function validateEmail(event) {
    const email = event.target.value;
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = re.test(String(email).toLowerCase());
    console.log("Is email valid", isEmailValid);
    if (!isEmailValid) {
      setEmailInvalid(true);
    } else {
      setEmailInvalid(false);
    }
  }

  function validateMessage(event) {
    const message = event.target.value;
    if (message.length <= 0) {
      setMessageInvalid(true);
    } else {
      setMessageInvalid(false);
    }
  }

  function handleChange(e) {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    // if all data is valid then submit
    if (!emailInvalid && !nameInvalid && !messageInvalid) {
      window.alert("Sent message to Asmita");
    }

    // reset the form
    resetForm();
  }

  function resetForm() {
    setName("");
    setEmail("");
    setMessage("");
    setNameInvalid(false);
    setEmailInvalid(false);
    setMessageInvalid(false);
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="form.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your name"
          required
          value={name}
          onChange={handleChange}
          onBlur={validateUserName}
          name="name"
          isInvalid={nameInvalid}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid name
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="form.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Your email"
          required
          value={email}
          onChange={handleChange}
          onBlur={validateEmail}
          name="email"
          isInvalid={emailInvalid}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid email address
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="form.ControlInput1">
        <Form.Label>Message</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your message"
          required
          value={message}
          onChange={handleChange}
          onBlur={validateMessage}
          name="message"
          isInvalid={messageInvalid}
          as="textarea"
          rows={5}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid message.
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}
