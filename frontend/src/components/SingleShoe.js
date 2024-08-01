import { useState } from "react";
import { useParams } from "react-router-dom";
import Fetch from "./fetch";
import { Rating } from "@mui/material";

const SingleShoe = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const { shoes: data } = Fetch(`http://localhost:8000/shoes/${id}`);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedColor || !selectedSize) {
      alert("Please select both size and color");
      return;
    }
    const details = { colour: selectedColor, size: selectedSize };

    fetch("http://localhost:8000/orders", {
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
                src={`http://localhost:8000/pics/${data.image}`}
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
