import { useState } from "react";
import { useParams } from "react-router-dom";
import Fetch from "./fetch";
import { Rating } from "@mui/material";

const SingleShoe = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const { shoes: data } = Fetch(
    `https://shoes-website-backend.vercel.app/shoes/${id}`
  );

  const daraja = () => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin","https://shoes-website-frontend.vercel.app");
    headers.append("Authorization", "Bearer fUx6sJCvnKyO6RQ9IgfOJGMb9hKx");

    fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
      method: "POST",
      headers,
      body: JSON.stringify({
        BusinessShortCode: 174379,
        Password:
          "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwODA5MjEzMjU1",
        Timestamp: "20240809213255",
        TransactionType: "CustomerPayBillOnline",
        Amount: 1,
        PartyA: 254726114885,
        PartyB: 174379,
        PhoneNumber: 254726114885,
        CallBackURL: "https://shoes-website-frontend.vercel.app",
        AccountReference: "CompanyXLTD",
        TransactionDesc: "Payment of X",
      }),
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedColor || !selectedSize) {
      alert("Please select both size and color");
      return;
    }
    const details = { colour: selectedColor, size: selectedSize };

    fetch("https://shoes-website-backend.vercel.app/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }
        return res.json();
      })
      .then((dat) => {
        daraja();
        alert("Purchase completed");
      })
      .catch((error) => {
        console.log("Error submitting order: ", error);
        alert("There was an error processing your order");
      });
  };

  return (
    <>
      {data && (
        <div className="card" key={data._id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`https://shoes-website-backend.vercel.app/pics/${data.image}`}
                className="img-fluid rounded-start"
                alt={data.name}
              />
              <Rating />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <form onSubmit={handleSubmit}>
                  <p className="card-text">
                    <select
                      id="size"
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                    >
                      <option value="" disabled>
                        Select Size
                      </option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </select>
                  </p>
                  {data.colour &&
                    data.colour.map((color) => (
                      <p className="card-text" key={color}>
                        <input
                          type="radio"
                          id={color}
                          name="color"
                          value={color}
                          checked={selectedColor === color}
                          onChange={(e) => setSelectedColor(e.target.value)}
                        />
                        <label htmlFor={color} className="ms-1">
                          {color}
                        </label>
                      </p>
                    ))}

                  <button className="btn btn-primary">Buy</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleShoe;
