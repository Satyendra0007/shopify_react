import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    const { thumbnail, title, rating, brand, description, price, stock ,images} = this.props.ProductDetail;
    const restore = this.props.restore;
    return (
      <div>

        <div className="continer" id="showdetail">
          <button type="button" className=" me-2 mt-2 btn btn-outline-dark btn-sm float-end" onClick={restore}>x</button>
          <div className="container my-4 d-flex justify-content-center">
            <div className="card mb-3" style={{ maxWidth: "850px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img id="img01" src={thumbnail} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-8">
                  <div id="info" className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <span className="badge text-bg-success">{rating}</span>
                    <p className="card-text fs-5">Rs : {price}</p>
                    <p className="card-text text-success">{stock}</p>
                    <p className="card-text">{brand}</p>
                    <p className="card-text">{description}</p>
                    <button type="button" className="btn btn-success me-2"> Buy Now </button>
                    <button type="button" className="btn btn-outline-warning">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="true">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img id="img1" src={images[0]} className="d-block w-100" style={{height: "80vh"}} alt="..." />
              </div>
              <div className="carousel-item">
                <img id="img2" src={images[1]} className="d-block w-100 " style={{height: "80vh"}} alt="..." />
              </div>
              <div className="carousel-item">
                <img id="img3" src={images[2]} className="d-block w-100" style={{height: "80vh"}} alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
