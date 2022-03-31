import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Banner({src}) {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'slick-dots',
      };

    const picAry = ['/images/Slide/slide1.jpg', '/images/Slide/slide2.png', 
                    '/images/Slide/slide3.png', '/images/Slide/slide4.jpg', 
                    '/images/Slide/slide5.png', '/images/Slide/slide6.jpg']

    return (
        <div className='slide_container'>
            <Slider {...settings}>
                <div>
                    <img src={picAry[0]} alt='banner' />
                </div>
                <div>
                    <img src={picAry[1]} alt='banner' />
                </div>
                <div>
                    <img src={picAry[2]} alt='banner' />
                </div>
                <div>
                    <img src={picAry[3]} alt='banner' />
                </div>
                <div>
                    <img src={picAry[4]} alt='banner' />
                </div>
                <div>
                    <img src={picAry[5]} alt='banner' />
                </div>
            </Slider>
        </div>
    )
}

export default Banner;