import React from 'react';
import Particles from 'react-particles-js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sticky : 0
        };
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
        var navbar = document.querySelector("#navbar");
        this.sticky = navbar.offsetTop;
    }
    handleScroll = (event) => {
        
        
        if (window.pageYOffset >= this.sticky) {
            document.querySelector("#navbar").classList.add("sticky");
        } else {
            document.querySelector("#navbar").classList.remove("sticky");
        }
    }
      render() {
          return ( 
          <div className='landing-page' id='home'>
            <div className='particle'>
                < Particles params = {
                  {
                      "particles": {
                          "number": {
                              "value": 7,
                              "density": {
                                  "enable": true,
                                  "value_area": 1200
                              }
                          },
                          "line_linked": {
                              "enable": false
                          },
                          "move": {
                              "speed": 1,
                              "out_mode": "out"
                          },
                          "shape": {
                              "type": [
                                  "images"
                              ],
                              "images": [{
                                      "src": "https://www.hauorayoga.org.nz/wp-content/uploads/2019/09/git.png",
                                      "height": 20,
                                      "width": 20
                                  },
                                  {
                                      "src": "https://www.hauorayoga.org.nz/wp-content/uploads/2019/09/laravel.png",
                                      "height": 20,
                                      "width": 30
                                  },
                                  {
                                      "src": "https://www.hauorayoga.org.nz/wp-content/uploads/2019/09/php.png",
                                      "height": 25,
                                      "width": 45
                                  }, {
                                      "src": "https://www.hauorayoga.org.nz/wp-content/uploads/2019/09/react.jpg",
                                      "height": 20,
                                      "width": 20
                                  }, {
                                      "src": "https://www.hauorayoga.org.nz/wp-content/uploads/2019/09/wp.png",
                                      "height": 20,
                                      "width": 20
                                  },
                                  {
                                      "src": "https://www.hauorayoga.org.nz/wp-content/uploads/2019/09/wc.png",
                                      "height": 400,
                                      "width": 400
                                  }
                              ]
                          },
                          "color": {
                              "value": "#CCC"
                          },
                          "size": {
                              "value": 40,
                              "random": false,
                              "anim": {
                                  "enable": true,
                                  "speed": 4,
                                  "size_min": 10,
                                  "sync": false
                              }
                          }
                      },
                      "retina_detect": false
                  }
              } 
              />
            </div>
              <div>
                <ul className='cb-slideshow'>
                    <li><span>Image1</span></li>
                    <li><span>Image2</span></li>
                    <li><span>Image3</span></li>
                    <li><span>Image3</span></li>
                    <li><span>Image3</span></li>
                    <li><span>Image3</span></li>
            	</ul>
              </div>
              <div id="landingPage-content" className="landingPage-content content-hide">
                  <p>I'm Vignesh Murugan,</p><h1>Full Stack Developer</h1>
                  
                  <p> 
                  <Link activeClass="active" to="project" spy={true} smooth={true} offset={50} duration={1000} href="view" className="button"><a >View My Projects</a></Link>
                  </p>
              </div>
              <Navbar id='navbar' bg="dark" expand="lg"> 
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link><Link  activeClass="active" to="home" spy={true} smooth={true}  duration={1000} href="#home">Home</Link></Nav.Link>
                      <Nav.Link><Link activeClass="active" to="project" spy={true} smooth={true} offset={50} duration={1000} href="#project">Projects</Link></Nav.Link>
                      <Nav.Link><Link activeClass="active" to="footer" spy={true} smooth={true} offset={50} duration={1000} href="#contact">Contact</Link></Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
          </div>
          
          );
      };
}
export default Home;


