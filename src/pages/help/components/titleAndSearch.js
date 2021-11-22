import React from "react";

import '../styles/titleAndSearch.scss';

export default class TitleAndSearch extends React.Component{

    handleChange(value){
        if(value !== ""){
            this.setState({
                style:{
                    top: "-3px",
                    color: "#ccc",
                }
            })
        }
    }    

    handleClick(event){
        event.target.value="";
    }

    render(){
        return(
            <>
                <div id="wrap-title-and-search">
                    <h3 id="title">GET HELP</h3>
                    <div id="search-box">
                        <input type="text" id="search-field" onChange={(event)=>this.handleChange(event.target.value)} onClick={(event)=>this.handleClick(event)}/>
                        <label htmlFor="search-field">
                            <svg fill="#757575" height="18px" width="30px" aria-hidden="true" role="img" viewBox="0 0 24 24">
                                <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
                            </svg>
                        </label>
                        <label htmlFor="search-field"><p id="placeholder">What we can help you with?</p></label>
                    </div>
                </div>
            </>
        )
    }
}