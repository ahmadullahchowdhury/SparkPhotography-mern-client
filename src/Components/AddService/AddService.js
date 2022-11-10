import React from "react";
import useTitle from "../Hooks/hooks";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceId = form.serviceId.value;
    const serviceTitle = form.serviceTitle.value;
    const serviceImg = form.serviceImg.value;
    const serviceDescription = form.serviceDescription.value;
    const servicePrice = form.servicePrice.value;

    const newService = {
        service_id:serviceId,
        title:serviceTitle,
        img:serviceImg,
        price:servicePrice,
        description:serviceDescription
    }
    console.log(newService)

    fetch("https://b6a11-service-review-server-side-kowcher99.vercel.app/services", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newService),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          form.reset()
          toast.success("Service Added Successfully", { autoClose: 1000 });
        })
        .catch((err) => console.error(err));

  };
  useTitle("Add Service");
  return (
    <>
      <h1 className="text-center text-3xl m-3">You Can post review</h1>
        <form className="flex justify-center" onSubmit={handleAddService}>
      <div className="grid grid-cols-1  ">

          <input
            type="text"
            name="serviceId"
            placeholder="Service ID: PUT 3 digit number"
            className="input input-bordered input-primary w-full max-w-xs m-3"
          />
          <input
            type="text"
            name="serviceTitle"
            placeholder="Service Title"
            className="input input-bordered input-primary w-full max-w-xs m-3"
          />
          <input
            type="text"
            name="serviceImg"
            placeholder="PUT img link here"
            className="input input-bordered input-primary w-full max-w-xs m-3"
          />
          <input
            type="text"
            name="servicePrice"
            placeholder="Price"
            className="input input-bordered input-primary w-full max-w-xs m-3"
          />
          <input
            type="text"
            name="serviceDescription"
            placeholder="Service Description"
            className="input input-bordered input-primary w-full max-w-xs m-3"
          />

          <input className="btn m-3 pl-5" type="submit" value="Submit Service" />
      </div>
        </form>

        <ToastContainer autoClose={1000}  />
   
    </>
  );
};

export default AddService;
