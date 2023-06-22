import CONST from "../data/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";

import Score from "./Score";

import placeholder from "../assets/hero.jpg";

const Hero = ({
  backdrop_path = placeholder,
  title = "Avengers Endgame",
  vote_average = 10,
}) => {
  const { IMAGEURL } = CONST;

  return (
    <header className="relative min-h-screen -mb-64">
      <img
        className="object-cover object-center h-full w-full"
        src={
          backdrop_path ? `${IMAGEURL}/original/${backdrop_path}` : placeholder
        }
        alt="Filme em destaque"
      />
      <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
      <article className="absolute bottom-0 mb-64 pb-16 px-8">
        <p className="text-2xl">Assista agora:</p>
        <h2 className="text-5xl font-bold">{title}</h2>
        <p className="text-base">
          Nota <Score value={vote_average} />
        </p>
        <button className="text-base py-2 px-8 mr-2 rounded bg-slate-950/50 transition-all duration-300 ease-in-out hover:bg-slate-50/75 hover:text-black">
          <FontAwesomeIcon className="mr-2" icon={faPlay} /> Assistir
        </button>
        <button className="text-base py-2 px-8 mr-2 rounded bg-slate-950/50 transition-all duration-300 ease-in-out hover:bg-slate-50/75 hover:text-black">
          <FontAwesomeIcon className="mr-2" icon={faPlus} /> Minha Lista
        </button>
      </article>
    </header>
  );
};

export default Hero;
