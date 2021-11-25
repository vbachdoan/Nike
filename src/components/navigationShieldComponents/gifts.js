import React from "react";
import { Link } from "react-router-dom";

import './style.scss';

export default class Gifts extends React.Component{
    render(){
        return(
            <>
                <div className="wrap-releases">
                    <div className="navigation-block">
                        <h3 className="main-navigation"><Link to="/">New & Featured</Link></h3>
                        <Link to="/" className="navigation">New Arrivals</Link>
                        <Link to="/" className="navigation">New & Upcoming Drops</Link>
                        <Link to="/" className="navigation">Gift Guide</Link>
                        <Link to="/" className="navigation">For the Whole Family</Link>
                        <Link to="/" className="navigation">Winter Must-Haves</Link>
                        <Link to="/" className="navigation">Trending Sneakers</Link>
                        <Link to="/" className="navigation">Stocking Stuffers</Link>
                        <Link to="/" className="navigation">Cozy Layers</Link>
                        <Link to="/" className="navigation">Gift Cards</Link>
                        <Link to="/" className="navigation">Black Friday Up to 50% off</Link>
                    </div>
                    <div className="navigation-block">
                        <h3 className="main-navigation"><Link to="/">Top Gifts</Link></h3>
                        <Link to="/" className="navigation">Gifts for Her</Link>
                        <Link to="/" className="navigation">Gifts for Him</Link>
                        <Link to="/" className="navigation">Gifts for Kids</Link>
                        <Link to="/" className="navigation">Gifts for All</Link>
                        <Link to="/" className="navigation">Shoes</Link>
                        <Link to="/" className="navigation">Clothing</Link>
                        <Link to="/" className="navigation">Customize Gifts</Link>
                        <Link to="/" className="navigation">Accessories & Equipment</Link>
                    </div>
                    <div className="wrap-child-block-navigation">
                        <div className="navigation-block">
                            <h3 className="main-navigation"><Link to="/">Gifts by Price</Link></h3>
                            <Link to="/" className="navigation">$150 & Under</Link>
                            <Link to="/" className="navigation">$100 & Under</Link>
                            <Link to="/" className="navigation">$50 & Under</Link>
                            <Link to="/" className="navigation">$25 & Under</Link>
                            
                        </div>
                        <div className="navigation-block">
                            <h3 className="main-navigation"><Link to="/">Fleece Gifts</Link></h3>
                            <Link to="/" className="navigation">Tech Fleece</Link>
                            <Link to="/" className="navigation">Club Fleece</Link>
                            <Link to="/" className="navigation">Matching Sets</Link>
                            <Link to="/" className="navigation">Jordan Essentials</Link>
                        </div>
                    </div>
                    <div className="navigation-block">
                        <h3 className="main-navigation"><Link to="/">Gifts for Everyone</Link></h3>
                        <Link to="/" className="navigation">Men's Big & Tall</Link>
                        <Link to="/" className="navigation">Women's Plus Size</Link>
                        <Link to="/" className="navigation">Kids' Extended Sizing</Link>
                        <Link to="/" className="navigation">Teens</Link>
                        <Link to="/" className="navigation">Tweens</Link>
                        <Link to="/" className="navigation">Big Kids</Link>
                        <Link to="/" className="navigation">Little Kids</Link>
                        <Link to="/" className="navigation">Baby & Toddler</Link>
                        <Link to="/" className="navigation">Newborn & Baby Sets</Link>
                    </div>
                    <div className="navigation-block">
                        <h3 className="main-navigation"><Link to="/">Gifts by Sport</Link></h3>
                        <Link to="/" className="navigation">Basketball</Link>
                        <Link to="/" className="navigation">Running</Link>
                        <Link to="/" className="navigation">Training</Link>
                        <Link to="/" className="navigation">Soccer</Link>
                        <Link to="/" className="navigation">Football</Link>
                        <Link to="/" className="navigation">Golf</Link>
                        <Link to="/" className="navigation">Yoga</Link>
                        <Link to="/" className="navigation">Tennis</Link>
                        <Link to="/" className="navigation">NFL</Link>
                        <Link to="/" className="navigation">NBA</Link>
                        <Link to="/" className="navigation">Workout Essentials</Link>
                    </div>
                </div>
            </>
        )
    }
}