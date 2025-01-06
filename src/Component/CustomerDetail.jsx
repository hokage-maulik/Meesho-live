// // import React from 'react'
// // import { useNavigate } from 'react-router-dom'

// // export default function CustomerDetail() {
// //     const nevigate=useNavigate()

// //      function endpage(){
// //         nevigate('/end')
// //      }
// //   return (
// //     <div className='container' style={{display:"flex",justifyContent:'center'}}>
// //         <form action="" style={{border:"1px solid #000",width:"50%",padding:"15px"}}>

// //             <div>
// //                 <h2 className='text-center'>Form</h2>
// //             </div>
// //             <div className="row mt-3">
// //                 <div className="col-md-6">
// //                 <input className='w-100' type="text" placeholder='enter name' style={{height:"50px"}}  /> 
// //                 </div>
// //                 <div className="col-md-6">
// //                 <input className='w-100' type="text" placeholder='enter email' style={{height:"50px"}} /> 
// //                 </div>
// //             </div>
// //             <div className="row mt-3">
// //                 <div className="col-md-6">
// //                 <input className='w-100' type="text" placeholder='enter phone' style={{height:"50px"}} /> <br />
// //                 </div>
// //                 <div className="col-md-6">
// //                 <input className='w-100' type="number" placeholder='enter card detail' style={{height:"50px"}} /> <br />
// //                 </div>
// //             </div>




// //             <input className='w-100 mt-3' type="number" name="" id="" placeholder='enter cvv  ' style={{height:"50px"}} /> <br />
// //             <div style={{display:"flex",justifyContent:"center"}}>
// //             <button className='mt-3' onClick={endpage}>Submit</button>

// //             </div>

// //         </form>
// //     </div>
// //   )
// // }

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function CustomerDetail() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     cardDetail: '',
//     cvv: '',
//   });
//   const [error, setError] = useState('');

//   function handleChange(e) {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   }

//   function validateForm() {
//     const { name, email, phone, cardDetail, cvv } = formData;

//     if (!name || !email || !phone || !cardDetail || !cvv) {
//       setError('All fields are required.');
//       return false;
//     }

//     if (!name) {
//       alert('Name is reqier');
//       return false;
//     } 

//     if (phone.length !== 10) {
//       alert('Phone number must be exactly 10 digits.');
//       return false;
//     }

//     if (cardDetail.length !== 12) {
//       alert('Card detail must be exactly 12 digits.');
//       return false;
//     }

//     if (cvv.length !== 3) {
//       alert('CVV must be exactly 3 digits.');
//       return false;
//     }

//     if (!email.includes('@')) {
//       alert('Email must include an "@" symbol.');
//       return false;
//     }

//     setError('');
//     return true;
//   }

//   function endpage(e) {
//     e.preventDefault();
//     if (validateForm()) {
//       navigate('/end');
//     }
//   }

//   return (
//     <div className="container mt-5" style={{ display: 'flex', justifyContent: 'center' }}>
//       <form
//         onSubmit={endpage} className="shadow p-4 bg-light rounded" style={{ width: '50%' }}>
//         <div><h2 className="text-center mb-4">Customer Detail Form</h2></div>
//         {error && (<div className="alert alert-danger text-center" role="alert">{error}</div>)}
//         <div className="row">
//           <div className="col-md-6 mb-3">
//             <label className="form-label">Name</label>
//             <input className="form-control" type="text" name="name" placeholder="Enter name" value={formData.name} onChange={handleChange} required/>
//           </div>
//           <div className="col-md-6 mb-3">
//             <label className="form-label">Email</label>
//             <input className="form-control" type="text" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-6 mb-3">
//             <label className="form-label">Phone</label>
//             <input className="form-control" type="text" name="phone" placeholder="Enter phone" value={formData.phone} onChange={handleChange} required/>
//           </div>
//           <div className="col-md-6 mb-3">
//             <label className="form-label">Card Detail</label>
//             <input className="form-control" type="number" name="cardDetail"  placeholder="Enter card detail" value={formData.cardDetail}
//             onChange={handleChange} required />
//           </div>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">CVV</label>
//           <input className="form-control" type="number" name="cvv" placeholder="Enter CVV"  value={formData.cvv}  onChange={handleChange} required/>
//         </div>
//         <div className="text-center">
//           <button className="btn btn-primary mt-3 w-100" type="submit">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CustomerDetail() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardDetail: '',
    cvv: '',
  });
  const [error, setError] = useState('');

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function validateForm() {
    const { name, email, phone, cardDetail, cvv } = formData;

    if (!name || !email || !phone || !cardDetail || !cvv) {
      setError('All fields are required.');
      return false;
    }

    if (phone.length !== 10) {
      alert('Phone number must be exactly 10 digits.');
      return false;
    }

    if (cardDetail.length !== 12) {
      alert('Card detail must be exactly 12 digits.');
      return false;
    }

    if (cvv.length !== 3) {
      alert('CVV must be exactly 3 digits.');
      return false;
    }

    if (!email.includes('@')) {
      alert('Email must include an "@" symbol.');
      return false;
    }

    setError('');
    return true;
  }

  function endpage(e) {
    e.preventDefault();
    if (validateForm()) {
      navigate('/end');
    }
  }

  return (
    <div className="container mt-5">
      <form
        onSubmit={endpage}
        className="shadow p-4 bg-light rounded"
        style={{ maxWidth: '700px', margin: 'auto' }}
      >
        <h2 className="text-center mb-4">Customer Detail Form</h2>
        {error && (<div className="alert alert-danger text-center" role="alert">{error}</div>)}
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email" // changed to type="email" for better validation
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label">Phone</label>
            <input
              className="form-control"
              type="tel" // changed to type="tel" for better input control
              name="phone"
              placeholder="Enter phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label">Card Detail</label>
            <input
              className="form-control"
              type="number" // changed to type="text" for better input handling
              name="cardDetail"
              placeholder="Enter card detail"
              value={formData.cardDetail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <label className="form-label">CVV</label>
            <input
              className="form-control"
              type="number" // changed to type="text" for better input handling
              name="cvv"
              placeholder="Enter CVV"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-primary mt-3 w-100" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
