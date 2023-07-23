import React from 'react';
import { FaGofore, FaFacebook, FaPeopleArrows } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="divider text-white">OR</div>
            <p className='text-center text-white'>Sign-In With</p>
            <div className='flex gap-5 mt-5'>
                <button className='btn btn-warning btn-circle text-xl transition ease-in-out delay-150 border border-white hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300'><FaGofore/></button>
                <button className='btn btn-warning btn-circle text-xl transition ease-in-out delay-150 border border-white hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300'><FaFacebook/></button>
                <button className='btn btn-warning btn-circle text-xl transition ease-in-out delay-150 border border-white hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300'><FaPeopleArrows/></button>
            </div>
        </div>
    );
};

export default SocialLogin;