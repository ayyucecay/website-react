import React,{Component} from 'react';  
import Carousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import '../styles/Slider.css';

const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,

        },
        1500: {
            items: 5,

        }
    },
};


export class Slider extends Component { 
     
        render()  
        {      
          return (  
              <div className='slider'>  
            <div className='container-fluid' >      
            <div className="row title" style={{marginBottom: "20px"}} >      
            <div className="col-sm-12 slider-header">      
            Featured Products  
            </div>      
            </div>  
        </div>  
        <div className='container-fluid' >   
          <Carousel 
          className="owl-theme"  
          loop  
          nav  
          
          {...options}>  
            <div className='slider-container'>
                <div className='slider-info'>
                    <h5 className='slider-name'>ICEWAYS</h5>
                    <p className='slider-p'>City life is changing. So are the habits of urban citizens.
                         4X4 cars that were previously used only on challenging 
                         lands are now preferred for urban use.</p>
                </div>  

                <div className='slider-button'>
                    <div className='row'>
                        <div class="col-sm-6 col-6">
                            <button className='learn-more'>LEARN MORE</button>
                        </div>

                        <div class="col-sm-6 col-6">
                            <button className='find-dealer'>FIND DEALER</button>
                        </div>
                    </div>         
                </div>   
                   
            </div> 

           <div className='slider-container'>
                <div className='slider-info'>
                    <h5 className='slider-name'>Driveways Sport</h5>
                    <p className='slider-p'>Driveways is a ‘’Comfort tyre’’ developed for 
                       a considerably wide vehicle pool ranging from
                       middle class sedans to upper class comfort automobiles.</p>
                </div> 
                <div className='slider-button'>
                    <div className='row'>
                        <div class="col-sm-6 col-6">
                            <button className='learn-more'>LEARN MORE</button>
                        </div>

                        <div class="col-sm-6 col-6">
                            <button className='find-dealer'>FIND DEALER</button>
                        </div>
                    </div>         
                </div>   

           </div>

           <div className='slider-container'>
                <div className='slider-info'>
                    <h5 className='slider-name'>Driveways COMPETUS H/P</h5>
                    <p className='slider-p'>City life is changing. So are the habits of urban citizens. 
                        4X4 cars that were previously used only on challenging 
                        lands are now preferred for urban use.</p>
                </div>  
                <div className='slider-button'>
                    <div className='row'>
                        <div class="col-sm-6 col-6">
                            <button className='learn-more'>LEARN MORE</button>
                        </div>

                        <div class="col-sm-6 col-6">
                            <button className='find-dealer'>FIND DEALER</button>
                        </div>
                    </div>         
                </div>   
            </div>  

            <div className='slider-container'>
                <div className='slider-info'>
                    <h5 className='slider-name'>ICEWAYS</h5>
                    <p className='slider-p'>City life is changing. So are the habits of urban citizens.
                         4X4 cars that were previously used only on challenging 
                         lands are now preferred for urban use.</p>
                </div>  
                <div className='slider-button'>
                    <div className='row'>
                        <div class="col-sm-6 col-6">
                            <button className='learn-more'>LEARN MORE</button>
                        </div>

                        <div class="col-sm-6 col-6">
                            <button className='find-dealer'>FIND DEALER</button>
                        </div>
                    </div>         
                </div>   
            </div>  
            
      </Carousel>  
      </div>  
      </div>  
          )  
        }  
      }  
      
export default Slider  