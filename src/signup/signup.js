import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/bootstrap.css"
import './signup.css';

const Signup = () => {
  return (
    <div className="page-content my-0 py-0">
    <div className="card bg-5 card-fixed">
      <div className="card-center mx-3 px-4 py-4 bg-white rounded-m">
        <h1 className="font-30 font-800 mb-0">PayApp</h1>
        <p>Login to your Account.</p>
        <div className="form-custom form-label form-border form-icon mb-3 bg-transparent">
          <i className="bi bi-person-circle font-13"></i>
          <input type="text" className="form-control rounded-xs" id="c1" placeholder="Username" />
          <label htmlFor="c1" className="color-theme">Username</label>
          <span >(required)</span>
        </div>
        <div className="form-custom form-label form-border form-icon mb-4 bg-transparent">  
          <i className="bi bi-asterisk font-13"></i>
          <input type="password" className="form-control rounded-xs" id="c2" placeholder="Password" />
          <label htmlFor="c2" className="color-theme">Password</label>
          <span>(required)</span>
        </div>
        <div className="form-check form-check-custom">
          <input className="form-check-input" type="checkbox" name="type" value="" id="c2a" />
          <label className="form-check-label font-12" htmlFor="c2a">Remember this account</label>
          <i className="is-checked color-highlight font-13 bi bi-check-circle-fill"></i>
          <i className="is-unchecked color-highlight font-13 bi bi-circle"></i>
        </div>
        <a href="index.html" className="btn btn-full gradient-highlight shadow-bg shadow-bg-s mt-4">SIGN IN</a>
        <div className="row">
          <div className="col-6 text-start">
            <a href="page-forgot-1.html" className="font-11 color-theme opacity-40 pt-4 d-block">Forgot Password?</a>
          </div>
          <div className="col-6 text-end">
            <a href="page-signup-1.html" className="font-11 color-theme opacity-40 pt-4 d-block">Create Account</a>
          </div>
        </div>
      </div>
      <div className="card-overlay rounded-0 m-0 bg-black opacity-70"></div>
    </div>
  </div>
  )
}

export default Signup;
