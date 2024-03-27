import { useState } from "react";
import ReactDOM from "react-dom/client";

export default function QuoteForm({ submitUrl }) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/quotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email,
        address: inputs.address,
        beds: inputs.beds,
        bathrooms: inputs.bathrooms,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <form className="quoteform" onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={inputs.firstName || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={inputs.lastName || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Email Address:
        <input
          type="text"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Property Address:
        <input
          type="text"
          name="address"
          value={inputs.address || ""}
          onChange={handleChange}
        />
      </label>
      <p>Property Size</p>
      <label>
        Bed rooms
        <input
          type="text"
          name="beds"
          value={inputs.beds || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Bathrooms
        <input
          type="text"
          name="bathrooms"
          value={inputs.bathrooms || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <input type="submit" />
    </form>
  );
}
