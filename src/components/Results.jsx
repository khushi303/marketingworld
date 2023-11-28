import React from 'react';
import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Blueshirtman from '../assets/images/webp/blue-shirt-man.webp';
import { Playbtn, Hpsvg, BtnSliderNext, BtnSliderpre } from './iconsvg';
import Blueline1 from '../assets/images/webp/blueline1.webp';

const Results = () => {
    const slider1 = React.useRef(null);
    const settings = {
        dots: true,
        centerMode: true,
        centerPadding: "350px",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    centerMode: true,
                    centerPadding: "200px",
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    centerMode: true,
                    centerPadding: "80px",
                }
            },
            {
                breakpoint: 950,
                settings: {
                    centerMode: false,
                    centerPadding: "200px",
                }
            }

        ]
    };
    return (
        <div className='bg-results pb-5 pt-5 position-relative'>
            <div className='Blueline1 position-absolute start-0 end-0'>
                <img src={Blueline1} alt="Blueline1" className='w-100' />
            </div>
            <Container fluid className='position-relative p-0 mt-lg-5'>
                <h3 className='mb-0 ff-maisonlight fw-light fs-lg text-white text-center'>Actual businesses.</h3>
                <h2 className='mb-0 ff-sohne fw-bold fs-2xl text-white text-center text-uppercase'>Actual results.</h2>
                <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-white text-center pt-4 pb-5'>Businesses trust Venveo to power grow.</p>
                <Slider ref={slider1} {...settings}>
                    <div className='px-3 box11'>
                        <div className='d-flex align-items-center justify-content-center flex-column'>
                            <div className='position-relative'>
                                <img src={Blueshirtman} alt="Blueshirtman" className='w-100' />
                                <div className='position-absolute bottom-0 end-0 p-3'>
                                    <Playbtn />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center flex-column pt-3'>
                            <p className='mb-0 ff-maisonlight fw-light fs-lg text-black mw-640 text-white text-center pt-5'>“They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.”</p>
                            <p className='mb-0 text-center text-white ff-maisonnormal fw-normal fs-4sm pt-5 mt-2'>Jon Vaughan,<br />
                                REGIONAL VP-SE AT US LBM</p>
                            <div className='pt-3 pb-4'>
                                <Hpsvg />
                            </div>
                        </div>
                    </div>
                    <div className='px-3 box11'>
                        <div className='d-flex align-items-center justify-content-center flex-column'>
                            <div className='position-relative'>
                                <img src={Blueshirtman} alt="Blueshirtman" className='w-100' />
                                <div className='position-absolute bottom-0 end-0 p-3'>
                                    <Playbtn />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center flex-column pt-3'>
                            <p className='mb-0 ff-maisonlight fw-light fs-lg text-black mw-640 text-white text-center pt-5'>“They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.”</p>
                            <p className='mb-0 text-center text-white ff-maisonnormal fw-normal fs-4sm pt-5 mt-2'>Jon Vaughan,<br />
                                REGIONAL VP-SE AT US LBM</p>
                            <div className='pt-3 pb-4'>
                                <Hpsvg />
                            </div>
                        </div>
                    </div>
                    <div className='px-3 box11'>
                        <div className='d-flex align-items-center justify-content-center flex-column'>
                            <div className='position-relative'>
                                <img src={Blueshirtman} alt="Blueshirtman" className='w-100' />
                                <div className='position-absolute bottom-0 end-0 p-3'>
                                    <Playbtn />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center flex-column pt-3'>
                            <p className='mb-0 ff-maisonlight fw-light fs-lg text-black mw-640 text-white text-center pt-5'>“They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.”</p>
                            <p className='mb-0 text-center text-white ff-maisonnormal fw-normal fs-4sm pt-5 mt-2'>Jon Vaughan,<br />
                                REGIONAL VP-SE AT US LBM</p>
                            <div className='pt-3 pb-4'>
                                <Hpsvg />
                            </div>
                        </div>
                    </div>
                </Slider>
                <div onClick={() => slider1?.current?.slickPrev()} className='cur-pointer position-absolute z-3 btn-pre d-md-block d-none'>
                    <BtnSliderpre />
                </div>
                <div onClick={() => slider1?.current?.slickNext()} className='cur-pointer position-absolute z-3 btn-next d-md-block d-none'>
                    <BtnSliderNext />
                </div>
            </Container>
        </div>
    )
}

export default Results;