import React, { Component } from "react";

import Cover from "../helpers/Cover";
import HomePageBestProjectCard from "../components/HomePageBestProjectCard";
import HomeServiceCard from "../components/HomeServiceCard";
import ServiceDetail from "../components/ServiceDetails";
import HomePortfolioItemList from "../helpers/HomePortfolioItemList";

class Home extends Component {

  state = {
  services: {
    showServiceDetail:false,
    serviceName: ""
  }  
  }
    

    componentDidMount() {
// search for the content

    }
  
   toggleShowServiceDetail = (e) =>{


      // fetch for content
  
      let showFlag = this.state.showServiceDetail ? false : true;
      let service =  e.target.name;
      this.setState({
       showServiceDetail: showFlag,
        serviceName: service
      });
    }
    

    render(){
        return(
<div className="body_wrapper">
    <Cover size ={"80vh"} image={"url('assets/img/home-two/parallex_bg.jpg') no-repeat center 50% / cover"} />

    {/* welcome section */}
    <div className="container">
      <div className="row shadow mt-5 rounded concave-white ">
          <div className="col p-5 align-middle  wow fadeInUp " data-wow-delay="0.2s">
            <h1 className ="text-center"> BIENVENUE </h1>
            <br/>
            <p className="fadeInRight" data-wow-delay="0.35s">
                Mercury tech est une entreprise réunissant des ingénieurs en informatique. Mercury a pour objectif de fournir des solutions et formations informatiques contextualisées adaptées aux besoins de chaque entreprise, mais aussi à des personnes soucieuses de s’arrimer à l’ère du numérique. Rigoureux, professionnel, dynamique et créatif, Mercury Tech propose des solutions SMART de haute qualité dans les domaines du développement de logiciel, conception graphique, maintenance matérielle et logicielle, formation en informatique, sécurité informatique et réseaux informatique
            </p>
          </div>
          <div className="col wow fadeInUp p-0 fadeInLeft" data-wow-delay="0.3" style={{width:"30vw", height:"100vh", backgroundImage:'url("https://image.freepik.com/free-psd/concentrated-teen-with-his-laptop_1154-370.jpg?2")', backgroundRepeat:"no-repeat"}} >
          </div>
      </div>
    </div>
    {/* welcome section */}

<section className="sevice_promo_area_two sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center p-5">
              what is special about us
            </h1>
          </div>
          <div className="col-lg-3 col-sm-6 ">
            <div className="service_promo_item wow fadeInUp">
              <div className="round">
                <i className="fab fa-codepen"></i>
              </div>
              <a href="#">
                <h3>Clean Code</h3>
              </a>
              <p>
                Proin massa quam, ornare in porta quis, sagittis vitae lectus.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="service_promo_item wow fadeInUp" data-wow-delay="0.2s">
              <div className="round">
                <i className="fas fa-cloud-upload-alt"></i>
              </div>
              <a href="#">
                <h3>Cloud Upload</h3>
              </a>
              <p>
                Proin massa quam, ornare in porta quis, sagittis vitae lectus.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="service_promo_item wow fadeInUp" data-wow-delay="0.4s">
              <div className="round">
                <i className="fab fa-internet-explorer"></i>
              </div>
              <a href="#">
                <h3>Muti Navigator</h3>
              </a>
              <p>
                Proin massa quam, ornare in porta quis, sagittis vitae lectus.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="service_promo_item wow fadeInUp" data-wow-delay="0.5s">
              <div className="round">
                <i className="fab fa-gripfire"></i>
              </div>
              <a href="#">
                <h3>Awesome PSD</h3>
              </a>
              <p>
                Proin massa quam, ornare in porta quis, sagittis vitae lectus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!--Features_area--> */}
    <section className="features_area">
      <div className="overlay_bg"></div>
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-8">
            <div className="features_info">
              <div className="section_title color_w wow fadeInUp">
                <h6>What We Do</h6>
                <h2>Citrix Awesome Features</h2>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="precess_item media wow fadeInUp">
                    <div className="icon">01</div>
                    <div className="media-body">
                      <a href="#">
                        <h6>Modern Design</h6>
                      </a>
                      <p>
                        Sed porta sollicitudin eros, vel sagittis turpis
                        consequat nec.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="precess_item media wow fadeInUp" data-wow-delay="0.2s">
                    <div className="icon">02</div>
                    <div className="media-body">
                      <a href="#">
                        <h6>Responsive Design</h6>
                      </a>
                      <p>
                        Sed porta sollicitudin eros, vel sagittis turpis
                        consequat nec.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="precess_item media wow fadeInUp" data-wow-delay="0.3s">
                    <div className="icon">03</div>
                    <div className="media-body">
                      <a href="#">
                        <h6>Retina Ready</h6>
                      </a>
                      <p>
                        Sed porta sollicitudin eros, vel sagittis turpis
                        consequat nec.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="precess_item media wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon">04</div>
                    <div className="media-body">
                      <a href="#">
                        <h6>Full Devices</h6>
                      </a>
                      <p>
                        Sed porta sollicitudin eros, vel sagittis turpis
                        consequat nec.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center wow fadeInLeft" data-wow-delay="0.2s">
            <img src="assets/img/home-two/s6.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    {/* <!--Features_area-->
    <!--offer_area--> */}
    <section className="offer_area sec_pad bg_color">
      <div className="container">
        <div className="section_title text-center wow fadeInUp">
          <h6>What We</h6>
          <h2>Our Best Projects</h2>
        </div>
        <div className="row justify-content-center">

      <HomePageBestProjectCard />
      <HomePageBestProjectCard />
      <HomePageBestProjectCard />

        </div>
      </div>
    </section>
    {/* <!--offer_area--> 

    <!-- Promo area --> */}
    <Cover image={"url('assets/img/home-two/parallex_bg.jpg') no-repeat center 50% / cover"}/>
    {/* <!-- Promo area -->
    <!--portfolio_area_two--> */}
    <section className="portfolio_area_two sec_pad">
      <div className="container">
        <div className="section_title text-center wow fadeInUp">
          
          <h2>Our Best Works</h2>
        </div>
        <div className="row justify-content-center">
         <HomePortfolioItemList />
         </div>
      </div>
    </section>
    {/* <!--portfolio_area_two-->
    <!--theme_promo_area--> */}
    <section className="theme_promo_area">
      <div className="container">
      <div className="wow fadeInLeft">
              <div className="section_title">
                <h6>Best Services</h6>
                <h2>Our Services</h2>
              </div>
            </div>
      </div>
    </section>

  
      <div className="container">
       
            {this.state.showServiceDetail ?  <ServiceDetail serviceName = {this.state.serviceName} showmore = {this.toggleShowServiceDetail} /> : 
            
            <div className="row mt-5 mb-5">
             <HomeServiceCard showmore = {this.toggleShowServiceDetail} serviceName ="develoment"/>
             <HomeServiceCard showmore = {this.toggleShowServiceDetail} serviceName ="graphique"/>
             <HomeServiceCard showmore = {this.toggleShowServiceDetail} serviceName ="Training"/>
             <HomeServiceCard showmore = {this.toggleShowServiceDetail} serviceName ="Maintenace"/>
             <HomeServiceCard showmore = {this.toggleShowServiceDetail} serviceName ="Networking"/>
             <HomeServiceCard showmore = {this.toggleShowServiceDetail} serviceName ="Security"/>
        </div>
            }
        
      </div>
    
    {/* <!-- service area -->
    <!-- h_blog post area --> */}
    <section className="h_blog_post_area sec_pad">
      <div className="container">
        <div className="section_title text-center color_w wow fadeInUp">
          <h6>News Blog</h6>
          <h2>Our Blog Updates</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="h_blog_post_item wow fadeInUp">
              <a href="blog.html" className="post_img"><img src="assets/img/home-two/blog_1.jpg" alt="" /></a>
              <div className="post_content">
                <a href="#" className="h_post_date">March 21th, 2017</a>
                <a href="blog.html">
                  <h3>
                    The long road to great success has many things will stop
                    you
                  </h3>
                </a>
                <div className="h_post_info">
                  <a href="#"><i className="far fa-heart"></i>856 Likes</a>
                  <a href="#"><i className="far fa-comment"></i>29 Comments</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="h_blog_post_item wow fadeInUp" data-wow-delay="0.2s">
              <a href="blog.html" className="post_img"><img src="assets/img/home-two/blog2.jpg" alt="" /></a>
              <div className="post_content">
                <a href="#" className="h_post_date">March 21th, 2017</a>
                <a href="blog.html">
                  <h3>
                    The long road to great success has many things will stop
                    you
                  </h3>
                </a>
                <div className="h_post_info">
                  <a href="#"><i className="far fa-heart"></i>856 Likes</a>
                  <a href="#"><i className="far fa-comment"></i>29 Comments</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="h_blog_post_item wow fadeInUp" data-wow-delay="0.4s">
              <a href="blog.html" className="post_img"><img src="assets/img/home-two/blog3.jpg" alt="" /></a>
              <div className="post_content">
                <a href="#" className="h_post_date">March 21th, 2017</a>
                <a href="blog.html">
                  <h3>
                    The long road to great success has many things will stop
                    you
                  </h3>
                </a>
                <div className="h_post_info">
                  <a href="#"><i className="far fa-heart"></i>856 Likes</a>
                  <a href="#"><i className="far fa-comment"></i>29 Comments</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center wow fadeInUp" data-wow-delay="0.2s">
          <a href="#" className="theme_w_btn border_btn">More Post</a>
        </div>
      </div>
    </section>
 <div>
 <section className=" pt-0 mt-0 clients_logo_area sec_pad">
      <div className="container">
        <div className="row">

        <div className=" col-12 section_title text-center color_w wow fadeInUp">
          <h6>we and them </h6>
          <h2>Our Clients</h2>
        </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp">
            <a href="#" className="c_logo_item"><img src="assets/img/home-one/Mountain.png" alt="" /></a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
            <a href="#" className="c_logo_item"><img src="assets/img/home-one/Coffee.png" alt="" /></a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
            <a href="#" className="c_logo_item"><img src="assets/img/home-one/Fisherman.png" alt="" /></a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <a href="#" className="c_logo_item"><img src="assets/img/home-one/Mountainbike.png" alt="" /></a>
          </div>
        </div>
      </div>
    </section>
{/* Add contact details here if needed */}
  </div>

           </div>
        );
        
    }
}


export default Home;
