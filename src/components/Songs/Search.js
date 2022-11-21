import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
const Search = (props) => {
  const [trackTitle, setTrackTitle] = React.useState({ trackTitle: "" });
  const getSongs = async () => {
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_Base_URL}track.search?q_track=${trackTitle.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY1}`
    );
    res.status === 200
      ? props.setSearchTrack(res.data.message.body.track_list)
      : alert("Troubleshooting Failed");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    getSongs();
    props.setSeach(true);
  };
  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center text-dark">
        <i className="fa fa-music"></i> Search For A Song
      </h1>
      <p className="lead text-center text-dark">Get the lyrics for any song</p>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg mb-4"
            placeholder="Song title..."
            name="trackTitle"
            value={trackTitle.trackTitle}
            onChange={(e) => {
              setTrackTitle({ [e.target.name]: e.target.value });
            }}
          />
          <MDBBtn className="btn-lg btn-block mb-2" color="info" type="submit">
            Get Track Lyrics
          </MDBBtn>
        </div>
      </form>
    </div>
  );
};

export default Search;
