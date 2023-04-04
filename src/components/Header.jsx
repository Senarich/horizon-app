import React from "react";

function Header() {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <img
            className="img-fluid logo"
            src="images/new_real_estate_logo_design_generated.jpg"
            alt="logo"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Traces Real Estate.
                </a>
              </li>
            </ul>
            <span>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    About Us
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
