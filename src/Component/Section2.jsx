// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../Style/Section2.css';
// import { Link } from 'react-router-dom';


// export default function Section2() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchdata();
//   }, []);

//   async function fetchdata() {
//     try {
//       const res = await axios.get("http://localhost:3004/data");
//       setData(res.data);
//     } catch (error) {
//       console.error("Error fetching data", error);
//     }
//   }

//   return (
//     <div className="bg-light py-5">
//       <div className="container mt-5">
//         <div className='d-flex align-items-center mb-5'>
//           <hr className='me-5' style={{ color: "purple", width: "24%" }} /> <h1 className='text-center'>Top Categories to choose from</h1> <hr className='ms-5' style={{ color: "purple", width: "24%" }} />
//         </div>
//         <div className="row">
//           {data.map((el, index) => (
//             <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
//               <div className="card h-100 shadow-sm border-0">
//                 <Link to={`/${el.type}`} className="product-item text-decoration-none">
//                   <img
//                     style={{ height: "300px", objectFit: "cover", borderRadius: "8px" }}
//                     src={el.image}
//                     className="card-img-top"
//                     alt={el.title}
//                   />
//                   <div className="card-body d-flex flex-column text-center">
//                     <h6 className="card-title fw-bold text-dark">{el.name}</h6>
//                     <p className="text-muted">{el.description}</p>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Style/Section2.css';
import { Link } from 'react-router-dom';

export default function Section2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  async function fetchdata() {
    try {
      const res = await axios.get("https://meesho-live2.onrender.com/data");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  return (
    <div className="bg-light py-5">
      <div className="container mt-5">
        <div className='d-flex align-items-center mb-5'>
          <hr className='me-5' style={{ color: "purple", width: "24%" }} />
          <h1 className='text-center'>Top Categories to Choose From</h1>
          <hr className='ms-5' style={{ color: "purple", width: "24%" }} />
        </div>
        <div className="row">
          {data.map((el, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
              <div className="card h-100 shadow-lg border-0 transition-card">
                <Link to={`/${el.type}`} className="product-item text-decoration-none">
                  <img
                    style={{ height: "300px", objectFit: "cover", borderRadius: "8px 8px 0 0" }}
                    src={el.image}
                    className="card-img-top"
                    alt={el.title}
                  />
                  <div className="card-body d-flex flex-column text-center">
                    <h6 className="card-title fw-bold text-dark">{el.name}</h6>
                    <p className="text-muted">{el.description}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
