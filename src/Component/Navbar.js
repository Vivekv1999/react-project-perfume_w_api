import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'


export default function Navbar() {

    const navigate = useNavigate()

    // useEffect(() => {
    //     if (localStorage.getItem('user')) {
    //         console.log('ff')
    //         navigate('/')
    //     }
    // },[])


    const handleLogout = (e) => {
        e.preventDefault()


        if (localStorage.getItem('user')) {
            localStorage.removeItem('user')
             navigate('/')

        }
        else {
            localStorage.removeItem('admin')

        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        {
                            (localStorage.getItem('user')) ?
                                <>
                                    <form className='d-flex'>
                                        <Link className="btn btn-primary mx-2" to="/login">User</Link>
                                        <Link className="btn btn-primary mx-2" to="/singup" onClick={handleLogout}>Logout</Link>
                                    </form>
                                </>
                                :
                                (localStorage.getItem("admin")) ?
                                    <>
                                        <form className='d-flex'>
                                            <Link className="btn btn-primary mx-2" to="/login" >Admin</Link>
                                            <Link className="btn btn-primary mx-2" to="/singup" onClick={handleLogout} >Logout</Link>
                                        </form>
                                    </>
                                    :
                                    <>
                                        <form className='d-flex'>
                                            <Link className="btn btn-primary mx-2" to="/login">Login</Link>
                                            <Link className="btn btn-primary mx-2" to="/singup">Sign up</Link>
                                        </form>
                                    </>
                        }
                    </div>
                </div>
            </nav>


        </>
    )
}
