// import { useDispatch, useSelector } from 'react-redux';
// import { deletAction, QuntDec, QuntInc } from '../Redux/Action';
// // import '../Style/Cart.css';
// import { useNavigate } from 'react-router-dom';

// export default function Cart() {
//   const dispatch = useDispatch();
//   const nevigate = useNavigate()
//   const data = useSelector((store) => store);

//   function delt(i) {
//     if (window.confirm("Are you sure you want to remove this product from the cart?")) {
//       dispatch(deletAction(i));
//     }
//   }

//   const totalprice = data.reduce((acc, item) => {
//     return acc + item.price * item.qunatity;
//   }, 0);

//   function customerdetail() {
//     nevigate('/Howtopay')
//   }
//   return (
//     <div className="cart-container">
//       <h2 className='text-center mt-3'>Your Shopping Cart</h2>


//       <table class="table">
//         <thead>
//           <tr>
//             <th scope="col">Image</th>
//             <th scope="col">Name</th>
//             <th scope="col">Price</th>
//             <th scope="col">QTY</th>
//             <th scope="col">Cancel Order</th>
//             {/* <th scope="col">Buy</th> */}
//           </tr>
//         </thead>
//         <tbody>

//           {
//             data.map((el, i) => {
//               return <tr>
//                 <th scope="row"><img style={{ width: "100px" }} src={el.image} alt="" /></th>
//                 <td>{el.name}</td>
//                 <td>{el.price}</td>
//                 <td> <button onClick={() => dispatch(QuntInc(i))} className="btn btn-primary">+</button><p><strong></strong> {el.qunatity}</p>
//                   <button onClick={() => dispatch(QuntDec(i))} className="btn btn-secondary">-</button></td>
//                 <td>  <button onClick={() => delt(i)} className="btn btn-danger">cancel order</button></td>
//                 {/* <td><button onClick={customerdetail} className="btn btn-danger">Buy Now</button></td> */}
//               </tr>

//             })
//           }
//           <div className="cart-total ">
//             <h3>Total Price: <i className="bi bi-currency-rupee"></i>{totalprice}</h3>
//             <button  className='' onClick={customerdetail}>Buy Now</button>
//           </div>


//         </tbody>
//       </table>


//     </div>
//   );


// }


// import { useDispatch, useSelector } from 'react-redux';
// import { deletAction, QuntDec, QuntInc } from '../Redux/Action';
// import { useNavigate } from 'react-router-dom';
// import '../Style/Cart.css';

// export default function Cart() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const data = useSelector((store) => store);

//   function delt(i) {
//     if (window.confirm("Are you sure you want to remove this product from the cart?")) {
//       dispatch(deletAction(i));
//     }
//   }

//   const totalprice = data.reduce((acc, item) => {
//     return acc + item.price * item.qunatity;
//   }, 0);

//   function customerdetail() {
//     navigate('/Howtopay');
//   }

//   return (
//     <div className="cart-container container">
//       <h2 className="text-center mb-4">Your Shopping Cart</h2>

//       <table className="table table-responsive-md">
//         <thead className="table-light">
//           <tr>
//             <th scope="col">Image</th>
//             <th scope="col">Name</th>
//             <th scope="col">Price</th>
//             <th scope="col">QTY</th>
//             <th scope="col">Cancel Order</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((el, i) => (
//             <tr key={i}>
//               <td><img className="img-fluid cart-image" src={el.image} alt={el.name} /></td>
//               <td>{el.name}</td>
//               <td>₹{el.price}</td>
//               <td>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <button onClick={() => dispatch(QuntInc(i))} className="btn btn-sm btn-primary">+</button>
//                   <p className="m-0">{el.qunatity}</p>
//                   <button onClick={() => dispatch(QuntDec(i))} className="btn btn-sm btn-secondary">-</button>
//                 </div>
//               </td>
//               <td>
//                 <button onClick={() => delt(i)} className="btn btn btn-danger">cancel order</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="cart-total text-end mt-4">
//         <h3>Total Price: ₹{totalprice}</h3>
//         <button onClick={customerdetail} className="btn btn-lg btn-success mt-3">Proceed to Checkout</button>
//       </div>
//     </div>
//   );
// }


import { useDispatch, useSelector } from 'react-redux';
import { deletAction, QuntDec, QuntInc } from '../Redux/Action';
import { useNavigate } from 'react-router-dom';
import '../Style/Cart.css';

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((store) => store);

  function removeFromCart(i) {
    if (window.confirm("Are you sure you want to remove this product from the cart?")) {
      dispatch(deletAction(i));
    }
  }

  const totalprice = data.reduce((acc, item) => {
    return acc + item.price * item.qunatity;
  }, 0);

  function proceedToCheckout() {
    navigate('/Howtopay');
  }

  return (
    <div className="cart-container container">
      <h2 className="text-center mb-4">Your Shopping Cart</h2>

      <table className="table table-responsive-md">
        <thead className="table-light">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">QTY</th>
            <th scope="col">Remove from Your Cart</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, i) => (
            <tr key={i}>
              <td><img className="img-fluid cart-image" src={el.image} alt={el.name} /></td>
              <td>{el.name}</td>
              <td>₹{el.price}</td>
              <td>
                <div className="d-flex justify-content-between align-items-center">
                  <button onClick={() => dispatch(QuntInc(i))} className="btn btn-sm btn-primary">+</button>
                  <p className="m-0">{el.qunatity}</p>
                  <button onClick={() => dispatch(QuntDec(i))} className="btn btn-sm btn-secondary">-</button>
                </div>
              </td>
              <td>
                <button onClick={() => removeFromCart(i)} className="btn btn-danger">Remove from Your Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-total text-end mt-4">
        <h3>Total Price: ₹{totalprice}</h3>
        <button onClick={proceedToCheckout} className="btn btn-lg btn-success mt-3">Proceed to Checkout</button>
      </div>
    </div>
  );
}
