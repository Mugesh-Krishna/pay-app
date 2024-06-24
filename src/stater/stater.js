import React from 'react'
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import { useEffect,useRef } from 'react';

import "./stater.css";
import "../signup/signup.css"
import "../stater/footer.scss"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Sidebar from '../sidebar/sidebar';
import NotificationTop from '../topnotification/NotificationTop';
import Menutransfer from '../menu-transfer/Menutransfer';
import Requestmoney from '../request/Requestmoney';
import Exchange from '../Exchange/Exchange';


const Stater = () => {
    useEffect(() => {
        const splideElements = document.getElementsByClassName('splide');
        if (splideElements.length) {
          const singleSliders = document.querySelectorAll('.single-slider');
          if (singleSliders.length) {
            singleSliders.forEach((e) => {
              const single = new Splide('#' + e.id, {
                type: 'loop',
                autoplay: true,
                interval: 4000,
                perPage: 1,
              }).mount();
              
              const sliderNext = document.querySelectorAll('.slider-next');
              const sliderPrev = document.querySelectorAll('.slider-prev');
              
              sliderNext.forEach((el) => el.addEventListener('click', () => { single.go('>'); }));
              sliderPrev.forEach((el) => el.addEventListener('click', () => { single.go('<'); }));
            });
          }
    
          const doubleSliders = document.querySelectorAll('.double-slider');
          if (doubleSliders.length) {
            doubleSliders.forEach((e) => {
              new Splide('#' + e.id, {
                type: 'loop',
                autoplay: true,
                interval: 4000,
                arrows: false,
                perPage: 2,
              }).mount();
            });
          }
    
          const tripleSliders = document.querySelectorAll('.triple-slider');
          if (tripleSliders.length) {
            tripleSliders.forEach((e) => {
              new Splide('#' + e.id, {
                type: 'loop',
                autoplay: true,
                interval: 4000,
                arrows: false,
                perPage: 3,
                perMove: 1,
              }).mount();
            });
          }
    
          const quadSliders = document.querySelectorAll('.quad-slider');
          if (quadSliders.length) {
            quadSliders.forEach((e) => {
              new Splide('#' + e.id, {
                type: 'loop',
                autoplay: true,
                interval: 4000,
                arrows: false,
                perPage: 4,
                perMove: 1,
              }).mount();
            });
          }
        }
      }, []);
      const offCanvasBoxes = useRef([]);

  const displayOffCanvas = () => {
    // Check if the ref is valid and has elements
    if (offCanvasBoxes.current && offCanvasBoxes.current.length > 0) {
      // Loop through each element in the ref
      offCanvasBoxes.current.forEach((el) => {
        // Check if the element has a style property
        if (el && el.style) {
          // Set the display style to block
          el.style.display = "block";
        }
      });
    }
  };
  const [open, setOpen] = React.useState(false);

  const toggleDrawerSide = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 240
       }} role="presentation" onClick={toggleDrawerSide(false)}>
      <List>
        
        <ListItem disablePadding>
          <ListItemButton>
            <Sidebar/>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "100%" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
          <div class="menu-size" style={{height:"70%" ,width:"100%" ,marginTop:"-20px"}}>
    <div class="d-flex mx-3 mt-3 py-1">
        <div class="align-self-center">
            <h1 class="mb-0">Notifications</h1>
        </div>
        <div class="align-self-right ms-auto">
            <a  class="py-3 ps-4 shadow-0 me-n2"  onClick={toggleDrawer('top',false)}>
                <i class="bi bi-x color-red-dark font-26"></i>
            </a>
        </div>
    </div>
    <div class="content pb-2">
        <a href="page-activity.html" class="d-flex py-1">
            <div class="align-self-left ">
                <span class="icon rounded-s me-2 gradient-orange shadow-bg shadow-bg-xs icon"><i class="bi bi-google color-white top-icon"></i></span>
            </div>
            <div class="align-self-center ps-1">
                <h5 class="pt-1 mb-n1">Google Ads</h5>
                <p class="mb-0 font-11 opacity-70">14th March 03:14 AM</p>
            </div>
            <div class="align-self-center ms-auto text-end-top">
                <h4 class="pt-1 mb-n1 color-red-dark">$150.55</h4>
                <p class="mb-0 font-11">Bill Payment</p>
            </div>
        </a>
        <div class="divider my-2 opacity-50"></div>
        <a href="page-activity.html" class="d-flex py-1">
            <div class="align-self-left">
                <span class="icon rounded-s me-2 gradient-green shadow-bg shadow-bg-xs"><i class="bi bi-caret-up-fill color-white top-icon"></i></span>
            </div>
            <div class="align-self-center ps-1">
                <h5 class="pt-1 mb-n1">Bitcoin</h5>
                <p class="mb-0 font-11 opacity-70">14th March 10:25 AM</p>
            </div>
            <div class="align-self-center ms-auto text-end-top">
                <h4 class="pt-1 mb-n1 color-blue-dark">+0.315%</h4>
                <p class="mb-0 font-11">Stock Update</p>
            </div>
        </a>
        <div class="divider my-2 opacity-50"></div>
        <a href="page-activity.html" class="d-flex py-1">
            <div class="align-self-left">
                <span class="icon rounded-s me-2 gradient-yellow shadow-bg shadow-bg-xs"><i class="bi bi-pie-chart-fill color-white top-icon"></i></span>
            </div>
            <div class="align-self-center ps-1">
                <h5 class="pt-1 mb-n1">Dividends</h5>
                <p class="mb-0 font-11 opacity-70 last-date">14th March 11:30 AM</p>
            </div>
            <div class="align-self-center ms-auto text-end-top">
                <span class="btn btn-xxs bg-green-dark shadow-bg shadow-bg-xs">Details</span>
            </div>
        </a>
    </div>
    <a href="page-activity.html" class="mx-3 btn btn-full gradient-highlight shadow-bg shadow-bg-s">View All Notifications</a>
</div>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  const [transfer, setTransfer] = React.useState({
    
    bottom: false,
  
  });

  const toggleDrawerTransfer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setTransfer({ ...transfer, [anchor]: open });
  };

  const listTransfer = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 280 }}
      role="presentation"
     
      onKeyDown={toggleDrawerTransfer(anchor, false)}
    >
      <List>
      
          <ListItem disablePadding>
            <ListItemButton>
               <Menutransfer/>
            </ListItemButton>
          </ListItem>
      
      </List>
     
    </Box>
  );
    const [request, setRequest] = React.useState({
    
    bottom: false,
  
  });

  const toggleDrawerRequest = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setRequest({ ...request, [anchor]: open });
  };

  const listRequest = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
     
      onKeyDown={toggleDrawerTransfer(anchor, false)}
    >
      <List>
      
          <ListItem disablePadding>
            <ListItemButton>
               <Requestmoney/>
            </ListItemButton>
          </ListItem>
      
      </List>
     
    </Box>
  );
  const [exchange, setExchange] = React.useState({
    
    bottom: false,
  
  });

  const toggleDrawerExchange = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setExchange({ ...exchange, [anchor]: open });
  };

  const listExchange = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
     
      onKeyDown={toggleDrawerExchange(anchor, false)}
    >
      <List>
      
          <ListItem disablePadding>
            <ListItemButton>
               <Exchange/>
            </ListItemButton>
          </ListItem>
      
      </List>
     
    </Box>
  );

  return (
<div >

<div id="footer-bar" className="footer-bar-1 footer-bar-detached">
    <Link to="/documents">
        <i className="bi bi-wallet2"></i>
        <span>Cards</span>
    </Link>
    <Link to="/managing" className="circle-nav-2">
    <i className="bi bi-graph-up"></i>
        <span>Activity</span>
    </Link>
    <Link to="/" className="circle-nav-2">
        <i className="bi bi-house-fill"></i>
        <span>Home</span>
    </Link>
    <Link to="/cashback" className="circle-nav-2">
        <i className="bi bi-receipt"></i>
        <span>Payments</span>
    </Link>
    <a  data-bs-target="#menu-sidebar" onClick={toggleDrawerSide(true)}>
        <i className="bi bi-three-dots"></i><span>More</span>
    </a>
    <Drawer open={open} onClose={toggleDrawerSide(false)}>
        {DrawerList}
      </Drawer>
</div>

<div className="page-content footer-clear all-content">

    <div className="pt-3">
        <div className="page-title d-flex">
        <div class="align-self-center me-auto welcome-header">
    <p class="color-white opacity-80 header-date">May 24, 2024</p>
    <h1 class="color-white">Welcome</h1>
   </div>

            <div className="align-self-center ms-auto">
            <div
        className="offcanvas"
        ref={(el) => (offCanvasBoxes.current[0] = el)}
        id="menu-notifications"
      
      >
         <h5 className='font-16 px-4 py-4 mb-0'>
      Please use a Local Server such as AMPPS or WAMP to see externally loaded menus or put  files on your server. <br/>
      To load menus from inside your HTML you must remove the data-menu-load=`your-menu.html` and copy what is inside your-menu.html in this div. <br/>
      Using external menus, editing a single menu will show in all pages. <br/><br/>
      For more information please read the Documentation -&gt; Menu Chapter.
    </h5>
      </div>
        <div className='header-notification'>
           <a href="#" data-bs-toggle="offcanvas" data-bs-target="#menu-highlights" class="icon bg-white color-theme rounded-m shadow-xl first-header">
                        <i class="bi bi-palette-fill color-black font-16 notification-icon"></i>
                    </a>
                    <a  onClick={toggleDrawer('top', true)} class="icon bg-white color-theme rounded-m shadow-xl">
                    <em class="badge bg-red-light color-white scale-box">3</em>
                        <i class="bi bi-bell-fill color-black font-17 notification-icon"></i>
                       
                    </a>
                    <Drawer
        anchor={'top'}
        open={state['top']}
        onClose={toggleDrawer('top', false)}
      >
        {list('top')}
      </Drawer>
                <a href="#"
                data-bs-toggle="dropdown"
                className="icon gradient-blue shadow-bg shadow-bg-s rounded-m">
                    <img src="images/pictures/25s.jpg" width="45" className="rounded-m" alt="img"/>
                </a>
                
            
                <div className="dropdown-menu">
                    <div className="card card-style1 shadow-m mt-1 me-1 dropdown-list">
                        <div className="list-group list-custom list-group-s list-group-flush rounded-xs px-3 py-1 ">
                            <a href="page-wallet.html" className="list-group-item shortcut-icon">
                                <i className="has-bg gradient-green shadow-bg shadow-bg-xs color-white rounded-xs bi bi-credit-card dropdown-icon"></i>
                                <strong className="font-13 wallet">Wallet</strong>
                            </a>
                            <a href="page-activity.html" className="list-group-item shortcut-icon">
                                <i className="has-bg gradient-blue shadow-bg shadow-bg-xs color-white rounded-xs bi bi-graph-up"></i>
                                <strong className="font-13 wallet">Activity</strong>
                            </a>
                            <a href="page-profile.html" className="list-group-item shortcut-icon">
                                <i className="has-bg gradient-yellow shadow-bg shadow-bg-xs color-white rounded-xs bi bi-person-circle"></i>
                                <strong className="font-13 wallet">Account</strong>
                            </a>
                            <a href="page-signin-1.html" className="list-group-item shortcut-icon">
                                <i className="has-bg gradient-red shadow-bg shadow-bg-xs color-white rounded-xs bi bi-power"></i>
                                <strong className="font-13 wallet">Log Out</strong>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
        <svg id="header-deco" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150" style={{position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
            <path id="header-deco-1" d="M 0,600 C 0,600 0,120 0,120 C 92.36363636363635,133.79904306220095 184.7272727272727,147.59808612440193 287,148 C 389.2727272727273,148.40191387559807 501.4545454545455,135.40669856459328 592,129 C 682.5454545454545,122.5933014354067 751.4545454545455,122.77511961722489 848,115 C 944.5454545454545,107.22488038277511 1068.7272727272727,91.49282296650718 1172,91 C 1275.2727272727273,90.50717703349282 1357.6363636363635,105.25358851674642 1440,120 C 1440,120 1440,600 1440,600 Z"></path>
            <path id="header-deco-2" d="M 0,600 C 0,600 0,240 0,240 C 98.97607655502392,258.2105263157895 197.95215311004785,276.4210526315789 278,282 C 358.04784688995215,287.5789473684211 419.16746411483257,280.5263157894737 524,265 C 628.8325358851674,249.4736842105263 777.377990430622,225.47368421052633 888,211 C 998.622009569378,196.52631578947367 1071.3205741626793,191.57894736842107 1157,198 C 1242.6794258373207,204.42105263157893 1341.3397129186603,222.21052631578948 1440,240 C 1440,240 1440,600 1440,600 Z"></path>
            <path id="header-deco-3" d="M 0,600 C 0,600 0,360 0,360 C 65.43540669856458,339.55023923444975 130.87081339712915,319.1004784688995 245,321 C 359.12918660287085,322.8995215311005 521.9521531100479,347.1483253588517 616,352 C 710.0478468899521,356.8516746411483 735.3205741626795,342.3062200956938 822,333 C 908.6794258373205,323.6937799043062 1056.7655502392345,319.62679425837325 1170,325 C 1283.2344497607655,330.37320574162675 1361.6172248803828,345.1866028708134 1440,360 C 1440,360 1440,600 1440,600 Z"></path>
            <path id="header-deco-4" d="M 0,600 C 0,600 0,480 0,480 C 70.90909090909093,494.91866028708137 141.81818181818187,509.8373205741627 239,499 C 336.18181818181813,488.1626794258373 459.6363636363636,451.5693779904306 567,446 C 674.3636363636364,440.4306220095694 765.6363636363636,465.88516746411483 862,465 C 958.3636363636364,464.11483253588517 1059.8181818181818,436.8899521531101 1157,435 C 1254.1818181818182,433.1100478468899 1347.090909090909,456.555023923445 1440,480 C 1440,480 1440,600 1440,600 Z"></path>
        </svg>
     
             <div class="splide single-slider slider-no-dots slider-no-arrows slider-visible" id="single-slider-1">
            <div class="splide__track total-card">
                <div class="splide__list ">
                    <div class="splide__slide card-width">
                        <div class="card card-style m-0 bg-5 shadow-card shadow-card-m" style={{height:"200px"}}>
                            <div class="card-top p-3">
                                <a href="#" data-bs-toggle="offcanvas" data-bs-target="#menu-card-more" class="icon icon-xxs bg-white color-black float-end"><i class="bi bi-three-dots font-18 card-icon"></i></a>
                            </div>
                            <div class="card-center">
                               <div class="bg-white px-3 py-2 rounded-end d-inline-block"> 
                                  <h1 class="font-13 my-n1">
                                    <a class="color-theme" data-bs-toggle="collapse" href="#balance3" aria-controls="balance2">Click for Balance</a>
                                   </h1>
                                 <div class="collapse" id="balance3"><h2 class="color-theme font-26">$26,315</h2></div>
                                </div>
                              </div>

                            <strong class="card-top no-click font-12 p-3 color-white font-monospace">Main Account</strong>
                            <strong class="card-bottom no-click p-3 font-12 text-start color-white font-monospace">1234 5678 1234 5661</strong>
                            <strong class="card-bottom no-click p-3 font-12 text-end color-white font-monospace">08 / 25</strong>
                            <div class="card-overlay bg-black opacity-50"></div>
                        </div>
                    </div>
                    <div class="splide__slide card-width">
                        <div class="card card-style m-0 bg-9 shadow-card shadow-card-m" style={{height:"200px"}}>
                            <div class="card-top p-3">
                                <a href="#" data-bs-toggle="offcanvas" data-bs-target="#menu-card-more" class="icon icon-xxs bg-white color-black float-end"><i class="bi bi-three-dots font-18  card-icon"></i></a>
                            </div>
                            <div class="card-center">
                                <div class="bg-white px-3 py-2 rounded-end d-inline-block">
                                    <h1 class="font-13 my-n1">
                                        <a class="color-theme" data-bs-toggle="collapse" href="#balance1" aria-controls="balance1">Click for Balance</a>
                                    </h1>
                                    <div class="collapse" id="balance1"><h2 class="color-theme font-26">$65,500</h2></div>
                                </div>
                            </div>
                            <strong class="card-top no-click font-12 p-3 color-white font-monospace">Company Account</strong>
                            <strong class="card-bottom no-click p-3 font-12 text-start color-white font-monospace">1234 5678 1234 5661</strong>
                            <strong class="card-bottom no-click p-3 font-12 text-end color-white font-monospace">08 / 25</strong>
                            <div class="card-overlay bg-black opacity-50"></div>
                        </div>
                    </div>
                    <div class="splide__slide card-width">
                        <div class="card card-style m-0 bg-7 shadow-card shadow-card-m" style={{height:"200px"}}>
                            <div class="card-top p-3">
                                <a href="#" data-bs-toggle="offcanvas" data-bs-target="#menu-card-more" class="icon icon-xxs bg-white color-black float-end"><i class="bi bi-three-dots font-18  card-icon"></i></a>
                            </div>
                            <div class="card-center">
                                <div class="bg-white px-3 py-2 rounded-end d-inline-block">
                                    <h1 class="font-13 my-n1">
                                        <a class="color-theme" data-bs-toggle="collapse" href="#balance2" aria-controls="balance2">Click for Balance</a>
                                    </h1>
                                    <div class="collapse" id="balance2"><h2 class="color-theme font-26">$15,100</h2></div>
                                </div>
                            </div>
                            <strong class="card-top no-click font-12 p-3 color-white font-monospace">Savings Account</strong>
                            <strong class="card-bottom no-click p-3 font-12 text-start color-white font-monospace">1234 5678 1234 5661</strong>
                            <strong class="card-bottom no-click p-3 font-12 text-end color-white font-monospace">08 / 25</strong>
                            <div class="card-overlay bg-black opacity-50"></div>
                        </div>
                    </div>
                </div>
            </div>
             </div>


             
             <div className="content py-2 easy-money" style={{position:"relative",zIndex:"1"}}>
          <div className="d-flex text-center">
          <div>
      <React.Fragment key={'bottom'}>
       <div className="me-auto ">
        
          <a  
            
             className="icon icon-xxl rounded-m bg-theme shadow-m"
             onClick={toggleDrawerTransfer('bottom', true)}// Call displayOffCanvas function when link is clicked
          >
            <i className="font-28 color-green-dark bi bi-arrow-up-circle middel-icon"></i>
          </a>
          <SwipeableDrawer
          anchor={'bottom'}
          open={transfer['bottom']}
          onClose={toggleDrawerTransfer('bottom', false)}
          onOpen={toggleDrawerTransfer('bottom', true)}
        >
          {listTransfer('bottom')}
        </SwipeableDrawer>
          <h6 className="font-13 opacity-80 font-500 mb-0 pt-2">Transfer</h6>
        </div>
      </React.Fragment>
    </div>
    <React.Fragment key={'bottom'}>
        <div className="m-auto">
      
          <a 
             className="icon icon-xxl rounded-m bg-theme shadow-m"
             onClick={toggleDrawerRequest('bottom', true)}// Call displayOffCanvas function when link is clicked
          >
            <i className="font-28 color-red-dark bi bi-arrow-down-circle middel-icon"></i>
          </a>
          <SwipeableDrawer
          anchor={'bottom'}
          open={request['bottom']}
          onClose={toggleDrawerRequest('bottom', false)}
          onOpen={toggleDrawerRequest('bottom', true)}
        >
          {listRequest('bottom')}
        </SwipeableDrawer>
          <h6 className="font-13 opacity-80 font-500 mb-0 pt-2">Request</h6>
        </div>
        </React.Fragment>
        <React.Fragment key={'bottom'}>
        <div className="m-auto">
           
          <a href="#" 
           
           className="icon icon-xxl rounded-m bg-theme shadow-m"
           onClick={toggleDrawerExchange('bottom', true)}// Call displayOffCanvas function when link is clicked
          >
            <i className="font-28 color-blue-dark bi bi-arrow-repeat middel-icon"></i>
          </a>
          <SwipeableDrawer
          anchor={'bottom'}
          open={exchange['bottom']}
          onClose={toggleDrawerExchange('bottom', false)}
          onOpen={toggleDrawerExchange('bottom', true)}
        >
          {listExchange('bottom')}
        </SwipeableDrawer>
          <h6 className="font-13 opacity-80 font-500 mb-0 pt-2">Exchange</h6>
          
        </div>
        </React.Fragment>
        <div className="ms-auto">
          <a href="page-payment-bill.html" className="icon icon-xxl rounded-m bg-theme shadow-m">
            <i className="font-28 color-brown-dark bi bi-filter-circle middel-icon"></i>
          </a>
          <h6 className="font-13 opacity-80 font-500 mb-0 pt-2">Bills</h6>
        </div>
          </div>
             </div>
  
                    
        
        <div className="content my-0 mt-n2 px-1 recent-activity">
        <div className="d-flex recent ">
            <div className="align-self-center">
                <h3 className="font-16 mb-2">Recent Activity</h3>
            </div>
            <div className="align-self-center ms-auto">
                <a href="page-activity.html" className="font-12 pt-1">View All</a>
            </div>
        </div>
        </div>

    <div className="card card-style custom-card-width">
        <div className="content">
            <a href="page-activity.html" className="d-flex py-1">
                <div className="align-self-center">
                    <span className="icon rounded-s me-2 gradient-orange shadow-bg shadow-bg-s"><i className="bi bi-google color-white market-icon"></i></span>
                </div>
                <div className="align-self-center ps-1">
                    <h5 className="pt-1 mb-n1">Google Ads</h5>
                    <p className="mb-0 font-11 opacity-50">14th March <span className="copyright-year"></span></p>
                </div>
                <div className="align-self-center ms-auto text-end">
                    <h4 className="pt-1 mb-n1 color-red-dark">$150.55</h4>
                    <p className="mb-0 font-11">Bill Payment</p>
                </div>
            </a>
            <div className="divider my-2 opacity-50"></div>
            <a href="page-activity.html" className="d-flex py-1">
                <div className="align-self-center">
                    <span className="icon rounded-s me-2 gradient-green shadow-bg shadow-bg-s"><i className="bi bi-caret-up-fill color-white market-icon"></i></span>
                </div>
                <div className="align-self-center ps-1">
                    <h5 className="pt-1 mb-n1">Bitcoin</h5>
                    <p className="mb-0 font-11 opacity-50">14th March <span className="copyright-year"></span></p>
                </div>
                <div className="align-self-center ms-auto text-end">
                    <h4 className="pt-1 mb-n1 color-blue-dark">+0.315%</h4>
                    <p className="mb-0 font-11">Stock Update</p>
                </div>
            </a>
            <div className="divider my-2 opacity-50"></div>
            <a href="page-activity.html" className="d-flex py-1">
                <div className="align-self-center">
                    <span className="icon rounded-s me-2 gradient-yellow shadow-bg shadow-bg-s"><i className="bi bi-pie-chart-fill color-white market-icon"></i></span>
                </div>
                <div className="align-self-center ps-1">
                    <h5 className="pt-1 mb-n1">Dividends</h5>
                    <p className="mb-0 font-11 opacity-50">13th March <span className="copyright-year"></span></p>
                </div>
                <div className="align-self-center ms-auto text-end">
                    <h4 className="pt-1 mb-n1 color-green-dark">$950.00</h4>
                    <p className="mb-0 font-11">Wire Transfer</p>
                </div>
            </a>
        </div>
    </div>
    <div className="content my-0 mt-n2 px-1">
  <div className="d-flex activity">
    <div className="align-self-center">
      <h3 className="font-16 mb-2">Account Activity</h3>
    </div>
    <div className="align-self-center ms-auto view-all">
      <a href="page-activity.html" className="font-12 pt-1 ">View All</a>
    </div>
  </div>
 </div>



        <div className="card card-style gradient-green shadow-bg shadow-bg-s">
        <div className="content">
            <a href="page-activity.html" className="d-flex">
                <div className="align-self-center">
                    <h1 className="mb-0 font-40"><i className="bi bi-check-circle color-white pe-3"></i></h1>
                </div>
                <div className="align-self-center">
                    <h5 className="color-white font-700 mb-0 mt-0 pt-1">
                        Withdrawal of funds to your <br/> Account has been successful.
                    </h5>
                </div>
                <div className="align-self-center ms-auto">
                    <i className="bi bi-arrow-right-short color-white d-block pt-1 font-20 opacity-50"></i>
                </div>
            </a>
        </div>
    </div>

        <div className="content mb-0">
        <div className="d-flex transcation">
            <div className="align-self-center">
                <h3 className="font-16 mb-2">Send Money</h3>
            </div>
            <div className="align-self-center ms-auto">
                <a href="page-payment-transfer.html" className="font-12 pt-1">View All</a>
            </div>
        </div>
    </div>

    <div className="splide quad-slider slider-no-dots slider-no-arrows slider-visible text-center" id="double-slider-2">
    <div className="splide__track total-money">
        <div className="splide__list  ">
        <div class="splide__slide send-money">
                       
        <div className="splide__slide">
      <a
        href="#"
        data-bs-toggle="offcanvas"
        data-bs-target="#menu-friends-transfer"
        data-card-height="60"
        className="card border-0 bg-1 shadow-card shadow-card-m rounded-m"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSrYD0aQwMP5A-p0ljCpdd6lNZ1pz8vJOKEQ&s"
          alt="Johnatan"
          className="img-fluid"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
      </a>
      <h6 className="pt-2 font-600">Johnatan</h6>
    </div>
                        <div class="splide__slide friend-transcation">
                        <a href="#" data-card-height="60" data-bs-toggle="offcanvas" data-bs-target="#menu-friends-transfer" class="card border-0  bg-6 shadow-card shadow-card-m rounded-m">
                        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQqO_TCA99vcBAWhYiFz51iSIoh3TME5km5A&s"
          alt="Alexandra"
          className="img-fluid"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
                        </a>
                        <h6 class="pt-2">Alexandra</h6>
                    </div>
                    <div class="splide__slide friend-transcation">
                        <a href="#" data-card-height="60" data-bs-toggle="offcanvas" data-bs-target="#menu-friends-transfer" class="card border-0 bg-3 shadow-card shadow-card-m rounded-m">
                        <img
          src="https://m.economictimes.com/thumb/msid-82432307,width-640,height-480,resizemode-7/istock-1046518034.jpg"
          alt="Alexandra"
          className="img-fluid"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
                        </a>
                        <h6 class="pt-2">Juanita</h6>
                    </div>
                    <div class="splide__slide friend-transcation">
                        <a href="#" data-card-height="60" data-bs-toggle="offcanvas" data-bs-target="#menu-friends-transfer" class="card border-0 bg-9 shadow-card shadow-card-m rounded-m">
                        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qaqeJ1nXzwiiRpNkUf7b009dHSfNtnc9SQ&s"
          alt="Alexandra"
          className="img-fluid"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
                        </a>
                        <h6 class="pt-2">Danielle</h6>
                    </div>
                    </div>
        </div>
    </div>
 </div>

</div>



<div id="menu-sidebar" data-menu-active="nav-welcome" data-menu-load="menu-sidebar.html"
    className="offcanvas offcanvas-start offcanvas-detached rounded-m">
</div>

<div id="menu-highlights"
    data-menu-load="menu-highlights.html"
    className="offcanvas offcanvas-bottom offcanvas-detached rounded-m">
</div>

<div id="menu-notifications" data-menu-load="menu-notifications.html"
    className="offcanvas offcanvas-top offcanvas-detached rounded-m">
</div>


<div id="menu-card-more" data-menu-load="menu-card-settings.html"
    className="offcanvas offcanvas-bottom offcanvas-detached rounded-m">
</div>


<div id="menu-transfer" data-menu-load="menu-transfer.html"
    className="offcanvas offcanvas-bottom offcanvas-detached rounded-m">
</div>


<div id="menu-friends-transfer" data-menu-load="menu-friends-transfer.html"
    className="offcanvas offcanvas-bottom offcanvas-detached rounded-m">
</div>


<div id="menu-request" data-menu-load="menu-request.html"
    className="offcanvas offcanvas-bottom offcanvas-detached rounded-m">
</div>


<div id="menu-exchange" data-menu-load="menu-exchange.html"
    className="offcanvas offcanvas-bottom offcanvas-detached rounded-m">
</div>

<div className="offcanvas offcanvas-bottom rounded-m offcanvas-detached" id="menu-install-pwa-ios">
       <div className="content">
       <img src="app/icons/icon-128x128.png" alt="img" width="80" className="rounded-m mx-auto my-4"/>
          <h1 className="text-center">Install PayApp</h1>
          <p className="boxed-text-xl">
              Install PayApp on your home screen, and access it just like a regular app. Open your Safari menu and tap "Add to Home Screen".
          </p>
           <a href="#" className="pwa-dismiss close-menu color-theme text-uppercase font-900 opacity-50 font-11 text-center d-block mt-n2" data-bs-dismiss="offcanvas">Maybe Later</a>
       </div>
   </div>

   <div className="offcanvas offcanvas-bottom rounded-m offcanvas-detached" id="menu-install-pwa-android">
       <div className="content">
           <img src="app/icons/icon-128x128.png" alt="img" width="80" className="rounded-m mx-auto my-4"/>
           <h1 className="text-center">Install PayApp</h1>
           <p className="boxed-text-l">
               Install PayApp to your Home Screen to enjoy a unique and native experience.
           </p>
           <a href="#" className="pwa-install btn btn-m rounded-s text-uppercase font-900 gradient-highlight shadow-bg shadow-bg-s btn-full">Add to Home Screen</a><br/>
           <a href="#" data-bs-dismiss="offcanvas" className="pwa-dismiss close-menu color-theme text-uppercase font-900 opacity-60 font-11 text-center d-block mt-n1">Maybe later</a>
       </div>
   </div>

</div>

  )
}

export default Stater;
