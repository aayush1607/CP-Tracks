import React, { Component } from "react";

class Community extends Component {
  state = {
    home: "#home",
    practice: "#practice",
    about: "#about",
    blog: "#blog",
  };
  render() {
    return (
      <div className="col-3">
        <div className="d-flex flex-column">
          <h6 className="text-white">Community</h6>
          <a href={this.state.home}>Home</a>
          <br />
          <a href={this.state.practice}>Practise</a>
          <br />
          <a href={this.state.about}>About Us</a>
          <br />
          <a href={this.state.blog}>Blog</a>
          <br />
        </div>
      </div>
    );
  }
}

export default Community;
