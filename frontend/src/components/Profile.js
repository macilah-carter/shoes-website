import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user) {
      navigate("/login");
      return;
    }
    try {
      const parsedUser = JSON.parse(user);
      setUserDetails(parsedUser);
    } catch (error) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="profilePage">
      <div className="profile">
        <h2>User Profile</h2>
        <img src="../../custom-nike-dunk-high-by-you-shoes.png" alt="profile" />
        <h4 className="orders">
          <button type="button" className="btn btn-outline-secondary">
            Track Orders
          </button>
        </h4>
        <h4>
          <button type="button" className="btn btn-outline-secondary">
            View orders
          </button>
        </h4>

        <div className="profile-details">
          <div className="details">
            <h2>Details</h2>
            <div className="mb-3 mt-4">
              <h3>Name: {userDetails.name}</h3>
            </div>
            <div className="mb-3">
              <h3>Email: {userDetails.email}</h3>
            </div>
            <div className="mb-3">
              <h3>Perfomabd</h3>
            </div>
            <div className="mb-3">
              <h3>Perfomabd</h3>
            </div>
            <div className="mb-3">
              <h3>Perfomabd</h3>
            </div>
            {/* Add other fields as needed */}
          </div>

          <div className="updates">
            <h2>Update Details</h2>
            <div className="mb-3 mt-4">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={userDetails.name}
                readOnly
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={userDetails.email}
                readOnly
              />
            </div>
            <div className="mb-3">
              <h3>
                <button type="button" className="btn btn-outline-secondary">
                  update Details
                </button>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
