import React from 'react'
import { Link } from 'react-router-dom';
import "./payments.css"

const Payment = () => {
  return (
    <div className='payment-page'>
  <div id="footer-bar" className="footer-bar-1 footer-bar-detached">
    <Link to="/documents">
        <i className="bi bi-wallet2"></i>
        <span>Cards</span>
    </Link>
    <a href="page-activity.html"><i className="bi bi-graph-up"></i><span>Activity</span></a>
    <Link to="/" className="circle-nav-2">
        <i className="bi bi-house-fill"></i>
        <span>Home</span>
    </Link>
    <Link to="/payments" className="circle-nav-2">
        <i className="bi bi-receipt"></i>
        <span>Payments</span>
    </Link>
    <a href="#" data-bs-toggle="offcanvas" data-bs-target="#menu-sidebar">
        <i className="bi bi-three-dots"></i><span>More</span>
    </a>
</div>

{/* ----------------------------footer------------------------------------------------------------------------------------------------- */}

<div class="pt-3">
            <div class="page-title d-flex">
                <div class="align-self-center me-auto header">
                    <p class="color-highlight">Hello Enabled</p>
                    <h1 class="color-theme">Payments</h1>
                </div>
                <div class="align-self-center ms-auto header-icon">
                    <a href="#"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#menu-notifications"
                    class="icon gradient-blue color-white shadow-bg shadow-bg-xs rounded-m">
                           <em class="badge bg-red-dark color-white scale-box">3</em>
                        <i class="bi bi-bell-fill font-17 bell-icon"></i>
                     
                    </a>
                    <a href="#"
                    data-bs-toggle="dropdown"
                    class="icon gradient-blue shadow-bg shadow-bg-s rounded-m">
                        <img src="images/pictures/25s.jpg" width="45" class="rounded-m" alt="img"/>
                    </a>
                    
                    <div class="dropdown-menu">
                        <div class="card card-style shadow-m mt-1 me-1">
                            <div class="list-group list-custom list-group-s list-group-flush rounded-xs px-3 py-1">
                                <a href="page-wallet.html" class="list-group-item">
                                    <i class="has-bg gradient-green shadow-bg shadow-bg-xs color-white rounded-xs bi bi-credit-card"></i>
                                    <strong class="font-13">Wallet</strong>
                                </a>
                                <a href="page-activity.html" class="list-group-item">
                                    <i class="has-bg gradient-blue shadow-bg shadow-bg-xs color-white rounded-xs bi bi-graph-up"></i>
                                    <strong class="font-13">Activity</strong>
                                </a>
                                <a href="page-profile.html" class="list-group-item">
                                    <i class="has-bg gradient-yellow shadow-bg shadow-bg-xs color-white rounded-xs bi bi-person-circle"></i>
                                    <strong class="font-13">Account</strong>
                                </a>
                                <a href="page-signin-1.html" class="list-group-item">
                                    <i class="has-bg gradient-red shadow-bg shadow-bg-xs color-white rounded-xs bi bi-power"></i>
                                    <strong class="font-13">Log Out</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<div class="row text-center payments">
    <div class="col-6 mb-n2">
        <a href="page-payment-exchange.html" class="card card-style me-0" style={{height:"180px"}}>
            <div class="card-center">
                <span class="icon icon-xl rounded-m gradient-green shadow-bg shadow-bg-xs"><i class="bi bi-arrow-clockwise font-24 color-white transcation-icon"></i></span>
                <h1 class="font-22 pt-3">Exchange</h1>
            </div>
            <div class="card-bottom">
                <p class="font-11 mb-0 opacity-70">Convert Currency</p>
            </div>
        </a>
    </div>
    <div class="col-6 mb-n2">
        <a href="page-payment-bill.html" class="card card-style ms-0" style={{height:"180px"}}>
            <div class="card-center">
                <span class="icon icon-xl rounded-m gradient-orange shadow-bg shadow-bg-xs"><i class="bi bi-receipt font-24 color-white transcation-icon"></i></span>
                <h1 class="font-22 pt-3">Pay a Bill</h1>
            </div>
            <div class="card-bottom">
                <p class="font-11 mb-0 opacity-70">Bills and Invoices</p>
            </div>
        </a>
    </div>
    <div class="col-6 mb-n2">
        <a href="page-payment-request.html" class="card card-style me-0" style={{height:"180px"}}>
            <div class="card-center">
                <span class="icon icon-xl rounded-m gradient-yellow shadow-bg shadow-bg-xs"><i class="bi bi-arrow-down-circle font-24 color-white transcation-icon"></i></span>
                <h1 class="font-22 pt-3">Request</h1>
            </div>
            <div class="card-bottom">
                <p class="font-11 mb-0 opacity-70">Request or Deposit</p>
            </div>
        </a>
    </div>
    <div class="col-6 mb-n2">
        <a href="page-payment-transfer.html" class="card card-style ms-0" style={{height:"180px"}}>
            <div class="card-center">
                <span class="icon icon-xl rounded-m gradient-blue shadow-bg shadow-bg-xs"><i class="bi bi-arrow-up-circle font-24 color-white transcation-icon"></i></span>
                <h1 class="font-22 pt-3">Transfer</h1>
            </div>
            <div class="card-bottom">
                <p class="font-11 mb-0 opacity-70">Move and Send</p>
            </div>
        </a>
    </div>
    <div class="col-12 mb-n2 text-start">
        <a href="page-payment-search.html" class="default-link card card-style search" style={{height:"100px"}}>
            <div class="card-center px-4">
                <div class="d-flex">
                    <div class="align-self-center">
                        <span class="icon icon-m rounded-s gradient-teal shadow-bg shadow-bg-xs"><i class="bi bi-search font-20 color-white search-icon"></i></span>
                    </div>
                    <div class="align-self-center ps-3 ms-1">
                        <h1 class="font-20 mb-n1">Search</h1>
                        <p class="mb-0 font-12 opacity-70">Filter your Transactions.</p>
                    </div>
                    <div class="align-self-center ms-auto">
                        <span class="badge bg-red-dark line-height-xs font-9 rounded-xl">NEW</span>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="col-12 mb-n2 text-start">
        <a href="page-reports.html" class="default-link card card-style account" style={{height:"100px"}}>
            <div class="card-center px-4">
                <div class="d-flex">
                    <div class="align-self-center">
                        <span class="icon icon-m rounded-s gradient-brown shadow-bg shadow-bg-xs"><i class="bi bi-bar-chart font-20 color-white account-icon"></i></span>
                    </div>
                    <div class="align-self-center ps-3 ms-1">
                        <h1 class="font-20 mb-n1">Account Reports</h1>
                        <p class="mb-0 font-12 opacity-70">See your Payment Statistics.</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
</div>


</div>



   
   
   
   
   
   
   
   
   

  )
}

export default Payment
