import React from "react";
import "../styles/Gallery.css";
const Galery = () => {
  return (
    <div className="containerCard" id="gallery">
      <div className="card">
        <div className="imgBx" style={{ backgroundImage: "url(img/g1.jpg)" }}>
          {/* <img src="img/g1.jpg" alt="" /> */}
        </div>
        <div className="content">
          <h2>Lorem, ipsum dolor.</h2>
          <p className="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            ducimus?
          </p>
        </div>
      </div>
      <div className="card">
        <div className="imgBx">
          <img src="img/g2.jpg" alt="" />
        </div>
        <div className="content">
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            ducimus?
          </p>
        </div>
      </div>
      <div className="card">
        <div className="imgBx">
          <img src="img/g3.jpg" alt="" />
        </div>
        <div className="content">
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            ducimus?
          </p>
        </div>
      </div>
      <div className="card">
        <div className="imgBx">
          <img src="img/g4.jpg" alt="" />
        </div>
        <div className="content">
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            ducimus?
          </p>
        </div>
      </div>
      <div className="card">
        <div className="imgBx">
          <img src="img/g5.jpg" alt="" />
        </div>
        <div className="content">
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            ducimus?
          </p>
        </div>
      </div>
      <div className="card">
        <div className="imgBx">
          <img src="img/g6.jpg" alt="" />
        </div>
        <div className="content">
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            ducimus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Galery;
