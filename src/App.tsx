import React, {Component} from 'react';
import {ColorPicker} from "./features/colorpicker/ColorPicker";
import {Color, RGBColor} from "react-color";

type AppState = {
  color?: RGBColor,
}


class App extends Component< {} , AppState>{

  constructor() {
    super({});
    this.state = { color: {a: 0, r: 0, g: 0, b: 0} }
  }

  render() {

    return (
      <div className="
      h-screen
      w-screen
      flex
      justify-center
      items-center
    "
      style={{backgroundColor: this.state.color?.toString() ?? "#000000"}}
      >
        <ColorPicker
          color={this.state.color}
          setColor={(color) => this.setState((state, props) => ({ ...state, color: color })) }
        />
      </div>
    );
  }
}

export default App;
