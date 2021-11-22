import React from "react";

import './card.scss';

export default class Card extends React.Component{

    render(){
        return(
            <div className="wrap-card">
                <div className="image"><img src={this.props.cardData.imgSrc} alt="benefits"/></div>
                <div className="information">
                    <p>{this.props.cardData.title}</p>
                    <h3>{this.props.cardData.description}</h3>
                    <a href="./product">Explore</a>
                </div>
            </div>
        )
    }
}