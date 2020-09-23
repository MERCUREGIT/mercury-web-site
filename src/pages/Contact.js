import React,{Component} from 'react'

class  Contact extends Component {
render(){
return(
<div>
{/* <!--breadcrumb_area--> */}
    <section class="breadcrumb_area parallax_effect" data-background="img/bg.jpg" style={{background: "url('assets/img/breadcrumb_bg.jpg') no-repeat center center / cover"}}>
      <div class="overlay_bg"></div>
      <div class="container">
        <div class="bread_content">
          <h2>Contact Page</h2>
        </div>
      </div>
    </section>
    {/* <!--breadcrumb_area-->
    <!--contact_area--> */}
    <section class="contact_area sec_pad">
      <div class="container">
        <div class="row flex-row-reverse">
          <div class="col-lg-6">
            <div class="contact_info_right">
              <h2>Contact Details</h2>
              <div class="media c_info_item">
                <div class="icon"><i class="fas fa-home"></i></div>
                <div class="media-body">
                  <h5>Our Address</h5>
                  <p>
                    Envato Pty Ltd 13/2 Permanent St Melbourne VLC 3000
                    Autralia
                  </p>
                </div>
              </div>
              <div class="media c_info_item">
                <div class="icon"><i class="fas fa-headphones"></i></div>
                <div class="media-body">
                  <h5>Number Phone</h5>
                  <p>
                    <span>Office:
                      <a href="tel:01253478">+1 800 945 202 123</a></span>
                    <span>Mobile
                      <a href="tel:01253478">+1 800 945 202 123</a></span>
                  </p>
                </div>
              </div>
              <div class="media c_info_item">
                <div class="icon"><i class="fas fa-envelope"></i></div>
                <div class="media-body">
                  <h5>Email Address</h5>
                  <p>
                    <a href="mailto:supportonlinne@citrix.io">supportonlinne@citrix.io</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="contact_inner">
              <h2>Send Message</h2>
              <form action="contact_process.php" method="post" id="contactForm" novalidate="novalidate"
                class="row contact_form">
                <div class="col-lg-12 form-group">
                  <input class="form-control" type="text" id="name" name="name" placeholder="John Deo" />
                </div>
                <div class="col-lg-12 form-group">
                  <input class="form-control" type="email" id="email" name="email" placeholder="Email" />
                </div>
                <div class="col-lg-12 form-group">
                  <input class="form-control" type="text" id="subject" name="subject" placeholder="Subject" />
                </div>
                <div class="col-lg-12 form-group">
                  <textarea class="form-control" name="message" id="message" cols="30" rows="10"
                    placeholder="Message"></textarea>
                </div>
                <div class="col-lg-12 text-right form-group">
                  <button type="submit" class="theme_btn">
                    Send Message
                  </button>
                </div>
              </form>
              <div id="success">Your message succesfully sent!</div>
              <div id="error">
                Opps! There is something wrong. Please try again
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!--contact_area--> */}
    <section class="map_area">
      <div id="mapBox2" class="mapBox1" data-marker="assets/img/location.png" data-lat="40.701083"
        data-lon="-74.1522848" data-zoom="12" data-info="54B, Tailstoi Town 5238 La city, IA 522364"
        data-mlat="40.701083" data-mlon="-74.1522848"></div>
    </section>
    {/* <!--theme_promo_area--> */}
    <section class="theme_promo_area">
      <div class="container">
        <h2>The most impressive template you’ll find</h2>
        <a href="#" class="theme_w_btn border_btn">Buy This Now</a>
      </div>
    </section>
    {/* <!--theme_promo_area-->
    <!--footer_area-->  */}
</div>
);
}}
export default Contact