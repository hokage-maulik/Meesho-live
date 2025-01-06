// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { deletAction } from '../Redux/Action'

// export default function Cart1() {
//     const[state,setState]=useState(0)
//     const dispatch=useDispatch()

//     const data=useSelector((store)=>{
//         return store
//     })
//     function delt(i) {
//         alert("Are you sure remove  product to cart")
//        dispatch(deletAction(i))
//    }

//    function dec() {
//        if (state > 0) {
//            setState(state - 1)
//        }
//    }
    
//   return (
//     <div className="cart-container">
//             {data.map((el, i) => (
//                 <div className="cart-item" key={i}>
//                     <img src={el.image} alt={el.name} className="cart-image" />
//                     <div className="cart-details">
//                         <h5>{el.name}</h5>
//                         <p>{el.description}</p>
//                         <p><strong>Price:</strong> <i class="bi bi-currency-rupee"></i>{el.price}</p>
//                         <div className="cart-controls">
//                             <button onClick={() => setState(state + 1)} className='btn btn-primary'>+</button>
//                             <span className="cart-quantity">{state}</span>
//                             <button onClick={dec} className='btn btn-secondary'>-</button>
//                         </div>
//                         <button onClick={() => delt(i)} className='btn btn-danger'>Delete</button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//   )
// }
