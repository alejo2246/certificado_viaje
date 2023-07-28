import React from "react";

const InvalidCertificate = ({ responseModel }) => {
  return (
    <div className="">
      <div className="w-80 mt-24 m-auto lg:mt-16 max-w-sm ">
      <img
          src="./img/error.png"
          alt=""
          className="mx-auto rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-40 object-contain"
        />
        <div className="bg-white shadow-2xl rounded-b-3xl">
          <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">
            Lo sentimos!
          </h2>
          <div className="w-5/6 m-auto">
            <p className="text-center text-gray-500 pt-5">
              {responseModel.error}
              
            </p>
            <p className="text-center text-gray-500 pt-5">
              {responseModel.detail}              
            </p>
          </div>

          <div className="w-5/6 m-auto">
            <p className="text-center text-gray-500 pt-5 pb-5 lg:text-md">
              Intenta con otro código.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InvalidCertificate;
