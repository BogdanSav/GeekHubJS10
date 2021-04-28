import { CHANGE_FORMAT, CHANGE_TIMEZONE } from '../actions/actions';

const initialState = {
  timezone: 'Europe/Kiev',
  format: false,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TIMEZONE:
      return { ...state, timezone: action.payload };
    case CHANGE_FORMAT:
      return { ...state, format: action.payload };
    default:
      return state;
  }
}
