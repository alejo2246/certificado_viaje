import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
}
//import { Fireworks } from "@fireworks-js/react";
//  const [showFire, setShowFire] = useState(false);
// <div style={{ color: "white" }} onClick={() => setShowFire(!showFire)}>
//   Activar Fuegos artificiales
// </div>;
// {
//   showFire && (
//     <Fireworks
//       // ref={ref}
//       options={{ opacity: 0.5 }}
//       style={{
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         position: "fixed",
//         background: "#000",
//         zIndex: "-1",
//       }}
//     />
//   );
// }
