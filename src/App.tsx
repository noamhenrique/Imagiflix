import { useState, useEffect } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const URL = "https://api.themoviedb.org/3";
  const IMAGEURL = "https://image.tmdb.org/t/p";
  const APIKEY = "2f6069067672601762aebc5e306ac4fd";
  const APISPRING = `?api_key=${APIKEY}&language=pt-BR`;

  const [movies, setMovies] = useState();

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

  useEffect(() => {
    movies && console.log(movies);
  }, [movies]);

  return (
    <div className="m-auto antialised font-sans bg-black text-white">
      <Hero />
      <Navbar />
      <Carousel />
      <Carousel />
    </div>
  );
};

export default App;
