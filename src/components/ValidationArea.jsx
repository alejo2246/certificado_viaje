import React from "react";

const ValidationArea = () => {
  return (
    <section className="" id="formvalidar">
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <h3 className="">Valida tu código de viaje</h3>
            </div>
          </div>
        </div>
        <form className="" id="myForm" action="validar.php" method="post">
          <div className="=">
            <div className="">
              <input
                className=""
                id="code_for_validation"
                name="name"
                placeholder="Escribe aquí tu código de viaje"
                required=""
                type="text"
              />
            </div>
            <div className="">
              <button id="submitBtValidation" className="">
                VALIDAR CÓDIGO<span className=""></span>
              </button>
              <div className="" id="loadingmask">
                Validando...
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ValidationArea;
