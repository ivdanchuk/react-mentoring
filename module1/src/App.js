import { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter initValue={10} />
      </div>
    );
  }
}

export default App;
