import React, {Component} from 'react';
import Home from './pages/home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Community from './pages/Community';
import Contact from './pages/Contact';
import { Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import TopNavigation from './components/TopNavigation';

class App extends Component {
  render(){
    return (
      <div className="content-wrapper">
        <TopNavigation />
            <Route path="/" exact component = {Home} />
            <Route path="/about" exact component = {About} />
            <Route path="/services" exact component = {Services} />
            <Route path="/portfolio" exact component = {Portfolio} />
            <Route path="/community" exact component = {Community} />
            <Route path="/contact" exact component = {Contact} />
        <Footer/>
      </div>
      );
  }
    
}

export default App;
