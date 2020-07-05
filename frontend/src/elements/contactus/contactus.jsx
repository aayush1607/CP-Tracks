import React, { Component } from "react";

class ContactUs extends Component {
  state = {
    instagram:"instagram",
    facebook:"facebook",
    linkedin:"github",
    mail:"mail"
  }
  render()
   {
    return (
      <div className="col-3">
        <div className="d-flex flex-column">
          <h6 className="text-white">Connect & Contact Us</h6>
          <div className="icons">
            <a href={this.state.instagram}>
              <i class="fab fa-2x fa-instagram"></i>
            </a>
            <a href={this.state.facebook}>
              <i class="fab fa-2x fa-facebook"></i>
            </a>
            <a href={this.state.linkedin}>
              <i class="fab fa-2x fa-linkedin"></i>
            </a>
            <a href={this.state.mail}>
              <i class="fas fa-2x fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
