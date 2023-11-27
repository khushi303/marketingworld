import React from 'react';
import { useState } from 'react'
import { Container } from 'react-bootstrap';
import { Searchicon, Navarrow, RedEllipse } from './iconsvg';
import Video1 from '../assets/Video/plan-video.mp4';
import Greenline1 from '../assets/images/greenline1.png';
import Greenline11 from '../assets/images/greenline11.png';

const Header = () => {
    const [show, setshow] = useState(true);
    if (show === false) {
        document.body.classList.add("overflow_hidden")
    } else {
        document.body.classList.remove("overflow_hidden")
    }
    return (
        <div className='bg_header position-relative mb-5'>
            <Container fluid className='p-0 d-flex justify-content-end'>
                <ul className={`${show ? "left_100" : "left_0"} nav_bar`}>
                    <li className='cur_pointer position-relative' onClick={() => setshow(!show)}>
                        <div className='ff-maisonmedium fw-medium fs-4sm text-black lh-106 ps-lg-4 text-nowrap py-lg-0 py-3 SMN_effect-11'>How We Help <span className='fs-sm'>▼</span>
                        </div>
                        <div id="dropcontent" className="dropdown-box pb-3">
                            <a href=""
                                className="mb-0 ff-maisonmedium text-white py-2 fs-4sm fw-normal text_blue px-4">More</a>
                            <a href=""
                                className="mb-0 ff-maisonmedium text-white py-2 fs-4sm fw-normal text_blue px-4">More</a>
                            <a href=""
                                className="mb-0 ff-maisonmedium text-white py-2 fs-4sm fw-normal text_blue px-4">More</a>
                        </div>
                    </li>
                    <li onClick={() => setshow(!show)} className='cur-pointer position-relative'>
                        <div className='ff-maisonmedium fw-medium fs-4sm text-black lh-106 ps-lg-4 text-nowrap py-lg-0 py-3'>Who We Help <span className='fs-sm'>▼</span>
                        </div>
                        <div id="dropcontent" className="dropdown-box pb-3">
                            <a href=""
                                className="mb-0 ff-maisonmedium text-white py-2 fs-4sm fw-normal text_blue px-4">More</a>
                            <a href=""
                                className="mb-0 ff-maisonmedium text-white py-2 fs-4sm fw-normal text_blue px-4">More</a>
                            <a href=""
                                className="mb-0 ff-maisonmedium text-white py-2 fs-4sm fw-normal text_blue px-4">More</a>
                        </div>
                    </li>
                    <li onClick={() => setshow(!show)} className='cur-pointer position-relative'>
                        <div className='ff-maisonmedium fw-medium fs-4sm text-black lh-106 ps-lg-4 text-nowrap py-lg-0 py-3'>Why Venveo <span className='fs-sm'>▼</span>
                        </div>
                        <div id="dropcontent" className="dropdown-box pb-3">
                            <a href=""
                                className="mb-0 ff-maisonmedium text-white py-2 fs-4sm fw-normal text_blue px-4">More</a>
                            <a href=""
                                className="mb-0 ff-maisonmedium text-white py-2 fs-4sm fw-normal text_blue px-4">More</a>
                            <a href=""
                                className="mb-0 ff-maisonmedium text-white py-2 fs-4sm fw-normal text_blue px-4">More</a>
                        </div>
                    </li>
                    <li onClick={() => setshow(!show)} className='ff-maisonmedium fw-medium fs-4sm text-black lh-106 ps-lg-4 pe-lg-4 text-nowrap cur-pointer py-lg-0 py-3'>Resources</li>
                </ul>
                <div onClick={() => setshow(!show)} className={`${show ? "" : "cross"} navicon`}>
                    <span className='crl-1'></span>
                    <span className='crl-2'></span>
                    <span className='crl-3'></span>
                </div>
                <div className={`${show ? "pe-lg-3 tr-linear cur-pointer ps-lg-1 ps-4 pe-4 pt-3 pb-4 bg-white d-flex align-items-center justify-content-center" : "pe-lg-3 tr-linear ps-lg-1 ps-4 pe-4 cur-pointer pt-3 pb-4 bg-white d_flex align-items-center justify-content-center d_none"}`}>
                    <Searchicon />
                </div>
                <div className={`${show ? 'ff-maisonsemibold tr-linear d-flex align-items-center fw-semibold fs-4sm cur-pointer text-black py-3 bg_greenD2 px-4 text-nowrap' : "ff-maisonsemibold tr-linear cur-pointer d_flex align-items-center fw-semibold fs-4sm text-black py-3 bg_greenD2 px-4 text-nowrap d_none"}`}>Let’s Talk<Navarrow /></div>
            </Container>
            <Container className='d-flex align-items-center flex-column justify-content-center'>
                <div className='d-flex align-items-center justify-content-center pt-5 mt-5 position-relative'>
                    <h1 data-aos="zoom-out-up" className='mb-0 ff-sohne fw-bold fs-3xl mw-822 lh-86 text-white text-uppercase text-center'>Make marketing
                        <span className='d-block'>a <span className='position-relative'>growth   <div className='position-absolute greenline'>
                            <img src={Greenline11} alt="Greenline11" className='w-100' />
                        </div></span> machine</span></h1>

                </div>
                <div data-aos="zoom-out-up" data-aos-duration="1900" className='d-flex align-items-center justify-content-center pt-4 pb-4 gap-4 flex-column'>
                    <p className='mb-0 ff-maisonlight fw-light fs-md text-white lh-125 mw-656 text-center'>We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get a proposal now.</p>
                    <div className='analyze-email w-100 d-flex'>
                        <input type="text" placeholder='Enter Your Website' className='web-input' />
                        <button className='ff-maisonsemibold fs-4sm fw-semibold text-white text-capitalize btn-analyze'>Analyze</button>
                    </div>
                </div>
                <div data-aos="fade-up" className='d-flex align-items-center justify-content-center pt-4 mw-871 position-relative z-2'>
                    <video src={Video1} muted
                        autoPlay
                        loop className='mw-871 w-100 video_shadow' />
                    <RedEllipse />
                </div>
            </Container>
            <div className='w-100 position-absolute greenline1 z-1'>
                <img src={Greenline1} alt="Greenline1" className='w-100' />
            </div>
        </div>
    )
}

export default Header