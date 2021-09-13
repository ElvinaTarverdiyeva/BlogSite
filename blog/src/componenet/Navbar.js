import React, { Component } from 'react'
import img1 from '../img/img2.jpg'
class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="hedimg">
                    <div className="nametext">
                        <h1>MAPLE</h1>
                        <h5><i class="fab fa-canadian-maple-leaf"></i>Autumn stories <i class="fab fa-canadian-maple-leaf"></i></h5>
                    </div>
                    <div className="ikons5">
                        <div>  <i class="fab fa-facebook-f"></i></div> <span></span>
                        <div><i class="fab fa-twitter"></i></div><span></span>
                        <div><i class="fab fa-pinterest-p"></i></div><span></span>
                        <div><i class="fab fa-instagram"></i></div><span></span>
                        <div><i class="fas fa-heart"></i></div>

                    </div>
                </div>
           <header>
               <div className="navbar">
                   <ul>
                       <li>
                           <p className="nav-item">Home</p>
                       </li>
                       <li>
                           <p className="nav-item">About</p>
                       </li>
                       <li>
                           <p className="nav-item">Pictures</p>
                       </li>
                       <li>
                           <p className="nav-item">Destinations</p>
                       </li>
                       <li>
                           <p className="nav-item">Color</p>
                       </li>
                   </ul>
               </div>
               <div className="form ">
               <i class="fab fa-searchengin"></i>
               <input type="search" placeholder="Search" />
               </div>
           </header>
            </div>
        )
    }
}

export default Navbar
