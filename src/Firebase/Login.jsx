

// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import app from '../firebasedata'
// import '../Style/Login.css'

// export default function Login() {
//     const auth=getAuth(app)
//     const[email,setEmail]=useState("")
//     const[password,setPassword]=useState("")
//     const navigate=useNavigate()

//     function login1(){
//         signInWithEmailAndPassword(auth, email, password)
//         .then((data)=>{
//             alert("succcess")
//         }).catch((error)=>{
//             console.log(error)
//         })
//         navigate("/cart")
//     }
//   return (
//     <div>
//         <input type="text" placeholder='enter email' onChange={(e)=>setEmail(e.target.value)} value={email} />
//         <input type="text" placeholder='enter password' onChange={(e)=>setPassword(e.target.value)} value={password} />
//         <button onClick={login1}>Login</button>


//     </div>
//   )
// }

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import app from '../firebasedata'
import '../Style/Login.css'

export default function Login() {
    const auth = getAuth(app)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

   function login1(){
        signInWithEmailAndPassword(auth, email, password)
        .then((data)=>{
            alert("succcess")
        }).catch((error)=>{
            console.log(error)
        })
        navigate("/cart")
    }

    return (
        <div className="login-wrapper">
            <form className="login-box" onSubmit={login1}>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder='Enter email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="password"
                    placeholder='Enter password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}


