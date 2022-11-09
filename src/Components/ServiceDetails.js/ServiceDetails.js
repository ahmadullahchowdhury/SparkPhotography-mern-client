import React, { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-kowcher99.vercel.app/reviews"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        
            const filterReview =  data.filter(review => review.service_id === service.service_id )

        

        setReviews(filterReview);
        
        // console.log(data)
      });
  }, [reviews, service.service_id]);
  //reviews, service.service_id

    console.log(reviews)
    // const filterReview =  reviews.filter(review => review.service_id === service.service_id )
    // console.log(filterReview)

  
  return (
    <div>
      <h1 className="m-4 font-3xl font-bold text-center">
        Here is details of: {service.title}
      </h1>
      <div className="flex justify-center w-2/3 mx-auto">
        <img className="" src={service.img} alt="" />
        <p className="m-4  text-center ">{service.description}</p>
      </div>
      <h1 className="m-4 font-3xl font-bold text-center">
        Here is Reviews of: {service.title}
      </h1>
      
      {
reviews.map(review => <>
<div className="flex justify-center m-3 p-3">

<img className="w-10 h-10 rounded rounded-xl" src={review.user_img} alt="" />
<div className="ml-4">
<p>{review.name}</p>
<h1>{review.details}</h1>
</div>
</div>

</>
)
      }

 
    </div>
  );
};

export default ServiceDetails;
