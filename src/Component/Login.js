import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const nevigate = useNavigate()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  // const[error,setError]=useState()

  // const [data, setdata] = useState({ email: "", password:"" })

  // onchange = (e) => {
  //   setdata({...data, [e.target.name] : e.target.value})
  // }

  const handlerlogin = (e) => {
    e.preventDefault()
    fetch('http://localhost:3008/user')
      .then((response) => response.json())
    .then((dataaa) => {
        dataaa.filter((item) => {
          if (item.email == email) {
            if (item.password === password) {
              if (item.id === 1) {
                localStorage.setItem("admin", JSON.stringify(item))
                nevigate("/")
              }
              else {
                localStorage.setItem("user", JSON.stringify(item))
                nevigate("/")
              }
            } 
            else {
              console.log('enter correct password');
              return;
            }
          }
          else {
            // console.log(data.email,"i am eklse");
            // console.log(data,"i am eklse");
            // console.log('enter correct email');
            return;
          }
        })
      });
  }

  return (
    <div>
        <div className="containerrrr">
          <div className="screennn">
            <div className="screennn__content">
              <form className="login" onSubmit={handlerlogin}>
                <div className="login__field">
                  <i className="login__icon fas fa-user" />
                  <input type="text" className="login__input" name="email" onChange={(e)=>{setEmail(e.target.value)
                    
                    // if(email.length<5){
                    //   setError("emial must be at leats 5 charcter")
                    // }
                    // else{
                    //   setError("")
                    }
                  }
                     placeholder="Email" />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock" />
                  <input type="password" className="login__input" name="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" /><br/>
                </div>
                <input type="submit" className="login__submit" value="Login" />
              </form>
              <div className="social-login">
                <h3>log in via</h3>
                <div className="social-icons">
                  <a href="#" className="social-login__icon fab fa-instagram" />
                  <a href="#" className="social-login__icon fab fa-facebook" />
                  <a href="#" className="social-login__icon fab fa-twitter" />
                </div>
              </div>
            </div>
            <div className="screennn__background">
              <span className="screennn__background__shape screennn__background__shape4" />
              <span className="screennn__background__shape screennn__background__shape3" />
              <span className="screennn__background__shape screennn__background__shape2" />
              <span className="screennn__background__shape screennn__background__shape1" />
            </div>
          </div>
        </div>


    </div>
  )
}



// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'


// export default function Login() {
//   const nevigate = useNavigate()
//   // const [email,setEmail]=useState("")
//   // const [password,setPassword]=useState("")
//   // const[error,setError]=useState()

//   const [data, setdata] = useState({ email: "", password:"" })

//   onchange = (e) => {
//     setdata({...data, [e.target.name] : e.target.value})
//   }

//   const handlerlogin = (e) => {
//     e.preventDefault()
//     fetch('http://localhost:3008/user')
//       .then((response) => response.json())
//     .then((dataaa) => {
//         dataaa.filter((item) => {
//           if (item.email == data.email) {
//             if (item.password === data.password) {
//               if (item.roll === "user") {
//                 localStorage.setItem("user", JSON.stringify(data))
//                 nevigate("/")
//               }
//               else {
//                 localStorage.setItem("admin", JSON.stringify(data))
//                 nevigate("/")
//               }
//             } 
//             else {
//               console.log('enter correct password');
//               return;
//             }
//           }
//           else {
//             // console.log(data.email,"i am eklse");
//             // console.log(data,"i am eklse");
//             // console.log('enter correct email');
//             return;
//           }
//         })
//       });
//   }

//   return (
//     <div>
//         <div className="container">
//           <div className="screennn">
//             <div className="screennn__content">
//               <form className="login" onSubmit={handlerlogin}>
//                 <div className="login__field">
//                   <i className="login__icon fas fa-user" />
//                   <input type="text" className="login__input" name="email" onChange={onchange}
//                     // (e)=>{
//                     // setEmail(e.target.value)
                    
//                     // if(email.length<5){
//                     //   setError("emial must be at leats 5 charcter")
//                     // }
//                     // else{
//                     //   setError("")
//                     // }
//                   // }
                  
//                      placeholder="Email" />
//                 </div>
//                {/* {error&& <span>error:{error}</span>} */}
//                 <div className="login__field">
//                   <i className="login__icon fas fa-lock" />
//                   <input type="password" className="login__input" name="password" onChange={onchange
//                     // (e)=>
//                     // {setPassword(e.target.value)}
//                     } placeholder="Password" /><br/>
//                  {/* { password.length<8?<span style={{color:"red",fontSize:"12px"}}>password min length is 3</span>: " "} */}
//                 </div>
//                 {/* <button className="button login__submit">
//                   <span className="button__text">Log In Now</span>
//                   <i className="button__icon fas fa-chevron-right" />
//                 </button> */}
//                 <input type="submit" className="login__submit" value="Login" />
//               </form>
//               <div className="social-login">
//                 <h3>log in via</h3>
//                 <div className="social-icons">
//                   <a href="#" className="social-login__icon fab fa-instagram" />
//                   <a href="#" className="social-login__icon fab fa-facebook" />
//                   <a href="#" className="social-login__icon fab fa-twitter" />
//                 </div>
//               </div>
//             </div>
//             <div className="screennn__background">
//               <span className="screennn__background__shape screennn__background__shape4" />
//               <span className="screennn__background__shape screennn__background__shape3" />
//               <span className="screennn__background__shape screennn__background__shape2" />
//               <span className="screennn__background__shape screennn__background__shape1" />
//             </div>
//           </div>
//         </div>


//     </div>
//   )
// }
