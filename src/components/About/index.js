import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './index.scss'

const index = () => {
    return (
        <> 
            <Container className='about_container bg-white shadow p-5'>
                <Row>
                    <Col md={8}>
                        <div className='about_text'>
                            <h5>About Us</h5>
                            <h1 className='mt-3'>Delicious food provider since 2019</h1>

                            <p className='mt-5 text-muted'>
                                Good lights it very to above. Days image to sea. Over there seasons and spirit beast in. Greater bearing creepeth very behold fourth night morning seed moved.
                            </p>

                            <p className='mt-4 text-muted'>
                                Good lights it very to above. Days image to sea. Over seasons and spirit beast in over greater bearing creepeth.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default index