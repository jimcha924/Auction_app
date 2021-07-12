import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Slideshow = () => {
    
    const slideImages = [
        'images/dreamPilot_lg.jpg',
        'images/star-wars-naboo-royal-starship-01.png',
        'images/MFalcon.jpg'
    ];
    
        return (
            <div className="slide-container">
                <Slide>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                            {/* <span>Slide 1</span> */}
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                            {/* <span>Slide 2</span> */}
                        </div>
                    </div>
                <   div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            {/* <span>Slide 3</span> */}
                        </div>
                    </div>
                </Slide>
            </div>
    )
};

export default Slideshow;