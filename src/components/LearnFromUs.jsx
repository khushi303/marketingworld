import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Rightarrow } from './iconsvg';
import Threeman from '../assets/images/webp/threemanatwork.webp';
import Redell1 from '../assets/images/webp/imgredbrand.webp';
import Marketimg1 from '../assets/images/webp/marketimg1.webp';
import Marketimg2 from '../assets/images/webp/marketimg2.webp';
import Marketimg3 from '../assets/images/webp/marketimg3.webp';

const LearnFromUs = () => {
    return (
        <div className='pt-5 mt-lg-5 position-relative'>
            <Container>
                <h2 data-aos="fade-right" data-aos-duration="2000" className='mb-0 ff-sohne fw-bold fs-2xl text-black text-uppercase text-center'>Learn from us.</h2>
                <p data-aos="fade-right" data-aos-duration="2000" className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black text-center'>Digital marketing resources from Venveo to help you grow.</p>
                <div className='d-flex align-items-center justify-content-center gap-2 pt-4 pb-5'>
                    <a href="" className='mb-0 ff-maisonsemibold fs-4sm fw-semibold text-black'>See All</a>
                    <Rightarrow />
                </div>
                <div className='position-relative'>
                    <img src={Threeman} alt="Threeman" className='w-100 threeman1' />
                    <div className='position-absolute red-ell1'>
                        <img src={Redell1} alt="Redell1" />
                    </div>
                    <div data-aos="zoom-out-up" data-aos-duration="2000" className='position-absolute start-0 end-0 bottom-0 p-4'>
                        <div className='white_card1 w-100'>
                            <h5 className='mb-0 ff-maisonnormal fw-normal fs-4sm text_lightblue text-uppercase pb-3'>guides</h5>
                            <h3 className='mb-0 ff-maisonlight fw-light fs-lg text-black align-self-stretch pb-3'>Marketing to Contractors and Installers:The Ultimate Guide</h3>
                            <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black align-self-stretch pb-4'>Understanding the process and maximize the opportunities</p>
                            <a href="" className='d-flex align-items-center gap-2'>
                                <p className='mb-0 ff-maisonsemibold fw-semibold fs-4sm text-black py-3'>Read More</p>
                                <Rightarrow />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
            <Container fluid>
                <Row className='pt-5 pb-5 d-flex align-items-center justify-content-center'>
                    <Col lg={4} md={6} className='px-4'>
                        <div className='position-relative '>
                            <img src={Marketimg1} alt="Marketimg1" className='w-100 h_551 h_390' />
                            <div data-aos="zoom-out-up" data-aos-duration="2000" className='position-absolute top-0 bottom-0 start-0 end-0 p-4 d-flex align-items-end justify-content-center'>
                                <div className='market-whcard'>
                                    <p className='mb-0 ff-maisonsemibold fw-semibold fs-4sm text_lightblue'>multi-channel marketing</p>
                                    <p className='mb-0 ff-maisonlight fw-light fs-lg text-black align-self-stretch pt-3'>How to Get Your Product into Lowe’s</p>
                                    <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black pt-3 pb-4'>Explore how selling building materials online opens up wider audiences, efficient sales and insightful data,</p>
                                    <a href="" className='d-flex align-items-center gap-2 mb-3 mb-2'>
                                        <p className='mb-0 ff-maisonsemibold fw-semibold fs-4sm text-black'>Read More</p>
                                        <Rightarrow />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className='mt-md-0 mt-4 px-4'>
                        <div className='position-relative '>
                            <img src={Marketimg2} alt="Marketimg2" className='w-100 h_551 h_390' />
                            <div data-aos="zoom-out-up" data-aos-duration="2000" className='position-absolute top-0 bottom-0 start-0 end-0 p-4 d-flex align-items-end justify-content-center'>
                                <div className='position-absolute top-0 bottom-0 start-0 end-0 p-4 d-flex align-items-end justify-content-center'>
                                    <div className='market-whcard'>
                                        <p className='mb-0 ff-maisonsemibold fw-semibold fs-4sm text_lightblue'>lead-gen</p>
                                        <p className='mb-0 ff-maisonlight fw-light fs-lg text-black align-self-stretch pt-3'>Get Your Sales Team Ready for Digital Leads</p>
                                        <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black pt-3 pb-4'>unlock substantial business growth by enhancing collaboration skills and digital marketing expertise</p>
                                        <a href="" className='d-flex align-items-center gap-2 mb-3 mb-2'>
                                            <p className='mb-0 ff-maisonsemibold fw-semibold fs-4sm text-black'>Read More</p>
                                            <Rightarrow />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className='mt-lg-0 mt-4 px-4'>
                        <div className='position-relative '>
                            <img src={Marketimg3} alt="Marketimg3" className='w-100 h_551 h_390' />
                            <div data-aos="zoom-out-up" data-aos-duration="2000" className='position-absolute top-0 bottom-0 start-0 end-0 p-4 d-flex align-items-end justify-content-center'>
                                <div className='position-absolute top-0 bottom-0 start-0 end-0 p-4 d-flex align-items-end justify-content-center'>
                                    <div className='market-whcard'>
                                        <p className='mb-0 ff-maisonsemibold fw-semibold fs-4sm text_lightblue'>ecommerce</p>
                                        <p className='mb-0 ff-maisonlight fw-light fs-lg text-black align-self-stretch pt-3'>How to Sell building Materials Online</p>
                                        <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black pt-3 pb-4'>Explore how selling building materials online opens up wider audiences, efficient sales and insightful data,</p>
                                        <a href="" className='d-flex align-items-center gap-2 mb-3 mb-2'>
                                            <p className='mb-0 ff-maisonsemibold fw-semibold fs-4sm text-black'>Read More</p>
                                            <Rightarrow />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default LearnFromUs;