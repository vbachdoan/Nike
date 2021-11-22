import React from "react";
import Card from "../../../components/card";

import '../styles/onApp.scss';

const cardData = [
    {
        imgSrc: './assets/images/homePage/homePage-onApp-pic1.jpg',
        title: 'Nike App',
        description:'Shop: Discover your personal guide to Nike'
    },
    {
        imgSrc: './assets/images/homePage/homePage-onApp-pic2.jpg',
        title: 'Nike Run Club',
        description:'Run: Get motivated with Audio Guided Runs'
    },
    {
        imgSrc: './assets/images/homePage/homePage-onApp-pic3.jpg',
        title: 'Nike Training Club',
        description:'Train: Break a sweat with over 160 workouts'
    },
    {
        imgSrc: './assets/images/homePage/homePage-onApp-pic4.jpg',
        title: 'SNKRS',
        description:'Collect: Shop the latest sneaker drops'
    }
    
]

export default class OnApp extends React.Component{
    render(){
        return(
            <>
                <div id="wrap-on-app">
                    <div id="wrap-title">
                        <p id="title">Member-Only Apps</p>
                        <h3 id="slogan">
                            Download our apps,
                            <br/>your key to accessing benefits
                        </h3>
                    </div>
                    <div id="on-app-content">
                        {cardData.map((cardInformation,key)=>{
                            return(
                                <Card cardData={cardInformation} key={key}/>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}