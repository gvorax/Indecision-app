import React from "react";
export default class AddOption extends React.Component {
  state = { error: undefined };
  constructor(props) {
    super(props);
  }
  handleAddOpton = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOpton(option);
    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = "";
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="addOption">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOpton}>
          <input className="add-option-input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
