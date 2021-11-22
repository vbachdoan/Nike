import React from "react";

import '../styles/slogan.scss';

export default class Slogan extends React.Component{
    render(){
        return(
            <>
                <div id="wrap-slogan">
                    <div id="slogan-background">
                        <img src="./assets/images/homePage/homePage-slogan.jpg" alt="slogan banner"/>
                        <div id="slogan-btn">
                            <a href="/register">Join Us</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}