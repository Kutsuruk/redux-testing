import {postsActionTypes} from "./actions";

const initialState = {
    post: [],
    loading: false
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case postsActionTypes.SET_POSTS:
            return {
                ...state,
                post: action.payload
            }

        case postsActionTypes.CLEAR_POSTS:
            return {
                ...state,
                post: []
            }

        case postsActionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        default:
            return state
    }
}