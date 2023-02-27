import React from "react";
import Figure from "react-bootstrap/Figure";
import "../css/CertificatesCard.css";

const CertificatesCard = ({ item }) => {
  return (
    <Figure key={item.id} className="box">
      <Figure.Image width={171} height={180} alt="171x180" src={item.img} className="box" />
    </Figure>
  );
};

export default CertificatesCard;
