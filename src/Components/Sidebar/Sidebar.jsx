import React from 'react'
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <>
            <ul className='row list-unstyled bg-dark p-3 mt-3' style={{ height: "100vh", position: "sticky", top: "0" }}>
                <div className='container mt-5'>
                    <li className='mb-4'>
                        <Link to="/products" className='text-decoration-none fw-bold text-light'>Our Products</Link>
                    </li>
                    <li>
                        <Link to={'/categories'} className='text-decoration-none fw-bold text-light'>Our Categories</Link>
                    </li>
                </div>
            </ul>
        </>
    )
}

export default Sidebar;
