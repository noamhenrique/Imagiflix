import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

import Score from "./Score";

import { Movie } from "../data/mock";

import "./Poster.css";

const Poster = ({ cover, title, score }: Movie, index: number) => (
  <article
    className="relative transition-all duration-500 ease-in-out hover:scale-110 hover:z-10"
    key={index}
  >
    <img src={cover} alt={title} />
    <div className="poster cursor-pointer absolute inset-0 w-full h-full px-2 py-8 grid place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0">
      <FontAwesomeIcon icon={faPlayCircle} size="5x" />
      <h2 className="text-2xl">{title}</h2>
      <Score value={score} />
    </div>
  </article>
);

export default Poster;
