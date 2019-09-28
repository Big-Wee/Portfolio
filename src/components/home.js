import React from 'react';
import Particles from 'react-particles-js';


class Home extends React.Component {

      render() {
          return ( 
          <div className='landing-page'>
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
                                      "src": "https://www.hauorayoga.org.nz/wp-content/uploads/2019/09/mobile.png",
                                      "height": 20,
                                      "width": 20
                                  },
                                  {
                                      "src": "https://www.hauorayoga.org.nz/wp-content/uploads/2019/09/php.png",
                                      "height": 35,
                                      "width": 35
                                  },
                                  {
                                      "src": "https://www.hauorayoga.org.nz/wp-content/uploads/2019/09/custom-cms.png",
                                      "height": 20,
                                      "width": 20
                                  }, {
                                      "src": "https://www.hauorayoga.org.nz/wp-content/uploads/2019/09/react.png",
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
                              "value": 30,
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
               
          </div>
          
          );
      };
}
export default Home;


