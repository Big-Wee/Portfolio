import React from 'react';
import Slide from './Slide';
import SlideText from './SlideText';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

class Project extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            values: [
                {
                image:"https://www.hauorayoga.org.nz/wp-content/uploads/2019/09/Hauora.jpg",
                text: <div>
                        <h3>Hauora Yoga Conference</h3>
                        <p>Custom plugin developement using PHP OOP(Wordpress), Website design,<br/> and Stripe Gateway.</p>
                        <a target="_blank" href="https://hauorayoga.org.nz" id="launch" class="button">Launch Website</a>
                      </div>
                },
                {
                image:"https://www.hauorayoga.org.nz/wp-content/uploads/2019/09/YogaLunch.jpg",
                text: <div>
                        <h3>The Yoga LunchBox</h3>
                        <p>Mobile responsive, responsive imaging, and WordPress Customisation.</p>
                        <a target="_blank" href="https://theyogalunchbox.co.nz" id="launch" class="button">Launch Website</a>
                      </div>
                },
                {
                image:"https://www.hauorayoga.org.nz/wp-content/uploads/2019/09/Fitnz.jpg",
                text: <div>
                        <h3>FitNz Jobsite</h3>
                        <p>Custom MVC Laravel-like framework, Material design implementation, and Cron job notification.</p>
                        <a target="_blank" href="http://ufit.co.nz" id="launch" class="button">Launch Website</a>
                      </div>
                },
                {
                image:"https://www.hauorayoga.org.nz/wp-content/uploads/2019/09/Rowtram.jpg",
                text: <div>
                        <h3>Rowtram Jobsite</h3>
                        <p>Laravel framework, Materialize CSS,<br/> and Deployed in Heroku.</p>
                        <a target="_blank" href="http://rowtram-jobsite.herokuapp.com" id="launch" class="button">Launch Website</a>
                      </div>
                }
                ],
                currentIndex: 0,
                translateValue: 0
        };
    }
     goToPrevSlide = () => {
         if (this.state.currentIndex === 0)
             return;

         this.setState(prevState => ({
             currentIndex: prevState.currentIndex - 1,
             translateValue: prevState.translateValue + this.slideWidth()
         }))
     }

     goToNextSlide = () => {
         // Exiting the method early if we are at the end of the images array.
         // We also want to reset currentIndex and translateValue, so we return
         // to the first image in the array.
         if (this.state.currentIndex === this.state.values.length - 1) {
             return this.setState({
                 currentIndex: 0,
                 translateValue: 0
             })
         }

         // This will not run if we met the if condition above
         this.setState(prevState => ({
             currentIndex: prevState.currentIndex + 1,
             translateValue: prevState.translateValue + -(this.slideWidth())
         }));
     }

     slideWidth = () => {
         return document.querySelector('.slide').clientWidth
     }
    render() {
        return (
            <div className='project' id='project'>
                <h2>Projects</h2>
                <div class="heading-divi"></div>
                <div className="slider-wrapper"
                  style={{
                    transform: `translateX(${this.state.translateValue}px)`,
                    transition: 'transform ease-out 0.45s'
                  }}>
                    {
                      this.state.values.map((value, i) => (
                      < div className = "slide" >
                           <Slide key={i} image={value.image}></Slide>
                        <SlideText key={i} text={value.text}></SlideText>
                    </div>
                      ))
                    }
                    
                </div>
                
                <LeftArrow goToPrevSlide={this.goToPrevSlide} />
                <RightArrow goToNextSlide={this.goToNextSlide} />
            </div>
        );
    };
}

export default Project;