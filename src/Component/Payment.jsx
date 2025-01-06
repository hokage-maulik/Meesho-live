// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'


// export default function Payment() {
//     const navigate=useNavigate()

//      function offlinepayment(){
//         navigate('/customerdetail')
//      }

//   return (

//     <div>
//         <p  className='fs-1 text-center'>How would be you like to pay</p>
//                      <Link to={"/Qr"}>
//              <div className="containetr">
//                 <div className="row">
//                      <div className="col-md-6">
//                         <img src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2023/02/07/225973-phonepe-upi.png?itok=XRUCFnK4" alt="" />

//                      </div>

//                       <div className="col-md-6">
//                         <img src="https://w7.pngwing.com/pngs/191/51/png-transparent-google-pay-or-tez-hd-logo-thumbnail.png" alt="" />
//                       </div>

//                          <div className="col-md-6">
//                             <img src="https://cdn-icons-png.flaticon.com/512/5968/5968202.png" alt="" />
//                          </div>

//                            <div className="col-md-6">
//                             <img src="https://paytmblogcdn.paytm.com/wp-content/uploads/2023/03/Paytm-Wallet-800x500.jpeg" alt="" />
//                            </div>
//                 </div>

//              </div>


//                      </Link>

//               <button onClick={offlinepayment}>Pay Offline</button>
//     </div>
//   )
// }
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Style/Payment.css'

export default function Payment() {
    const navigate = useNavigate();

    function offlinepayment() {
        navigate('/customerdetail');
    }

    return (
        <div className="payment-container">
            <p className="title text-center">How would you like to pay?</p>
            <div className="payment-options">
                <Link to="/Qr" className="payment-option">
                    <img src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2023/02/07/225973-phonepe-upi.png?itok=XRUCFnK4" alt="PhonePe" className="payment-image" />
                </Link>
                <Link to="/Qr" className="payment-option">
                    <img src="https://w7.pngwing.com/pngs/191/51/png-transparent-google-pay-or-tez-hd-logo-thumbnail.png" alt="Google Pay" className="payment-image" />
                </Link>
                <Link to="/Qr" className="payment-option">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968202.png" alt="PayPal" className="payment-image" />
                </Link>
                <Link to="/Qr" className="payment-option">
                    <img src="https://paytmblogcdn.paytm.com/wp-content/uploads/2023/03/Paytm-Wallet-800x500.jpeg" alt="Paytm" className="payment-image" />
                </Link>
            </div>
            <button onClick={offlinepayment} className="btn-offline">Pay Offline</button>
        </div>
    );
}
