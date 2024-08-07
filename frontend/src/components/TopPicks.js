import { Link } from "react-router-dom";
import Fetch from "./fetch";

const TopPics = () => {
  const { shoes: data } = Fetch(
    "https://shoes-website-backend.vercel.app/shoes"
  );

  return (
    <>
      <h3 className="top">Top Picks</h3>
      <div className="displayShoes">
        {data.slice(0, 6).map((shoe) => (
          <div className="single" key={shoe._id}>
            <img
              src={`https://shoes-website-backend.vercel.app/pics/${shoe.image}`}
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
    </>
  );
};

export default TopPics;
