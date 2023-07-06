import emitter from "../utils/eventEmitter";

import CONST from "../data/constants";
import { Title, TitleType } from "../App";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

import Score from "./Score";

import { Movie } from "../data/mock";

import "./Poster.css";

const Poster = (
  { cover, poster_path, title, name, vote_average, id }: Movie,
  index: number
) => {
  const { IMAGEURL } = CONST;

  const handleClick = () => {
    const type = title ? TitleType.Movie : TitleType.Serie;

    emitter.emit(CONST.EVENTS.PosterClick, { type, id });
  };

  return (
    <article
      className="relative transition-all duration-500 ease-in-out hover:scale-110 hover:z-10"
      key={index}
      onClick={handleClick}
    >
      <img
        src={poster_path ? `${IMAGEURL}/w200/${poster_path}` : cover}
        alt={title ? title : name}
      />
      <div className="poster cursor-pointer absolute inset-0 w-full h-full px-2 py-8 grid place-items-center text-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0">
        <FontAwesomeIcon icon={faPlayCircle} size="5x" />
        <h2 className="text-2xl leading-6">{title ? title : name}</h2>
        <Score value={vote_average} />
      </div>
    </article>
  );
};

export default Poster;
