import {createAsyncThunk, createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import {Color} from "react-color";

export interface ColorPickerState {
  color: Color,
}

const initialState: ColorPickerState = {
  color: "000000"
};



export const colorPickerSlice = createSlice({
  name: 'colorPicker',
  initialState,
  reducers: {
    setColor: (state: Draft<ColorPickerState>, action: PayloadAction<Color>) => {
      state.color = action.payload
    }
  },

});

export const { setColor } = colorPickerSlice.actions;

export const selectColor = (state: RootState) => state.colorPicker.color;

export default colorPickerSlice.reducer;
