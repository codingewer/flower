import React, { useEffect, useState } from "react";
import "./Flower.css";

const Flower = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 500);
  }, []);

  return (
    <div className="flower-container">
    </div>
  );
};

export default Flower;
