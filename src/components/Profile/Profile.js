import React from "react";
import {useSelector} from "react-redux";
import './style.css'

export const Profile = () => {
    const profile = useSelector((state) => state.profileReducer.profile)

    return(
        <div className='profile'>
            {!!profile ? (
                <div>
                    <h3>
                        {profile.name}<br />
                        {profile.surname}
                    </h3>
                </div> ) :
                <div>
                    <h1>No Data!</h1>
                </div>}
        </div>
    )
}
