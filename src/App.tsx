import { useState, useEffect } from "react";

import CONST from "./data/constants";

import Loading from "./components/Loading";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export enum TitleType {
  Movie = "movie",
  Serie = "tv",
}

export interface Title {
  type: TitleType;
  id: number | string;
}

const App = () => {
  const { URL, APISPRING } = CONST;

  const [movies, setMovies] = useState<any>();
  const [series, setSeries] = useState<any>();
  const [title, setTitle] = useState();
  const [loading, setLoading] = useState(true);

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

      setLoading(false);
    };

    fetchData();
  }, []);

  /*   useEffect(() => {
    movies && console.log(movies);
  }, [movies]); */

  const [featured, ...movieList] = movies ? movies.results : [{}, []];

  const getTitle = ({ type, id }: Title) => {
    const fetchData = async () => {
      const title = await fetch(`${URL}/${type}/${id}${APISPRING}`);
      const titleData = await title.json();
      setTitle(titleData);
    };
  };

  return (
    <div className="m-auto antialised font-sans bg-black/90 text-white">
      {loading && (
        <>
          <Loading />
          <Navbar />
        </>
      )}
      {!loading && (
        <>
          <Hero {...featured} />
          <Navbar />
          <Carousel title="Filmes Populares" data={movieList} />
          <Carousel title="Séries Populares" data={series?.results} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
