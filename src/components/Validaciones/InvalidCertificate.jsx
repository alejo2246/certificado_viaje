import React from "react";

const InvalidCertificate = ({ responseModel }) => {
  return (
    <div id="validationinfo" className="containerUnvalidCertificate">
      <div className="container">
        <div className="unvalidCertificateTitle">
          <h3>Validez del certificado:</h3>
          <p className="uvColor" id="cert_validez">
            {responseModel.error.toUpperCase()}
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
  );
};

export default InvalidCertificate;
