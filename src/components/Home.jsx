import React from "react";

const Home = () => {
  return (
    <section className="headeranimated">
      <img
        className="fade-item4"
        src="/img/avion.png"
        id="avion"
        style={{ zIndex: "4", width: "51%", marginTop: "100px" }}
      />
      <img className="" src="/img/paisaje.png" id="background" />
      <img src="/img/road.png" id="road" style={{ zIndex: "3" }} />
      <h2 className="textoAnimado fade-item4" id="textoAnimado">
        Aquí inicia el viaje
      </h2>
    </section>
  );
};

export default Home;
