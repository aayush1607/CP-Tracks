import React, { Component } from "react";
import "./footer.css";

import Creators from "../../elements/creators/creators.jsx"
import Community from "../../elements/community/community.jsx"

class Footer extends Component {
 
  render() {
    return (
      <footer>
        <div className="content-3">
          <div className="container p-4">
            <div className="text-white pt-4">
              <h2 className="d-inline-flex">Subscribe Newsletter</h2>
              <form>
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  class="p-2 mr-sm-2 "
                  size="40"
                />
                <button type="button" class="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
            <br />
            <div className="footer border-top ">
              <br />
              <div className="row justify-content-center">
                <Creators />
                <Community />
                
                <div className="col-3">
                  <div className="d-flex flex-column">
                    <h6 className="text-white">Connect & Contact Us</h6>
                    <div className="icons">
                      <a href="#">
                        <i class="fab fa-2x fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-2x fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-2x fa-linkedin"></i>
                      </a>
                      <a href="#">
                        <i class="fas fa-2x fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

/*
      <footer>
        <ul>
          {this.state.creators.map(creator => 
            <li class="list-group-item d-flex justify-content-between align-items-center" key={creator}>
            {creator.name}
            <i className="fa fa-linkedin" href={creator.linkedin} ></i>
          </li>)}
        </ul>
      </footer>







      <ul className="text-white">
      <li><a href="https://www.linkedin.com/in/harsh-kanani-69a45818b/">Harsh Kannani</a></li>
    <li> <a href="https://www.linkedin.com/in/jainam-desai/">Jainam Desai</a></li>
    <li><a href="https://www.linkedin.com/in/aayush-chodvadiya/">Aayush Chodvadiya</a></li>
      </ul>

*/
