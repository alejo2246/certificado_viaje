import React from "react";

const InvalidCertificate = ({ responseModel }) => {
  return (
    <div class="h-screen">
      <div class="w-80 mt-24 m-auto lg:mt-16 max-w-sm ">
      <img
          src="./img/error.png"
          alt=""
          class="mx-auto rounded-t-2xl shadow-2xl lg:w-full 2xl:w-40 2xl:h-40 object-cover"
        />
        <div class="bg-white shadow-2xl rounded-b-3xl">
          <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">
            Lo siento!
          </h2>
          <div class="w-5/6 m-auto">
            <p class="text-center text-gray-500 pt-5">
              No se ha encontrado un certificado válido.
            </p>
          </div>

          <div class="w-5/6 m-auto">
            <p class="text-center text-gray-500 pt-5 pb-5 lg:text-sm">
              Intenta con otro código.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InvalidCertificate;
