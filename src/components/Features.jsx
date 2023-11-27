import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import Wsfimg from '../assets/images/webp/wsfimg.webp';
import Enterpreneurimg from '../assets/images/webp/enterpreneurimg.webp';
import Fortuneimg from '../assets/images/webp/fortuneimg.webp';
import Forbesimg from '../assets/images/webp/forbesimg.webp';
import Incimg from '../assets/images/webp/incimg.webp';
import Greenlineimg from '../assets/images/webp/GreenlineDoubleimg.webp'

const Features = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='pt-lg-5 pt-3 pb-lg-5 pb-3 position-relative'>
            <Container>
                <h3 className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black text-center ls-2'>Featured in</h3>
                <div className='py-lg-5 py-4 mb-3'>
                    <Slider {...settings}>
                        <div className='d-flex align-items-center justify-content-center'>
                            <img src={Wsfimg} alt="Wsfimg" />
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <img src={Enterpreneurimg} alt="Enterpreneurimg" />
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <img src={Fortuneimg} alt="Fortuneimg" />
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <img src={Forbesimg} alt="Forbesimg" />
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <img src={Incimg} alt="Incimg" />
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <img src={Forbesimg} alt="Forbesimg" />
                        </div>
                    </Slider>
                </div>
            </Container>
            <div className='position-absolute bottom-0 start-0 end-0'>
                <img src={Greenlineimg} alt="Greenlineimg" className='w-100' />
            </div>
        </div>
    )
}

export default Features