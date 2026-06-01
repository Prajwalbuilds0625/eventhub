import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          EventHub
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-outline-light ms-2" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-warning ms-2" to="/register">
                Register
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;