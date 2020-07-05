import React, { Component } from 'react';
import "./footer.css";


class Footer extends Component {
  state = { 
    creators: [
      {name:"Jainam Desai ", linkedin:"https://in.linkedin.com/in/jainam-desai", github:"https://github.com/th3c0d3br34ker"},
      {name:"Harsh Kanani ", linkedin:"https://in.linkedin.com/in/harsh-kanani-69a45818b", github:"https://github.com/harshkanani014"},
      {name:"Aayush Chodvadiya ", linkedin:"https://in.linkedin.com/in/aayush-chodvadiya-9122b418b",github:"https://github.com/aayush1607"}
    ]
   }
  render() { 
    return ( 
            <footer>
              <div className="content-3">
                  <div className="container p-4">
                      <div className="text-white pt-4">
                          <h2 className="d-inline-flex">Subscribe Newsletter</h2>
                          <input type="text" placeholder="Enter Your Email Address" class="p-2 ml-3 border-0" size="40"/><button type="button" class="p-2 py-2 btn-info text-dark border-0">Submit</button>
                      
                      </div>
                      <br/>
                      <div className="footer border-top ">
                          <br/>
                          <div className="row justify-content-center">
                              <div className="col-3">
                                  <div className="d-flex flex-column">
                                      <h6 className="text-white">Creators</h6>
                                      <ul className="text-white">
                                        {this.state.creators.map(creator => 
                                          <li key={creator}>
                                          {creator.name}
                                          

                                          &nbsp;
                                          <a href={creator.linkedin}><i class="fab fa-linkedin" href={creator.linkedin}></i></a>
                                          &nbsp;
                                          <a href={creator.github}><i class="fab fa-github" ></i></a>
                                          
                                          &nbsp; 
                                        
                                          
         
                                        </li>)}
                                      </ul>
                                  </div>
                              </div>
                    
                              
                            


                              
                              

                              <div className="col-3">
                                  <div className="d-flex flex-column">
                                      <h6 className="text-white">Community</h6>
                       
                                      <a href="#">Home</a><br/>
                                      <a href="#practise">Practise</a><br/>
                                      <a href="#about">About Us</a><br/>
                                      <a href="#">Blog</a><br/>

                                      
                                      
                                      
                                    
                                  </div>
                              </div>
                              <div className="col-3">
                                  <div className="d-flex flex-column">
                                      <h6 className="text-white">Connect & Contact Us</h6>
                                      <div className="icons">

                                      <a href="#"><i class="fab fa-2x fa-instagram"></i></a>
                                      <a href="#"><i class="fab fa-2x fa-facebook"></i></a>
                                      <a href="#"><i class="fab fa-2x fa-linkedin"></i></a>
                                      <a href="#"><i class="fas fa-2x fa-envelope"></i></a>

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