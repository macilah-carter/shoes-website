import { Link } from "react-router-dom";
import Fetch from "./fetch";
import { Rating } from "@mui/material";

const Shop = () => {
  const { shoes: data } = Fetch("http://localhost:8000/shoes");
  // const rand = Math.floor(Math.random())
  return (
    <>
      <div className="frd-from">
        <div className="featured">
          <h1>SNEAKER</h1>
          <div className="featured-content">
            <h2>featured from our collection</h2>
            <p>products</p>
          </div>
        </div>
        <div className="displayShoes">
          {data.slice(0, 6).map((shoe) => (
            <div className="single" key={shoe._id}>
              <img
                src={`http://localhost:8000/pics/${shoe.image}`}
                alt={shoe.name}
              />
              <p className="ms-1">Name: {shoe.name}</p>
              <p className="ms-1">Price: {shoe.price}</p>
              <p className="ms-1">Rating:</p>
              <div className="buttons">
                <Link to={`/single/${shoe._id}`}>
                  <button>view more</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="new">
          {data.slice(7, 8).map((shoe, index) => (
            <div className="diff" key={shoe._id}>
              <img
                src={`http://localhost:8000/pics/${shoe.image}`}
                alt={shoe.name}
              />
              {/* <div className="buttons">
              <Link to={`/single/${shoe._id}`}>
                <button>view more</button>
              </Link>
            </div> */}
            </div>
          ))}
          {data.slice(7, 8).map((shoe, index) => (
          <div className="new-text">
            <h2>2016 Nike</h2>
            <h2>The New Classic</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              ducimus sit, odio laudantium suscipit deserunt.
            </p>
            <Link className="btn btn-secondary" to={`/single/${shoe._id}`}>Buy</Link>
          </div>
          ))}
        </div>
      </div>
      <div className="featured best">
        <h1>products</h1>
        <div className="featured-content">
          <h2>bestSeller</h2>
          <p>products</p>
        </div>
      </div>
      <div className="bestSeller">
        {data.map((shoe, index) => (
          <div
            className="single"
            key={shoe._id}
          >
            <img
              src={`http://localhost:8000/pics/${shoe.image}`}
              alt={shoe.name}
            />
            <p className="ms-1">{shoe.name}</p>
            <p className="ms-1">price:</p>
            <p className="ms-1">Rating: <Rating className="mt2"/></p>
            <div className="buttons">
              <Link to={`/single/${shoe._id}`}>
                <button>view more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="new">
        {data.slice(7, 8).map((shoe, index) => (
        <div className="new-text">
          <h2>2016 Nike</h2>
          <h2>The New Classic</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            ducimus sit, odio laudantium suscipit deserunt.
          </p>
          <Link className="btn btn-secondary" to={`/single/${shoe._id}`}>Buy</Link>
        </div>
        ))}
        {data.slice(7, 8).map((shoe, index) => (
          <div className="diff" key={shoe._id}>
            <img
              src={`http://localhost:8000/pics/${shoe.image}`}
              alt={shoe.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Shop;
