import React, {useState} from 'react';
import {CirclePicker} from 'react-color'
import {
  setColor,
  selectColor,
} from "./colorpickerSlice";
import {useDispatch, useSelector} from "react-redux";

export function ColorPicker() {

  const color = useSelector(selectColor)
  const dispatch = useDispatch()

  return (
      <CirclePicker
        color={color}
        onChangeComplete={ (c) => dispatch(setColor(c.hex)) }
      />
  )

}
