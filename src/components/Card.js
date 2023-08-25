import React, { useState } from "react";
import "../App.css";

const Card = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="card" onClick={openModal}>
      <img className="card-image" src={data.image} alt={data.title} />
      <h2 className="card-title">{data.title}</h2>
      <p className="card-description">{data.description}</p>
      <button className="learn-more-button">Learn More</button>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <h2 className="modal-title">{data.title}</h2>
            <p className="modal-content">{data.modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
