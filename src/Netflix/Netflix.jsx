import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import "./netflix.css";
import Navbar from "./Navbar";

function Netflix() {
  return (
    <>
    <Navbar />
      <Banner endPoint={requests.fetchTrending} />
      <div className="netflix">
        <Row
          title="Netflix Originals"
          endPoint={requests.fetchNetflixOriginals}
        />
        <Row title="TRENDING NOW" endPoint={requests.fetchTrending} />
        <Row title="TOP RATED" endPoint={requests.fetchTopRated} />
        <Row title="ACTION MOVIES" endPoint={requests.fetchActionMovies} />
        <Row title="COMEDY MOVIES" endPoint={requests.fetchComedyMovies} />
        <Row title="Horror Movies" endPoint={requests.fetchHorrorMovies} />
        <Row title="Romantic Movies" endPoint={requests.fetchRomanceMovies} />
        <Row title="Documentaries" endPoint={requests.fetchDocumentaries} />
      </div>
    </>
  );
}

export default Netflix;
