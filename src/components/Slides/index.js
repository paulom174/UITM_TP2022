import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import img1 from '../../assets/images/slide_1.jpg';
import img2 from '../../assets/images/slide_2.jpg';
import img3 from '../../assets/images/slide_3.jpg';
import './style.css';

const Slides = () => {
    return (
        <div>
            <div className="slide-container">
                <Fade>
                    <div className="each-fade">
                        <div>
                            <img src={img1} alt="Girl in a jacket"/>
                        </div>
                        <p id="first_slide">Porto</p>
                    </div>
                    <div className="each-fade">
                        <p id="second-slide">Lisboa</p>
                        <div>
                            <img src={img2} alt="Girl in a jacket"/>
                        </div>
                    </div>
                    <div className="each-fade">
                        <div>
                            <img src={img3} alt="Girl in a jacket"/>
                        </div>
                        <p id="third-slide">Instambul</p>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Slides;