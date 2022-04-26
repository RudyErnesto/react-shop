import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Layaout from '../containers/Layaout';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import PasswordRecovery from '../pages/PasswordRecovery';

import '../styles/global.css';
const app = () => {
    return (
        <BrowserRouter>
            <Layaout>
                <Routes>
                    <Route path="/" element ={<Home/>} />
                    <Route path="/login" element = {<Login/>} />
                    <Route path="/password-recovery" element ={<PasswordRecovery />} />
					<Route path="/send-email" element= {<SendEmail/>} />
					<Route path="/new-password" element= {<NewPassword />} />
					<Route path="/account" element= {<MyAccount/>} />
					<Route path="/signup" element= {<CreateAccount/>} />
					<Route path="/checkout" element= {<Checkout/>} />
					<Route path="/orders" element= {<Orders/>} />
                    <Route path="*" element = { <NotFound/>} />
                </Routes>
            </Layaout>
        </BrowserRouter>
    );
}
export default app;