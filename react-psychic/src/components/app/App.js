import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserNavbar from "../navbar";
import { edisonText } from "../edisonText";
import PsychicCredibility from "../psychicCredibility";
import UserStatistic from "../userStatistics";
import Auth from "../auth/Auth";
import Psychic from "../psychic";
import UserNumberDetail from "../userNumberDetail";


export default function App () {

    return (
        <>
            <Router>
                <UserNavbar />
                    <Routes>
                        
                        <Route path={'/psychicnumber/:num'} element={<UserNumberDetail />} ></Route>
                        <Route path='/usernumber'  element={<UserStatistic />}></Route>
                        <Route path='/signin' element={<Auth />}></Route>
                        <Route path='/' element={<pre>{edisonText}</pre>} ></Route>
                        <Route path='/psychic' element={<Psychic />} ></Route>
                        <Route path='/psychicCredibility' element={<PsychicCredibility />}></Route>
                    </Routes>
            </Router>
        </>
    )
}