import React from 'react';
import '../styles/login.scss';
const login = () => {
    return (
    <div className="login">
        <div className="form-container">
            <img src="./logos/logo_yard_sale.svg" alt="logon" className="logo"/>
            <h1 className="title">Create a new Password</h1>
            <a className="subtitle">Enter a new password for you account</a>
            <form action="/" className="form">
                <label for="password" className="label">Password</label>
                <input type="password" name="" id="password" placeholder="******" className="input input-password"/>
                <label for="new-password" className="label">New Password</label>
                <input type="password" name="" id="new-password" placeholder="******" className="input input-password"/>
                <input type="submit" value="confirm" className="primary-button login-button"/>
            </form>
        </div>
    </div>
    );
}

export default login;