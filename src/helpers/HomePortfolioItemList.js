import React,{Component} from 'react'
import HomePortfolioItem from "../components/HomePortfolioItem";
import {Link} from "react-router-dom";

class  HomePortfolioItemList extends Component {
render(){
return(
<>
    <HomePortfolioItem annimationDelay ={"0.1s"}/>
    <HomePortfolioItem annimationDelay ={"0.2s"}/>
    <HomePortfolioItem annimationDelay ={"0.3s"}/>
    <HomePortfolioItem annimationDelay ={"0.4s"}/>
    <HomePortfolioItem annimationDelay ={"0.5s"}/>
    <HomePortfolioItem annimationDelay ={"0.6s"}/> 

       
    <a className="theme_btn" href="/portfolio" > See More </a>
       
</>
);
}}
export default HomePortfolioItemList