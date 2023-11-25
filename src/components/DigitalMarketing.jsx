import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Fourdots, Rightarrow, Marketsvg1, Crossimg, Flyingsvg, Spiralarrow } from './iconsvg';
import Greenline11 from '../assets/images/greentwoline.png';

const DigitalMarketing = () => {
    return (
        <div className='position-relative my-lg-5'>
            <div className='position-absolute start-0 end-0 greenline11'>
                <img src={Greenline11} alt="Greenline11" className='w-100' />
            </div>
            <Container className='mb-5 position-relative z-2'>
                <h3 className='mb-0 ff-maisonlight fs-lg fw-light text-black text-center pb-1'>Problems we solve.</h3>
                <div className='d-flex align-items-center justify-content-center flex-column pb-5'>
                    <h2 className='mb-0 ff-sohne fs-2xl fw-bold text-black text-center text-uppercase mw-500 lh-1'>Digital Marketing
                        for today’s Business</h2>
                    <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black mw-641 text-center pt-3'>We help companies scale their strategies across multiple channels to drive more revenue, more quickly, without cutting corners.</p>
                </div>
                <Row className='pb-5'>
                    <Col lg={6} className='d-flex align-items-center justify-content-lg-end justify-content-center pe-lg-4'>
                        <div className='digital-card'>
                            <div className='d-flex gap-3'>
                                <div className=''>
                                    <Fourdots />
                                </div>
                                <div className='d-flex flex-column gap-3 align-items-start'>
                                    <p className='mb-0 ff-maisonlight fs-lg fw-light lh-normal text-black lh-1'>My website isn’t getting enough traffic</p>
                                    <p className='mb-0 ff-maisonnormal fs-4sm fw-normal text-black mw-315'>Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.</p>
                                    <ul className='mb-0'>
                                        <li className='ff-maisonsemibold fs-4sm fw-semibold text-black'>Boost your presence in search results</li>
                                        <li className='ff-maisonsemibold fs-4sm fw-semibold text-black'>Capture targeted site traffic</li>
                                        <li className='ff-maisonsemibold fs-4sm fw-semibold text-black'>Turn site visitors into customers</li>
                                    </ul>
                                    <button className='btn-exploreseo ff-maisonsemibold fs-4sm fw-semibold text-black'>Explore SEO Services <Rightarrow /></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='d-flex align-items-center justify-content-lg-start justify-content-center ps-lg-4 pt-lg-0 pt-5'>
                        <div className='digital-card'>
                            <div className='d-flex gap-3'>
                                <div>
                                    <Marketsvg1 />
                                </div>
                                <div className='d-flex flex-column gap-3 align-items-start'>
                                    <p className='mb-0 ff-maisonlight fs-lg fw-light lh-normal text-black lh-1'>My CPL from digital campaigns is too high</p>
                                    <p className='mb-0 ff-maisonnormal fs-4sm fw-normal text-black mw-315'>Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.</p>
                                    <ul className='mb-0'>
                                        <li className='ff-maisonsemibold fs-4sm fw-semibold text-black'>Boost your presence in search results</li>
                                        <li className='ff-maisonsemibold fs-4sm fw-semibold text-black'>Capture targeted site traffic</li>
                                        <li className='ff-maisonsemibold fs-4sm fw-semibold text-black'>Turn site visitors into customers</li>
                                    </ul>
                                    <button className='btn-exploreseo ff-maisonsemibold fs-4sm fw-semibold text-black'>Explore SEO Services <Rightarrow /></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='d-flex align-items-center justify-content-lg-end justify-content-center pt-5 pe-lg-4'>
                        <div className='digital-card'>
                            <div className='d-flex gap-3'>
                                <div>
                                    <Flyingsvg />
                                </div>
                                <div className='d-flex flex-column gap-3 align-items-start'>
                                    <p className='mb-0 ff-maisonlight fs-lg fw-light lh-normal text-black lh-1'>My website isn’t generating enough leads</p>
                                    <p className='mb-0 ff-maisonnormal fs-4sm fw-normal text-black mw-315'>Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.</p>
                                    <ul className='mb-0'>
                                        <li className='ff-maisonsemibold fs-4sm fw-semibold text-black'>Boost your presence in search results</li>
                                        <li className='ff-maisonsemibold fs-4sm fw-semibold text-black'>Capture targeted site traffic</li>
                                        <li className='ff-maisonsemibold fs-4sm fw-semibold text-black'>Turn site visitors into customers</li>
                                    </ul>
                                    <button className='btn-exploreseo ff-maisonsemibold fs-4sm fw-semibold text-black'>Explore SEO Services <Rightarrow /></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='d-flex align-items-center justify-content-lg-start justify-content-center pt-5 ps-lg-4'>
                        <div className='digital-card'>
                            <div className='d-flex gap-3'>
                                <div>
                                    <Crossimg />
                                </div>
                                <div className='d-flex flex-column gap-3 align-items-start'>
                                    <p className='mb-0 ff-maisonlight fs-lg fw-light lh-normal text-black lh-1'>My marketing and sales data is disconnected</p>
                                    <p className='mb-0 ff-maisonnormal fs-4sm fw-normal text-black mw-315'>Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.</p>
                                    <ul className='mb-0'>
                                        <li className='ff-maisonsemibold fs-4sm fw-semibold text-black'>Boost your presence in search results</li>
                                        <li className='ff-maisonsemibold fs-4sm fw-semibold text-black'>Capture targeted site traffic</li>
                                        <li className='ff-maisonsemibold fs-4sm fw-semibold text-black'>Turn site visitors into customers</li>
                                    </ul>
                                    <button className='btn-exploreseo ff-maisonsemibold fs-4sm fw-semibold text-black'>Explore SEO Services <Rightarrow /></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='bg-greenimg py-5'>
                <Container className='my-lg-4'>
                    <Row>
                        <Col lg={6} className=''>
                            <h3 className='mb-0 ff-spacemono fw-normal fs-4sm text-black'>Get Your Custom Marketing Plan</h3>
                            <p className='mb-0 ff-maisonlight fw-light fs-2lg text-black pt-2'>Start earning more money now</p>

                        </Col>
                        <Col lg={6} className='d-flex align-items-center justify-content-center pt-lg-0 pt-4 position-relative'>
                            <div className='submit-inputbtn d-flex w-100'>
                                <input type="text" placeholder='Enter Your Website' className='w-100 ff-maisonnormal fs-4sm fw-normal text-black border-0 submit-input' />
                                <button className='submit-btn ff-maisonsemibold fs-4sm fw-semibold text-black text-capitalize'>Submit</button>
                            </div>
                            <div className='position-absolute d-none d-lg-block spiralarrow'>
                                <Spiralarrow />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default DigitalMarketing