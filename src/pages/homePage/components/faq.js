import React from "react";

import '../styles/faq.scss';
import Question from "./question";

export default class FAQs extends React.Component{

    render(){
        return(
            <>
                <div id="wrap-faqs">
                    <div id="faqs-title">Frequently Asked Questions</div>
                    <div id="faqs-question">
                        <Question/>
                    </div>
                </div>
            </>
        )
    }
}