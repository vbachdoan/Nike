import React from "react";
import Card from "../../../components/card";

import '../styles/benefit.scss';

const cardData = [
    {
        imgSrc: './assets/images/homePage/homePage-benefit-pic1.jpg',
        title: 'Member Product',
        description:'First and exclusive access to the newest styles in the Member Shop'
    },
    {
        imgSrc: './assets/images/homePage/homePage-benefit-pic2.jpg',
        title: 'Nike By You',
        description:'Customize performance or lifestyle sneakers with unique colorways and materials'
    },
    {
        imgSrc: './assets/images/homePage/homePage-benefit-pic3.jpg',
        title: 'Remember Rewards',
        description:'Special offers and promos to thank Members throughout the year'
    }
    
]

export default class Benefit extends React.Component{
    render(){
        return(
            <>
                <div id="wrap-benefit">
                    <div id="wrap-title">
                        <p>Benefits</p>
                        <h3>
                            Nike Member Benefits
                            <br/>bring out your best
                        </h3>
                    </div>
                    <div id="benefit-content">
                        {
                            cardData.map((cardInformation,key)=>{
                                return(
                                    <Card cardData={cardInformation} key={key}/>
                                );
                            })
                        }
                    </div>
                </div>

            </>
        )
    }
}