import React, {useMemo} from "react";
import {useSelector} from "react-redux";

export const PageAnimation = ({children}) => {
    const animation = useSelector(state => state.animationReducer.startAnimation)
    const classes = useMemo(() => animation ? 'animate' : '',[animation])

    return(
        <div className={classes}>
            {children}
        </div>
    )
}