import React,{Component} from 'react'

class  PortfolioDetail extends Component {
render(){
return(
<div>
{/* <!--breadcrumb_area--> */}
    <section class="breadcrumb_area parallax_effect" data-background="img/bg.jpg" style={{background: "url('assets/img/breadcrumb_bg.jpg') no-repeat center center / cover"}}>
      <div class="overlay_bg"></div>
      <div class="container">
        <div class="bread_content">
          <h2>Portfolio Details</h2>
        </div>
      </div>
    </section>
    {/* <!--breadcrumb_area-->
    <!--portfolio_details_area--> */}
    <section class="portfolio_details_area sec_pad">
      <div class="container">
        <div class="portfolio_details_info">
          <div class="row">
            <div class="col-lg-12 portfolio_detail_img">
              <img src="assets/img/portfolio/p_details_img1.jpg" alt="" />
            </div>
            <div class="col-md-6 portfolio_detail_img">
              <img src="assets/img/portfolio/p_details_img2.jpg" alt="" />
            </div>
            <div class="col-md-6 portfolio_detail_img">
              <img src="assets/img/portfolio/p_details_img3.jpg" alt="" />
            </div>
          </div>
          <div class="details_content">
            <div class="details_text">
              <a href="#">
                <h2>Mock-Up PSD Object Support for House</h2>
              </a>
              <p>
                Phasellus pulvinar iaculis nunc at placerat. Sed porta
                sollicitudin eros, vel sagittis turpis consequat nec. Donec ac
                viverra ligula, in scelerisque leo. Proin massa quam, ornare
                in porta quis pellentesque porta rutrum erat nec facilisis
              </p>
            </div>
            <div class="p_details_info">
              <div class="item">
                Date:
                <p>2March 4th, 2017</p>
              </div>
              <div class="item">
                Client:
                <p>Envato Marketplace</p>
              </div>
              <div class="item">
                Category::
                <p>
                  <a href="#">Mock-Up,</a><a href="#">PSD,</a><a href="#"> Template</a>
                </p>
              </div>
            </div>
          </div>
          <div class="p_social_icon">
            <h5>Share:</h5>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-behance"></i></a>
            <a href="#"><i class="fab fa-dribbble"></i></a>
          </div>
        </div>
        <div class="row portfolio_gallery">
          <div class="col-lg-12">
            <h2 class="p_title">More Projects</h2>
          </div>
          <div class="col-lg-4 col-sm-6 fashion web">
            <div class="pr_slider_item">
              <div class="img img_hover">
                <img src="assets/img/portfolio/portfolio10.jpg" alt="" />
                <a href="assets/img/portfolio/portfolio10.jpg" class="icon popup"><i class="fas fa-plus"></i></a>
              </div>
              <div class="item_content">
                <a href="#">
                  <h4>Object Support for House</h4>
                </a>
                <p>Interior &amp; Design</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 illus">
            <div class="pr_slider_item">
              <div class="img img_hover">
                <img src="assets/img/portfolio/portfolio11.jpg" alt="" />
                <a href="assets/img/portfolio/portfolio11.jpg" class="icon popup"><i class="fas fa-plus"></i></a>
              </div>
              <div class="item_content">
                <a href="#">
                  <h4>Object Support for House</h4>
                </a>
                <p>Interior &amp; Design</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 video">
            <div class="pr_slider_item">
              <div class="img img_hover">
                <img src="assets/img/portfolio/portfolio12.jpg" alt="" />
                <a href="assets/img/portfolio/portfolio12.jpg" class="icon popup"><i class="fas fa-plus"></i></a>
              </div>
              <div class="item_content">
                <a href="#">
                  <h4>Object Support for House</h4>
                </a>
                <p>Interior &amp; Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!--portfolio_details_area--> */}

    {/* <!--theme_promo_area--> */}
    <section class="theme_promo_area">
      <div class="container">
        <h2>The most impressive template you’ll find</h2>
        <a href="#" class="theme_w_btn border_btn">Buy This Now</a>
      </div>
    </section>
    {/* <!--theme_promo_area--> */}
</div>
);
}}
export default PortfolioDetail