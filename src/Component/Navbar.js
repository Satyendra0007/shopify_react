import React, { Component } from "react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark-subtle text-emphasis-dark sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="images/logo.png" alt="" width="40" height="30" className="d-inline-block align-text-top" />
              Shopify
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/productlist">Explore</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              <button type="button" className="btn btn-danger my-1 mx-2" data-bs-toggle="modal"
                data-bs-target="#loginModal">login</button>
              <button type="button" className="btn btn-danger my-1" data-bs-toggle="modal"
                data-bs-target="#signupModal" >Signup</button>
            </div>
          </div>
        </nav>

        <LoginModal />
        <SignupModal />
      </>

    );
  }
}
