import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { myAction } from '../Redux/Action';

export default function Productdetail() {
  const [data, setData] = useState("");
  const { type, id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchdata();
  },);

  async function fetchdata() {
    const res = await axios.get(`https://meesho-live2.onrender.com/${type}/${id}`);
    setData(res.data);
  }

  function addtocart() {
    alert("Product added to your cart");
    dispatch(myAction(data));
    navigate('/signin');
  }

  function signin(){
    navigate("/signin")
  }

  

  return (
    <div className="product-detail container mt-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <img className="img-fluid rounded product-image" src={data.image} alt={data.name} />
        </div>
        <div className="col-md-6">
          <h1>{data.name}</h1>
          <h3 className="text-muted">Description: {data.descryption}</h3>
          <p className="fs-2">Price: ₹{data.price}</p>
          <p className="fs-2">Size: {data.size}</p>
          <p className="fs-3">Country: {data.counter}</p>
          <button onClick={addtocart} className="btn btn-danger btn-lg mt-2">Add to Cart</button>
          <button onClick={signin} className="btn btn-warning btn-lg">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
