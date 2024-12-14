import React, { useState } from "react";
import Layout from "../components/Layout";

function TicketBookPage() {
  const [user, setUser] = useState("");
  const [from, setFrom] = useState("");
  const [seats, setSeats] = useState("");

  function handleSubmit() {
    const formObj = { user, from, seats };
  }
  return (
    <Layout>
      <h1>Book a ticket</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">UserName</label>
        <input
          type="text"
          placeholder="User name"
          onChange={(event) => {
            setUser(event.target.value);
          }}
        />
        <label htmlFor="">From</label>
        <input
          type="text"
          placeholder="from"
          onChange={(event) => {
            setFrom(event.target.value);
          }}
        />
        <label htmlFor="">Seats</label>
        <input
          type="text"
          placeholder="number of seats"
          onChange={(event) => {
            setSeats(event.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </Layout>
  );
}

export default TicketBookPage;
