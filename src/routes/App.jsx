import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layaout from '../containers/Layaout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../styles/global.css';
const app = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Layaout>
                <Route exact path='/' component ={Home} />
                <Route exact  path="/login" component = {Login} />
                <Route exact path='recovery-password' component = {RecoveryPassword} />
                <Route component = { NotFound} />
            </Layaout>
        </Switch>
        </BrowserRouter>
    );
}

export default app;