import React from "react";
import { Link } from "react-router-dom";

import './style.scss';

export default class Kids extends React.Component{
    render(){
        return(
            <>
                <div className="wrap-releases">
                    <div className="navigation-block">
                        <h3 className="main-navigation"><Link to="/">New & Featured</Link></h3>
                        <Link to="/" className="navigation">Best of Air Max</Link>
                        <Link to="/" className="navigation">Best Sellers</Link>
                        <Link to="/" className="navigation">Sustainable Materials</Link>
                        <Link to="/" className="navigation">Gift for Kids</Link>
                        <Link to="/" className="navigation">Basketball Essentials</Link>
                        <Link to="/" className="navigation">Kids Matching Sets</Link>
                        <Link to="/" className="navigation">Best of Air Force</Link>
                        <Link to="/" className="navigation">Cozy Layers</Link>
                        <Link to="/" className="navigation">Final Few</Link>
                        <Link to="/" className="navigation">Black Friday Up to 50% off</Link>
                    </div>
                    <div className="wrap-child-block-navigation">
                        <div className="navigation-block">
                            <h3 className="main-navigation"><Link to="/">Boys Shoes</Link></h3>
                            <Link to="/" className="navigation">Big Kids (3.5Y - 7Y)</Link>
                            <Link to="/" className="navigation">Little Kids (10.5C - 3Y)</Link>
                            <Link to="/" className="navigation">Baby & Toddler (1C - 10C)</Link>
                            <Link to="/" className="navigation">Lifestyle</Link>
                            <Link to="/" className="navigation">Running</Link>
                            <Link to="/" className="navigation">Basketball</Link>
                            <Link to="/" className="navigation">Soccer</Link>
                            <Link to="/" className="navigation">Sandals & Slides</Link>
                            <Link to="/" className="navigation">Nike FlyEase</Link>
                            <Link to="/" className="navigation">Shoes $80 & Under</Link>
                            <Link to="/" className="navigation">All Shoes</Link>
                        </div>
                        <div className="navigation-block">
                            <h3 className="main-navigation"><Link to="/">Boys Clothing</Link></h3>
                            <Link to="/" className="navigation">Big Kids (XS - XL)</Link>
                            <Link to="/" className="navigation">Little Kids (4 - 7)</Link>
                            <Link to="/" className="navigation">Baby & Toddler (0M - 4T)</Link>
                            <Link to="/" className="navigation">Pants & Tights</Link>
                            <Link to="/" className="navigation">Matching Sets</Link>
                            <Link to="/" className="navigation">Jackets and Vests</Link>
                            <Link to="/" className="navigation">Tops & T-Shirts</Link>
                            <Link to="/" className="navigation">Nike Pro & Baselayer</Link>
                            <Link to="/" className="navigation">Shorts</Link>
                            <Link to="/" className="navigation">Swimwear</Link>
                            <Link to="/" className="navigation">Extended Sizes</Link>
                            <Link to="/" className="navigation">All Clothing</Link>
                        </div>
                    </div>
                    <div className="wrap-child-block-navigation">
                        <div className="navigation-block">
                            <h3 className="main-navigation"><Link to="/">Girls Shoes</Link></h3>
                            <Link to="/" className="navigation">Big Kids (3.5Y - 7Y)</Link>
                            <Link to="/" className="navigation">Little Kids (10.5C - 3Y)</Link>
                            <Link to="/" className="navigation">Baby & Toddler (1C - 10C)</Link>
                            <Link to="/" className="navigation">Lifestyle</Link>
                            <Link to="/" className="navigation">Running</Link>
                            <Link to="/" className="navigation">Basketball</Link>
                            <Link to="/" className="navigation">Soccer</Link>
                            <Link to="/" className="navigation">Sandals & Slides</Link>
                            <Link to="/" className="navigation">Nike Flyease</Link>
                            <Link to="/" className="navigation">Shoes $80 & Under</Link>
                            <Link to="/" className="navigation">All Clothing</Link>
                        </div>
                        <div className="navigation-block">
                            <h3 className="main-navigation"><Link to="/">Girls Clothing</Link></h3>
                            <Link to="/" className="navigation">Big Kids (XS - XL)</Link>
                            <Link to="/" className="navigation">Little Kids (4T - 7)</Link>
                            <Link to="/" className="navigation">Baby & Toddler (0M - 4T)</Link>
                            <Link to="/" className="navigation">Hoodies & Sweatshirts</Link>
                            <Link to="/" className="navigation">Pants & Leggings</Link>
                            <Link to="/" className="navigation">Matching Sets</Link>
                            <Link to="/" className="navigation">Jackets and Vests</Link>
                            <Link to="/" className="navigation">Tops & T-Shirts</Link>
                            <Link to="/" className="navigation">Sports Bras</Link>
                            <Link to="/" className="navigation">Shorts</Link>
                            <Link to="/" className="navigation">Skirts & Dresses</Link>
                            <Link to="/" className="navigation">Swimwear</Link>
                            <Link to="/" className="navigation">Extended Sizes</Link>
                            <Link to="/" className="navigation">All Clothing</Link>
                        </div>
                    </div>
                    <div className="wrap-child-block-navigation">
                        <div className="navigation-block">
                            <h3 className="main-navigation"><Link to="/">Baby & Toddler</Link></h3>
                            <Link to="/" className="navigation">Baby Girl</Link>
                            <Link to="/" className="navigation">Baby Boy</Link>
                            <Link to="/" className="navigation">All Clothing (0M - 4T)</Link>
                            <Link to="/" className="navigation">All Shoes (1C - 10C)</Link>
                            <Link to="/" className="navigation">Baby and Toddler Sets</Link>
                        </div>
                        <div className="navigation-block">
                            <h3 className="main-navigation"><Link to="/">Accessories & Equipment</Link></h3>
                            <Link to="/" className="navigation">Bags & Backpacks</Link>
                            <Link to="/" className="navigation">Hats</Link>
                            <Link to="/" className="navigation">Socks</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}