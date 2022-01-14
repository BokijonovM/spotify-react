import React from 'react'
import {Navbar, Button} from 'react-bootstrap'


function MyFooter() {
    return (
        <div className="footer-div">
            <Navbar expand="lg" className='footer-main d-flex justify-content-between align-items-center' variant="light" bg="dark">
                <div className='d-flex'>
                    <p className='pr-2 mb-0'><i style={{fontSize: "24px" }} class="bi bi-arrow-left-circle-fill"></i></p>
                    <p className=' mb-0'><i style={{fontSize: "24px" }} class="bi bi-arrow-right-circle-fill"></i></p>
                </div>
                <div className='d-flex pr-4'>
                    <Button className='nav-btn shadow-none px-4 border-0' variant="dark">UPGRADE</Button>
                </div>
            </Navbar>
        </div>
    )
}

export default MyFooter
