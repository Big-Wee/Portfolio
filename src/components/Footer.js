import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Footer extends React.Component {
      scrollToTop = () => {
        scroll.scrollToTop();
      }
      render() {
          return ( 
          <div className='footer' id='footer'>
              <a onClick={this.scrollToTop}><i className="fa fa-angle-double-up"></i></a>
                <li><a rel="noopener noreferrer" target='_blank' href="https://github.com/Big-Wee" className="fa fa-github"></a>
                <a rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/vigneshmurugan/" className="fa fa-linkedin"></a>
                </li> 
          </div>
          
          );
      };
}
export default Footer;


