const { Link } = require("react-router-dom");

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand logo" href="#">Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='#about'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/shop">Shop</Link>
        </li>
        {isLoggedIn ? (
          <>
            <><button className="nav-link" onClick={handleLogout}>Logout</button></>
            <li className="nav-item"><Link className="nav-link" to={'/profile'}>Profile</Link></li>
          </>
        ) : (
          <>
            <li className="nav-tem">
              <Link className="nav-link" to={"/login"}>login</Link>
            </li>
            <li className="nav-item">sign up</li>
          </>
        )}
      </ul>
    </div>
  </div>
</nav>