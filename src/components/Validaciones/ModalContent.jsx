import { info } from "autoprefixer";
import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import Loader from "./Loader";

const ModalContent = ({
  inputCode,
  responseModel,
  handle1,
  handle2,
  setShowModal,
}) => {
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [loaderModal, setLoaderModal] = useState(false);
  const [errorNameMessage, setErrorNameMessage] = useState("");
  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  const [errorLastNameMessage, setErrorLastNameMessage] = useState("");
  const [errorCityMessage, setErrorCityMessage] = useState("");
  const [errorPhoneMessage, setErrorPhoneMessage] = useState("");
  const [errorFormMessage, setErrorFormMessage] = useState("");
  const [validateButtom, setValidateForm] = useState("");
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
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
      setLoaderModal(true);
      setErrorFormMessage("");
      const url = "https://app.certificadodeviaje.com/api/addActivar";
      const params = new URLSearchParams({
        key_code: inputCode,
        name: inputName,
        last_name: inputLastName,
        email: inputEmail,
        phone: inputPhone,
        name_product: responseModel.producto,
        country: value,
        card: "visa",
        city: inputCity,
      });

      fetch(`${url}?${params}`, {
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          setLoaderModal(false);
          setShowModal(false);
          data.success ? handle1(true) : handle2(true);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
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
    <div
      className="py-6 px-6 lg:px-8 text-left"
      style={{ maxHeight: "500px", overflowY: "auto" }}
    >
      {loaderModal ? (
        <Loader showLoader={loaderModal} />
      ) : (
        <div>
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
                  value={inputCode ?? ""}
                />
                <input
                  type="text"
                  name="product"
                  id="product"
                  className="ml-2 mr-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  readOnly={true}
                  value={responseModel.producto ?? ""}
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
              {errorFormMessage && (
                <span className="errorNameMessage">{errorFormMessage}</span>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ModalContent;
