import React from 'react'
import "../sidebar/sidebar.scss";
import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
    <div>

       <div className="menu-size" style={{ width: '240px' }}>
            <div className="pt-3">
                 <div className="page-title sidebar-title d-flex side-header">
        <div className="align-self-center me-auto ">
            <p className="color-highlight header-welcome">Welcome Back</p>
            <h1 className='header-welcome'>Enabled</h1>
        </div>
        <div className="align-self-center ms-auto">
            <a href="#" data-bs-toggle="dropdown" className="icon gradient-blue shadow-bg shadow-bg-s rounded-m">
                <img src="images/pictures/25s.jpg" width="45" className="rounded-m" alt="img" />
            </a>
            <div className="dropdown-menu">
                <div className="card card-style shadow-m mt-1 me-1">
                    <div className="list-group list-custom list-group-s list-group-flush rounded-xs px-3 py-1">
                        <a href="page-wallet.html" className="list-group-item">
                            <i className="has-bg gradient-green shadow-bg shadow-bg-xs color-white rounded-xs bi bi-credit-card"></i>
                            <strong className="font-13">Wallet</strong>
                        </a>
                        <a href="page-activity.html" className="list-group-item">
                            <i className="has-bg gradient-blue shadow-bg shadow-bg-xs color-white rounded-xs bi bi-graph-up"></i>
                            <strong className="font-13">Activity</strong>
                        </a>
                        <a href="page-profile.html" className="list-group-item">
                            <i className="has-bg gradient-yellow shadow-bg shadow-bg-xs color-white rounded-xs bi bi-person-circle"></i>
                            <strong className="font-13">Account</strong>
                        </a>
                        <a href="page-signin-1.html" className="list-group-item">
                            <i className="has-bg gradient-red shadow-bg shadow-bg-xs color-white rounded-xs bi bi-power"></i>
                            <strong className="font-13">Log Out</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

                <div className="divider divider-margins mb-3 opacity-50"></div>

                <div class="list-group list-custom list-menu-large">
            <a href="index-waves.html" id="nav-welcome" class="list-group-item ">
                <i class="bi bg-red-dark shadow-bg shadow-bg-xs bi-heart-fill all-icon"></i>
                <div className='all-heading'>Dashboard</div>
                <i class="bi bi-chevron-right"></i>
            </a>
            <Link to="/documents" id="nav-pages" className="list-group-item">
      <i className="bi bg-green-dark shadow-bg shadow-bg-xs bi-star-fill all-icon"></i>
      <div className='all-heading'>Documents Upload</div>
      <i className="bi bi-chevron-right"></i>
    </Link>
    <Link to="/payments" id="nav-pages" className="list-group-item">
      <i className="bi bg-green-dark shadow-bg shadow-bg-xs bi-star-fill all-icon"></i>
      <div className='all-heading'>Payments </div>
      <i className="bi bi-chevron-right"></i>
    </Link>
            {/* <div class="list-submenu" id="sub1">
                <a href="index-waves.html" id="nav-waves" class="list-group-item">
                    <div class="ps-4">Waves</div>
                    <i class="bi bi-chevron-right"></i>
                </a>
                <a href="index.html" id="nav-classic" class="list-group-item">
                    <div class="ps-4">Classic</div>
                    <i class="bi bi-chevron-right"></i>
                </a>
            </div>
            <a href="components.html" id="nav-comps" class="list-group-item">
                <i class="bi bg-brown-dark shadow-bg shadow-bg-xs bi-gear-wide-connected all-icon"></i>
                <div className='all-heading'>Components</div>
                <i class="bi bi-chevron-right"></i>
            </a> */}
			<a data-bs-toggle="offcanvas" data-bs-target="#menu-highlights" href="#" class="list-group-item">
				<i class="bi bg-magenta-dark shadow-bg shadow-bg-xs bi-droplet all-icon"></i>
				<div className='all-heading'>Color Theme</div>
				<i class="bi bi-chevron-right"></i>
			</a>
            <a data-bs-toggle="offcanvas" data-bs-target="#menu-highlights" href="#" class="list-group-item">
				<i class="bi bg-yellow-dark shadow-bg shadow-bg-xs bi-lightbulb-fill all-icon"></i>
				<div className='all-heading'>Dark Mode</div>
                <div class="form-switch ios-switch switch-green switch-s me-2">
                    <input type="checkbox" data-toggle-theme class="ios-input" id="switch-1"/>
                    <label class="custom-control-label  switch" for="switch-1"></label>
                </div>
			</a>

            
        </div>


                <div className="divider divider-margins mb-3 opacity-50"></div>

                <div className="content pt-1">
    <div className="d-flex text-center whole-left" style={{width:"200px" ,marginLeft:"-20px"}}>
        <div className="me-auto">
            <a href="page-payment-transfer.html" className="icon icon-s rounded-s gradient-red shadow-bg shadow-bg-xs">
                <i className="font-16 color-white bi bi-arrow-up mobile-margin-left"></i>
            </a>
            <h6 className="font-11 font-400 opacity-70 mb-n1 pt-2">Transfer</h6>
        </div>
        <div className="m-auto">
            <a href="page-payment-request.html" className="icon icon-s rounded-s gradient-green shadow-bg shadow-bg-xs">
                <i className="font-16 color-white bi bi-arrow-down mobile-margin-left"></i>
            </a>
            <h6 className="font-11 font-400 opacity-70 mb-n1 pt-2">Request</h6>
        </div>
        <div className="ms-auto">
            <a href="page-payment-exchange.html" className="icon icon-s rounded-s gradient-blue shadow-bg shadow-bg-xs">
                <i className="font-16 color-white bi bi-arrow-left-right mobile-margin-left"></i>
            </a>
            <h6 className="font-11 font-400 opacity-70 mb-n1 pt-2">Exchange</h6>
        </div>
    </div>
</div>


                <div className="divider divider-margins opacity-50"></div>

                <h6 className="opacity-40 px-3 mt-n2 mb-0">Useful Links</h6>
                <div className="list-group list-custom list-menu-small" style={{marginLeft:"20px" ,marginLeft:"-10px"}}>
                    <a href="tel:+1 234 567 8091" className="list-group-item default-link">
                        <i className="bi bi-arrow-up-circle-fill opacity-20 font-16"></i>
                        <div>Support</div>
                        <i className="bi bi-chevron-right footer-icon"></i>
                    </a>
                    <a href="page-profile.html" className="list-group-item">
                        <i className="bi bi-person-circle opacity-20 font-16"></i>
                        <div>Account</div>
                        <i className="bi bi-chevron-right footer-icon"></i>
                    </a>
                    <a href="page-signin-1.html" className="list-group-item">
                        <i className="bi bi-bar-chart-fill opacity-20 font-16"></i>
                        <div>Log Out</div>
                        <i className="bi bi-chevron-right footer-icon"></i>
                    </a>
                </div>

                <div className="divider divider-margins opacity-50"></div>
                <p className="px-3 font-9 opacity-30 color-theme mt-n3">Copyright <span className="copyright-year"></span>. Made with <i className="bi bi-heart-fill color-red-dark px-1"></i> by Enabled</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;
