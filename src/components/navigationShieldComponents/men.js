import React from "react";
import { Link } from "react-router-dom";

import './style.scss';

export default class Men extends React.Component{
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
                    <div className="wrap-child-block-navigation">
                        <div className="navigation-block">
                            <h3 className="main-navigation"><Link to="/">Shoes</Link></h3>
                            <Link to="/" className="navigation">Lifestyle</Link>
                            <Link to="/" className="navigation">Running</Link>
                            <Link to="/" className="navigation">Basketball</Link>
                            <Link to="/" className="navigation">Jordan</Link>
                            <Link to="/" className="navigation">Training & Gym</Link>
                            <Link to="/" className="navigation">Soccer</Link>
                            <Link to="/" className="navigation">Golf</Link>
                            <Link to="/" className="navigation">Cross Country</Link>
                            <Link to="/" className="navigation">Skateboarding</Link>
                            <Link to="/" className="navigation">Tennis</Link>
                            <Link to="/" className="navigation">Baseball</Link>
                            <Link to="/" className="navigation">Football</Link>
                            <Link to="/" className="navigation">Walking</Link>
                            <Link to="/" className="navigation">Sandals & Slides</Link>
                            <Link to="/" className="navigation">Sustainable Materials</Link>
                            <Link to="/" className="navigation">Shoes 100$ and Under</Link>
                            <Link to="/" className="navigation">All Shoes</Link>
                        </div>
                        <div className="navigation-block">
                            <h3 className="main-navigation"><Link to="/">Customize</Link></h3>
                            <Link to="/" className="navigation">Nike by you New Releases</Link>
                            <Link to="/" className="navigation">Customize with Nike by You</Link>
                        </div>
                    </div>
                    <div className="wrap-child-block-navigation">
                        <div className="navigation-block">
                            <h3 className="main-navigation"><Link to="/">Clothing</Link></h3>
                            <Link to="/" className="navigation">Tops & T-Shirts</Link>
                            <Link to="/" className="navigation">Shorts</Link>
                            <Link to="/" className="navigation">Hoodies & Sweatshirts</Link>
                            <Link to="/" className="navigation">Pants & Tights</Link>
                            <Link to="/" className="navigation">Matching Sets</Link>
                            <Link to="/" className="navigation">Jackets & Vests</Link>
                            <Link to="/" className="navigation">Swimwear</Link>
                            <Link to="/" className="navigation">Polos</Link>
                            <Link to="/" className="navigation">Nike Pro</Link>
                            <Link to="/" className="navigation">Yoga</Link>
                            <Link to="/" className="navigation">Sustainable Materials</Link>
                            <Link to="/" className="navigation">Socks</Link>
                            <Link to="/" className="navigation">Underwear</Link>
                            <Link to="/" className="navigation">Big & tall</Link>
                            <Link to="/" className="navigation">All Clothing</Link>
                        </div>
                        <div className="navigation-block">
                            <h3 className="main-navigation"><Link to="/">Accessories and Equipment</Link></h3>
                            <Link to="/" className="navigation">Bags & Backpacks</Link>
                            <Link to="/" className="navigation">Hats, Visors & Headbands</Link>
                            <Link to="/" className="navigation">Apple Watch Nike</Link>
                        </div>
                    </div>
                    <div className="navigation-block">
                        <h3 className="main-navigation"><Link to="/">Shop Collection</Link></h3>
                        <Link to="/" className="navigation">Golf</Link>
                        <Link to="/" className="navigation">Jordan</Link>
                        <Link to="/" className="navigation">Soccer</Link>
                        <Link to="/" className="navigation">Running</Link>
                        <Link to="/" className="navigation">Basketball</Link>
                        <Link to="/" className="navigation">Tennis</Link>
                        <Link to="/" className="navigation">NikeLab</Link>
                        <Link to="/" className="navigation">Training & Gym</Link>
                        <Link to="/" className="navigation">Football</Link>
                        <Link to="/" className="navigation">Baseball</Link>
                        <Link to="/" className="navigation">Nike Sportswear</Link>
                        <Link to="/" className="navigation">ACG</Link>
                        <Link to="/" className="navigation">Skateboarding</Link>
                        <Link to="/" className="navigation">Lacrosse</Link>
                        <Link to="/" className="navigation">Cross Country</Link>
                        <Link to="/" className="navigation">Fan Gear</Link>
                        <Link to="/" className="navigation">Nike FlyEase</Link>
                    </div>
                </div>
            </>
        )
    }
}