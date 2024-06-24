// import React from 'react'
// import Splide from '@splidejs/splide';
// import '@splidejs/splide/dist/css/splide.min.css';
// import './SliderComponent.css';
// import { useEffect } from 'react';

// const Test = () => {
//   useEffect(() => {
//     const splideElements = document.getElementsByClassName('splide');
//     if (splideElements.length) {
//       const singleSliders = document.querySelectorAll('.single-slider');
//       if (singleSliders.length) {
//         singleSliders.forEach((e) => {
//           const single = new Splide('#' + e.id, {
//             type: 'loop',
//             autoplay: true,
//             interval: 4000,
//             perPage: 1,
//           }).mount();
          
//           const sliderNext = document.querySelectorAll('.slider-next');
//           const sliderPrev = document.querySelectorAll('.slider-prev');
          
//           sliderNext.forEach((el) => el.addEventListener('click', () => { single.go('>'); }));
//           sliderPrev.forEach((el) => el.addEventListener('click', () => { single.go('<'); }));
//         });
//       }

//       const doubleSliders = document.querySelectorAll('.double-slider');
//       if (doubleSliders.length) {
//         doubleSliders.forEach((e) => {
//           new Splide('#' + e.id, {
//             type: 'loop',
//             autoplay: true,
//             interval: 4000,
//             arrows: false,
//             perPage: 2,
//           }).mount();
//         });
//       }

//       const tripleSliders = document.querySelectorAll('.triple-slider');
//       if (tripleSliders.length) {
//         tripleSliders.forEach((e) => {
//           new Splide('#' + e.id, {
//             type: 'loop',
//             autoplay: true,
//             interval: 4000,
//             arrows: false,
//             perPage: 3,
//             perMove: 1,
//           }).mount();
//         });
//       }

//       const quadSliders = document.querySelectorAll('.quad-slider');
//       if (quadSliders.length) {
//         quadSliders.forEach((e) => {
//           new Splide('#' + e.id, {
//             type: 'loop',
//             autoplay: true,
//             interval: 4000,
//             arrows: false,
//             perPage: 4,
//             perMove: 1,
//           }).mount();
//         });
//       }
//     }
//   }, []);

//   return (
//     <div className="splide single-slider slider-no-dots slider-no-arrows slider-visible" id="single-slider-1">
//       <div className="splide__track">
//         <div className="splide__list">
//           <div className="splide__slide">
//             <div className="card card-style m-0 bg-5 shadow-card shadow-card-m" style={{ height: '200px' }}>
//               <div className="card-top p-3">
//                 <a href="#" data-bs-toggle="offcanvas" data-bs-target="#menu-card-more" className="icon icon-xxs bg-white color-black float-end">
//                   <i className="bi bi-three-dots font-18"></i>
//                 </a>
//               </div>
//               <div className="card-center">
//                 <div className="bg-theme px-3 py-2 rounded-end d-inline-block">
//                   <h1 className="font-13 my-n1">
//                     <a className="color-theme" data-bs-toggle="collapse" href="#balance3" aria-controls="balance3">Click for Balance</a>
//                   </h1>
//                   <div className="collapse" id="balance3"><h2 className="color-theme font-26">$26,315</h2></div>
//                 </div>
//               </div>
//               <strong className="card-top no-click font-12 p-3 color-white font-monospace">Main Account</strong>
//               <strong className="card-bottom no-click p-3 text-start color-white font-monospace">1234 5678 1234 5661</strong>
//               <strong className="card-bottom no-click p-3 text-end color-white font-monospace">08 / 2025</strong>
//               <div className="card-overlay bg-black opacity-50"></div>
//             </div>
//           </div>
//           <div className="splide__slide">
//             <div className="card card-style m-0 bg-9 shadow-card shadow-card-m" style={{ height: '200px' }}>
//               <div className="card-top p-3">
//                 <a href="#" data-bs-toggle="offcanvas" data-bs-target="#menu-card-more" className="icon icon-xxs bg-white color-black float-end">
//                   <i className="bi bi-three-dots font-18"></i>
//                 </a>
//               </div>
//               <div className="card-center">
//                 <div className="bg-theme px-3 py-2 rounded-end d-inline-block">
//                   <h1 className="font-13 my-n1">
//                     <a className="color-theme" data-bs-toggle="collapse" href="#balance1" aria-controls="balance1">Click for Balance</a>
//                   </h1>
//                   <div className="collapse" id="balance1"><h2 className="color-theme font-26">$65,500</h2></div>
//                 </div>
//               </div>
//               <strong className="card-top no-click font-12 p-3 color-white font-monospace">Company Account</strong>
//               <strong className="card-bottom no-click p-3 text-start color-white font-monospace">1234 5678 1234 5661</strong>
//               <strong className="card-bottom no-click p-3 text-end color-white font-monospace">08 / 2025</strong>
//               <div className="card-overlay bg-black opacity-50"></div>
//             </div>
//           </div>
//           <div className="splide__slide">
//             <div className="card card-style m-0 bg-7 shadow-card shadow-card-m" style={{ height: '200px' }}>
//               <div className="card-top p-3">
//                 <a href="#" data-bs-toggle="offcanvas" data-bs-target="#menu-card-more" className="icon icon-xxs bg-white color-black float-end">
//                   <i className="bi bi-three-dots font-18"></i>
//                 </a>
//               </div>
//               <div className="card-center">
//                 <div className="bg-theme px-3 py-2 rounded-end d-inline-block">
//                   <h1 className="font-13 my-n1">
//                     <a className="color-theme" data-bs-toggle="collapse" href="#balance2" aria-controls="balance2">Click for Balance</a>
//                   </h1>
//                   <div className="collapse" id="balance2"><h2 className="color-theme font-26">$15,100</h2></div>
//                 </div>
//               </div>
//               <strong className="card-top no-click font-12 p-3 color-white font-monospace">Savings Account</strong>
//               <strong className="card-bottom no-click p-3 text-start color-white font-monospace">1234 5678 1234 5661</strong>
//               <strong className="card-bottom no-click p-3 text-end color-white font-monospace">08 / 2025</strong>
//               <div className="card-overlay bg-black opacity-50"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test
