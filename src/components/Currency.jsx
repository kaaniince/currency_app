import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";

import "../css/currency.css";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "writing secret a apikey";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);
  const exchange = async () => {
    // console.log(amount);
    // console.log(fromCurrency);
    // console.log(toCurrency);
    // console.log(result);

    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = (response.data.data[toCurrency] * amount).toFixed(2); // Two commas were misplaced.
    setResult(result);
  };

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
        <input
          type="number"
          className="amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <select
          onChange={(e) => {
            setFromCurrency(e.target.value);
          }}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <FaArrowRightLong
          style={{
            fontSize: "25px",
            marginRight: "15px",
          }}
        />

        <select
          className="to-currency-option"
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <input type="number" className="result" value={result} />
      </div>
      <div>
        <button
          onClick={exchange}
          className="exchange-button"
          style={{ marginTop: "30px" }}
        >
          Convert!
        </button>
      </div>
    </div>
  );
}

export default Currency;
