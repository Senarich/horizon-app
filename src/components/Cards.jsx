import React from "react";

function Cards() {
  return (
    <div className="row d-flex">
      <h2 className="text-center mt-3">PLANS</h2>
      <div className="col card the-cards" >
        <img
          src="images/sixfootoffice.jpg"
          className="card-img-top"
          alt="card"
        />
        <div className="card-body">
          <h6 className="card-title">VIRTUAL OFFICE</h6>
          <p className="card-text offices">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="col card the-cards" >
        <img
          src="images/office-light.jpeg"
          className="card-img-top"
          alt="card2"
        />
        <div className="card-body">
          <h6 className="card-title">CUSTOMIZED OFFICES</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="col card the-cards" >
        <img src="images/office-mac.jpg" className="card-img-top" alt="card3" />
        <div className="card-body">
          <h6 className="card-title">SERVICED OFFICES</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="col card the-cards" >
        <img src="images/office-space.jpg" className="card-img-top" alt="card5" />

        <div className="card-body">
          <h6 className="card-title">MEETING ROOMS</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
