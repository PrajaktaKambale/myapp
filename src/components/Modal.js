import React from "react";
import "../App.css";

const Modal = ({ isOpen, title, content, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <h2 className="modal-title">{title}</h2>
        <p className="modal-content">{content}</p>
      </div>
    </div>
  );
};

export default Modal;
