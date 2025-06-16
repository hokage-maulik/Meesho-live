import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { myAction } from '../Redux/Action';

export default function Productdetail1() {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  });

  async function fetchData() {
    try {
      const res = await axios.get(`https://meesho-live2.onrender.com/Multipledata/${id}`);
      
      setData(res.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }

  function addToCart() {
    dispatch(myAction(data));
    navigate('/cart');
  }

  

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={data.image} className="img-fluid" alt={data.name} />
        </div>
        <div className="col-12 col-md-6 mt-4 mt-md-0">
          <h2>{data.name}</h2>
          <p className="fs-3">Description: {data.descryption}</p>
          <p className="fs-4">Price: {data.price}</p>
          <button onClick={addToCart} className="btn btn-danger me-3">Add to Cart</button>
          <button  className="btn btn-warning">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
