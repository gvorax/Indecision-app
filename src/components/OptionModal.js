import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.optionClose}
    contentLabel="Selected Option"
    ariaHideApp={false}
    closeTimeoutMS={200}
    className="modal"
  >
    <h2 className="modal-title">Selected Option</h2>
    {props.selectedOption && (
      <p className="modal-body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.optionClose}>
      Ok
    </button>
  </Modal>
);
export default OptionModal;
