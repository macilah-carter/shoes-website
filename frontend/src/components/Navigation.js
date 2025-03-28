import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const responce = await fetch(
        "https://shoes-website-backend.vercel.app/user/logout",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );

      if (responce.ok) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        navigate("/login");
      } else {
        console.log("logout failed");
      }
    } catch (error) {
      console.log("Error handling logout: ", error);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/nav" className="navbar-brand logo" href="#">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link3" to="/shop">
                  Shop
                </Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <button className="btn btn-secondary nav-link" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/profile"}>
                      Profile
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>
                      login
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>
                      login
                    </Link>
                  </li> */}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
