import {CirclePicker, Color, RGBColor} from 'react-color'

interface ColorPickerProps {
  color?: RGBColor,
  setColor: (color?: RGBColor) => void,
}


export function ColorPicker({color, setColor}: ColorPickerProps) {


  return (
    <CirclePicker
      color={color}
      onChangeComplete={(c) => {
        setColor(c.rgb)
      }}
    />
  )

}
