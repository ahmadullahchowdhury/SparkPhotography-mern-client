import React, { useContext, useEffect, useState } from "react";
import useTitle from "../Hooks/hooks";
import { fireAuthContext } from "../../Context/Context";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
  const { user } = useContext(fireAuthContext);
  console.log(user.email);
  const [noReview, setNoReview] = useState(" ");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-kowcher99.vercel.app/reviews"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        const filterEmail = data.filter((email) => user.email === email.email);
        console.log(filterEmail);

        setReviews(filterEmail);

        if (filterEmail.length === 0) {
          setNoReview("No review found");
        }
        // const filterReview =  data.filter(review => review.service_id === service.service_id )

        // console.log(data)
      });
  }, [reviews, user.email]);

  const handleDelete = id => {
    const proceed = window.confirm(`Are you sure to delete this: ${id}`)
    console.log(proceed)
    
    if(proceed){
        fetch(`https://b6a11-service-review-server-side-kowcher99.vercel.app/reviews/${id}`, {
            method: "DELETE" 
        }).then(res => res.json()).then(data => {
            console.log(data)
            toast.success("Deleted Successfully", { autoClose: 1000 });
            // if(data.deletedCount > 0) {

            //     const remaining = displayEmail.filter(disEmail => disEmail._id !== id )
            //     setDisplayEmail(remaining)
            // }
        }).catch((err) => console.error(err));
        
    }


  }

  useTitle("My Reviews");
  return (
    <div>
      <h1 className="text-center text-5xl m-4">{noReview}</h1>
      {reviews.map((review) => (
        <>
          <div key={review._id} className="flex justify-center m-3 p-3">
            <img
              className="w-10 h-10 rounded rounded-xl"
              src={review.user_img}
              alt=""
            />
            <div className="ml-4">
              <p className="text-xl">{review.name}</p>
              <h1>{review.details}</h1>
            </div>
            <button className="btn btn-warning m-3" onClick={ () => handleDelete(review._id)} >Delete</button>
            <button className="btn btn-secondary m-3"  >Update Review</button>
          </div>
        </>
      ))}
      <ToastContainer autoClose={1000}  />
    </div>
  );
};

export default MyReviews;
