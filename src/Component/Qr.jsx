import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Qr() {
  const navigate = useNavigate();

  function endpage() {
    navigate('/end');
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-6 text-center">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/12/14/45/qr-code-148732_1280.png"
            alt="QR Code"
            className="img-fluid"
          />
          <p className="fs-1 mt-4">Scan this QR</p>
          <button
            className="btn btn-primary mt-4"
            onClick={endpage}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
