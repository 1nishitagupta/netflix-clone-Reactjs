import React, { useEffect, useState } from "react";
import axios from "axios";

function Row(props) {
  const img_base_path = "https://image.tmdb.org/t/p/original";
  const base_url = "https://api.themoviedb.org/3";

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const Moviedata = await axios.get(`${base_url}${props.endPoint}`);
    //   console.log(Moviedata);
      setMovies(Moviedata.data.results);
    }

    fetchData();
  }, []);

  const w = {
    width: "100px"
  };

  return (
    <div className="row">
      <h1>{props.title}</h1>
      {movies.map((pic) => {
        let path = pic.poster_path;
        // console.log(path);
        return <img style={w} src={`${img_base_path}${path}`} />;
      })}
    </div>
  );
}

export default Row;
