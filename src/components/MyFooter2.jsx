import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";

function MyFooter({ selectedSong, cover, artistName }) {
  const convertToTime = (time) => (time < 10 ? `0${time}` : time);
  const [audio, setAudio] = useState(new Audio(selectedSong.preview));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    setAudio(new Audio(selectedSong.preview));
  }, [selectedSong]);
  const minutes = convertToTime(parseInt(selectedSong.duration / 60)) || "03";
  const secund = convertToTime(selectedSong.duration % 60) || "30";
  const songTitle = selectedSong.title || "Song title";
  return (
    <div className="footer-div">
      <Navbar
        expand="lg"
        className="footer-main d-flex justify-content-between align-items-center"
        variant="light"
      >
        <div className="music-player">
          <div className="song-bar">
            <div className="song-infos">
              <div className="image-container">
                <img src={cover} alt="" />
              </div>
              <div className="song-description">
                <p className="title">{songTitle}</p>
                <p className="artist text-muted">{artistName}</p>
              </div>
            </div>
            <div className="icons">
              <i className="bi bi-heart"></i>
              <i className="bi bi-pip"></i>
            </div>
          </div>
          <div className="progress-controller">
            <div className="control-buttons mt-5 pb-0">
              <i className="bi bi-shuffle"></i>
              <i className="bi bi-skip-start-fill"></i>
              {playing ? (
                <i
                  className="play-pause bi bi-pause-circle-fill"
                  onClick={() => setPlaying(!playing)}
                />
              ) : (
                <i
                  className="play-pause bi bi-play-circle-fill"
                  onClick={() => setPlaying(!playing)}
                />
              )}
              <i className="bi bi-skip-end-fill"></i>
              <i className="bi bi-arrow-repeat"></i>
            </div>
            <div className="progress-container mb-5 pt-0">
              <span>0:39</span>
              <div className="progress-bar">
                <div className="progress"></div>
              </div>
              <span>
                {minutes}:{secund}
              </span>
            </div>
          </div>
          <div className="other-features">
            <i className="bi bi-list-ul"></i>
            <i className="bi bi-pc-display"></i>
            <div className="volume-bar">
              <i className="bi bi-volume-down-fill"></i>
              <div className="progress-bar">
                <div className="progress"></div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default MyFooter;
