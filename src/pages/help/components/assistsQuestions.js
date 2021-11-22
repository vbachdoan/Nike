import React from "react";

import '../styles/assistsQuestions.scss';
import Contact from "./contact";
import QuestionsField from "./questionsField";

export default class AssistsQuestion extends React.Component{
    render(){
        return(
            <>
                <div id="wrap-assists">
                    <div id="assists-questions">
                        <div className="wrap-title">
                            <h3 className="title">QUICK ASSISTS</h3>
                            <p className="sub-title">Answers to our most frequently asked questions are just one click away.</p>
                        </div>
                        <QuestionsField/>
                    </div>
                    <div id="wrap-contact">
                        <div className="wrap-title">
                            <h3 className="title">CONTACT US</h3>
                        </div>
                        <Contact/>
                    </div>
                </div>
            </>
        )
    }
}