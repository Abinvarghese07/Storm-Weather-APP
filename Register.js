import React from 'react';

const Register = () => {
    return (
         <div className='bg-indigo-300 h-screen w-full mt-5 flex justify-center  '>
            <div className='mt-[8%] '>
                <form className='font-mono flex flex-col p-8 shadow-md shadow-indigo-700 '>
                    <h2 className='font-bold text-4xl py-2 text-decoration: underline'>SignUp</h2>
                    <label className='text-2xl font-bold py-2'>Mail</label>
                    <input className='p-2 rounded-[10px]' placeholder='Enter your mail'></input>
                    <label className='text-2xl font-bold py-2'>Password</label>
                    <input className='p-2 rounded-[10px] ' placeholder='Enter your password'></input>
                    <button className='bg-indigo-500 p-2 rounded-[20px] mt-2'>Register</button>
                    <button className='bg-indigo-500 p-2 rounded-[20px] mt-2'>Already have an account?SignIn here</button>
                </form>
        
            </div>
        </div>
    );
};

export default Register;