import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light text-bold fs-4" href="">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <a
                className="nav-link actve text-light text-bold fs-4"
                aria-current="page"
                href=""
              >
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link text-light text-bold fs-4" to="/about">
                About
              </Link>
            </li> */}
          </ul>
          <div className="form-check form-switch me-4">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={props.toggleMode}
              />
              <label className="form-check-label text-light" htmlFor="flexSwitchCheckChecked">
                Enable dark mode
              </label>
            </div>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2 fs-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success text-light text-bold fs-5"
              type="submit"
            >
              Search
            </button>
          
          </form> */}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set title here",
};
export default Navbar;
