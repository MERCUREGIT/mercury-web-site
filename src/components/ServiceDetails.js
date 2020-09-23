import React,{Component} from 'react'

class  ServiceDetail extends Component {
render(){
return(

        <div class=" mt-3 row">
            <div className="col-10"></div>
            <div className="col-1"> 
                <button type="button" name="" onClick ={this.props.showmore} className=" theme_btn" aria-label="Close">
                    <span aria-hidden="true">Retour &times;</span> 
                </button>
            </div>
          <div class="col-lg-6">
            <div class="service_faq_inner">
              <div class="section_title">
                <h6>Best Services</h6>
                <h2>{this.props.serviceName}</h2>
              </div>
              <div id="accordion" class="service_faq_info">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                        <span class="fas fa-plus pluse"></span>
                        <span class="fas fa-minus minus"></span>
                        Web Developmets
                      </button>
                    </h5>
                  </div>
                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                      Phasellus pulvinar iaculis nunc at placerat. Sed porta
                      sollicitudin eros, vel sagittis turpis consequat nec.
                      Donec ac viverra ligula, in scelerisque leo. Proin massa
                      quam, ornare in porta quis pellentesque porta rutrum
                      erat nec facilisis
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="false" aria-controls="collapseTwo">
                        <span class="fas fa-plus pluse"></span>
                        <span class="fas fa-minus minus"></span>
                        Web Design
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                      Phasellus pulvinar iaculis nunc at placerat. Sed porta
                      sollicitudin eros, vel sagittis turpis consequat nec.
                      Donec ac viverra ligula, in scelerisque leo. Proin massa
                      quam, ornare in porta quis pellentesque porta rutrum
                      erat nec facilisis
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"
                        aria-expanded="false" aria-controls="collapseThree">
                        <span class="fas fa-plus pluse"></span>
                        <span class="fas fa-minus minus"></span>
                        Ilustrator Graphic
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                      Phasellus pulvinar iaculis nunc at placerat. Sed porta
                      sollicitudin eros, vel sagittis turpis consequat nec.
                      Donec ac viverra ligula, in scelerisque leo. Proin massa
                      quam, ornare in porta quis pellentesque porta rutrum
                      erat nec facilisis
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="service_faq_inner">
              <div class="section_title">
                <h6>Our Choose</h6>
                <h2>We Choose Citrix</h2>
              </div>
              <div class="nav nav-tabs service_tab" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
                  aria-controls="nav-home" aria-selected="true">Retina Ready</a>
                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
                  aria-controls="nav-profile" aria-selected="false">Free Support</a>
                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab"
                  aria-controls="nav-contact" aria-selected="false">PSD Included</a>
              </div>
              <div class="tab-content service_tab_content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <p>
                    <img src="assets/img/tab_img.png" alt="" /> Phasellus
                    pulvinar iaculis nunc at placerat. Sed porta sollicitudin
                    eros, vel sagittis turpis consequat nec. Donec ac viverra
                    ligula, in scelerisque leo. Proin massa quam, ornare in
                    porta quis, sagittis vitae lectus. Maecenas dictum, augue
                    vel dictum tempus, sapien metus pulvinar sapien, placerat
                    pulvinar lectus risus eu erat. Morbi semper, dui sodales
                    aliquet imperdiet.
                  </p>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <p>
                    <img src="assets/img/tab_img.png" alt="" /> Phasellus
                    pulvinar iaculis nunc at placerat. Sed porta sollicitudin
                    eros, vel sagittis turpis consequat nec. Donec ac viverra
                    ligula, in scelerisque leo. Proin massa quam, ornare in
                    porta quis, sagittis vitae lectus. Maecenas dictum, augue
                    vel dictum tempus, sapien metus pulvinar sapien, placerat
                    pulvinar lectus risus eu erat. Morbi semper, dui sodales
                    aliquet imperdiet.
                  </p>
                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                  <p>
                    <img src="assets/img/tab_img.png" alt="" /> Phasellus
                    pulvinar iaculis nunc at placerat. Sed porta sollicitudin
                    eros, vel sagittis turpis consequat nec. Donec ac viverra
                    ligula, in scelerisque leo. Proin massa quam, ornare in
                    porta quis, sagittis vitae lectus. Maecenas dictum, augue
                    vel dictum tempus, sapien metus pulvinar sapien, placerat
                    pulvinar lectus risus eu erat. Morbi semper, dui sodales
                    aliquet imperdiet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
);
}}
export default ServiceDetail