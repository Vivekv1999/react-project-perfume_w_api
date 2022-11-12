import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const nevigate = useNavigate()
  // const [uname, setUname] = useState()
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  const [data, setdata] = useState({ uname: "", email: "", password: "", roll: "user" })

  const onchange = (e) => {
    // console.log(e.target);
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3008/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
        nevigate("/")
      })

  }

  return (
    <>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <div className="cont1 mx-3 my-3">
              <form className="loginn" onSubmit={handlesubmit}>
                <h1>sign up</h1>
                <div className="login__field">
                  <i className="login__icon fas fa-user" />
                  <input type="text" className="login__input" name="uname" onChange={onchange} placeholder="User name" />
                </div>
                <div className="login__field">
                  <i class="login__icon fa-solid fa-envelope"></i>
                  <input type="text" className="login__input" name="email" onChange={onchange} placeholder="Email" />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock" />
                  <input type="password" className="login__input" name="password" onChange={onchange} placeholder="Password" />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock" />
                  <input type="password" className="login__input" placeholder="Confirm Password" />
                </div>
                <button className="button login__submit">
                  <span className="button__text">Sign up</span>
                  <i className="button__icon fas fa-chevron-right" />
                </button>
              </form>
            </div>

          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4" />
            <span className="screen__background__shape screen__background__shape3" />
            <span className="screen__background__shape screen__background__shape2" />
            <span className="screen__background__shape screen__background__shape1" />
          </div>
        </div>
      </div>

    </>
  )
}
