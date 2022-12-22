import React from 'react';
import { Link, useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateReview = () => {
    const review = useLoaderData()
    console.log(review)

    const handleUpdateReview  = (event) => {       
        event.preventDefault()
        const reviewUpdateValue = event.target.updateReview.value

        const updatedReview= {
           details: reviewUpdateValue
        }
        
        console.log(updatedReview)

        fetch(`https://b6a11-service-review-server-side-kowcher99.vercel.app/reviews/${review._id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updatedReview),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            toast.success("Updated Successfully", { autoClose: 1000 });
            
            })
            .catch((err) => console.error(err));
    

    }
    return (

        <div className='flex justify-center'>
                        <form onSubmit={handleUpdateReview}>
                <input className="input input-bordered input-primary w-full max-w-xs m-3" type='text' name='updateReview' defaultValue={review.details}>
                </input>
                <button className="btn btn-info m-3">Update Review</button>
            </form>
            <ToastContainer autoClose={1000}  />
        </div>
        
    );
};

export default UpdateReview;