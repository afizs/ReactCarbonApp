import React from "react";
// import { Button } from "carbon-components-react";
import Hello from "./Hello";

class App extends React.Component {
  render() {
    return (
      <Button>
        I <Heart /> India
      </Button>
    );
  }
}

const Button = props => <button>{props.children}</button>;

class Heart extends React.Component {
  render() {
    return <span> &hearts;</span>;
  }
}

export default App;
