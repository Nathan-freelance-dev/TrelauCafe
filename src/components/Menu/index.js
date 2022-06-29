import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from '../MyButton/index'
import './index.scss'
import MenuImg1 from '../../assets/images/xsingle_food_1.png.pagespeed.ic.BEzTNKCjrm.png'
import MenuImg2 from '../../assets/images/xsingle_food_3.png.pagespeed.ic.oyVNuZ3Bdi.png'

const index = () => {
    return (
        <>
            <section className='menu'>
                <Container>
                    <h5 className='text-center'>Make a choice</h5>
                    <h1 className='text-center'>Our Menu</h1>

                    <Row className='mt-4'>
                        <Col md={6}>
                            <div className='menu_box border d-flex bd-highlight'>
                                <div className='img_container me-3 col-md-3'>
                                    <img src={MenuImg1} alt="menu pic" width={"100%"} />
                                </div>

                                <Col md={9} className="d-flex align-items-center">
                                    <div>
                                        <h1 className='fs-2'>Apple Pie</h1>
                                        <p className='text-muted'>
                                            They're wherein heaven seed hath nothing
                                        </p>

                                        <h4>From: $40.00</h4>
                                    </div>
                                </Col>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className='menu_box border d-flex bd-highlight'>
                                <div className='img_container me-3 col-md-3'>
                                    <img src={MenuImg2} alt="menu pic" width={"100%"} />
                                </div>

                                <Col md={9} className="d-flex align-items-center">
                                    <div>
                                        <h1 className='fs-2'>Stake</h1>
                                        <p className='text-muted'>
                                            They're wherein heaven seed hath nothing
                                        </p>

                                        <h4>From: $70.00</h4>
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </Row>

                    <Row className='mt-4'>
                        <Col md={6}>
                            <div className='menu_box border d-flex bd-highlight'>
                                <div className='img_container me-3 col-md-3'>
                                    <img src={MenuImg1} alt="menu pic" width={"100%"} />
                                </div>

                                <Col md={9} className="d-flex align-items-center">
                                    <div>
                                        <h1 className='fs-2'>Apple Pie</h1>
                                        <p className='text-muted'>
                                            They're wherein heaven seed hath nothing
                                        </p>

                                        <h4>From: $40.00</h4>
                                    </div>
                                </Col>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className='menu_box border d-flex bd-highlight'>
                                <div className='img_container me-3 col-md-3'>
                                    <img src={MenuImg1} alt="menu pic" width={"100%"} />
                                </div>

                                <Col md={9} className="d-flex align-items-center">
                                    <div>
                                        <h1 className='fs-2'>Apple Pie</h1>
                                        <p className='text-muted'>
                                            They're wherein heaven seed hath nothing
                                        </p>

                                        <h4>From: $40.00</h4>
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </Row>

                    <div className='text-center mt-4 d-flex justify-content-center'>
                        <Button 
                            buttonType={"dark"}
                            btnText="See more"
                            styleBtn={"text-center"}
                        />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default index