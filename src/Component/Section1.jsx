import React from 'react';

export default function Section1() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 text-dark mb-4">Lowest Prices <br /> Best Quality Shopping</h1>

            <div className="mb-4">
              <p className="d-flex align-items-center mb-2">
                <i className="fas fa-shuttle-van fa-2x text-danger me-3"></i>
                <span className="fs-5">Free Delivery</span>
              </p>
              <p className="d-flex align-items-center mb-2">
                <i className="far fa-money-bill-alt fa-2x text-danger me-3"></i>
                <span className="fs-5">Cash on Delivery</span>
              </p>
              <p className="d-flex align-items-center mb-4">
                <i className="fas fa-retweet fa-2x text-danger me-3"></i>
                <span className="fs-5">Easy Returns</span>
              </p>
            </div>

            <button type="button" className="btn btn-warning btn-lg">
              {/* Download the Meesho App Now */}
              <a href="https://play.google.com/store/apps/details?id=com" target="_blank" rel="noopener noreferrer">
                Download on Play Store
              </a>
            </button>
          </div>

          <div className="col-md-6 text-center">
            <img
              className="img-fluid rounded"
              src="https://images.meesho.com/images/marketing/1722839152228_512.webp"
              alt="Shopping Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
