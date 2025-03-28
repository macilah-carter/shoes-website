import { Link, useNavigate, useLocation } from "react-router-dom";
import Fetch from "./fetch";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

const Shop = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token && location.pathname === "/shop") {
      navigate("/login");
    }
  }, [token, navigate, location]);

  const { shoes: data } = Fetch("https://shoes-website-backend.vercel.app/shoes");

  if (data?.length === 0) {
    return <div className="loader">
      <CircularProgress sx={{
      marginTop: "10em",

    }} color="secondary" />
    </div>

  }

  // console.log("data", !data);

  return (
    <>
      {/* Featured Section */}
      <div className="featured text-center py-6">
        <h1 className="text-4xl font-bold">SNEAKER</h1>
        <div className="featured-content mt-2">
          <h2 className="text-2xl font-semibold">Featured from our collection</h2>
          <p className="text-gray-600">Top products</p>
        </div>
      </div>

      {/* Display Shoes Section */}
      <div className="displayShoes bg-gray-100 p-6">
        {data.slice(0, 8).map((shoe) => (
          <div
            key={shoe._id}
            className="each relative flex flex-col my-6 bg-white shadow-md border border-gray-300 rounded-xl w-1/5 h-96 transition transform hover:scale-105"
          >
            {/* Image Section */}
            <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
              <img
                src={`https://shoes-website-backend.vercel.app/pics/${shoe.image}`}
                alt={shoe.name}
                className="h-full w-full object-cover rounded-md"
              />
            </div>

            {/* Shoe Details */}
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-gray-900 text-xl font-semibold">
                  {shoe.name}
                </p>
                <p className="text-orange-500 text-xl font-bold">
                  ${shoe.price}
                </p>
              </div>
              <p className="text-gray-600 leading-normal font-light">
                Premium sneaker with comfort & style. Available in multiple
                sizes.
              </p>

              {/* Buttons */}
              <div className="flex space-x-2">
                <Link to={`/single/${shoe._id}`} className="w-1/2">
                  <button className="w-full py-2 bg-orange-500 text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition">
                    View More
                  </button>
                </Link>
                <button className="w-1/2 py-2 bg-gray-800 text-white rounded-lg text-sm font-semibold hover:bg-gray-900 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* New Sneaker Section */}
      <div className="new flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8 rounded-lg shadow-lg my-10">
  {data.slice(7, 8).map((shoe) => (
    <div key={shoe._id} className="w-full md:w-1/2">
      <img
        src={`https://shoes-website-backend.vercel.app/pics/${shoe.image}`}
        alt={shoe.name}
        className="w-full h-96 object-cover rounded-lg shadow-md"
      />
    </div>
  ))}

  {data.slice(7, 8).map((shoe) => (
    <div key={shoe._id} className="w-full md:w-1/2 text-center md:text-left p-6">
      <h2 className="text-2xl font-bold text-gray-800">2016 Nike</h2>
      <h2 className="text-3xl font-extrabold text-orange-500">The New Classic</h2>
      <p className="text-gray-600 mt-3 leading-relaxed">
        Experience premium comfort and style. These sneakers are crafted for durability and a sleek look.
      </p>
      <Link 
        to={`/single/${shoe._id}`} 
        className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
      >
        Buy Now
      </Link>
    </div>
  ))}
</div>



      {/* Best Seller Section */}
      <div className="featured text-center mt-12">
        <h1 className="text-3xl font-bold">Best Sellers</h1>
        <p className="text-gray-600 mt-2">Top-rated products</p>
      </div>

      <div className="displayShoes bg-gray-100 p-6">
        {data.slice(0, 8).map((shoe) => (
          <div
            key={shoe._id}
            className="each relative flex flex-col my-6 bg-white shadow-md border border-gray-300 rounded-xl w-1/5 h-96 transition transform hover:scale-105"
          >
            {/* Image Section */}
            <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
              <img
                src={`https://shoes-website-backend.vercel.app/pics/${shoe.image}`}
                alt={shoe.name}
                className="h-full w-full object-cover rounded-md"
              />
            </div>

            {/* Shoe Details */}
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-gray-900 text-xl font-semibold">
                  {shoe.name}
                </p>
                <p className="text-orange-500 text-xl font-bold">
                  ${shoe.price}
                </p>
              </div>
              <p className="text-gray-600 leading-normal font-light">
                Premium sneaker with comfort & style. Available in multiple
                sizes.
              </p>

              {/* Buttons */}
              <div className="flex space-x-2">
                <Link to={`/single/${shoe._id}`} className="w-1/2">
                  <button className="w-full py-2 bg-orange-500 text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition">
                    View More
                  </button>
                </Link>
                <button className="w-1/2 py-2 bg-gray-800 text-white rounded-lg text-sm font-semibold hover:bg-gray-900 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="new flex flex-col-reverse md:flex-row-reverse items-center justify-between bg-gray-100 p-8 rounded-lg shadow-lg my-10">
  {data.slice(1, 2).map((shoe) => (
    <div key={shoe._id} className="w-full md:w-1/2">
      <img
        src={`https://shoes-website-backend.vercel.app/pics/${shoe.image}`}
        alt={shoe.name}
        className="w-full h-96 object-cover rounded-lg shadow-md"
      />
    </div>
  ))}

  {data.slice(1, 2).map((shoe) => (
    <div key={shoe._id} className="w-full md:w-1/2 text-center md:text-left p-6">
      <h2 className="text-2xl font-bold text-gray-800">2016 Nike</h2>
      <h2 className="text-3xl font-extrabold text-orange-500">The New Classic</h2>
      <p className="text-gray-600 mt-3 leading-relaxed">
        Experience premium comfort and style. These sneakers are crafted for durability and a sleek look.
      </p>
      <Link 
        to={`/single/${shoe._id}`} 
        className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
      >
        Buy Now
      </Link>
    </div>
  ))}
</div>

    </>
  );
};

export default Shop;
