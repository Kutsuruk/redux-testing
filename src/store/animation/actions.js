export const animationActionTypes = {
    SET_ANIMATION: 'ROUTE.SET_ANIMATION',
}

export const animationActions = {
    setAnimation: (payload) => ({type: animationActionTypes.SET_ANIMATION, payload: payload}),
}