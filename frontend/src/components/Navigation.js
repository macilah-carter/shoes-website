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
      navigate('/login')
    }
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const responce = await fetch("http://localhost:8000/user/logout", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
      });

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
    <div className="navigation">
      <div className="logo">logo</div>
      <i className="fas fa-bars"></i>
      <ul className="list">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>Contact us</li>
        <li>Cart</li>
        {isLoggedIn ? (
          <>
            <><button className="btn btn-primary" onClick={handleLogout}>Logout</button></>
            <li><Link to={'/profile'}>Profile</Link></li>
          </>
        ) : (
          <>
            <li>
              <Link to={"/login"}>login</Link>
            </li>
            <li>sign up</li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navigation;
