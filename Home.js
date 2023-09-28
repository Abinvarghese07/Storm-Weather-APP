import React from 'react';
import { useState,useEffect } from 'react';
import Typed from 'react-typed'

const Home = () => {
    const[data,getData] = useState({})
    const[search,setSearch] = useState('London')

    const setData = async () => {
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6a1f59bcf73af304440becebe48b9a3d`
    const response = await fetch(api_url)
    const data = await response.json()
    console.log(data)
    getData(data)
    }

    useEffect(() => {
        setData()

    },[search])

   

    const submitHandler = (e) => {
        e.preventDefault()
        setData()
    }









    return (
        <div name='home' className='bg-indigo-300  mt-5 flex   justify-center shadow-md p-5  py-8 max-h-full'> 
            <div className='bg-indigo-200 font-mono my-4 mt-6 px-[10%] h-full  flex flex-col items-center rounded-[30px] p-5 '>
                <h2 className='font-bold text-center text-7xl text-indigo-700 '>Storm.</h2>
                <h3 className='text-center text-2xl py-5 font-bold md:text-5xl'>Know your weather</h3>
                <div className='font-mono text-5xl p-4 text-indigo-700 font-bold'>
                    <Typed strings={['Sunny?','Cloudy?','Misty?','Rainy?']} typeSpeed={100} backSpeed={100}loop ></Typed>
                </div>

                <div className='flex  p-2 '>
                    <input onChange={(e) => setSearch(e.target.value)} className='p-2 w-full rounded-lg' placeholder='Enter your place...'></input>
                    <button   onClick={submitHandler} className='bg-indigo-600 rounded-lg p-2'>Search</button>
                
                    
                </div>


                {typeof data.main != 'undefined' ? (
                    <div className='p-3 items-center flex flex-col shadow-md shadow-gray-700 rounded-lg'>
                             
                        <h2 className='font-bold text-5xl p-2 '>{data.name}</h2>
                        <h2 className='font-bold text-3xl p-2'>{data.main.humidity}% Humidity</h2> 
                        <h2 className='font-bold text-4xl p-2 text-indigo-700'>{data.main.temp}/Fah</h2>
                        <h2 className='text-5xl p-2 text-indigo-700 font-light '>{data.weather[0].main}</h2>
                        <p className='text-3xl p-2'>{data.weather[0].description}</p>
                        <h3 className='text-3xl p-2'>{data.wind.speed}-WindSpeed</h3>  

                    </div>

                )   
                :
                (
                    ""
                )              
                
                }


            

            </div>
           
            
        </div>
    );
};

export default Home;