import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import ValidationArea from "./components/ValidationArea";
import Galery from "./components/Galery";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <div className="relative">
          <Navbar />
          <Home />
        </div>
      </div>
      <About />
      <ValidationArea />
      <Galery />
      <Footer />
    </>
  );
}

