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
            onClick={() => handleValidation(event)}
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
        <div className="">
          <div className="m-auto mt-24 w-100 max-w-sm lg:mt-16">
            <div
              className="rounded-b border-t-4 border-teal-500 bg-teal-100 px-4 py-3 text-teal-900 shadow-md"
              role="alert"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mr-4 mt-4 h-10 w-full text-teal-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <div className="mt-4 flex justify-center">
                <div>
                  <p className="flex justify-center font-bold">
                    Tu mensaje ha sido enviado.
                  </p>
                  <p className="text-sm">
                    Asegurate de revisar tu carpeta de SPAM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {mailSentError && (
        <div className="">
          <div className="m-auto mt-24 w-100 max-w-sm lg:mt-16">
            <div
              className="rounded-b border-t-4 border-red-500 bg-red-100 px-4 py-3 text-red-900 shadow-md"
              role="alert"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mt-4 w-full h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

              <div className="mt-4 flex justify-center">
                <div>
                  <p className="flex justify-center font-bold">
                    Tu mensaje no ha sido enviado.
                  </p>
                  <p className="text-sm">
                    Por favor, revisa los campos e intenta de nuevo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ValidationArea;
