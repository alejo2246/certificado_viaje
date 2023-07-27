import React, { useState, useMemo } from "react";
import { Fireworks } from "@fireworks-js/react";

import Modal from "./Form";

import "../styles/Validate.css";
import "animate.css";

import axios from "axios";
import ValidCertificate from "./Validaciones/ValidCertificate";
import InvalidCertificate from "./Validaciones/InvalidCertificate";
import Loader from "./Validaciones/Loader";
import ModalContent from "./Validaciones/ModalContent";

axios.defaults.headers.common["Access-Control-Allow-Origin"] =
  "http://localhost:5173";

const ValidationArea = () => {
  const [inputCode, setInputCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [responseModel, setResponseModel] = useState({});
  const [showFire, setShowFire] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mailSent, setMailSent] = useState(false);
  const [mailSentError, setMailSentError] = useState(false);

  const [isValidCode, setIsValidCode] = useState(false);
  const [isInvalidCode, setIsInvalidCode] = useState(false);

  const handleValidation = (e) => {
    e.preventDefault();
    setIsValidCode(false);
    setIsInvalidCode(false);
    setMailSentError(false);
    setMailSent(false);
    if (inputCode.trim() === "") {
      setErrorMessage("Ingresa un código antes de validar");
    } else {
      setShowLoader(true);
      setErrorMessage("");
      axios
        .post(
          `https://app.certificadodeviaje.com/api/addCertificado?key_code=${inputCode}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          const data = response.data;
          console.log(data);
          setShowLoader(false);
          if (data.success) {
            setResponseModel({
              tiempo: data.tiempo,
              jefe: data.jefe,
              certificado: data.certificado,
              producto: data.producto,
              expiracion: data.expiracion,
            });
            setIsValidCode(true);
            setShowFire(true);

            setTimeout(() => {
              setShowFire(false);
            }, 6500);
          } else {
            setIsInvalidCode(true);
            setResponseModel({
              error: data.errors,
              detail: data.detalle,
            });
          }
          console.log(data);
        })
        .catch((err) => console.error(err));
    }
  };
  const handleMailSent = (data) => {
    setIsValidCode(false);
    setIsInvalidCode(false);
    setMailSent(data);
  };

  const handleMailSentError = (data) => {
    setIsValidCode(false);
    setIsInvalidCode(false);
    setMailSentError(data);
  };
  return (
    <section className="validateSection" id="formvalidar">
      {showFire && (
        <Fireworks
          options={{ opacity: 0.5 }}
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: "-1",
            transition: "0.5s ease-in-out",
          }}
        />
      )}
      <div className="containerValidate">
        <div className="title">
          <h3>Valida tu código de viaje</h3>
        </div>
        <form className="formValidate" id="myForm" method="post">
          <div className="inputContainer">
            <input
              className={`inputCode ${errorMessage ? "error" : ""}`}
              id="code_for_validation"
              name="name"
              placeholder="Escribe aquí tu código de viaje"
              required=""
              type="text"
              autoComplete="true"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
            />
            {errorMessage && (
              <span className="errorMessage">{errorMessage}</span>
            )}
          </div>
          <button
            className={`submitBtValidation button ${
              showLoader ? "hidden" : ""
            }`}
            onClick={() => handleValidation()}
          >
            VALIDAR CÓDIGO
          </button>
        </form>
        <Loader showLoader={showLoader} />
        {isValidCode && (
          <ValidCertificate
            responseModel={responseModel}
            setShowModal={setShowModal}
          />
        )}
        {isInvalidCode && <InvalidCertificate responseModel={responseModel} />}
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <ModalContent
          inputCode={inputCode}
          responseModel={responseModel}
          handle1={handleMailSent}
          handle2={handleMailSentError}
          setShowModal={setShowModal}
        />
      </Modal>
      {mailSent && (
        <div className="row justify-content-center pt-20">
          <div className="menu-content pb-30 col-lg-8">
            <div className="title text-center">
              <h3 className="mb-10 yes-valid">¡FELICIDADES!</h3>
              <p style={{ fontSize: "20px", fontWeight: "900" }}>
                Su certificado ha sido generado.
              </p>
            </div>

            <div className="col-lg-12 form-group center-button">
              <div className="alert-msg">
                <strong>
                  Todos los detalles han sido enviados a tu correo electrónico.
                </strong>
                <br />
                <p style={{ fontSize: "12px" }}>
                  El correo puede haber llegado a tu carpeta de Promociones o
                  SPAM
                </p>
                .
              </div>
            </div>
            <div className="">
              <div className="formContainer">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    País
                  </label>
                  <Select
                    type="select"
                    name="country"
                    id="country"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44"
                    options={options}
                    value={value}
                    onChange={changeHandler}
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="name"
                    className="block mb-2 ml-2 text-sm font-medium text-gray-900"
                  >
                    Ciudad
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className={`inputCity ${
                      errorCityMessage
                        ? "error ml-2 bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        : "ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    }`}
                    placeholder="Ciudad"
                    required
                    value={inputCity}
                    onChange={(e) => setInputCity(e.target.value)}
                    onKeyUp={formCityValidation}
                  />
                  {errorCityMessage && (
                    <span className="errorNameMessage">{errorCityMessage}</span>
                  )}
                </div>
                <div className="ml-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 ml-2 text-sm font-medium text-gray-900"
                  >
                    Teléfono
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className={`inputPhone ${
                      errorPhoneMessage
                        ? "error ml-2 bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        : "ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    }`}
                    placeholder="Telefono"
                    required
                    value={inputPhone}
                    onChange={(e) => setInputPhone(e.target.value)}
                    onKeyUp={formPhoneValidation}
                  />
                  {errorPhoneMessage && (
                    <span className="errorLastNameMessage">
                      {errorPhoneMessage}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                id="submitBtCertificado"
                className="submitBtCertificate text-white focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center"
                onClick={validateForm}

              >
                SOLICITAR CERTIFICADO
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ValidationArea;
