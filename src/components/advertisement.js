import React from "react";

import './advertisement.scss';

export default class Advertisement extends React.Component{
    render(){
        return(
            <>
                <div id="wrap-advertisement">
                    <div id="advertisement">
                        <div id="endow">
                            <p>Free Shipping + Returns, Free Membership, Exclusive Products</p>
                            <a href="/register">Join Now</a>
                        </div>
                        <div id="save-up">
                            <p>Save Up to 40%</p>
                            <a href="/sale">Shop All Our New Markdowns</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}