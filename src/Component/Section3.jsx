// import React from 'react';

// export default function Section3() {
//   return (
//     <div className='bg-light'>
//       <div className="container mt-5">
//         <div className="row">
//           <div className="col-12 position-relative">
//             <img
//               className="img-fluid w-100"
//               src="https://images.meesho.com/images/pow/downloadBannerDesktop_1050.webp"
//               alt="Banner"
//             />
//             <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
//               <h1 className=" fw-bold text-end" style={{ color: "purple" }}>Start your Online Business <br />
//                 with Zero Investment</h1>
//               <p className="lead">Shop at the lowest prices and enjoy the best quality products!</p>
//               <button type="button" className="btn btn-danger btn-lg">
//                 <a href="https://play.google.com/store/apps/details?id=com.example" target="_blank" rel="noopener noreferrer">
//                   Get the App
//                 </a>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import '../Style/Section3.css';

export default function Section3() {
  return (
    <div className="bg-light section3">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 position-relative">
            <img
              className="img-fluid w-100 banner-img"
              src="https://images.meesho.com/images/pow/downloadBannerDesktop_1050.webp"
              alt="Banner"
            />
            <div className="overlay-text">
              
              <button type="button" className="btn btn-danger btn-lg">
                <a
                  href="https://play.google.com/store/apps/details?id=com.example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  Get the App
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
