import React,{Component} from 'react'

class  Cover extends Component {
render(){
return(
<div>
<section className="promo_area parallax_effect" data-background="img/bg.jpg" style={{ background: this.props.image, height: this.props.size}}>
      <div className="container">
     
        <div className="promo_content promo_content_two text-center">
          <p>The best & Unique Home Pages forTheme Wordpress</p>
          <h2><span>Awesome</span> Home Pages</h2>
          <div className="line"></div>
          <a href="#" className="theme_btn">Read More</a>
          {/* <a href="#" className="theme_w_btn border_btn">Purchase Now</a> */}
        </div>
      </div>

    </section> 
</div>
);
}}
export default Cover