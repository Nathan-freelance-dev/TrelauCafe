import React from 'react'
import { Container } from 'react-bootstrap'
import './index.scss'
import ButtonIndex from '../MyButton/index'

const index = () => {
    return (
        <section className='hero'>
            <Container>
                {/* hero text */}

                <div className='hero_text'>
                    <h5>The Best & Affordable</h5>
                    <h1>Modern restaurant in center of the city</h1>

                    <ButtonIndex
                        buttonType={"primary"}
                        btnText={"Book a Table"}
                    />
                </div>
            </Container>
        </section>
    )
}

export default index