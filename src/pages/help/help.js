import React from "react";
import ProductsBar from "../../components/productsBar";
import AssistsQuestion from "./components/assistsQuestions";
import TitleAndSearch from "./components/titleAndSearch";

export default class Help extends React.Component{
    render(){
        return(
            <>
                <ProductsBar/>
                <TitleAndSearch/>
                <AssistsQuestion/>
            </>
        )
    }
}