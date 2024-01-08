import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

const NavBar = () => {
    return <>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container text-light">
                <Link to={"/"} className='text-light text-decoration-none'>
                    <img src={logo} alt="" style={{ width: "8vh" }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <Link to='/' className='text-light text-decoration-none p-2'>Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to={'/about'} className='text-light text-decoration-none p-2'>About</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </>

}

export default NavBar