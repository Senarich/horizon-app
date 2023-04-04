import React from "react";

function Carousal() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner inner">
        <div className="carousel-item active">
          <img src="images/s-height.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img
            src="images/Silver-Star-Tower.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="images/West_Ridge_Accra_Street.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}

export default Carousal;
