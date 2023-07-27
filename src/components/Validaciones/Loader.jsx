import React from "react";

const Loader = ({ showLoader }) => {
  return (
    <section className={`sectionLoader ${!showLoader ? "hidden" : ""}`}>
      <div className="loaderValidarCode">
        <span style={{ "--var": "1" }}> </span>
        <span style={{ "--var": "2" }}></span>
        <span style={{ "--var": "3" }}></span>
        <span style={{ "--var": "4" }}></span>
        <span style={{ "--var": "5" }}></span>
        <span style={{ "--var": "6" }}></span>
        <span style={{ "--var": "7" }}></span>
        <span style={{ "--var": "8" }}></span>
        <span style={{ "--var": "9" }}></span>
        <span style={{ "--var": "10" }}></span>
        <span style={{ "--var": "11" }}></span>
        <span style={{ "--var": "12" }}></span>
        <span style={{ "--var": "13" }}></span>
        <span style={{ "--var": "14" }}></span>
        <span style={{ "--var": "15" }}></span>
        <span style={{ "--var": "16" }}></span>
        <span style={{ "--var": "17" }}></span>
        <span style={{ "--var": "18" }}></span>
        <span style={{ "--var": "19" }}></span>
        <span style={{ "--var": "20" }}></span>
      </div>
    </section>
  );
};

export default Loader;
