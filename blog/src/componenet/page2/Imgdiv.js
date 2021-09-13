import React, { Component } from 'react'
import img1 from '../../img/img7.jpg'
import img2 from '../../img/img8.jpg'
import img3 from '../../img/img9.jpg'
class Imgdiv extends Component {
    render() {
        return (
            <div>
                 <div className="h5div"> 
                  <h5>{this.props.h5text}</h5></div> 
            <img src={this.props.img} alt="" />
            <p>{this.props.ptext}</p>
            
            </div>
        )
    }
}

export default Imgdiv
