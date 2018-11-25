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
  update_cat(e) {
    this.setState({ cat: e.target.value });
  }
  render() {
    let { message, cat } = this.state;
    return (
      <div>
        <h1>
          {message} - {cat}
        </h1>
        <Widgets update={this.update.bind(this)} />
        <Widgets update={this.update_cat.bind(this)} />
      </div>
    );
  }
}

const Widgets = props => (
  <div>
    <input type="text" onChange={props.update} />
  </div>
);

export default Hello;
