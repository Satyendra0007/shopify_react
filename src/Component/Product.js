import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    const { thumbnail, title, rating, brand, description, price, stock, showDetail } = this.props;
    return (
      <>
          <div className="card mb-3 itemhover" role="button" style={{ maxWidth: "800px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} onClick={showDetail}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={thumbnail} className="img-fluid rounded-start h-100" alt="product" />
              </div>
              <div className="col-md-5">
                <div className="card-body mx-2">
                  <h5 className="card-title">{title}</h5>
                  <span className="badge text-bg-success">{rating} &#9734;</span>
                  <p className="card-text "> Brand {brand}</p>
                  <p className="card-text">{description}.</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-body mx-2">
                  <p className="card-text fs-5"> Rs : {price}</p>
                  <p className="card-text text-success"> In Stock : {stock}</p>

                </div>
              </div>
            </div>
          </div>
      </>
    )
  }
}
