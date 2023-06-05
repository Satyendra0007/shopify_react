import React, { Component } from 'react'

export default class SignupModal extends Component {
  render() {
    return (
      <div>
        <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className=" modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="signupModalLabel">Create Your Account</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className='row mb-3'>
                    <div className="col-md-6">
                      <label htmlFor="firstname" className="form-label">First Name</label>
                      <input type="text" className="form-control" id="firstname" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastname" className="form-label">Last Name</label>
                      <input type="text" className="form-control" id="lastname" />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                      <input type="email" className="form-control" id="inputEmail3" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                      <input type="password" className="form-control" id="inputPassword3" autoComplete='Current-password' />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">Confirm Password</label>
                    <div className="col-sm-10">
                      <input type="password" className="form-control" id="inputPassword4" autoComplete='Current-password' />
                    </div>
                  </div>
                  <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                    <div className="col-sm-10">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                          value="option1" defaultChecked />
                        <label className="form-check-label" htmlFor="gridRadios1">
                          Male
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                          value="option2" />
                        <label className="form-check-label" htmlFor="gridRadios2">
                          Female
                        </label>
                      </div>
                      <div className="form-check ">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3"
                          value="option3" />
                        <label className="form-check-label" htmlFor="gridRadios3">
                          Other
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                        <label className="form-check-label" htmlFor="gridCheck1">
                          Are you Member of Shopify
                        </label>
                      </div>
                    </div>
                  </div>
                  <button type="button" className=" btn btn-outline-info">Signin</button>

                </form>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
