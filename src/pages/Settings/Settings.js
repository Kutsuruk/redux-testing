import React from "react";
import '../style.css'
import '../../index.css'
import {PageAnimation} from "../../components";

export const Settings = () => {
    return(
        <PageAnimation>
            <div className='settings'>
                <div className="row">
                    <div className="block blockLeft"></div>
                </div>
                <div className="row">
                    <div className="block blockRight"></div>
                    <div className="block blockLeft"></div>
                </div>
            </div>
        </PageAnimation>
    )
}