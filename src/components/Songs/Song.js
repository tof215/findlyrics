import React from "react";
import { useNavigate } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
const Song = (props) => {
  const navigate = useNavigate();
  const { track } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="text-dark">{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play"></i> Track: {track.track_name}
            </strong>
            <br />
            <strong>
              <i className="fas fa-compact-disc"></i> Album: {track.album_name}
            </strong>
          </p>
          <MDBBtn
            className=" btn-block"
            color="danger"
            onClick={() => {
              navigate(`/lyrics/${track.track_id}`);
            }}
          >
            <i className="fas fa-chevron-right pe-2"></i> View Lyrics
          </MDBBtn>
        </div>
      </div>
    </div>
  );
};

export default Song;
