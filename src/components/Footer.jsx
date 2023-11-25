import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Callarrow, Facebookicon, Instaicon, Tweeticon, Linkdin, Youtube } from './iconsvg';

const Footer = () => {
    return (
        <div>
            <div className='bg-goals py-5'>
                <Container className='my-2'>
                    <div className='d-flex align-items-center flex-column flex-lg-row justify-content-center gap-5'>
                        <h4 className='mb-0 ff-maisonlight fs-2lg fw-light text-white'>Ready to hit your goals?</h4>
                        <a href="" className='d-flex align-items-center justify-content-center gap-1 btn-call'>
                            <p className='mb-0 ff-maisonsemibold fs-4sm fw-semibold text-black'>Book a Strategy Call</p>
                            <Callarrow />
                        </a>
                    </div>
                </Container>
            </div>
            <div className='bg_darkgreen py-5'>
                <Container fluid className='px-lg-5 px-4 my-4'>
                    <Row className='justify-content-between  flex-column-reverse flex-xl-row'>
                        <Col xl={8} className='pt-xl-0 pt-5'>
                            <Row className=''>
                                <Col lg={3} className='col-6'>
                                    <ul className='list-unstyled mb-0'>
                                        <li className='ff-maisonmedium fw-medium fs-2sm text-white text-uppercase pb-4'>how we help</li>
                                        <li><a href="" className='ff-maisonlight fw-light fs-4sm text-white text-capitalize pb-2'>Drive More Awareness</a></li>
                                        <li><a href="" className='ff-maisonlight fw-light fs-4sm text-white text-capitalize pb-2'>Get more Customers</a></li>
                                        <li><a href="" className='ff-maisonlight fw-light fs-4sm text-white text-capitalize pb-2'>Build Your Brand</a></li>
                                        <li><a href="" className='ff-maisonlight fw-light fs-4sm text-white text-capitalize pb-2'>Improve your reputation</a></li>
                                        <li><a href="" className='ff-maisonlight fw-light fs-4sm text-white text-capitalize pb-2'>Track Results</a></li>
                                    </ul>
                                </Col>
                                <Col lg={3} className='col-6'>
                                    <ul className='list-unstyled mb-0'>
                                        <li className='ff-maisonmedium fw-medium fs-2sm text-white text-uppercase pb-4'>who we help</li>
                                        <li><a href="" className='ff-maisonlight fw-light fs-4sm text-white text-capitalize pb-2'>Digital Advertising</a></li>
                                        <li><a href="" className='ff-maisonlight fw-light fs-4sm text-white text-capitalize pb-2'>Search Engine Ranking</a></li>
                                        <li><a href="" className='ff-maisonlight fw-light fs-4sm text-white text-capitalize pb-2'>Content Marketing</a></li>
                                        <li><a href="" className='ff-maisonlight fw-light fs-4sm text-white text-capitalize pb-2'>Programic Advertising</a></li>
                                        <li><a href="" className='ff-maisonlight fw-light fs-4sm text-white text-capitalize pb-2'>Email Marketing</a></li>
                                    </ul>
                                </Col>
                                <Col lg={3} className='pb-lg-4 col-6 pt-lg-0 pt-4'>
                                    <ul className='list-unstyled mb-0'>
                                        <li className='ff-maisonmedium fw-medium fs-2sm text-white text-uppercase pb-3'>why venveo</li>
                                        <li><a href="" className='ff-maisonlight fw-light fs-4sm text-white text-capitalize pb-2'>About Us</a></li>
                                        <li><a href="" className='ff-maisonlight fw-light fs-4sm text-white text-capitalize pb-2'>Careers</a></li>
                                        <li><a href="" className='ff-maisonlight fw-light fs-4sm text-white text-capitalize pb-2'>Growth Studies</a></li>
                                        <li><a href="" className='ff-maisonlight fw-light fs-4sm text-white text-capitalize pb-2'>Testimonials</a></li>
                                    </ul>
                                </Col>
                                <Col lg={3} className='col-6 pb-lg-4 pt-lg-0 pt-4'>
                                    <ul className='list-unstyled mb-0'>
                                        <li className='ff-maisonmedium fw-medium fs-2sm text-white text-uppercase pb-3'>resources</li>
                                        <li><a href="" className='ff-maisonlight fw-light fs-4sm text-white text-capitalize pb-2'>Articles</a></li>
                                        <li><a href="" className='ff-maisonlight fw-light fs-4sm text-white text-capitalize pb-2'>News</a></li>
                                        <li><a href="" className='ff-maisonlight fw-light fs-4sm text-white text-capitalize pb-2'>Webinars</a></li>
                                        <li><a href="" className='ff-maisonlight fw-light fs-4sm text-white text-capitalize pb-2'>eBooks</a></li>
                                        <li><a href="" className='ff-maisonlight fw-light fs-4sm text-white text-capitalize pb-2'>Podcast</a></li>
                                    </ul>
                                </Col>
                                <Col lg={6} className='d-flex align-items-end pt-lg-5 pt-3 mt-4'>
                                    <p className='mb-0 ff-maisonnormal fw-normal fs-3sm text-white mw-315'>Venveo is an award-winning digital marketing solutions provider. Since 2003.
                                        ©2023 Venveo</p>
                                </Col>
                                <Col lg={3} className='col-6 pt-lg-5 pt-3 mt-4'>
                                    <ul className='list-unstyled mb-0'>
                                        <li className='ff-maisonmedium fw-medium fs-2sm text-white text-uppercase pb-3'>why venveo</li>
                                        <li className='ff-maisonnormal fw-normal fs-3sm text-white'>100 N Main Street</li>
                                        <li className='ff-maisonnormal fw-normal fs-3sm text-white'>#201 </li>
                                        <li className='ff-maisonnormal fw-normal fs-3sm text-white'>Blacksburg, VA 24060</li>
                                    </ul>
                                </Col>
                                <Col lg={3} className='col-6 pt-lg-5 pt-3 mt-4'>
                                    <ul className='list-unstyled mb-0'>
                                        <li className='ff-maisonmedium fw-medium fs-2sm text-white text-uppercase pb-3'>resources</li>
                                        <li className='pb-2'><a href="" className='ff-maisonnormal fw-normal fs-3sm text-white text-nowrap'>100 N Main Street</a></li>
                                        <li className='pb-2'><a href="" className='ff-maisonnormal fw-normal fs-3sm text-white text-nowrap'>1 · 800 · 123 · 4567</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={4} className=' d-flex flex-xl-column flex-lg-row flex-column justify-content-between'>
                            <div>
                                <h4 className='mb-0 ff-maisonlight fw-light fs-lg text-white'>Get weekly data — and insights.</h4>
                                <div className='email-inputbtn w-100 d-flex mt-4'>
                                    <input type="text" className='email-input ff-maisonnormal fw-normal fs-4sm text-white w-100' placeholder='Enter Your Email' />
                                    <button className='btn_start text-nowrap ff-maisonsemibold fw-semibold fs-4sm text-capitalize'>Get Started</button>
                                </div>
                            </div>
                            <div className='d-flex align-items-xl-end justify-content-xl-end flex-column pt-lg-0 pt-4'>
                                <div className='d-flex gap-4'>
                                    <p className='mb-0 ff-maisonnormal fw-normal fs-3sm text-capitalize text-white'>All Rights Reserved</p>
                                    <p className='mb-0 ff-maisonnormal fw-normal fs-3sm text-capitalize text-white'>Privacy Policy</p>
                                </div>
                                <div className='d-flex align-items-center gap-4 mt-4'>
                                    <Facebookicon />
                                    <Instaicon />
                                    <Tweeticon />
                                    <Linkdin />
                                    <Youtube />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default Footer