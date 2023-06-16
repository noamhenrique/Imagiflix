import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

import { Movie } from "../data/mock";

import "./Poster.css";

const Poster = ({ cover, title, score }: Movie, index: number) => (
  <article
    className="relative transition-all duration-500 ease-in-out hover:scale-110 hover:z-10"
    key={index}
  >
    <img src={cover} alt={title} />
    <div className="poster absolute inset-0 w-full h-full grid place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0">
      <FontAwesomeIcon icon={faPlayCircle} size="5x" />
      <h2 className="text-2xl">{title}</h2>
    </div>
  </article>
);

export default Poster;
