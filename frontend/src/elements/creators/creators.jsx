import React, { Component } from "react";

class Creators extends Component {
  state = {
    creators: [
      {
        name: "Jainam Desai ",
        linkedin: "https://in.linkedin.com/in/jainam-desai",
        github: "https://github.com/th3c0d3br34ker",
      },
      {
        name: "Harsh Kanani ",
        linkedin: "https://in.linkedin.com/in/harsh-kanani-69a45818b",
        github: "https://github.com/harshkanani014",
      },
      {
        name: "Aayush Chodvadiya ",
        linkedin: "https://in.linkedin.com/in/aayush-chodvadiya-9122b418b",
        github: "https://github.com/aayush1607",
      },
    ],
  };
  render() {
    return (
      <div className="col-3">
        <div className="d-flex flex-column">
          <h6 className="text-white">Creators</h6>
          <ul className="text-white">
            {this.state.creators.map((creator) => (
              <li key={creator}>
                {creator.name}
                &nbsp;
                <a href={creator.linkedin}>
                  <i class="fab fa-linkedin" href={creator.linkedin}></i>
                </a>
                &nbsp;
                <a href={creator.github}>
                  <i class="fab fa-github"></i>
                </a>
                &nbsp;
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Creators;
