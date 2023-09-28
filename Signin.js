import React from 'react';
import { useNavigate } from 'react-router-dom';




const Signin = () => {


    const navigate = useNavigate()

    const regHandler = () => {
        navigate('/signup')
    }
    
    return (
        <div className='bg-indigo-300 h-screen w-full mt-5 flex justify-center  '>
            <div className='mt-[8%] '>
                <form className='font-mono flex flex-col p-8 shadow-md shadow-indigo-700 '>
                    <h2 className='font-bold text-4xl py-2 text-decoration: underline'>SignIn</h2>
                    <label className='text-2xl font-bold py-2'>Mail</label>
                    <input className='p-2 rounded-[10px]' placeholder='Enter your mail'></input>
                    <label className='text-2xl font-bold py-2'>Password</label>
                    <input className='p-2 rounded-[10px] ' placeholder='Enter your password'></input>
                    <button className='bg-indigo-500 p-2 rounded-[20px] mt-2'>SignIn</button>
                    <button onClick={regHandler} className='bg-indigo-500 p-2 rounded-[20px] mt-2'>Dont have an account?Signup here</button>
                </form>
        
            </div>
        </div>
    );
};

export default Signin;