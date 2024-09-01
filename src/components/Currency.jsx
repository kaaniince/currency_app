import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import "../css/currency.css";

function Currency() {
  return (
    <div className="currency-div">
      <div
        style={{
          fontFamily: "arial",
          backgroundColor: "black",
          color: "white",
          width: "100%",
          borderRadius: "10px 10px 0px 0px",
          textAlign: "center",
        }}
      >
        <h3>Exchange Application</h3>
      </div>
      <div style={{ marginTop: "10px" }}>
        <input type="number" className="amount" />
        <select className="from-currency-option">
          <option>USD</option>
          <option>EURO</option>
          <option>TL</option>
        </select>
        <FaArrowRightLong
          style={{
            fontSize: "25px",
            marginRight: "15px",
          }}
        />

        <select className="to-currency-option">
          <option>TL</option>
          <option>USD</option>
          <option>EURO</option>
        </select>
        <input type="number" className="result" />
      </div>
      <div>
        <button className="exchange-button" style={{ marginTop: "30px" }}>
          Convert!
        </button>
      </div>
    </div>
  );
}

export default Currency;
