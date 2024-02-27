import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.initValue || 0,
    };
  }
  increment = () => {
    this.setState((prevState) => ({ counter: this.state.counter + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ counter: this.state.counter - 1 }));
  };

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("h1", null, `Count: ${this.state.counter}`),
      React.createElement("button", { onClick: this.increment }, "+"),
      React.createElement("button", { onClick: this.decrement }, "-")
    );
  }
}

export default Counter;
