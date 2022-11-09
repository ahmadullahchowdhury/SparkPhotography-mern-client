import React, { useState, useEffect, useContext } from "react";
import { useLoaderData, Link, Navigate, useLocation } from "react-router-dom";
import { fireAuthContext } from "../../Context/Context";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceDetails = () => {
  const { user } = useContext(fireAuthContext);
  const service = useLoaderData();
  const [reviews, setReviews] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-kowcher99.vercel.app/reviews"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        const filterReview = data.filter(
          (review) => review.service_id === service.service_id
        );

        setReviews(filterReview);
        

        // console.log(data)
      });
  }, [reviews, service.service_id]);
  //reviews, service.service_id

//   console.log(reviews);

  //   const handleLoginClick = () => {
  //      <Navigate to="/login" state={{from: location}} replace ></Navigate>
  //   }
  // const filterReview =  reviews.filter(review => review.service_id === service.service_id )
  // console.log(filterReview)
  const handleReview = (event) =>{
    event.preventDefault();
    const form = event.target;
    const reviewDetails = form.reviewDetails.value;
    const review = {
        user_id: user.uid,
        name: user.displayName,
        email: user.email,
        user_img: user.photoURL,
        details: reviewDetails,
        service_name: service.title,
        service_id: service.service_id
    }
    console.log(review)

    fetch("https://b6a11-service-review-server-side-kowcher99.vercel.app/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          form.reset()
          toast.success("Review Added Successfully", { autoClose: 1000 });
        })
        .catch((err) => console.error(err));

  }

//   const handleLogin = () => {
//     return <Navigate to="/login" state={{from: location}} replace ></Navigate>
//   }

  return (
    <div>
      <h1 className="m-4 font-3xl font-bold text-center">
        Here is details of: {service.title}
      </h1>
      <div className="flex flex-col lg:flex justify-center w-2/3 mx-auto">
        <img className="" src={service.img} alt="" />
        <p className="m-4  text-center ">{service.description}</p>
      </div>
      <h1 className="m-4 font-3xl font-bold text-center">
        Here is Reviews of: {service.title}
      </h1>

      {reviews.map((review) => (
        <>
          <div key={review._id}>
            <div className="flex justify-center m-3 p-3">
              <img
                className="w-10 h-10 rounded rounded-xl"
                src={review.user_img}
                alt=""
              />
              <div className="ml-4">
                <p>{review.name}</p>
                <h1>{review.details}</h1>
              </div>
            </div>
          </div>
        </>
      ))}
      {user?.email ? (
        <>
        <h1 className="text-center text-3xl m-3">You Can post review</h1>
        <div className="flex  justify-center m-3" >
<form className="mx-auto" onSubmit={handleReview}>
        <input
          type="text"
          name="reviewDetails"
          placeholder="Please Put your review here"
          className="input input-bordered input-primary w-full max-w-xs"
        />


        <input className="btn m-3 pl-5" type="submit" value="Submit Review" />
      </form>

      </div>

        </>
      ) : (
        <>
        <div className="flex justify-center">

          <button  onClick={()=> {
              <Navigate to="/login" state={{from: location}} replace ></Navigate>
          }} className="btn btn-secondary ">Please Login First</button>
        </div>
        </>
      )}


<ToastContainer autoClose={1000}  />
    </div>
  );
};

export default ServiceDetails;
