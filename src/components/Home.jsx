import { useEffect, useState } from "react";
import "animate.css";
const Home = () => {
  const [scrollValue, setScrollValue] = useState(0);

  const handleScroll = () => {
    const value = window.scrollY;
    console.log(value);
    setScrollValue(value);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section id="home">
      <img
        className="absolute top-0 animate__animated animate__fadeIn animate__delay-4s scale-x-(-1)"
        src="/img/avion.png"
        style={{
          zIndex: "4",
          width: "51%",
          marginTop: "100px",
          right: scrollValue * 1.1 + "px",
          top: scrollValue * -0.2 + "px",
          transform: "scaleX(-1)",
        }}
      />
      <img
        className="absolute top-0 h-screen w-screen"
        src="/img/slider3.jpg"
      />
      {/* <img
        src="/img/road.png"
        style={{ zIndex: "3" }}
        className="absolute top-0 h-screen w-screen"
      /> */}
      <h2
        className="absolute  left-1/3 text-white text-7xl font-extrabold animate__animated animate__fadeIn animate__delay-3s"
        style={{
          top: scrollValue < 600 ? 230 + scrollValue + "px" : 70 + "px",
        }}
      >
        Aquí inicia el viaje
      </h2>
    </section>
  );
};

export default Home;
