import { CHANGE_TIMEZONE } from "./actions";

export default function reducer(state = "Europe/Kiev", action) {
    switch (action.type) {
        case CHANGE_TIMEZONE:
            return state = action.payload;
        default:
            return state;
    }
}