import React from "react";
const Action = (props) => (
  <div>
    <button
      className="big-button"
      onClick={props.handpack}
      disabled={!props.hasOption}
    >
      What should I do ?
    </button>
  </div>
);
export default Action;
