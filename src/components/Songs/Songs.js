import React from "react";
import styles from "./songs.module.css";
import axios from "axios";
import Spinner from "../spinner/Spinner";
import Song from "./Song";
import Pagination from "react-bootstrap/Pagination";
import Search from "./Search";
const Songs = () => {
  const [songs, setSongs] = React.useState([]);
  const [active, setActive] = React.useState(1);
  const [search, setSeach] = React.useState(false);
  const [searchTrack, setSearchTrack] = React.useState([]);
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        className="text-light"
        onClick={() => {
          setActive(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  const getSongs = async () => {
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_Base_URL}chart.tracks.get?chart_name=top&page=${active}&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY1}`
      );
    res.status === 200
      ? setSongs(res.data.message.body.track_list)
      : alert("Troubleshooting Failed");
  };
  React.useEffect(() => {
    getSongs();
  }, []);
  React.useEffect(() => {
    getSongs();
  }, [active]);
  React.useEffect(() => {}, [songs]);
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Search setSearchTrack={setSearchTrack} setSeach={setSeach} />
        {search ? (
          <div className={styles.songs}>
            <h3 className="text-center mb-4">Search Results</h3>
            {searchTrack?.length === 0 ? (
              <Spinner></Spinner>
            ) : (
              <>
                <div className="row mb-4">
                  {searchTrack?.map((val, id) => (
                    <Song track={val.track} key={id} />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className={styles.songs}>
            <h3 className="text-center mb-4">Top 50 Songs</h3>
            {songs?.length === 0 ? (
              <Spinner></Spinner>
            ) : (
              <>
                <div className="row mb-4">
                  {songs?.map((val, id) => (
                    <Song track={val.track} key={id} />
                  ))}
                </div>
                <Pagination className="justify-content-center text-light pagination">
                  {items}
                </Pagination>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Songs;
