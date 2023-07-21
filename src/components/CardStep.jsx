import React from "react";

const CardStep = ({step, subtitle, image, description}) => {
  return (
    <div className="transition-transform duration-500 cursor-pointer hover:scale-105 shadow-md max-w-sm h-full p-4 border-solid border border-gray-100 rounded-md flex flex-col justify-start items-center">
      <h3 className="text-3xl font-medium">{step}</h3>
      <h3 className="text-3xl font-medium text-center">{subtitle}</h3>
      <div className="">
        <img className="" src={image} alt="" />
      </div>
      <p className="text-slate-500 text-justify">{description}</p>
    </div>
  );
};

export default CardStep;
