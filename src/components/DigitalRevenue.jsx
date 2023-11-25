import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card1img from '../assets/images/card1dr.png';
import AmberBook1 from '../assets/images/amberbookimg.png';
import { Arrowicon } from './iconsvg';
import Card2img from '../assets/images/card2-dr.png';
import Card3img from '../assets/images/card3dr.png';
import Redline4 from '../assets/images/redline4.png';

const DigitalRevenue = () => {
    return (
        <div className='py-5 position-relative'>
            <Container>
                <p className='mb-0 ff-maisonlight fs-lg fw-light text-black text-center'>Driving digital revenue for over</p>
                <h2 className='mb-0 ff-sohne fs-2xl fw-bold text-black text-center text-uppercase'><div className='position-relative d-inline-flex'><span className='mb-0'>1,400</span>
                    <div className='position-absolute redline4'>
                        <img src={Redline4} alt="Redline4" className='w-100' />
                    </div>
                </div>+ satisfied clients.</h2>
            </Container>

            <Container fluid className=''>
                <Row className='pt-lg-5 pt-4 mt-lg-3 justify-content-center'>
                    <Col xl={4} lg={6} md={9} className='p-0 px-3'>
                        <div className='bg_greenblue p-3 position-relative overflow-hidden'>
                            <div className='card1 position-relative z-2'>
                                <img src={AmberBook1} alt="AmberBook1" />
                                <div className='pt-3 pb-5'>
                                    <p className='mb-0 ff-maisonlight fs-lg fw-light text-black pb-3 lh-1'>Driving digital revenue for over 1,000+ satisfied clients.</p>
                                    <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black align-self-stretch'>Elevate your business with our top-tier services and tech</p>
                                </div>
                                <p className='mb-0 ff-maisonsemibold fs-6sm fw-semibold text-black pb-2'>Learn more  <Arrowicon /></p>
                            </div>
                            <div className='position-relative z-2 d-flex align-items-center justify-content-between px-4 pt-4'>
                                <div className='d-flex justify-content-center flex-column'>
                                    <p className='mb-0 ff-sohne fw-bold fs-xl text-black lh-1'>80%</p>
                                    <p className='mb-0 ff-maisonnormal fw-normal fs-5sm text-black'>Leads</p>
                                </div>
                                <div className='d-flex justify-content-center flex-column'>
                                    <p className='mb-0 ff-sohne fw-bold fs-xl text-black lh-1'>2X</p>
                                    <p className='mb-0 ff-maisonnormal fw-normal fs-5sm text-black'>Ad Leads</p>
                                </div>
                                <div className='d-flex justify-content-center flex-column'>
                                    <p className='mb-0 ff-sohne fw-bold fs-xl text-black lh-1'>520%</p>
                                    <p className='mb-0 ff-maisonnormal fw-normal fs-5sm text-black'>Web Traffic</p>
                                </div>
                            </div>
                            <div className='position-absolute Card1img'>
                                <img src={Card1img} alt="Card1img" />
                            </div>
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={9} className='p-0 px-3 pt-lg-0 pt-4'>
                        <div className='bg-green5c p-3 position-relative overflow-hidden'>
                            <div className='card1 position-relative z-2'>
                                <img src={AmberBook1} alt="AmberBook1" />
                                <div className='pt-3 pb-5'>
                                    <p className='mb-0 ff-maisonlight fs-lg fw-light text-black pb-3 lh-1'>Driving digital revenue for over 1,000+ satisfied clients.</p>
                                    <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black align-self-stretch'>Elevate your business with our top-tier services and tech</p>
                                </div>
                                <p className='mb-0 ff-maisonsemibold fs-6sm fw-semibold text-black pb-2'>Learn more  <Arrowicon /></p>
                            </div>
                            <div className='position-relative z-2 d-flex align-items-center justify-content-between px-4 pt-4'>
                                <div className='d-flex justify-content-center flex-column'>
                                    <p className='mb-0 ff-sohne fw-bold fs-xl text-black lh-1'>80%</p>
                                    <p className='mb-0 ff-maisonnormal fw-normal fs-5sm text-black'>Leads</p>
                                </div>
                                <div className='d-flex justify-content-center flex-column'>
                                    <p className='mb-0 ff-sohne fw-bold fs-xl text-black lh-1'>2X</p>
                                    <p className='mb-0 ff-maisonnormal fw-normal fs-5sm text-black'>Ad Leads</p>
                                </div>
                                <div className='d-flex justify-content-center flex-column'>
                                    <p className='mb-0 ff-sohne fw-bold fs-xl text-black lh-1'>520%</p>
                                    <p className='mb-0 ff-maisonnormal fw-normal fs-5sm text-black'>Web Traffic</p>
                                </div>
                            </div>
                            <div className='position-absolute Card1img'>
                                <img src={Card2img} alt="Card2img" className='w-100' />
                            </div>
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={9} className='p-0 px-3 pt-xl-0 pt-4'>
                        <div className='bg_yellgreen p-3 position-relative overflow-hidden'>
                            <div className='card1 position-relative z-2'>
                                <img src={AmberBook1} alt="AmberBook1" />
                                <div className='pt-3 pb-5'>
                                    <p className='mb-0 ff-maisonlight fs-lg fw-light text-black pb-3 lh-1'>Driving digital revenue for over 1,000+ satisfied clients.</p>
                                    <p className='mb-0 ff-maisonnormal fw-normal fs-4sm text-black align-self-stretch'>Elevate your business with our top-tier services and tech</p>
                                </div>
                                <p className='mb-0 ff-maisonsemibold fs-6sm fw-semibold text-black pb-2'>Learn more  <Arrowicon /></p>
                            </div>
                            <div className='position-relative z-2 d-flex align-items-center justify-content-between px-4 pt-4'>
                                <div className='d-flex justify-content-center flex-column'>
                                    <p className='mb-0 ff-sohne fw-bold fs-xl text-black lh-1'>80%</p>
                                    <p className='mb-0 ff-maisonnormal fw-normal fs-5sm text-black'>Leads</p>
                                </div>
                                <div className='d-flex justify-content-center flex-column'>
                                    <p className='mb-0 ff-sohne fw-bold fs-xl text-black lh-1'>2X</p>
                                    <p className='mb-0 ff-maisonnormal fw-normal fs-5sm text-black'>Ad Leads</p>
                                </div>
                                <div className='d-flex justify-content-center flex-column'>
                                    <p className='mb-0 ff-sohne fw-bold fs-xl text-black lh-1'>520%</p>
                                    <p className='mb-0 ff-maisonnormal fw-normal fs-5sm text-black'>Web Traffic</p>
                                </div>
                            </div>
                            <div className='position-absolute Card1img'>
                                <img src={Card3img} alt="Card1img" className='w-100' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DigitalRevenue