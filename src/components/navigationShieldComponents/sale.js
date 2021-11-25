import React from "react";
import { Link } from 'react-router-dom';

import './style.scss';

export default class Sale extends React.Component{
    render(){
        return(
            <>
                <div className="wrap-releases">
                    <div className="navigation-block">
                        <h3 className="main-navigation"><Link to="/">Sale</Link></h3>
                        <Link to="/" className="navigation">Black Friday Up to 50% off</Link>
                        <Link to="/" className="navigation">All Sale</Link>
                    </div>
                    <div className="navigation-block">
                        <h3 className="main-navigation"><Link to="/">Mens Sale</Link></h3>
                        <Link to="/" className="navigation">Shoes</Link>
                        <Link to="/" className="navigation">Clothing</Link>
                        <Link to="/" className="navigation">Equipment</Link>
                    </div>
                    <div className="navigation-block">
                        <h3 className="main-navigation"><Link to="/">New For Women</Link></h3>
                        <Link to="/" className="navigation">Shoes</Link>
                        <Link to="/" className="navigation">Clothing</Link>
                        <Link to="/" className="navigation">Equipment</Link>
                    </div>
                    <div className="navigation-block">
                        <h3 className="main-navigation"><Link to="/">Kids Sale</Link></h3>
                        <Link to="/" className="navigation">Shoes</Link>
                        <Link to="/" className="navigation">Clothing</Link>
                        <Link to="/" className="navigation">Equipment</Link>
                    </div>
                </div>
            </>
        )
    }
}