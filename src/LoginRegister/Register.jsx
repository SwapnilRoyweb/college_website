import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {
    return (
        <div className="hero h-fit lg:max-h-screen bg-yellow-100 w-3/4 mx-auto my-10 rounded-lg py-8">
            <div className="w-full flex flex-col items-center justify-evenly lg:flex-row gap-10">
                <div className="text-center lg:text-left">
                    <img src="https://i.ibb.co/423cStD/20602920-6325227-removebg-preview.png" alt=""/>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black bg-opacity-90">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-center text-white mb-5">Sign-Up now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered text-white" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered text-white" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered text-white" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Sign-Up</button>
                        </div>
                        <p className='text-white text-center mt-3'>Already have an Account? Please <Link to='/login'><span className='text-yellow-500'>Sign-In</span></Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;