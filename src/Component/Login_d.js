import React from 'react'

export default function Login_d() {
    return (
        <>
            <div className="main d-flex">
                <div className="log-top">
                    <h2></h2>
                </div>
                <div className="containerlogin">
                    <h1 className='my-2 rrr'>Sign in</h1>
                    <ul>
                        <li className="icon">
                            <i className="fa-brands fa-facebook" />
                        </li>
                        <li className="icon">
                            <i className="fa-brands fa-google-plus-g" />
                        </li>
                        <li className="icon">
                            <i className="fa-brands fa-linkedin" />
                        </li>
                    </ul>
                    <p >or use your account</p>
                    <label htmlFor="email" />
                    <input type="Email" className="input" placeholder="Email" /><br />
                    <input type="text" className="input" placeholder="Password" />
                    <p>Forgot your Password ?</p>
                    <button className="button sm-4">Login</button>
                </div>
                {/* <div className="containerlogin2">
                    <h1>Hi There!</h1>
                    <p>Enter your personal detail to open an account with us</p>
                    <button className="button">SIGN IN</button>
                </div> */}
            </div>

        </>
    )
}
