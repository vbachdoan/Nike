import React from "react";
import { Link } from "react-router-dom";

import '../styles/memberShip.scss';

export default class MemberShip extends React.Component{
    render(){
        return(
            <>
                <div id="wrap-member-ship">
                    <div id="member-ship-title">Nike MemberShip</div>
                    <div id="member-ship-content">
                        <div id="title">Where All Athletes Belong</div>
                        <div id="paragraph">
                            <p>
                                When you’re with us, you’re part of something bigger: a
                                <br/>global community dedicated to bringing out the best in one
                                <br/>another, with access to the most effective tools for the job,
                                <br/>including Member-exclusive products, Nike By You
                                <br/>customization, and special offers. And it's all free.
                            </p>
                        </div>
                        <div id="btn">
                            <Link to="/register">Join Us</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}