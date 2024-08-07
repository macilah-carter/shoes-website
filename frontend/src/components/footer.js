import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" pt-5 pb-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
            <h2>Heading</h2>
            <p className="pr-5 text-white-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              ante mollis quam tristique convallis{" "}
            </p>
            <p>
              <Link>
                <i className="fa fa-facebook-square mr-1"></i>
              </Link>
              <Link>
                <i className="fa fa-linkedin-square ms-1"></i>
              </Link>
            </p>
          </div>
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
            <ul className="m-0 p-0">
              <li>
                - <Link>Home</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-xs-12 location">
            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
            <p>22, 4th street avenue</p>
            <p className="mb-0">
              <i className="fa fa-phone mr-4"></i>(254) 712345678
            </p>
            <p>
              <i className="fa fa-envelope-o mr-4 "></i>streetShoe@gmail.com
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col copyright">
            <p className="">
              <small className="text-white-50">
                © 2024. All Rights Reserved.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
