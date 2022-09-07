import React, { useEffect, useState } from "react";
import axios from "axios";

function Banner(props) {
  const img_base_path = "https://image.tmdb.org/t/p/original";
  const base_url = "https://api.themoviedb.org/3";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const randomImage = await axios.get(`${base_url}${props.endPoint}`);
    //   console.log(randomImage);
      setMovies(
        randomImage.data.results[Math.floor(Math.random() * randomImage.data.results.length)]
      );
    }

    fetchData();
  }, []);
//   console.log(movies);

  const styles = {
    backgroundImage: `url(${img_base_path}${movies.backdrop_path})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return <header style={styles}></header>;
}

export default Banner;
