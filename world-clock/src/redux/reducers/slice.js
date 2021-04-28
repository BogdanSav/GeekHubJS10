import { createSlice } from '@reduxjs/toolkit';

const clockSlice = createSlice({
  name: 'clockSlice',
  initialState: {
    timezone: 'Europe/Kiev',
    format: false,
  },
  reducers: {
    changeTimezone(state, action) {
      return { ...state, timezone: action.payload };
    },
    changeFormat(state, action) {
      return { ...state, format: action.payload };
    },
  },
});

export default clockSlice.reducer;
export const { changeTimezone, changeFormat } = clockSlice.actions;
export const timezones = (state) => state.timezone;
export const formats = (state) => state.format;
