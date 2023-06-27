import { useState, useEffect } from "react";

import CONST from "./data/constants";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const { URL, APISPRING } = CONST;

  const [movies, setMovies] = useState<any>();
  const [series, setSeries] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetch(
        `${URL}/discover/movie${APISPRING}&sort_by=popularity.desc`
      );
      const moviesData = await movies.json();
      setMovies(moviesData);

      const series = await fetch(
        `${URL}/discover/tv${APISPRING}&sort_by=popularity.desc`
      );
      const seriesData = await series.json();
      setSeries(seriesData);
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
      <Carousel title="Filmes Populares" data={movieList} />
      <Carousel title="Séries Populares" data={series?.results} />
      <Carousel title="Placeholder" />
      <Footer />
    </div>
  );
};

export default App;
