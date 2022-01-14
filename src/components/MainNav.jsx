import React from 'react'
import {Navbar, Button} from 'react-bootstrap'

function MainNav() {
    return (
        <div>
            <Navbar expand="lg" className='main-nav d-flex justify-content-center align-items-center' variant="light" bg="transparent">
                <div className='d-flex main-nav-h6-text justify-content-center'>
                    <h6>TRENDING</h6>
                    <h6>PODCAST</h6>
                    <h6>MOOD AND GENRES</h6>
                    <h6>NEW RELEASES</h6>
                    <h6>DISCOVER</h6>
                    </div>
                
            </Navbar>
        </div>
    )
}

export default MainNav
