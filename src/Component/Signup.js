import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { signupschema } from '../schemas'

const intialvalues = { uname: "", email: "", password: "", confirmpassword: "" }

export default function Signup() {
  const nevigate = useNavigate()

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: intialvalues,
    validationSchema: signupschema,
    onSubmit: (values) => {
      // const {uname,email,password,confirmpassword}=values
      console.log(values);
      fetch('http://localhost:3008/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( values ),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log('Success:', result);
          nevigate("/")
        })
    }
  })
  // console.log(formik);   //at here we we get valyue if we werite formik ===replce of destruching
  console.log("error", errors);




  // const handleSubmit=()=>{
  //   // fetch('http://localhost:3008/user', {
  //   //   method: 'POST',
  //   //   headers: {
  //   //     'Content-Type': 'application/json',
  //   //   },
  //   //   body: JSON.stringify(data),
  //   // })
  //   // .then((response) => response.json())
  //   // .then((result) => {
  //   //   console.log('Success:', result);
  //   //   nevigate("/")
  //   // })

  // }


  return (
    <>
      <div className="containerrrr">
        <div className="screennn ">
          <div className="screennn__content containerrrr">
            {/* <div className="cont1 mx-3"> */}
              <form className="loginn " onSubmit={handleSubmit}>
                <h1>sign up</h1>
                <div className="login__field">
                  <i className="login__icon fas fa-user" />
                  <input type="text" className="login__input" name="uname" value={values.uname} onChange={handleChange}  onBlur={handleBlur} placeholder="User name" /><br />
                  {errors.uname && touched.uname ? (<span style={{ color: 'red' }}> {errors.uname}</span>) : null}
                </div>
                <div className="login__field">
                  <i class="login__icon fa-solid fa-envelope"></i>
                  <input type="text" className="login__input" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email" /><br />
                  {errors.email && touched.email ? (<span style={{ color: 'red' }}> {errors.email}</span> ): null}
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock" />
                  <input type="password" className="login__input" name="password" value={values.password} onChange={handleChange}  onBlur={handleBlur} placeholder="Password" /><br />
                  {errors.password && touched.password ? (<span style={{ color: 'red' }}> {errors.password}</span>) : null}
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock" />
                  <input type="password" className="login__input" placeholder='cpassword' name="confirmpassword" value={values.confirmpassword} onBlur={handleBlur} onChange={handleChange} /><br />
                  {errors.confirmpassword && touched.confirmpassword ? (<span style={{ color: 'red' }}> {errors.confirmpassword}</span>) : null}
                </div>
                {/* <button className="button login__submit">
                  <span className="button__text">Sign up</span>
                  <i className="button__icon fas fa-chevron-right" />
                </button> */}
                <input type='submit' className="button login__submit" placeholder='sign up' />
              </form>
            {/* </div> */}

          </div>
          <div className="screennn__background">
            <span className="screennn__background__shape screennn__background__shape4" />
            <span className="screennn__background__shape screennn__background__shape3" />
            <span className="screennn__background__shape screennn__background__shape2" />
            <span className="screennn__background__shape screennn__background__shape1" />
          </div>
        </div>
      </div>

    </>
  )
}


// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useFormik } from 'formik'
// import { signupschema } from '../schemas'

// const intialvalues = { uname: "", email: "", password: "", confirmpassword: "" }

// export default function Signup() {
//   const nevigate = useNavigate()

//   const { values, errors, touched,handleBlur, handleChange, handleSubmit } = useFormik({
//     initialValues: intialvalues,
//     validationSchema: signupschema,
//     onSubmit: (values) => {
//       // const {uname,email,password,confirmpassword}=values
//       console.log(values);
//       fetch('http://localhost:3008/user', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify( values ),
//       })
//         .then((response) => response.json())
//         .then((result) => {
//           console.log('Success:', result);
//           nevigate("/")
//         })
//     }
//   })
//   // console.log(formik);   //at here we we get valyue if we werite formik ===replce of destruching
//   console.log("error", errors);




//   // const handleSubmit=()=>{
//   //   // fetch('http://localhost:3008/user', {
//   //   //   method: 'POST',
//   //   //   headers: {
//   //   //     'Content-Type': 'application/json',
//   //   //   },
//   //   //   body: JSON.stringify(data),
//   //   // })
//   //   // .then((response) => response.json())
//   //   // .then((result) => {
//   //   //   console.log('Success:', result);
//   //   //   nevigate("/")
//   //   // })

//   // }


//   return (
//     <>
//       <div className="containerrrr">
//         <div className="screennn">
//           <div className="screennn__content">
//             <div className="cont1 mx-3 my-3">
//               <form className="loginn" onSubmit={handleSubmit}>
//                 <h1>sign up</h1>
//                 <div className="login__field">
//                   <i className="login__icon fas fa-user" />
//                   <input type="text" className="login__input" name="uname" value={values.uname} onChange={handleChange}  onBlur={handleBlur} placeholder="User name" /><br />
//                   {errors.uname && touched.uname ? (<span style={{ color: 'red' }}> {errors.uname}</span>) : null}
//                 </div>
//                 <div className="login__field">
//                   <i class="login__icon fa-solid fa-envelope"></i>
//                   <input type="text" className="login__input" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email" /><br />
//                   {errors.email && touched.email ? (<span style={{ color: 'red' }}> {errors.email}</span> ): null}
//                 </div>
//                 <div className="login__field">
//                   <i className="login__icon fas fa-lock" />
//                   <input type="password" className="login__input" name="password" value={values.password} onChange={handleChange}  onBlur={handleBlur} placeholder="Password" /><br />
//                   {errors.password && touched.password ? (<span style={{ color: 'red' }}> {errors.password}</span>) : null}
//                 </div>
//                 <div className="login__field">
//                   <i className="login__icon fas fa-lock" />
//                   <input type="password" className="login__input" placeholder='cpassword' name="confirmpassword" value={values.confirmpassword} onBlur={handleBlur} onChange={handleChange} /><br />
//                   {errors.confirmpassword && touched.confirmpassword ? (<span style={{ color: 'red' }}> {errors.confirmpassword}</span>) : null}
//                 </div>
//                 {/* <button className="button login__submit">
//                   <span className="button__text">Sign up</span>
//                   <i className="button__icon fas fa-chevron-right" />
//                 </button> */}
//                 <input type='submit' className="button login__submit" placeholder='sign up' />
//               </form>
//             </div>

//           </div>
//           <div className="screennn__background">
//             <span className="screennn__background__shape screennn__background__shape4" />
//             <span className="screennn__background__shape screennn__background__shape3" />
//             <span className="screennn__background__shape screennn__background__shape2" />
//             <span className="screennn__background__shape screennn__background__shape1" />
//           </div>
//         </div>
//       </div>

//     </>
//   )
// }
