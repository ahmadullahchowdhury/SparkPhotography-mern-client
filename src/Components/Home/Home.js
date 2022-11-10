import React from 'react';
import useTitle from '../Hooks/hooks';
import { useLoaderData , Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Home = () => {
    useTitle('Home')
    const services = useLoaderData()
    console.log(services)
    return (
        <PhotoProvider>

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
           <div className='grid grid-cols-1  mx-auto md:grid-cols-3  justify-center '>
            {
                services.map(service =>  <div key={service._id} className=" w-96 mx-auto card card-side bg-base-100 shadow-xl p-3">
                     <PhotoView key={service._id} src={service.img}>

                <img className='w-1/2 h-2/3 my-auto' src={service.img} alt="img"/>
                     </PhotoView>
                <div className="card-body">
                  <h2 className="card-title">{service.title}</h2>
                  <h2 className="card-title"> Price: {service.price}</h2>
                  <div className='inline-flex' ><p>{service.description.slice(0,100)}<p>...</p></p></div>
                  
                  <div className="card-actions justify-end">
                  <Link  className='btn btn-primary' to={`/services/${service._id}`}>See More </Link>
                  </div>
                </div>
              </div>
                    
                )
            }


           </div>
           <div className='flex justify-center'>

            <Link  className='btn btn-primary m-4 p-4' to='/services'>See All </Link>

           
           </div>
        </div>
        </PhotoProvider>
    );
};

export default Home;