import React, {Component} from 'react';
import {ColorPicker} from "./features/colorpicker/ColorPicker";
import {Color, RGBColor} from "react-color";

type AppState = {
  color?: RGBColor,
}

class App extends Component<{}, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {color: {a: 0, r: 0, g: 0, b: 0}}
  }

  render() {

    return (
      <div
        className="
          bg-gray-700
          h-screen
          w-screen
        "
        style={{
          backgroundColor: colorToRgbaString(this.state.color),
          border: `10px solid ${colorToRgbaString(this.state.color)}`,
          borderRadius: "2px",
        }}
      >
        <div
          className="
            bg-gray-700
            h-full
            w-full
            flex
            justify-center
            items-center
            rounded-lg
          "
        >
          <ColorPicker
            color={this.state.color}
            setColor={(color) => this.setState((state, props) => ({...state, color: color}))}
          />
        </div>
      </div>
    );
  }
}

function colorToRgbaString(rgb?: RGBColor): string {
  // if (rgb == undefined) return "rgba(0,0,0,0)"
  let parts = [rgb?.r,rgb?.g,rgb?.b,rgb?.a].join(',')

  return `rgba(${parts})`
}

export default App;
