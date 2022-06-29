import React from 'react'
import { Button } from 'react-bootstrap'
import './index.scss'

const index = ({buttonType, btnText, styleBtn}) => {
    return (
        <>
            <Button variant={buttonType} className={"mt-3 " + styleBtn}>
                {btnText}
            </Button>
        </>
    )
}

export default index