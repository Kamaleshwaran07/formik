import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='container-fluid'>
                <div className='navbar-brand'>Book World</div>
                {/* <div className='center'> */}

                    <ul className='navbar-nav flex-row justify-content-center'>
                        <li className='nav-item p-2'><Link to={'/'} className='nav-link'>Home</Link></li>
                        <li className='nav-item p-2'><Link to={'/body'} className='nav-link'>Body</Link></li>

                    </ul>
                        <li className='nav-item d-flex flex-row p-2'><Link to={'/create'} className='nav-link'>Create</Link></li>
                {/* </div> */}

            </div>
        </nav>
    );
};

export default Navbar;