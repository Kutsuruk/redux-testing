import {animationActionTypes} from "./actions";

const initialState = {
    startAnimation: false
}

export const animationReducer = (state = initialState, action) => {
    switch (action.type) {
        case animationActionTypes.SET_ANIMATION:
            return {
                ...state,
                startAnimation: action.payload
            }

        default:
            return state
    }
}