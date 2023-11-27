import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import VideoNav1 from '../assets/Video/navtabvideo1.mov';
import { Ranger, Rightarrow } from './iconsvg';
import Homeimg from '../assets/images/webp/home-img.webp';
import Aiaimg from '../assets/images/webp/aia-img.webp';
import Loweimg from '../assets/images/webp/lowe-img.webp';
import Buildimg from '../assets/images/webp/build-img.webp';
import Houzimg from '../assets/images/webp/houz-img.webp';
import Agedman from '../assets/images/webp/aged-man.webp';
import Globevideo from '../assets/Video/globr-video.mp4';
import Handvideo from '../assets/Video/hand-video.mp4';
import { Logoipsum, Callarrow } from './iconsvg';
import Dotsimg from '../assets/images/webp/dots-img.webp';
import Mapimg from '../assets/images/webp/mapimg.webp';
import Redline from '../assets/images/webp/red-line.webp'
import Greenline2 from '../assets/images/webp/greenline2.webp';
import Redcircle from '../assets/images/webp/RedCross.webp';

const GrowthPartner = () => {
    return (
        <div className='pt-5 mt-4 position-relative'>
            <div className='position-absolute greenline2'>
                <img src={Greenline2} alt="Greenline2" className='w-100' />
            </div>
            <Container className='mb-5 pb-3'>
                <h2 data-aos="fade-up" className='mb-0 ff-sohne fs-2xl fw-bold text-black text-center text-uppercase'>The growth partner </h2>
                <p data-aos="fade-up" className='mb-0 ff-maisonlight fs-lg fw-light text-black text-center'>you’ve been looking for.</p>
                <p data-aos="fade-up" className='mb-0 ff-maisonnormal fs-4sm fw-normal text-black text-center pt-4 pt-3 mb-5 pb-3'>Businesses trust Venveo to power grow.</p>
                <div>
                    <ul className="nav nav-pills mb-5 gap-md-3 gap-2 justify-content-center" id="pills-tab" role="tablist">
                        <li className="nav-item position-relative tr_linear" role="presentation">
                            <button className="nav-link active bg-transparent border-0 text-black ff-maisonsemibold fw-semibold fs-6sm" id="pills-industry-tab" data-bs-toggle="pill" data-bs-target="#pills-industry" type="button" role="tab" aria-controls="pills-industry" aria-selected="true">Industry Expertise</button>
                            <div className='position-absolute redline tr_linear'>
                                <img src={Redline} alt="Redline" className='w-100' />
                            </div>
                        </li>
                        <li className="nav-item position-relative tr_linear" role="presentation">
                            <button className="nav-link bg-transparent border-0 text-black ff-maisonsemibold fw-semibold fs-6sm" id="pills-roi-tab" data-bs-toggle="pill" data-bs-target="#pills-roi" type="button" role="tab" aria-controls="pills-roi" aria-selected="false">ROI Focused</button>
                            <div className='position-absolute redline tr_linear'>
                                <img src={Redline} alt="Redline" className='w-100' />
                            </div>
                        </li>
                        <li className="nav-item position-relative tr_linear" role="presentation">
                            <button className="nav-link bg-transparent border-0 text-black ff-maisonsemibold fw-semibold fs-6sm" id="pills-Technology-tab" data-bs-toggle="pill" data-bs-target="#pills-Technology" type="button" role="tab" aria-controls="pills-Technology" aria-selected="false">Proprietary Technology</button>
                            <div className='position-absolute redline tr_linear'>
                                <img src={Redline} alt="Redline" className='w-100' />
                            </div>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active " id="pills-industry" role="tabpanel" aria-labelledby="pills-industry-tab" tabIndex="0">
                            <div className='position-relative black_layer'>
                                <video src={VideoNav1} muted
                                    autoPlay
                                    loop className='w-100 video_1' />
                                <Row className='position-absolute z-2 top-0 px-md-5 px-4 start-0 end-0 bottom-0 py-lg-5 py-4'>
                                    <Col lg={5} className='d-flex flex-column justify-content-between'>
                                        <div>
                                            <h2 data-aos="fade-right" data-aos-duration="2000" className='mb-0 ff-sohne fs-2xl fw-bold text-white text-uppercase mw-415'>the smartest minds in the
                                                industry</h2>
                                            <p data-aos="fade-right" data-aos-duration="1900" className='mb-0 ff-maisonlight fw-light fs-lg text-white mw-360 pt-2'>Answer our questions and listen to our answers.</p>
                                            <p data-aos="fade-right" data-aos-duration="1800" className='mb-0 ff-maisonnormal fw-normal fs-4sm text-white mw-360 pt-3'>This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science.</p>
                                        </div>
                                        <div data-aos="fade-up" data-aos-duration="1900" className=''>
                                            <button className='mt-lg-5 mt-4 btn-podcast text-white ff-maisonmedium fs-4sm fw-medium btn-1'> <Ranger /> Subscribe to Podcast▼</button>
                                        </div>
                                    </Col>
                                    <Col lg={2} className='d-flex overflow-y-scroll img_scroll gap-4 align-items-center flex-lg-column justify-content-between pt-lg-0 pt-3'>
                                        <div className='position-relative redcir cur-pointer'>
                                            <img data-aos="zoom-in" src={Homeimg} alt="homeimg" className='mw-64 w-100' />
                                            <div className='position-absolute redcircle'>
                                                <img src={Redcircle} alt="Redcircle" className='w-100 redcircleimg' />
                                            </div>
                                        </div>
                                        <div className='position-relative redcir cur-pointer'>
                                            <img data-aos="zoom-in" src={Aiaimg} alt="Aiaimg" className='mw-66 w-100' />
                                            <div className='position-absolute redcircle'>
                                                <img src={Redcircle} alt="Redcircle" className='w-100 redcircleimg' />
                                            </div>
                                        </div>
                                        <div className='position-relative redcir cur-pointer'>
                                            <img data-aos="zoom-in" src={Loweimg} alt="Loweimg" className='mw-92 w-100' />
                                            <div className='position-absolute redcircle1'>
                                                <img src={Redcircle} alt="Redcircle" className='w-100 redcircleimg' />
                                            </div>
                                        </div>
                                        <div className='position-relative redcir cur-pointer'>
                                            <img data-aos="zoom-in" src={Buildimg} alt="Buildimg" className='mw-102 w-100' />
                                            <div className='position-absolute redcircle2'>
                                                <img src={Redcircle} alt="Redcircle" className='w-100 redcircleimg' />
                                            </div>
                                        </div>
                                        <div className='position-relative redcir cur-pointer'>
                                            <img data-aos="zoom-in" src={Houzimg} alt="Houzimg" className='mw-117 w-100' />
                                            <div className='position-absolute redcircle3'>
                                                <img src={Redcircle} alt="Redcircle" className='w-100 redcircleimg' />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col data-aos="fade-down" lg={5} className='scroll_height overflow-y-scroll d-flex flex-column align-items-center justify-content-center gap-md-5 gap-sm-4 gap-3 mt-lg-0 mt-3'>
                                        <div className='bg-white card_padd'>
                                            <img src={Agedman} alt="Agedman" className='w-100 br_25' />
                                            <div className='pt-4 mt-2'>
                                                <p className='mb-0 ff-maisonlight fw-light fs-lg text-black lh-1'>Matt Risinger on How to Develop Lasting Relationships with Builders</p>
                                                <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black lh-1 pt-3'>Chief Builder of Rising Build and founder of the <span className='text-decoration-underline'>Build Show Network</span></p>
                                                <a href="" className='d-flex align-items-center mt-4'>
                                                    <p className='mb-0 text-black ff-maisonsemibold fw-semibold fs-4sm text-capitalize'>Listen to Interview</p>
                                                    <Rightarrow />
                                                </a>
                                            </div>
                                        </div>
                                        <div className='bg-white card_padd'>
                                            <img src={Agedman} alt="Agedman" className='w-100 br_25' />
                                            <div className='pt-4 mt-2'>
                                                <p className='mb-0 ff-maisonlight fw-light fs-lg text-black lh-1'>Matt Risinger on How to Develop Lasting Relationships with Builders</p>
                                                <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black lh-1 pt-3'>Chief Builder of Rising Build and founder of the <span className='text-decoration-underline'>Build Show Network</span></p>
                                                <a href="" className='d-flex align-items-center mt-4'>
                                                    <p className='mb-0 text-black ff-maisonsemibold fw-semibold fs-4sm text-capitalize'>Listen to Interview</p>
                                                    <Rightarrow />
                                                </a>
                                            </div>
                                        </div>
                                        <div className='bg-white card_padd'>
                                            <img src={Agedman} alt="Agedman" className='w-100 br_25' />
                                            <div className='pt-4 mt-2'>
                                                <p className='mb-0 ff-maisonlight fw-light fs-lg text-black lh-1'>Matt Risinger on How to Develop Lasting Relationships with Builders</p>
                                                <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black lh-1 pt-3'>Chief Builder of Rising Build and founder of the <span className='text-decoration-underline'>Build Show Network</span></p>
                                                <a href="" className='d-flex align-items-center mt-4'>
                                                    <p className='mb-0 text-black ff-maisonsemibold fw-semibold fs-4sm text-capitalize'>Listen to Interview</p>
                                                    <Rightarrow />
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-roi" role="tabpanel" aria-labelledby="pills-roi-tab" tabIndex="0">
                            <div className='position-relative black_layer'>
                                <video src={Globevideo} muted
                                    autoPlay
                                    loop className='w-100 video_1' />
                                <Row className='position-absolute z-2 top-0 px-md-5 px-4 start-0 end-0 bottom-0 py-md-5 py-4'>
                                    <Col lg={6} className='d-flex flex-column justify-content-between'>
                                        <div className='pb-lg-0 pb-4'>
                                            <h2 className='mb-0 ff-sohne fw-bold fs-2xl text-white text-uppercase'>Project radar</h2>
                                            <Logoipsum />
                                        </div>
                                        <div className='pt-lg-0 pt-4'>
                                            <p className='mb-0 ff-maisonlight fw-light fs-lg text-white mw-360'>Lorem ipsum what this
                                                product actually does.</p>
                                            <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-white pt-2 mw-360'>This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science.</p>
                                            <a href="" className='green_btn align-items-center gap-1 d-inline-flex mt-lg-5 mt-4 btn-1'>
                                                <p className='mb-0 ff-maisonsemibold fw-semibold fs-4sm text-black'>Call to Action Somewhere</p>
                                                <Callarrow />
                                            </a>
                                        </div>
                                    </Col>
                                    <Col lg={1} className='d-none align-items-center justify-content-center d-lg-flex'>
                                        <img src={Dotsimg} alt="Dotsimg" />
                                    </Col>
                                    <Col lg={5} className='scroll_height overflow-y-scroll d-flex flex-column align-items-center justify-content-center gap-md-5 gap-sm-4 gap-3 mt-lg-0 mt-5'>
                                        <div className='bg-white card_padd'>
                                            <img src={Mapimg} alt="Mapimg" className='w-100 br_25' />
                                            <div className='pt-4 mt-2'>
                                                <p className='mb-0 ff-maisonlight fw-light fs-lg text-black lh-1'>Matt Risinger on How to Develop Lasting Relationships with Builders</p>
                                                <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black lh-1 pt-3'>Chief Builder of Rising Build and founder of the <span className='text-decoration-underline'>Build Show Network</span></p>
                                                <a href="" className='d-flex align-items-center mt-4'>
                                                    <p className='mb-0 text-black ff-maisonsemibold fw-semibold fs-4sm text-capitalize'>Listen to Interview</p>
                                                    <Rightarrow />
                                                </a>
                                            </div>
                                        </div>
                                        <div className='bg-white card_padd'>
                                            <img src={Mapimg} alt="Mapimg" className='w-100 br_25' />
                                            <div className='pt-4 mt-2'>
                                                <p className='mb-0 ff-maisonlight fw-light fs-lg text-black lh-1'>Matt Risinger on How to Develop Lasting Relationships with Builders</p>
                                                <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black lh-1 pt-3'>Chief Builder of Rising Build and founder of the <span className='text-decoration-underline'>Build Show Network</span></p>
                                                <a href="" className='d-flex align-items-center mt-4'>
                                                    <p className='mb-0 text-black ff-maisonsemibold fw-semibold fs-4sm text-capitalize'>Listen to Interview</p>
                                                    <Rightarrow />
                                                </a>
                                            </div>
                                        </div>
                                        <div className='bg-white card_padd'>
                                            <img src={Mapimg} alt="Mapimg" className='w-100 br_25' />
                                            <div className='pt-4 mt-2'>
                                                <p className='mb-0 ff-maisonlight fw-light fs-lg text-black lh-1'>Matt Risinger on How to Develop Lasting Relationships with Builders</p>
                                                <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black lh-1 pt-3'>Chief Builder of Rising Build and founder of the <span className='text-decoration-underline'>Build Show Network</span></p>
                                                <a href="" className='d-flex align-items-center mt-4'>
                                                    <p className='mb-0 text-black ff-maisonsemibold fw-semibold fs-4sm text-capitalize'>Listen to Interview</p>
                                                    <Rightarrow />
                                                </a>
                                            </div>
                                        </div>
                                        <div className='bg-white card_padd'>
                                            <img src={Mapimg} alt="Mapimg" className='w-100 br_25' />
                                            <div className='pt-4 mt-2'>
                                                <p className='mb-0 ff-maisonlight fw-light fs-lg text-black lh-1'>Matt Risinger on How to Develop Lasting Relationships with Builders</p>
                                                <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black lh-1 pt-3'>Chief Builder of Rising Build and founder of the <span className='text-decoration-underline'>Build Show Network</span></p>
                                                <a href="" className='d-flex align-items-center mt-4'>
                                                    <p className='mb-0 text-black ff-maisonsemibold fw-semibold fs-4sm text-capitalize'>Listen to Interview</p>
                                                    <Rightarrow />
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-Technology" role="tabpanel" aria-labelledby="pills-Technology-tab" tabIndex="0">
                            <div className='position-relative black_layer'>
                                <video src={Handvideo} muted
                                    autoPlay
                                    loop className='w-100 video_1' />
                                <Row className='position-absolute z-2 top-0 px-md-5 px-4 start-0 end-0 bottom-0 py-md-5 py-4'>
                                    <Col lg={6} className='d-flex flex-column justify-content-between'>
                                        <div className='pb-lg-0 pb-4'>
                                            <h2 className='mb-0 ff-sohne fw-bold fs-2xl text-white text-uppercase'>Project radar</h2>
                                            <Logoipsum />
                                        </div>
                                        <div className='pt-lg-0 pt-4'>
                                            <p className='mb-0 ff-maisonlight fw-light fs-lg text-white mw-360'>Lorem ipsum what this
                                                product actually does.</p>
                                            <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-white pt-2 mw-360'>This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science.</p>
                                            <a href="" className='green_btn align-items-center gap-1 d-inline-flex mt-lg-5 mt-4 btn-1'>
                                                <p className='mb-0 ff-maisonsemibold fw-semibold fs-4sm text-black'>Call to Action Somewhere</p>
                                                <Callarrow />
                                            </a>
                                        </div>
                                    </Col>
                                    <Col lg={1} className='d-none align-items-center justify-content-center d-lg-flex'>
                                        <img src={Dotsimg} alt="Dotsimg" />
                                    </Col>
                                    <Col lg={5} className='scroll_height overflow-y-scroll d-flex flex-column align-items-center justify-content-center gap-md-5 gap-sm-4 gap-3 mt-lg-0 mt-5'>
                                        <div className='bg-white card_padd'>
                                            <img src={Mapimg} alt="Mapimg" className='w-100 br_25' />
                                            <div className='pt-4 mt-2'>
                                                <p className='mb-0 ff-maisonlight fw-light fs-lg text-black lh-1'>Matt Risinger on How to Develop Lasting Relationships with Builders</p>
                                                <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black lh-1 pt-3'>Chief Builder of Rising Build and founder of the <span className='text-decoration-underline'>Build Show Network</span></p>
                                                <a href="" className='d-flex align-items-center mt-4'>
                                                    <p className='mb-0 text-black ff-maisonsemibold fw-semibold fs-4sm text-capitalize'>Listen to Interview</p>
                                                    <Rightarrow />
                                                </a>
                                            </div>
                                        </div>
                                        <div className='bg-white card_padd'>
                                            <img src={Mapimg} alt="Mapimg" className='w-100 br_25' />
                                            <div className='pt-4 mt-2'>
                                                <p className='mb-0 ff-maisonlight fw-light fs-lg text-black lh-1'>Matt Risinger on How to Develop Lasting Relationships with Builders</p>
                                                <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black lh-1 pt-3'>Chief Builder of Rising Build and founder of the <span className='text-decoration-underline'>Build Show Network</span></p>
                                                <a href="" className='d-flex align-items-center mt-4'>
                                                    <p className='mb-0 text-black ff-maisonsemibold fw-semibold fs-4sm text-capitalize'>Listen to Interview</p>
                                                    <Rightarrow />
                                                </a>
                                            </div>
                                        </div>
                                        <div className='bg-white card_padd'>
                                            <img src={Mapimg} alt="Mapimg" className='w-100 br_25' />
                                            <div className='pt-4 mt-2'>
                                                <p className='mb-0 ff-maisonlight fw-light fs-lg text-black lh-1'>Matt Risinger on How to Develop Lasting Relationships with Builders</p>
                                                <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black lh-1 pt-3'>Chief Builder of Rising Build and founder of the <span className='text-decoration-underline'>Build Show Network</span></p>
                                                <a href="" className='d-flex align-items-center mt-4'>
                                                    <p className='mb-0 text-black ff-maisonsemibold fw-semibold fs-4sm text-capitalize'>Listen to Interview</p>
                                                    <Rightarrow />
                                                </a>
                                            </div>
                                        </div>
                                        <div className='bg-white card_padd'>
                                            <img src={Mapimg} alt="Mapimg" className='w-100 br_25' />
                                            <div className='pt-4 mt-2'>
                                                <p className='mb-0 ff-maisonlight fw-light fs-lg text-black lh-1'>Matt Risinger on How to Develop Lasting Relationships with Builders</p>
                                                <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black lh-1 pt-3'>Chief Builder of Rising Build and founder of the <span className='text-decoration-underline'>Build Show Network</span></p>
                                                <a href="" className='d-flex align-items-center mt-4'>
                                                    <p className='mb-0 text-black ff-maisonsemibold fw-semibold fs-4sm text-capitalize'>Listen to Interview</p>
                                                    <Rightarrow />
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default GrowthPartner;