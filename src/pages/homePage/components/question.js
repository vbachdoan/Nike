import React from 'react';

import '../styles/question.scss';

export default class Question extends React.Component{

    render(){
        return(
            <>
                <div className="wrap-question-box">
                    <input type="checkbox" id="ques1"></input>
                    <label htmlFor="ques1">
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" role="img" width="16px" height="16px" fill="none"><path stroke="currentColor" d="M12.644 5.65L8 10.295 3.355 5.65"></path></svg>
                        <div className="wrapQuesAndAns">
                            <div className="question">
                                <p>What is Nike Membership?</p>
                            </div>
                        </div>
                    </label>
                </div>

                <div className="wrap-question-box">
                    <input type="checkbox" id="ques2"></input>
                    <label htmlFor="ques2">
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" role="img" width="16px" height="16px" fill="none"><path stroke="currentColor" d="M12.644 5.65L8 10.295 3.355 5.65"></path></svg>
                        <div className="wrapQuesAndAns">
                            <div className="question">
                                <p>Is Nike Membership free?</p>
                            </div>
                        </div>
                    </label>
                </div>

                <div className="wrap-question-box">
                    <input type="checkbox" id="ques3"></input>
                    <label htmlFor="ques3">
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" role="img" width="16px" height="16px" fill="none"><path stroke="currentColor" d="M12.644 5.65L8 10.295 3.355 5.65"></path></svg>
                        <div className="wrapQuesAndAns">
                            <div className="question">
                                <p>How fast is sign up?</p>
                            </div>
                        </div>
                    </label>
                </div>

                <div className="wrap-question-box">
                    <input type="checkbox" id="ques4"></input>
                    <label htmlFor="ques4">
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" role="img" width="16px" height="16px" fill="none"><path stroke="currentColor" d="M12.644 5.65L8 10.295 3.355 5.65"></path></svg>
                        <div className="wrapQuesAndAns">
                            <div className="question">
                                <p>What are Member Rewards?</p>
                            </div>
                        </div>
                    </label>
                </div>
            </>
        )
    }
}