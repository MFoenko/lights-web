import React, {Component} from 'react';
import {ColorPicker} from "./features/colorpicker/ColorPicker";
import {Color, RGBColor} from "react-color";
import lightsService from "./services/lightsService";

type AppState = {
  color?: RGBColor,
}

class App extends Component<{}, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {color: this.DEFAULT_COLOR}
  }

  private readonly DEFAULT_COLOR = {a: 1, r: 0, g: 0, b: 0};

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
            flex-col
            justify-center
            items-center
            rounded-lg
          "
        >
          <div
            className="
            text-center
            ">
            <ColorPicker
              color={this.state.color}
              setColor={(color) => {
                this.setState((state, props) => ({...state, color: color}))
                lightsService.setColor(colorToHex(color))
              }}
            />
            <button
              className="
                bg-gray-500
                hover:bg-gray-700
                text-white
                font-bold
                mt-8
                w-full
                py-2
                px-4
                rounded
              "
              onClick={() => {
                this.setState((state, props) => ({...state, color: this.DEFAULT_COLOR}))
                lightsService.setColor(colorToHex(this.DEFAULT_COLOR))
              }}
            >
              Off
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function colorToRgbaString(rgb?: RGBColor): string {
  // if (rgb == undefined) return "rgba(0,0,0,0)"
  let parts = [rgb?.r, rgb?.g, rgb?.b, rgb?.a].join(',')

  return `rgba(${parts})`
}

function colorToHex(rgb?: RGBColor): string {
  let parts = [rgb?.r, rgb?.g, rgb?.b, rgb?.a]
    .filter((value) => {
      return value != undefined
    })
    .map((val) => {
      return (val as number).toString(16)
    })
    .join('')

  return `#${parts}`
}

export default App;
