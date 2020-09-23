import React,{Component} from 'react'
import ProjectCard from '../components/ProjectCard';

class  Portfolio extends Component {
render(){
return(
<div>
{/* <!--breadcrumb_area--> */}
    <section class="breadcrumb_area parallax_effect" data-background="img/bg.jpg" style={{background: "url('assets/img/breadcrumb_bg.jpg') no-repeat center center / cover"}}>
      <div class="overlay_bg"></div>
      <div class="container">
        <div class="bread_content">
          <h2>Our Portfolio</h2>
        </div>
      </div>
    </section>
    {/* <!--breadcrumb_area-->
    <!--portfolio_area--> */}
    <section class="portfolio_area_three sec_pad">
      <div class="container">
        <div class="p_filter_info d-flex justify-content-center">
          <h5>Short Portfolio:</h5>
          <div id="portfolio_filter" class="portfolio_filter">
            <div data-filter="*" class="work_portfolio_item active">All</div>
            <div data-filter=".web" class="work_portfolio_item">
              Web Design
            </div>
            <div data-filter=".illus" class="work_portfolio_item">
              Illustrations
            </div>
            <div data-filter=".fashion" class="work_portfolio_item">
              Graphic Template
            </div>
            <div data-filter=".video" class="work_portfolio_item">Video</div>
            <div data-filter=".mock" class="work_portfolio_item">Mock-Up</div>
          </div>
        </div>
        <div class="row portfolio_gallery" id="work-portfolio">
            
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />

        </div>
      </div>
    </section>
    {/* <!--portfolio_area-->

    <!--theme_promo_area--> */}
    <section class="theme_promo_area">
      <div class="container">
        <h2>The most impressive template you’ll find</h2>
        <a href="#" class="theme_w_btn border_btn">Buy This Now</a>
      </div>
    </section> 
</div>
);
}}
export default Portfolio