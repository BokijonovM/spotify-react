import React from 'react'
import {Navbar, Button} from 'react-bootstrap'


function MyFooter() {
    return (
        <div className="footer-div">
            <Navbar expand="lg" className='footer-main d-flex justify-content-between align-items-center' variant="light">
                {/* <div className='d-flex'>
                    <p className='pr-2 mb-0'><i style={{fontSize: "24px" }} class="bi bi-arrow-left-circle-fill"></i></p>
                    <p className=' mb-0'><i style={{fontSize: "24px" }} class="bi bi-arrow-right-circle-fill"></i></p>
                </div>
                <div className='d-flex pr-4'>
                    <Button className='nav-btn shadow-none px-4 border-0' variant="dark">UPGRADE</Button>
                </div> */}
                 <div class="music-player">
    <div class="song-bar">
      <div class="song-infos">
        <div class="image-container">
          <img src="https://www.genius-lyrics.com/wp-content/uploads/2021/11/Dynasties-Dystopia-Lyrics-Denzel-Curry.jpg"
            alt="" />
        </div>
        <div class="song-description">
          <p class="title">Dynasties & Dystopia</p>
          <p class="artist">Denzel curry</p>
        </div>
      </div>
      <div class="icons">
        <i class="bi bi-heart"></i>
        <i class="bi bi-pip"></i>
      </div>
    </div>
    <div class="progress-controller">
      <div class="control-buttons mt-5 pb-0">
        <i class="bi bi-shuffle"></i>
        <i class="bi bi-skip-start-fill"></i>
        <i class="play-pause bi bi-play-circle-fill"></i>
        <i class="bi bi-skip-end-fill"></i>
        <i class="bi bi-arrow-repeat"></i>
      </div>
      <div class="progress-container mb-5 pt-0">
        <span>0:39</span>
        <div class="progress-bar">
          <div class="progress"></div>
        </div>
        <span>2:58</span>
      </div>
    </div>
    <div class="other-features">
      <i class="bi bi-list-ul"></i>
      <i class="bi bi-pc-display"></i>
      <div class="volume-bar">
        <i class="bi bi-volume-down-fill"></i>
        <div class="progress-bar">
          <div class="progress"></div>
        </div>
      </div>
    </div>
  </div>
            </Navbar>
        </div>
    )
}

export default MyFooter
