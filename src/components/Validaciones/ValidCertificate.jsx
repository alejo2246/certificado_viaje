import React from "react";

const ValidCertificate = ({ responseModel, setShowModal }) => {
  return (
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
          Al generar tu certificado tu código será activado y no podrá volverse
          a usar. Tu certificado será valido para su uso en nuestro sistema de
          reservas.
        </div>
      </div>
    </div>
  );
};

export default ValidCertificate;
