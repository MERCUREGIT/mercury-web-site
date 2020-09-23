import React,{Component} from 'react';
import {Link} from "react-router-dom";

class  TopNavigation extends Component {
render(){
return(
    <div>
    
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-5">
              <div className="header_social_icon">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-behance"></i></a>
                <a href="#"><i className="fab fa-dribbble"></i></a>
                <a href="#"><i className="fab fa-tumblr"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
              </div>
            </div>
            <div className="col-md-5 col-sm-7 text-right">
              <p>Customer Service Hours: <span>8:00 am - 8:30 pm</span></p>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg" id="header">
        <div className="container">
        <Link to="/" className ="navbar-brand "> <img src="assets/img/Logo.png" style={{height:"70px", width:"70px"}} alt="logo" /> </Link>
     
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="menu_toggle"> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto menu">
                <li className="nav-item  active"> <Link to="/" className ="nav-link">  Home </Link></li>
                <li className="nav-item"> <Link to="/about" className ="nav-link ">  About </Link></li>
                <li className="nav-item"> <Link to="/services"  className ="nav-link">Services </Link> </li>
                <li className="nav-item"><Link to="/portfolio" className ="nav-link">  Portfolio </Link> </li>
                <li className="nav-item"> <Link to="/community" className ="nav-link">  Community </Link></li>
                <li className="nav-item"> <Link to="/contact" className ="nav-link">  Contact </Link></li>
            </ul>
          </div>
        </div>
      </nav>
    
    </div>);
}}
export default TopNavigation