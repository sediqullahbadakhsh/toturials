import React, { Component } from "react";

class MyComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { title, onButtonClick } = this.props;
    return (
      <div>
        <h1>This is not a prop</h1>
        <h1>{title}</h1>
        <button onClick={onButtonClick}>Click Me!</button>
      </div>
    );
  }
}

export default MyComponent;
