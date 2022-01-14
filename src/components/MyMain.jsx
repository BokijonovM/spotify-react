import React from 'react'
import MySidebar from './MySidebar';
import {Row, Col} from 'react-bootstrap'
import MyNav from './MyNav';
import MyFooter from './MyFooter'

function MyMain() {
    return (
        <div>
            <Row>
                <Col md={3} className='p-0 bg-dark'>
                    <MySidebar/>
                </Col>
                <Col md={9} className='p-0 bg-light'>
                    <MyNav/>
                   <div className='pt-5'>

                    <h1>hi</h1>
                   </div>
                </Col>
                <MyFooter/>
            </Row>
            
        </div>
    )
}

export default MyMain
