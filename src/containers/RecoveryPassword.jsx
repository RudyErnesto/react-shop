import React from 'react';
import '../styles/RecoveryPassword.scss';
const RecoveryPassword = () => {
    return (
    <div className="login">
        <div className="form-container">
            <img src="./logos/logo_yard_sale.svg" alt="logon" className="logo" />
            <h1 className="title">Email has been sent!</h1>
            <a className="subtitle">Please check your inbox for instructions on how to reset password</a>
            <div className="email-image ">
                <img src="./icons/email.svg" alt="email" className />
            </div>
            <button className="primary-button login-button">Login</button>
            <p className="resent">
            <span>din't recive to email?</span>
            <a href="/">resend</a>
            </p>
        </div>
    </div>
    );
}

export default RecoveryPassword;