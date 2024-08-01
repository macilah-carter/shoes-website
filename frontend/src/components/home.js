import { Link } from 'react-router-dom'
import About from "./About";
import Fetch from "./fetch";
import Shop from "./shop";

function Home() {
  const { shoes: data, error } = Fetch("https://shoes-website-backend.vercel.app/shoes");

  return (
    <>
      <div id="home" className="">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide home"
          data-bs-ride="carousel"
        >
          <div className="text-content">
            <p>All shoes <span>New collection</span></p>
            <h2>Footwear <span><h1>BOOT IN BLACK</h1></span></h2>
            <p>Bring your shoe game to a new level</p>
            <Link to="/shop">Shop Now</Link>
          </div>
          <div className="carousel-inner image">
            {data.slice(0,1).map((shoe, index) => (
              <div
                key={shoe._id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={`http://localhost:8000/pics/${shoe.image}`}
                  alt={error && { error }}
                  className="d-block w-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="about" className="aboutSec">
        <About />
      </div>
      <div className="shopSec">
        <Shop />
      </div>
    </>
  );
}

export default Home;
