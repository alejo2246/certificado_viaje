import React, { useState, useMemo } from "react";
import { Fireworks } from "@fireworks-js/react";
import Modal from "./Form";
import Select from "react-select";
import countryList from "react-select-country-list";
import "../styles/Validate.css";
import "animate.css";

const ValidationArea = () => {
  const [inputCode, setInputCode] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorNameMessage, setErrorNameMessage] = useState("");
  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  const [errorLastNameMessage, setErrorLastNameMessage] = useState("");
  const [errorCityMessage, setErrorCityMessage] = useState("");
  const [errorPhoneMessage, setErrorPhoneMessage] = useState("");
  const [errorFormMessage, setErrorFormMessage] = useState("");
  const [validateButtom, setValidateForm] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [responseModel, setResponseModel] = useState({});
  const [showFire, setShowFire] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [isValidCode, setIsValidCode] = useState(false);
  const [isInvalidCode, setIsInvalidCode] = useState(false);

  const handleValidation = (e) => {
    e.preventDefault();
    setIsValidCode(false);
    setIsInvalidCode(false);
    if (inputCode.trim() === "") {
      setErrorMessage("Ingresa un código antes de validar");
    } else {
      setShowLoader(true);
      setErrorMessage("");
      fetch("https://app.certificadodeviaje.com/api/addCertificado", {
        method: "POST", // Especificamos el método HTTP que se utilizará
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key_code: inputCode }),
      })
        .then((response) => console.log(response))
        .then((data) => {
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
  const validateForm = (e) => {
    e.preventDefault();
    if (
      inputName.trim() === "" ||
      inputLastName.trim() === "" ||
      inputEmail.trim() === "" ||
      inputCity.trim() === "" ||
      inputPhone.trim() === ""
    ) {
      setErrorFormMessage("Por favor, rellena los campos vacíos.");
    } else {
      setErrorFormMessage("");
    }
  };
  const formNameValidation = (e) => {
    e.preventDefault();
    if (inputName.trim() === "") {
      setErrorNameMessage("Ingresa el nombre");
    } else {
      // Aquí puedes agregar la lógica de validación adicional si es necesario
      // Por ejemplo, puedes enviar el formulario al servidor o realizar otras verificaciones.
      setErrorNameMessage("");
    }
  };
  const formCityValidation = (e) => {
    e.preventDefault();
    if (inputCity.trim() === "") {
      setErrorCityMessage("Ingresa la ciudad.");
    } else {
      setErrorCityMessage("");
    }
  };
  const formPhoneValidation = (e) => {
    e.preventDefault();
    if (inputPhone.trim() === "") {
      setErrorPhoneMessage("Ingresa el telefono.");
    } else {
      setErrorPhoneMessage("");
    }
  };
  const formLastNameValidation = (e) => {
    e.preventDefault();
    if (inputLastName.trim() === "") {
      setErrorLastNameMessage("Ingresa el apellido");
    } else {
      // Aquí puedes agregar la lógica de validación adicional si es necesario
      // Por ejemplo, puedes enviar el formulario al servidor o realizar otras verificaciones.
      setErrorLastNameMessage("");
    }
  };
  const formEmailValidation = (e) => {
    e.preventDefault();
    if (inputEmail.trim() === "") {
      setErrorEmailMessage("Ingresa el email");
    } else {
      // Aquí puedes agregar la lógica de validación adicional si es necesario
      // Por ejemplo, puedes enviar el formulario al servidor o realizar otras verificaciones.
      setErrorEmailMessage("");
    }
  };
  const changeHandler = (value) => {
    setValue(value);
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
        <section className={`sectionLoader ${!showLoader ? "hidden" : ""}`}>
          <div className="loaderValidarCode">
            <span style={{ "--var": "1" }}> </span>
            <span style={{ "--var": "2" }}></span>
            <span style={{ "--var": "3" }}></span>
            <span style={{ "--var": "4" }}></span>
            <span style={{ "--var": "5" }}></span>
            <span style={{ "--var": "6" }}></span>
            <span style={{ "--var": "7" }}></span>
            <span style={{ "--var": "8" }}></span>
            <span style={{ "--var": "9" }}></span>
            <span style={{ "--var": "10" }}></span>
            <span style={{ "--var": "11" }}></span>
            <span style={{ "--var": "12" }}></span>
            <span style={{ "--var": "13" }}></span>
            <span style={{ "--var": "14" }}></span>
            <span style={{ "--var": "15" }}></span>
            <span style={{ "--var": "16" }}></span>
            <span style={{ "--var": "17" }}></span>
            <span style={{ "--var": "18" }}></span>
            <span style={{ "--var": "19" }}></span>
            <span style={{ "--var": "20" }}></span>
          </div>
        </section>
        {isValidCode && (
          <div id="validationinfo" className="containerValidCertificate">
            <div className="container">
              <div className="validCertificateTitle">
                <h3 className="">Validez del certificado:</h3>
                <p className="vColor" id="cert_validez">
                  {responseModel.certificado}
                </p>
              </div>
              <div className="validCertificateTitle">
                <h3 className="">Fecha de caducidad:</h3>
                <p className="vColor">
                  <span id="cert_time">{responseModel.expiracion}</span>
                </p>
              </div>
              <div className="validCertificateTitle">
                <h3 className="">Producto adquirido:</h3>
                <p>
                  <span className="vColor" id="cert_item">
                    {responseModel.producto}
                  </span>
                </p>
              </div>
              <div className="validContainer">
                <button
                  onClick={() => setShowModal(true)}
                  id="_btn_generar_certificado"
                  className="validButton "
                >
                  <span className="buttonSpan">GENERAR CERTIFICADO</span>
                </button>
              </div>
              <div className="">
                Al generar tu certificado tu código será activado y no podrá
                volverse a usar. Tu certificado será valido para su uso en
                nuestro sistema de reservas.
              </div>
            </div>
          </div>
        )}
        {isInvalidCode && (
          <div
            id="validationinfo"
            className="containerUnvalidCertificate hidden"
          >
            <div className="container">
              <div className="unvalidCertificateTitle">
                <h3>Validez del certificado:</h3>
                <p className="uvColor" id="cert_validez">
                  {responseModel.errors.toUpperCase()}
                </p>
              </div>
              <div className="unvalidCertificateTitle">
                <h3>Motivo:</h3>
                <p className="uvColor">
                  <span id="cert_no">{responseModel.detail}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div
          className="py-6 px-6 lg:px-8 text-left"
          style={{ maxHeight: "500px", overflowY: "auto" }}
        >
          <h3 className="modalTitle mb-4 text-xl font-medium text-gray-900">
            Genera tu certificado
          </h3>
          <form action="#" className="space-y-8">
            <div className="">
              <div className="formContainer">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`inputEmail ${
                      errorEmailMessage
                        ? "error bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    }`}
                    placeholder="email@example.com"
                    required
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                    onKeyUp={formEmailValidation}
                  />
                  {errorEmailMessage && (
                    <span className="errorEmailMessage ">
                      {errorEmailMessage}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 ml-2 text-sm font-medium text-gray-900"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={`inputName ${
                      errorNameMessage
                        ? "error ml-2 bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        : "ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    }`}
                    placeholder="Nombre"
                    required
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    onKeyUp={formNameValidation}
                  />
                  {errorNameMessage && (
                    <span className="errorNameMessage">{errorNameMessage}</span>
                  )}
                </div>
                <div className="ml-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 ml-2 text-sm font-medium text-gray-900"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className={`inputLastName ${
                      errorLastNameMessage
                        ? "error ml-2 bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        : "ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    }`}
                    placeholder="Apellido"
                    required
                    value={inputLastName}
                    onChange={(e) => setInputLastName(e.target.value)}
                    onKeyUp={formLastNameValidation}
                  />
                  {errorLastNameMessage && (
                    <span className="errorLastNameMessage ">
                      {errorLastNameMessage}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Clave de licencia y producto
              </label>
              <div className="formContainer">
                <input
                  type="text"
                  name="keycode"
                  id="keycode"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Clave de licencia"
                  readOnly={true}
                />
                <input
                  type="text"
                  name="product"
                  id="product"
                  className="ml-2 mr-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Producto"
                  readOnly={true}
                />
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
            <div className="formContainer justify-center">
              {errorFormMessage &&(
                <span className="errorNameMessage">
                  {errorFormMessage}
                </span>
              )}
              </div>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default ValidationArea;
