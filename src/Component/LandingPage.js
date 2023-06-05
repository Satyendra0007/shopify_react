import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/1.jpg" className="d-block w-100" style={{ height: "60vh" }} alt="shopImg" />
            </div>
            <div className="carousel-item">
              <img src="images/2 .jpg" className="d-block w-100" style={{ height: "60vh" }} alt="shopImg" />
            </div>
            <div className="carousel-item">
              <img src="images/3.jpg" className="d-block w-100" style={{ height: "60vh" }} alt="shopImg" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div id="liveAlertPlaceholder"></div>

        <div className="container my-5 ">
          <div className="row featurette">
            <div className="col-md-7">
              <h4 className="featurette-heading fw-normal lh-1">Get the best deal on accessories</h4>
              <p className="lead fs-6">Get the great discount up to 70% on accessories .</p>
              <Link to="/product">
                <button type="button" className="btn btn-outline-success">Start Exploring</button>
              </Link>
            </div>
            <div className="col-md-5">
              <img src="images/accessories.jpg" className="mx-auto my-2 img-fluid" alt="shopImg" />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h4 className="featurette-heading fw-normal lh-1">Get the latest fashion collection</h4>
              <p className="lead fs-6 ">What you wear is how you present yourself to the world, especially today, when
                human contacts are so quick. Fashion is instant language .</p>
              <Link to="/product">
                <button type="button" className="btn btn-outline-danger">Strat Exploring</button>
              </Link>
            </div>
            <div className="col-md-5 order-md-1">
              <img src="images/cloths.jpg" className="mx-auto my-2  img-fluid" alt="shopImg" />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h4 className="featurette-heading fw-normal lh-1">Now shop for the smart one</h4>
              <p className="lead fs-6">And yes, this is the last block of representative placeholder content. Again, not
                really
                intended to be actually read, simply here to give you a better view of what this would look like
                with some actual content. Your content.</p>
              <Link to="/product">
                <button type="button" className="btn btn-outline-info">Strat
                  Exploring</button>
              </Link>
            </div>
            <div className="col-md-5">
              <img src="images/phone.jpg" className="mx-auto img-fluid my-2 " alt="shoppingImage" />
            </div>
          </div>

          <hr className="featurette-divider" />

        </div>
      </>
    )
  }
}
