import React from "react";

import '../styles/banner.scss';

export default class Banner extends React.Component{
    render(){
        return(
            <>
                <div id="wrap-banner">
                    <div id="wrap-title">
                        <h3 id="title">Get exclusive access to the best of Nike</h3>
                        <a href="./login">Sign In</a>
                    </div>
                    <div id="banner-background">
                        <img src="./assets/images/homePage/homePage-banner.jpg" alt="banner"/>
                    </div>
                </div>
            </>
        )
    }
}