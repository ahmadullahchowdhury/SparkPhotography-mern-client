import React from 'react';

const Home = () => {
    return (
        <div>
           <h1 className='text-3xl font-bold text-center p-4' >Welcome to Spark Photography</h1> 
           <h1 className='text-xl font-bold text-center p-4' >Here I provide all kinds of photography service</h1> 
           <div className='flex justify-center'>
            
           <img  src='https://cdn.pixabay.com/photo/2015/02/15/09/30/photography-636973_960_720.jpg' alt='banner' ></img>
           </div>

           <h1 className='text-3xl font-bold text-center p-4' >Explore List of services</h1> 
           <div className='flex justify-center'>

           <button className='btn btn-primary '>See All </button>
           </div>
        </div>
    );
};

export default Home;