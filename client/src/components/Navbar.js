import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <ul className="nav-menu">
                <li className="nav-item">
                    <Link to=''></Link>
                </li>
                <li className="nav-item">
                    <Link to='/login'>Login</Link>
                </li>
                <li className="nav-item">
                    <Link to='/signin'>Sign In</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
