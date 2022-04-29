import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.inCrement = this.inCrement.bind(this);
  }

  inCrement() {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  }
  render() {
    return (
      <div>
        <MyComponent title="React" onButtonClick={this.inCrement} />
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default App;
