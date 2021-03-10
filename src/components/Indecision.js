import React from "react";
import Options from "./Options";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";
export default class Indecision extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };
  handleRemoveAll = () => {
    this.setState((prevOption) => {
      return {
        options: [],
      };
    });
  };
  handleDeleteOption = (optionToggle) => {
    this.setState((option) => ({
      options: option.options.filter((opt) => {
        return optionToggle !== opt;
      }),
    }));
  };
  optionClose = () => {
    this.setState(() => ({
      selectedOption: undefined,
    }));
  };
  handpack = () => {
    const Random = Math.floor(Math.random() * this.state.options.length);
    const result = this.state.options[Random];
    this.setState(() => ({
      selectedOption: result,
    }));
  };
  handleAddOpton = (option) => {
    if (!option) {
      return "Enter valed value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    } else {
      this.setState((prevState) => {
        return {
          options: this.state.options.concat([option]),
        };
      });
    }
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      //Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("This is componentWillUnmount !!!");
  }

  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            handpack={this.handpack}
            hasOption={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              handleDeleteOption={this.handleDeleteOption}
              options={this.state.options}
              handleRemoveAll={this.handleRemoveAll}
            />
            <AddOption handleAddOpton={this.handleAddOpton} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          optionClose={this.optionClose}
        />
      </div>
    );
  }
}
