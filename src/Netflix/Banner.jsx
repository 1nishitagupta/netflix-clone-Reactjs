import React, { useEffect, useState } from "react";
import axios from "axios";

function Banner(props) {
    const [movies, setMovies] = useState([]);
    const img_base_path = "https://image.tmdb.org/t/p/original";
    const base_url = "https://api.themoviedb.org/3";


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
    // console.log(movies);

    const styles = {
        backgroundImage: `url(${img_base_path}${movies.backdrop_path})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };
    // console.log(typeof(movies.overview))
    return (
        <header style={styles} >
            <div className="banner container">
                { (movies) &&
                    <>
                <h1>{movies.original_title}</h1>
                <div>
                    <button><a href="#">Play Now</a></button>
                    <button><a href="#">My List</a></button>

                </div>
                <p>
                    {movies.overview && movies.overview.slice(0,200)+'...'}                    
                </p>
                </>
                }
            </div>

        </header>
    )
}

export default Banner;




