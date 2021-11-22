import React from "react";
import Advertisement from "../../components/advertisement";
import ProductsBar from "../../components/productsBar";
import Banner from "./components/banner";
import Benefit from "./components/benefit";
import FAQs from "./components/faq";
import ListAdvantages from "./components/listAdvantages";
import MemberShip from "./components/memberShip";
import OnApp from "./components/onApp";
import Slogan from "./components/slogan";

export default class Home extends React.Component{
    render(){
        return(
            <>
                <ProductsBar/>
                <Advertisement/>
                <MemberShip/>
                <Banner/>
                <Benefit/>
                <ListAdvantages/>
                <OnApp/>
                <FAQs/>
                <Slogan/>
            </>
        )
    }
}