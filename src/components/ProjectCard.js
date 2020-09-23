import React,{Component} from 'react'

class  ProjectCard extends Component {
render(){
return(

    <div class="col-lg-4 col-sm-6 ">
        <div class="pr_slider_item shadow">
            <div class="img img_hover rounded-top">
                <img src="assets/img/portfolio/portfolio1.jpg" alt="" />
                <a href="assets/img/portfolio/portfolio1.jpg" class="icon popup"><i class="fas fa-plus"></i></a>
            </div>
            <div class="item_content">
                <a href="#"> <h4>Object Support for House</h4> </a>
                <p>Interior &amp; Design</p>
            </div>
        </div>
    </div> 

);
}}
export default ProjectCard