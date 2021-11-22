import React from "react";

import '../styles/questionsField.scss';

export default class QuestionsField extends React.Component{
    render(){
        return(
            <>
                <div id="wrap-questions">

                    <div className="question-block">
                        <h3 className="title">SHIPPING & DELIVERY</h3>
                        <a href="/">What are Nike's shipping options?</a>
                        <a href="/">How do I get free shipping on Nike orders?</a>
                    </div>

                    <div className="question-block">
                        <h3 className="title">RETURNS</h3>
                        <a href="/">What is Nike's return policy?</a>
                        <a href="/">How do I return my Nike order?</a>
                        <a href="/">Where is my refund?</a>
                    </div>

                    <div className="question-block">
                        <h3 className="title">NIKE MEMBERSHIP</h3>
                        <a href="/">What is Nike Membership?</a>
                        <a href="/">How do I get Nike’s newest sneaker releases?</a>
                        <a href="/">How do I reset my Nike password?</a>
                    </div>

                    <div className="question-block">
                        <h3 className="title">ORDERS</h3>
                        <a href="/">How do I track my Nike order status?</a>
                        <a href="/">Can I cancel or change my Nike order?</a>
                        <a href="/">How do I find the right size and fit?</a>
                    </div>

                    <div className="question-block">
                        <h3 className="title">COMPANY INFO</h3>
                        <a href="/">Do Nike shoes have a warranty?</a>
                        <a href="/">What is Nike's Reuse-A-Shoe program?</a>
                        <a href="/">Does Nike offer grants or donations?</a>
                    </div>

                    <div className="question-block">
                        <h3 className="title">NIKE OFFERS</h3>
                        <a href="/">Does Nike offer a student discount?</a>
                        <a href="/">Does Nike offer a military discount?</a>
                        <a href="/">Does Nike offer a first responder and medical professional discount?</a>
                    </div>
                </div>
            </>
        )
    }
}