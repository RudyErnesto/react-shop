import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Layaout from '../containers/Layaout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';
const app = () => {
    return (
        <BrowserRouter>
            <Layaout>
                <Routes>
                    <Route path="/" element ={<Home/>} />
                    <Route path="/login" element = {<Login/>} />
                    <Route path="/recovery-password" element = {<RecoveryPassword/>} />
                    <Route path="*" element = { <NotFound/>} />
                </Routes>
            </Layaout>
        </BrowserRouter>
    );
}
export default app;