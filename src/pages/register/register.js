import React from "react";

import './styles/main.scss';

export default class Register extends React.Component{
    render(){
        return(
            <>
                <div id="wrap-register">
                    <div id="register-content">
                        <svg className="pre-logo-svg" height="42px" width="42px" fill="#111" viewBox="0 0 69 32">
                            <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
                        </svg>
                        <h3 id="register-title">BECOME A NIKE MEMBER</h3>
                        <p id="sub-title">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
                        <input type="text" id="email" placeholder="Email address"/>
                        <label htmlFor="email"></label>
                        <input type="password" id="password" placeholder="Password"/>
                        <label htmlFor="password"></label>
                        <input type="text" id="first-name" placeholder="First Name"/>
                        <label htmlFor="first-name"></label>
                        <input type="text" id="last-name" placeholder="Last Name"/>
                        <label htmlFor="last-name"></label>
                        <div id="wrap-date-of-birth">
                            <input type="date" id="date-of-birth" />
                            <label htmlFor="date-of-birth">Date of Birth</label>
                        </div>
                        <p className="sub-text">Get a Nike Member Reward every year on your Birthday.</p>
                        <div id="wrap-input-list">
                            <input id="input-list" type="text" value="United States"/>
                            <div id="icon-arrow-down">
                                <p>v</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}