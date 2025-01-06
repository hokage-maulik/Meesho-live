
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Section4() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchfdta();
  }, []);

  async function fetchfdta() {
    try {
      const res = await axios.get("https://meesho-live2.onrender.com/Multipledata");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="container my-5">
      <h1>All Products</h1>
      <div className="row">
        {data.map((el) => (
          <div key={el.id} className="col-md-4 mb-4">
            <div className="">

              <div className="">
                <Link to={`/mult/${el.id}`} className="">
                
                  <div className="card" style={{ width: "18rem",padding:"15px" }} >
                    <img src={el.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{el.name}</h5>
                      <p className="card-text fs-3 fw-bold"><i class="bi bi-currency-rupee"></i>{el.price} <span className='text-secondary fw-light fs-6'>ownword</span></p>
                      <p>Free Delivery</p>
                    </div>
                  </div>

                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
