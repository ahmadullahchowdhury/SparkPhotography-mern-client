import React from 'react';
import useTitle from '../Hooks/hooks';
import { useLoaderData , Link } from "react-router-dom";

const Home = () => {
    useTitle('Home')
    const services = useLoaderData()
    console.log(services)
    return (
        <div>
           <h1 className='text-3xl font-bold text-center p-4' >Welcome to Spark Photography</h1> 
           <h1 className='text-xl font-bold text-center p-4' >Here I provide all kinds of photography service</h1> 
           <div className='flex justify-center'>
            
           <img  src='https://cdn.pixabay.com/photo/2015/02/15/09/30/photography-636973_960_720.jpg' alt='banner' ></img>
           </div>
           <div className=''>
             <div className='text-center'>

                <h1  className=' text-3xl font-bold text-center p-4'>Hello! Let me introduce myself.</h1>
                <div className='flex'>

                <p className='w-1/3 mx-auto'>Hi, I'm James and in our studio we'll take your items and give them that professional studio look. Everything will be shot on models that I work with every week.We have years of experience photographing items for vintage and new brand sellers. Our photograph</p>
                <p  className='w-1/3 mx-auto'>y has been used on Asos Marketplace, Depop, Etsy, eBay and more. Our photography is regularly used by and re-grammed by major Instagram profiles to promote their pages and our customers I work with every week.We have years of experience photographing</p>
                </div>

                <h1  className=' text-3xl font-bold text-center p-4'>Here is where you can find me</h1>
                <p>31 New Dawn Circle Chico, CA 95928</p>
                <p>1 (530) 592 4344</p>
                <p>contact@sparkphotography.com</p>
             </div>
            
           </div>

           <h1 className='text-3xl font-bold text-center p-4' >Explore List of services</h1> 
           <div className='grid grid-cols-3 justify-center'>
            {
                services.map(service =>  <div key={service._id} className="card card-side bg-base-100 shadow-xl">
                <figure><img className='h-full' src={service.img} alt="img"/></figure>
                <div className="card-body">
                  <h2 className="card-title">{service.title}</h2>
                  <h2 className="card-title"> Price: {service.price}</h2>
                  <p>{service.description.slice(0,100)}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">See More</button>
                  </div>
                </div>
              </div>
                    
                )
            }


           </div>
           <div className='flex justify-center'>

            <Link  className='btn btn-primary' to='/services'>See All </Link>

           
           </div>
        </div>
    );
};

export default Home;