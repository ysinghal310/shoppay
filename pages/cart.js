import React from "react";
import Header from "../components/header";

const cart = () => {
  return (
    <>
      <Header
        country={{
          name: "India",
          flag: "https://ipgeolocation.io/static/flags/in_64.png",
          currency: "INR",
        }}
      />

      <div>cart</div>
    </>
  );
};

export default cart;
