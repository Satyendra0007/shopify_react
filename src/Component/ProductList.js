import React, { Component } from "react";
import Product from "./Product";
import Spinner from "./Spinner";
import Detail from "./Detail";

export default class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      SpinnerFlag: true,
      showDetailFlag: false,
      ProductDetail: {}
    }
  }

  componentDidMount() {
    fetch('https://dummyjson.com/products/')
      .then((response) => {
        return response.json()
      }).then((result) => {
        this.setState({
          data: result.products,
          SpinnerFlag: false
        })
      })
  }

  showDetail = (element) => {
    this.setState({
      ProductDetail: element,
      showDetailFlag: true
    })
  }

  restore = () => {
    this.setState({
      showDetailFlag: false

    })
  }

  render() {
    return (
      <>
        <div className="container  d-flex justify-content-center">
          {this.state.SpinnerFlag && <Spinner />}
        </div>

        {!this.state.showDetailFlag && <div id="productList" className="container  my-4 d-flex flex-wrap justify-content-center">
          {this.state.data.map((element) => {
            return <Product key={element.id} thumbnail={element.thumbnail} title={element.title} rating={element.rating} brand={element.brand} description={element.description} price={element.price} stock={element.stock} showDetail={() => this.showDetail(element)} />
          })}
        </div>}

        {this.state.showDetailFlag && <Detail ProductDetail={this.state.ProductDetail} restore={this.restore} />}
      </>
    );
  }
}