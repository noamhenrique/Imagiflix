import { useState, useEffect } from "react";

import CONST from "./data/constants";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const { URL, APISPRING } = CONST;

  const [movies, setMovies] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${URL}/discover/movie${APISPRING}&sort_by=popularity.desc`
      );

      const data = await response.json();

      setMovies(data);
    };

    fetchData();
  }, []);

  /*   useEffect(() => {
    movies && console.log(movies);
  }, [movies]); */

  const [featured, ...movieList] = movies ? movies.results : [{}, []];

  return (
    <div className="m-auto antialised font-sans bg-black text-white">
      <Hero {...featured} />
      <Navbar />
      <Carousel data={movieList} />
      <Carousel />
    </div>
  );
};

export default App;
