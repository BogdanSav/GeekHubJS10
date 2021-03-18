import { GET_DATA } from "./actions"

function apiReducer(state = [], action) {
    switch (action.type) {
        case GET_DATA:
            return state.concat(action.payload);
        default:
            return state
    }
}
export default apiReducer;