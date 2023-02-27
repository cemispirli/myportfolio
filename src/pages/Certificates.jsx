import React from "react";
import AnimatedPage from "../components/AnimatedPage";
import "../css/Certificates.css";
import data from "../helpers/certificateData";
import CertificatesCard from "../components/CertificatesCard";

const Certificates = () => {
  console.log(data);
  return (
    <div className="certi">
      <AnimatedPage>
        <div className="accordion">
          {data.map((item) => {
            return <CertificatesCard key={item.id} item={item} />;
          })}
        </div>

      </AnimatedPage>
    </div>
  );
};

export default Certificates;
