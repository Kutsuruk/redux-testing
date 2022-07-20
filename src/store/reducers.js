import {combineReducers} from "redux";
import {profileReducer} from './profile/reducer'
import {animationReducer} from "./animation/reducer";
import {postReducer} from "./posts/reducer";

export const rootReducer = combineReducers({
    profileReducer,
    animationReducer,
    postReducer,
})


