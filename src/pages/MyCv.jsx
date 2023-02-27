import React from "react";
import AnimatedPage from "../components/AnimatedPage";
import file from "../helpers/Cem İspirli-FrontendDeveloper.pdf";
import pdfpic from "../helpers/PDF_file_icon.svg.png";
import "../css/MyCv.css";

const MyCv = () => {
  return (
    <div className="containerCv">
      <AnimatedPage>
        <div className="cv">
          <a href={file} download className="link">
            <img src= {pdfpic} alt="pdf" className="pdfpic" />
           <h5 className="word">Click Me!</h5> 
          </a>
          
        </div>
      </AnimatedPage>
    </div>
  );
};

export default MyCv;
