import React from "react";
import {useNavigate} from 'react-router-dom'
import {path} from "../../constants";
import './style.css'
import {useDispatch} from "react-redux";
import {animationActions} from "../../store/animation/actions";

export const NavBar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClickLink = (path) => {
        return (e) => {
            e.preventDefault()
            dispatch(animationActions.setAnimation(true))

            const animationTimeout = setTimeout(() => {
                dispatch(animationActions.setAnimation(false))
                navigate(path, {replace: true})
                clearTimeout(animationTimeout)
            }, 700)
        }
    }

    return(
        <div className='navbarContainer'>
            <a className='navLink' href='#' onClick={handleClickLink(path.main)}>Main</a>
            <a className='navLink' href='#' onClick={handleClickLink(path.about)}>About</a>
            <a className='navLink' href='#' onClick={handleClickLink(path.settings)}>Settings</a>
            <a className='navLink' href="#" onClick={handleClickLink(path.dataList)}>Data List</a>
        </div>
    )
}