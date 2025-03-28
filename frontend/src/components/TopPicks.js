import { Link } from "react-router-dom";
import Fetch from "./fetch";

const TopPics = () => {
  const { shoes: data } = Fetch(
    "https://shoes-website-backend.vercel.app/shoes"
  );

  return (
    <>
      <h3 className="trusted top font-bold text-3xl">Top Picks</h3>
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
    </>
  );
};

export default TopPics;
