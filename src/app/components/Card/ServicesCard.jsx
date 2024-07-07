import Image from "next/image";
import React from "react";

const ServicesCard = ({service}) => {
    const {title, img, price} = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <Image width={430} height={130} src={img} alt="Service Image"/>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">S{title}</h2>
        <div className="card-actions flex justify-between items-center ">
            <h6 className="text-primary font-bold">Price : ${price}</h6>
            <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
