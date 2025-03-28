import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* About */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-orange-500">Street Shoe</h2>
            <p className="text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              ante mollis quam tristique convallis.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-white text-xl">
                <i className="fa fa-facebook-square"></i>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-xl">
                <i className="fa fa-linkedin-square"></i>
              </Link>
            </div>
          </div>

          {/* Location */}
          <div className="md:w-1/3">
            <h4 className="text-lg font-semibold text-orange-500">Location</h4>
            <p className="text-gray-400 mt-2">22, 4th Street Avenue</p>
            <p className="text-gray-400 flex items-center mt-2">
              <i className="fa fa-phone mr-2"></i> (254) 712345678
            </p>
            <p className="text-gray-400 flex items-center mt-1">
              <i className="fa fa-envelope mr-2"></i> streetShoe@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400 text-sm">© 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
