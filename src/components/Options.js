import React from "react";
import Option from "./Option";
const Options = (props) => (
  <div>
    <div className="widget__header">
      <h3 className="widget__title">Your Options</h3>
      <button className="button button__link" onClick={props.handleRemoveAll}>
        Remove all
      </button>
    </div>

    {props.options.length === 0 && (
      <p className="widget__message">Please add an option to get started !</p>
    )}
    {props.options.map((option, index) => (
      <Option
        key={option}
        optionText={option}
        count={index + 1}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);
export default Options;
