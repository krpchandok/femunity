import React from 'react'

const Navbar = () => {
    return (
        <nav className="nav">
            <a href="/" className='font-mono text-white hover:text-pink-200'> 
                Femunity
            </a>

            <ul>
                <li>
                 <a href="/about-us" className="text-white hover:text-pink-200 transition"> Our Mission </a>
                </li>
                <li>
                    <a href="/resources" className="text-white hover:text-pink-200 transition"> Resources </a>
                </li>
                <li>
                 <a href="/user-info/similar-users" className="text-white hover:text-pink-200 transition"> Match </a>
                </li>
                <li>
                    <a href="/user-info" className="text-white hover:text-pink-200 transition"> Profile </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;