import React from "react";

import '../styles/contact.scss';

export default class Contact extends React.Component{
    render(){
        return(
            <>
                <div id="contact">

                    <div className="question-block">
                        <img src="./assets/images/helpPage/helpPage-contact-pic1.png" alt="phone icon"/>
                        <h3 className="title">PRODUCTS & ORDERS</h3>
                        <a href="/">1-800-806-6453</a>
                        <a href="/">4 am - 11 pm PT</a>
                        <a href="/">7 days a week</a>
                    </div>

                    <div className="question-block">
                        <img src="./assets/images/helpPage/helpPage-contact-pic1.png" alt="phone icon"/>
                        <h3 className="title">NRC & NTC</h3>
                        <a href="/">1-800-379-6453</a>
                        <a href="/">8 am - 5 pm PT</a>
                        <a href="/">Mon - Fri</a>
                    </div>

                    <div className="question-block">
                        <img src="./assets/images/helpPage/helpPage-contact-pic1.png" alt="phone icon"/>
                        <h3 className="title">COMPANY INFO & INQUIRIES</h3>
                        <a href="/">1-800-344-6453</a>
                        <a href="/">7 am - 4 pm PT</a>
                        <a href="/">Mon - Fri</a>
                    </div>

                    <div className="question-block">
                        <img src="./assets/images/helpPage/helpPage-contact-pic2.png" alt="chat icon"/>
                        <h3 className="title">PRODUCTS & ORDERS</h3>
                        <a href="/">Chat with us</a>
                        <a href="/">7 am - 4 pm PT</a>
                        <a href="/">7 days a week</a>
                    </div>
                    <div className="question-block">
                        <img src="./assets/images/helpPage/helpPage-contact-pic3.png" alt="location icon"/>
                        <h3 className="title">STORE LOCATOR</h3>
                        <a href="/">Find Nike retail stores near you</a>
                    </div>
                </div>
            </>
        )
    }
}