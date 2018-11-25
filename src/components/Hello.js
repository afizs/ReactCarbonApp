import React, { Component } from "react";

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      message: "this.props.message",
      cat: 0
    };
  }
  update(e) {
    this.setState({ message: e.target.value });
  }
  render() {
    let { message, cat } = this.state;
    return (
      <div>
        <h1>
          {message} - {cat}
        </h1>
        <input type="text" onChange={this.update.bind(this)} />
      </div>
    );
  }
}
export default Hello;
