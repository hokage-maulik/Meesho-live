// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import {Link, useParams} from "react-router-dom"

// export default function Categoty() {

//     const[data,setData]=useState([])
//     const { type } = useParams();

//     useEffect(() => {
//       fetchdata();
//     },);
  
//     async function fetchdata() {
//       try {
//         const res = await axios.get(`http://localhost:3004/${type}`);
//         setData(res.data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     }
//   return (
//     <div>
//        {
//         data.map((el)=>{
//           return <li>
//               <Link to={`/${el.type}`}>
//             <h2>{el.name}</h2>
//             <img src={el.image} alt="" />
//               </Link>
//           </li>
//         })
//        }
//     </div>
//   )
// }


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Category() {
  const [data, setData] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    fetchData();
  });

  async function fetchData() {
    try {
      const res = await axios.get(`https://meesho-live2.onrender.com/${type}`);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {data.map((el) => (
          <div key={el.id} className="col-md-4 mb-4">
            <div className="">
              <Link to={`/Category/${el.type}/${el.id}`} className="text-decoration-none">
                {/* <img src={el.image} alt={el.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-center">{el.name}</h5>
                </div> */}
                <div className="card" style={{ width: "18rem",padding:"15px" }} >
                    <img src={el.image} className="" alt="..." />
                    <hr />
                    <div className="card-body">
                      <h5 className="card-title">{el.name}</h5>
                      <p className="card-text fs-3 fw-bold"><i class="bi bi-currency-rupee"></i>{el.price} <span className='text-secondary fw-light fs-6'>ownword</span></p>
                      <p>Free Delivery</p>
                    </div>
                  </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
