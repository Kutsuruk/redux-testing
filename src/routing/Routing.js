import React from "react";
import {Route, Routes, HashRouter as Router} from 'react-router-dom'
import {About, DataList, Main, Settings} from "../pages";
import {path} from "../constants";
import {NavBar} from "../components";

export const Routing = () => {
    return(
        <Router>
            <NavBar />
            <Routes>
                <Route exact path={path.main} element={<Main />} />
                <Route exact path={path.about} element={<About />} />
                <Route exact path={path.settings} element={<Settings />} />
                <Route exact path={path.dataList} element={<DataList />} />
            </Routes>
        </Router>
    )
}