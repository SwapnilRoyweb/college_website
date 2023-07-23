import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/18234016_v1033-a-06-c-removebg-preview1.png'

const Navbar = () => {

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Colleges</Link></li>
        <li><Link to='/'>Admission</Link></li>
        <li><Link to='/'>My College</Link></li>
    </>

    return (
        <div className="navbar bg-yellow-100 bg-opacity-50">
            <div className="navbar-start">
                <Link to='/' className='ml-0 lg:ml-10'>
                    <div className='flex items-center gap-2'>
                        <img src={logo} alt="" className='h-10 w-16' />
                        <h1 className='font-bold text-2xl text-yellow-500 uppercase'>Education-<span className='text-black'>Hub</span></h1>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-3">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] py-2 shadow bg-yellow-100 bg-opacity-50 rounded-box w-36">
                            {navItems}
                        </ul>
                    </div>
                <Link to='/register'><button className='btn mr-0 lg:mr-10'>SignUp</button></Link>
            </div>
        </div>
    );
};

export default Navbar;