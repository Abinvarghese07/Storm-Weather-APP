import React from 'react';
import { Link, animateScroll } from 'react-scroll'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()

    const eventHandler = () => {
        navigate('/')
    }
    return (
        <div className='font-mono text-2xl bg-indigo-200 p-4 '>
            <nav className='flex justify-around  items-center '>
                <h2 className='font-bold text-3xl'>Storm.</h2>
                <ul className='gap-7 hidden md:flex cursor-pointer  '>
                    <Link onClick={eventHandler}  to="/home" smooth={true} offset={50} duration={500}><li className='hover:text-indigo-700'>Home</li></Link>
                    <Link onClick={eventHandler} to="home" smooth={true} offset={50} duration={500}><li className='hover:text-indigo-700'>Weather</li></Link>
                    

               
                    <NavLink to='/signin'>
                    <li className='hover:text-indigo-700'>SignIn</li>
                    </NavLink>
                    <NavLink to='/signup'>
                        <li className='hover:text-indigo-700'>SignUp</li>
                    </NavLink>

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;