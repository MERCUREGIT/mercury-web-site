import React, {Component} from "react";


class HomeServiceCard extends Component {
 
    render(){
        return(
            <div className="col-lg-4 pb-2 mb-5 col-md-6 rounded shadow">
            <div className="offer_item pt-3 wow fadeInUp">
              <div className="img_hover rounded">
                <img src="assets//img/home-two/offer_img1.jpg" alt="" />
              </div>
              <div className="content text-center">
                <h6>Unlimited Layouts</h6>
                <p>
                  Sed porta sollicitudin eros, vel sagittis turpis consequat
                  nec. Donec ac viverra ligula, in scelerisque leo. Proin
                  massa quam, ornare in porta quis pellentesque porta rutrum
                  erat
                </p>
       
                <button onClick={this.props.showmore} name={this.props.serviceName} className="theme_btn">Read More</button>
              </div>
             
            </div>
          </div>
        );
    }
}

export default HomeServiceCard;