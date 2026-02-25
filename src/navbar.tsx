import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo.jpg";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-light ">
      <div className="container-fluid p-2 m-2">
        <div className="ms-5">
        <img src={Logo} alt="logo" className="img-fluid rounded-circle" style={{width:"100px"}}></img>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link p-3 fs-5 text-black">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link p-3 fs-5 text-black">About</Link>
          </li>

        
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle p-3 fs-5 text-black"
              id="referenceDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Reference
            </button>
            <ul className="dropdown-menu" aria-labelledby="referenceDropdown">
              <li><Link to="/reference/docs" className="dropdown-item">Docs</Link></li>
              <li><Link to="/reference/tutorials" className="dropdown-item">Tutorials</Link></li>
              <li><Link to="/reference/api" className="dropdown-item">API</Link></li>
              <li><Link to="/reference/fe" className="dropdown-item">Frontend Roadmap</Link></li>
              <li><Link to="/reference/be" className="dropdown-item">Backend Roadmap</Link></li>
              <li><Link to="/reference/db" className="dropdown-item">Database Material</Link></li>
            </ul>
          </li>
           <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle p-3 fs-5 text-black"
              id="referenceDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false" >
              Tutorial
            </button>
            <ul className="dropdown-menu" aria-labelledby="referenceDropdown">
              <li><Link to="/reference/docs" className="dropdown-item">HTML & CSS</Link></li>
              <li><Link to="/reference/tutorials" className="dropdown-item">Javascript</Link></li>
              <li><Link to="/reference/api" className="dropdown-item">React JS</Link></li>
              <li><Link to="/reference/fe" className="dropdown-item">Angular JS</Link></li>
              <li><Link to="/reference/be" className="dropdown-item">Web building</Link></li>
              <li><Link to="/reference/db" className="dropdown-item">Workshop</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle p-3 fs-5 text-black"
              id="referenceDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false" >
              Exercise
            </button>
            <ul className="dropdown-menu" aria-labelledby="referenceDropdown">
              <li><Link to="/reference/docs" className="dropdown-item">Data Analyst</Link></li>
              <li><Link to="/reference/tutorials" className="dropdown-item">Python</Link></li>
              <li><Link to="/reference/api" className="dropdown-item">Django</Link></li>
              <li><Link to="/reference/fe" className="dropdown-item">DSA</Link></li>
              <li><Link to="/reference/be" className="dropdown-item">Bootstrap 5</Link></li>
              <li><Link to="/reference/db" className="dropdown-item">MongoDB</Link></li>
            </ul>
          </li>
        <li className="nav-item m-3">
          <div className="input-group">
          <input type="text" name="text" placeholder="search here..." className="form-control rounded-lg"  />
          <span className="input-group-text bg-white rounded-lg cursor-pointer">🔍</span>
          </div>
        </li>
        <li className="nav-item m-3">
          <button className="btn rounded-pill bg-black text-white">Login</button>
        </li>
        <li className="nav-item m-3 ">
          <button className="btn border-0 fs-5 ">🔔 </button>
        </li>
        
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
