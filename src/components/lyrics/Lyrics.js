import React from "react";
import styles from "./lyrics.module.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { MDBBtn } from "mdb-react-ui-kit";
import Moment from "react-moment";
const Lyrics = () => {
  const navigate = useNavigate();
  const param = useParams();
  const [track, setTrack] = React.useState([]);
  const [lyrics, setLyrics] = React.useState([]);
  const getTrack = async () => {
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_Base_URL}track.get?track_id=${param.id}&apikey=${process.env.REACT_APP_MM_KEY1}`
    );
    res.status === 200
      ? setTrack(res.data.message.body.track)
      : alert("Troubleshooting Failed");
  };
  const getLyrics = async () => {
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_Base_URL}track.lyrics.get?track_id=${param.id}&apikey=${process.env.REACT_APP_MM_KEY1}`
    );
    res.status === 200
      ? setLyrics(res.data.message.body.lyrics)
      : alert("Troubleshooting Failed");
  };
  React.useEffect(() => {
    getTrack();
    getLyrics();
  }, []);
  return (
    <div className={"container"}>
      {track.length === 0 ? (
        <Spinner></Spinner>
      ) : (
        <>
          <MDBBtn
            className="mx-2 mb-5"
            color="secondary"
            onClick={() => {
              navigate(`/`);
            }}
          >
            Go Back
          </MDBBtn>
          <div className="card">
            <h5 className="card-header text-dark mb-0">
              {track.track_name} by {` `}
              <span className="text-secondary">{track.artist_name}</span>
            </h5>
            <div className="card-body">
              <p className="card-text">{lyrics.lyrics_body}</p>
            </div>
          </div>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Album ID</strong>: {track.album_id}
            </li>
            <li className="list-group-item">
              <strong>Song Genre</strong>:{" "}
              {
                track.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name
              }
            </li>
            <li className="list-group-item">
              <strong>Explicit Words</strong>:{" "}
              {track.explicit === 0 ? "No" : "Yes"}
            </li>
            <li className="list-group-item">
              <strong>Updated Date</strong>:{" "}
              <Moment format="MM/DD/YYYY">{track.updated_time}</Moment>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Lyrics;
