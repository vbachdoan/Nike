import React from "react";

import './signInPopUp.scss';

export default class SignInPopUp extends React.Component{

    render(){
        if(this.props.checkDisplay==="display")
        return(
            <>
                <div id="background">
                    <div id="wrap-sign-in-pop-up">
                        <div id="logo">
                            <svg class="pre-logo-svg" height="42px" width="42px" fill="#111" viewBox="0 0 69 32">
                                <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
                            </svg>
                        </div>
                        <h3 id="title">YOUR ACCOUNT FOR EVERYTHING NIKE</h3>
                        <input type="text" id="email" placeholder="Email Address"/>
                        <label htmlFor="email">Please enter a valid email address.</label>
                        <input type="password" id="password" placeholder="Password"/>
                        <label htmlFor="password">Please enter a password.</label>
                        <div id="wrap-form-handle">
                            <div id="save-password">
                                <input type="checkbox" id="checkbox"/>
                                <label htmlFor="checkbox"></label>
                                <p>Keep me signed in</p>
                            </div>
                            <a href="/forgot-password">Forgot password?</a>
                        </div>
                        <p id="confirm">By logging in, you agree to Nike's <a href="/">Privacy Policy</a> and <a href="/">Terms of Use</a>.</p>
                        <div id="btn"><p>SIGN IN</p></div>
                        <div id="navigation-sign-up">Not a member? <a href="/register">Join Us</a>.</div>
                    </div>
                </div>
            </>
        );
        else return(<></>);
    }
}