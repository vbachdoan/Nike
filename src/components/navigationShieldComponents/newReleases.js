import React from "react";
import { Link } from 'react-router-dom';

import './style.scss';

export default class NewReleases extends React.Component{
    render(){
        return(
            <>
                <div className="wrap-releases">
                    <div className="navigation-block">
                        <h3 className="main-navigation"><Link to="/">New & Featured</Link></h3>
                        <Link to="/" className="navigation">Jordan 11s & More</Link>
                        <Link to="/" className="navigation">Shop All New Arrivals</Link>
                        <Link to="/" className="navigation">SNKRS Launch New Calendar</Link>
                        <Link to="/" className="navigation">Best of Air Max</Link>
                        <Link to="/" className="navigation">Member Access</Link>
                        <Link to="/" className="navigation">Gift Guide</Link>
                        <Link to="/" className="navigation">Stocking Stuffers</Link>
                        <Link to="/" className="navigation">Dance Studio Styles</Link>
                        <Link to="/" className="navigation">Cozy Layers</Link>
                        <Link to="/" className="navigation">Top Gifts</Link>
                        <Link to="/" className="navigation">Black Friday Up to 50% off</Link>
                    </div>
                    <div className="navigation-block">
                        <h3 className="main-navigation"><Link to="/">New For Men</Link></h3>
                        <Link to="/" className="navigation">Shoes</Link>
                        <Link to="/" className="navigation">Clothing</Link>
                        <Link to="/" className="navigation">Equipment</Link>
                        <Link to="/" className="navigation">Shop All New</Link>
                    </div>
                    <div className="navigation-block">
                        <h3 className="main-navigation"><Link to="/">New For Women</Link></h3>
                        <Link to="/" className="navigation">Shoes</Link>
                        <Link to="/" className="navigation">Clothing</Link>
                        <Link to="/" className="navigation">Equipment</Link>
                        <Link to="/" className="navigation">Shop All New</Link>
                    </div>
                    <div className="navigation-block">
                        <h3 className="main-navigation"><Link to="/">New For Kids</Link></h3>
                        <Link to="/" className="navigation">Boys Shoes</Link>
                        <Link to="/" className="navigation">Boys Clothing</Link>
                        <Link to="/" className="navigation">Girls Shoes</Link>
                        <Link to="/" className="navigation">Girls Clothing</Link>
                        <Link to="/" className="navigation">Shop All New</Link>
                    </div>
                </div>
            </>
        )
    }
}