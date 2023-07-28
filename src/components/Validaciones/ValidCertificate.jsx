import React from "react";

const ValidCertificate = ({ responseModel, setShowModal }) => {
  return (
    <div className="">
      <div className="w-96 mt-24 m-auto lg:mt-16 max-w-sm ">
        <img
          src="./img/gift.png"
          alt=""
          className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-40 object-cover"
        />
        <div className="bg-white shadow-2xl rounded-b-3xl">
          <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">
            Felicidades!
          </h2>
          <div className="w-5/6 m-auto">
            <p className="text-center text-gray-500 pt-5">
              Has recibido un certificado de viaje de {responseModel.jefe}!
            </p>
          </div>
          <div className="validCertificateTitle">
            <h3 className="pt-5">{responseModel.producto}</h3>
            <p className="vColor">
              <span id="cert_time"></span>
            </p>
          </div>
          <div className="grid grid-cols-3 w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
            <div className="col-span-1">
              <img
                className="w-10 lg:w-12"
                src="./img/gifticon.png"
                alt="music icon"
              />
            </div>
            <div className="col-span-2 pt-0 uppercase">
              <p className="text-gray-800 font-bold lg:text-sm">Fecha de expiracion: {responseModel.expiracion}</p>
            </div>
          </div>
          <div className="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
            <button className="lg:text-md text-lg font-bold uppercase">
              Generar certificado
            </button>
          </div>
          <div className="w-5/6 m-auto">
            <p className="text-justify text-center text-gray-500 pt-5 pb-5 lg:text-sm">
              Al generar tu certificado tu código será activado y no podrá
              volverse a usar. Tu certificado será valido para su uso en nuestro
              sistema de reservas.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ValidCertificate;
