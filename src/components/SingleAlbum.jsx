import React, { useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import MyFooter2 from "./MyFooter2";
import { addToAlbumCartActionWithThunk } from "../redux/action";
import { selectSongAction } from "../redux/action";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  selectedSong: state.songs.selectedSongs,
});

const mapDispatchToProps = (dispatch) => ({
  addToAlbumCart: (musicToAdd) => {
    dispatch(addToAlbumCartActionWithThunk(musicToAdd));
  },
  selectedMusic: (musicToAdd) => {
    dispatch(selectSongAction(musicToAdd));
  },
});

const SingleAlbum = ({
  albums,
  i,
  addToAlbumCart,
  selectedMusic,
  selectedSong,
  cover,
  artistName,
}) => {
  const convertToTime = (time) => (time < 10 ? `0${time}` : time);
  console.log("albumsalbumsalbums", albums);
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      style={{ color: "black" }}
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <div className="mx-3 d-flex justify-content-center"></div>
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );
  return (
    <Container>
      <Col style={{ backgroundColor: "transparent" }}>
        <Row>
          <div
            onClick={() => selectedMusic(albums)}
            style={{ marginRight: "80px", marginLeft: "90px" }}
            className="px-3 py-1 my-1 d-flex justify-content-between align-items-center w-100 single-album-hover-needed"
          >
            <div className="d-flex align-items-center ">
              <p className="pr-5 mb-0">{i + 1}</p>

              <div>
                <p className="mb-0" style={{ fontSize: "16px" }}>
                  {albums.title}
                </p>
                <p
                  className="mb-0 text-muted mt-n1"
                  style={{ fontSize: "14px" }}
                >
                  <a
                    className="mb-0 text-muted mt-n1"
                    style={{ fontSize: "14px" }}
                    href={"/artist/" + albums.artist.id}
                  >
                    {albums.artist.name}
                  </a>
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <i
                className="bi bi-heart d-none-block-love"
                id="bi-heart-id"
                onClick={() => {
                  addToAlbumCart(albums);
                }}
              ></i>
              <p className="mb-0 px-4">
                {convertToTime(parseInt(albums.duration / 60))}:
                {convertToTime(albums.duration % 60)}
              </p>
              <div className="ml-auto d-flex align-items-center">
                <Dropdown alignRight>
                  <Dropdown.Toggle
                    alignRight
                    as={CustomToggle}
                    id="dropdown-custom-components"
                    style={{ color: "black !important" }}
                  >
                    <i className="bi bi-three-dots single-post-three-dots d-none-block-love"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{ width: "240px" }}
                    as={CustomMenu}
                    alignRight
                    className="bg-dark m-0 p-0"
                  >
                    <div className="post-dropdown">
                      <div className="d-flex align-items-center  mb-0 mb-0 justify-content-between px-3 py-2 hover-for-dropdown-item">
                        <p className="mb-0">Add to queue</p>
                      </div>
                      <hr className="m-0" style={{ background: "grey" }}></hr>
                      <div className="d-flex align-items-center  mb-0 mb-0 justify-content-between px-3 py-2 hover-for-dropdown-item">
                        <p className="mb-0">Go to song radio</p>
                      </div>
                      <div className="d-flex align-items-center  mb-0 mb-0 justify-content-between px-3 py-2 hover-for-dropdown-item">
                        <p className="mb-0">Go to album</p>
                      </div>
                      <div className="d-flex align-items-center  mb-0 mb-0 justify-content-between px-3 py-2 hover-for-dropdown-item">
                        <p className="mb-0">Show credits</p>
                      </div>
                      <hr className="m-0" style={{ background: "grey" }}></hr>
                      <div className="d-flex align-items-center  mb-0 mb-0 justify-content-between px-3 py-2 hover-for-dropdown-item">
                        <p className="mb-0">Save to your Liked Songs</p>
                      </div>
                      <div className="d-flex align-items-center  mb-0 mb-0 justify-content-between px-3 py-2 hover-for-dropdown-item">
                        <p className="mb-0">Add to playlist</p>
                      </div>
                      <hr className="m-0" style={{ background: "grey" }}></hr>
                      <div className="d-flex align-items-center  mb-0 mb-0 justify-content-between px-3 py-2 hover-for-dropdown-item">
                        <p className="mb-0">Share</p>
                      </div>
                      <hr className="m-0" style={{ background: "grey" }}></hr>
                      <div className="d-flex align-items-center  mb-0 mb-0 justify-content-between px-3 py-2 hover-for-dropdown-item">
                        <p className="mb-0">Open in Desktop app</p>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </Row>
      </Col>
      <MyFooter2
        selectedSong={selectedSong}
        cover={cover}
        artistName={artistName}
      />
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleAlbum);
