import React,{Component} from 'react'

class  HomePortfolioItem extends Component {
render(){
return(
  <div className="col-lg-4 col-sm-6 ">
    <div className="rounded portfolio_item img_hover wow fadeInUp">
      <img src="assets/img/home-two/portfolio1.jpg" alt="" />
      <div className="hover_content">
        <h5>New App Agency</h5>
        <p>Design & Development</p>
       {/* insert a way to read more about element */}
      </div>
    </div>
  </div>
);
}}
export default HomePortfolioItem