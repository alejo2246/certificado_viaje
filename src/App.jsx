import { useState } from "react";
import { Fireworks } from "@fireworks-js/react";
// import { FireworksHandlers } from '@fireworks-js/react';

export default function App() {
  const [showFire, setShowFire] = useState(false);
  // const ref = useRef < FireworksHandlers > null;

  // const toggle = () => {
  //   if (!ref.current) return;
  //   if (ref.current.isRunning) {
  //     ref.current.stop();
  //   } else {
  //     ref.current.start();
  //   }
  // };

  return (
    <>
      {/* <div
        style={{ display: 'flex', gap: '4px', position: 'absolute', zIndex: 1 }}
      >
        <button onClick={() => toggle()}>Toggle</button>
        <button onClick={() => ref.current.clear()}>Clear</button>
      </div> */}
      <h1 style={{ color: "white" }}>Holaaaa</h1>
      <div style={{ color: "white" }} onClick={() => setShowFire(!showFire)}>
        Activar Fuegos artificiales
      </div>
      {showFire && (
        <Fireworks
          // ref={ref}
          options={{ opacity: 0.5 }}
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "fixed",
            background: "#000",
            zIndex: "-1",
          }}
        />
      )}
    </>
  );
}

fetch("./countries.json")
  .then((response) => response.json())
  .then((data) => {
    // Aquí puedes acceder y trabajar con los datos del archivo JSON
    console.log(data);
  })
  .catch((error) => {
    console.error("Error al cargar el archivo JSON:", error);
  });