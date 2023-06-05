import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <form className="row g-3 my-5">
            <div className="col-md-6">
              <label htmlFor="firstname" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastname" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastname" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
              <label htmlFor="houseno" className="form-label">House No.</label>
              <input type="text" className="form-control" id="houseno" placeholder="Street No., House No." />
            </div>
            <div className="col-12">
              <label htmlFor="coloni" className="form-label">Colony</label>
              <input type="text" className="form-control" id="coloni" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select">
                <option defaultValue >Choose...</option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jharkhand</option>
                <option>Kerala</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttarakhand</option>
                <option>Uttar Pradesh</option>
                <option>West Bengal</option>

              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Say Something</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">
                  Save Addrees
                </label>
              </div>
            </div>
            <div className="col-12">
              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-outline-info" type="button">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
