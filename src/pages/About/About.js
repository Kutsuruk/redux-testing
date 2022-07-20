import React from "react";
import '../style.css'
import '../../index.css'
import {PageAnimation} from "../../components";

export const About = () => {
    return(
        <PageAnimation>
            <div className='about'>
                <div className="row">
                    <div className="block blockLeft"></div>
                    <div className="block blockRight"></div>
                </div>
                <div className="row">
                    <div className="block blockRight"></div>
                    <div className="block blockRight"></div>
                    <div className="block blockLeft"></div>
                </div>
            </div>
        </PageAnimation>
    )
}