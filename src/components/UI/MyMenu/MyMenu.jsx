import React from "react";
import Logo from "../../../images/icons8-english-50.png";
import { Link } from "react-router-dom";
const MyMenu = () => {
  return (
    <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <div class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src={Logo} alt="Logo" />
        <h1 className="px-3 navbar-brand"><h1>English</h1></h1>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link className="nav-link px-2 link-secondary" to = "/">Main page</Link></li>
        <li><Link className="nav-link px-2 link-dark">Home</Link></li>
        <li><Link className="nav-link px-2 link-dark" to = "/courses">Courses</Link></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>
  );
};

export default MyMenu;
