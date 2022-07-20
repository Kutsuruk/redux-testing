import React from "react";
import {useDispatch} from "react-redux";
import {profileActions} from "../../store/profile/actions";

export const LoginForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget

        const profile = {
            name: form['name'].value,
            surname: form['surname'].value
        }

        dispatch(profileActions.setProfile(profile))
    }

    return(
        <form onSubmit={handleSubmit} className='form formLogin'>
            <div className="field">
                <input type="text" name='name' autoComplete='off'/>
            </div>
            <div className="field">
                <input type="text" name='surname' autoComplete='off'/>
            </div>
            <div className="field">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}