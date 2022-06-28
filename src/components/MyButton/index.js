import React from 'react'
import { Button } from 'react-bootstrap'
import './index.scss'

const index = ({buttonType, btnText}) => {
    return (
        <>
            <Button variant={buttonType} className="mt-3">
                {btnText}
            </Button>
        </>
    )
}

export default index