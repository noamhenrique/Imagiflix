import emitter from "../utils/eventEmitter";
import CONST from "../data/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import Score from "./Score";

const Modal = ({
  poster_path,
  title,
  original_title,
  name,
  original_name,
  overview,
  vote_average,
  runtime,
  number_of_seasons,
}: any) => {
  const { IMAGEURL } = CONST;

  const handleClick = () => {
    emitter.emit(CONST.EVENTS.ModalClose);
  };

  return (
    <div className="fixed top-0 left-0 z-10 w-full h-screen grid place-items-center">
      <article className="w-4/5 h-4/5 flex p-8 bg-black bg-opacity-90">
        <img
          className="h-full"
          src={`${IMAGEURL}/w400/${poster_path}`}
          alt={title ? title : name}
        />
        <div className="relative flex-grow ml-8">
          <FontAwesomeIcon
            className="cursor-pointer absolute top-0 right-0 text-red-600"
            icon={faCircleXmark}
            size="2x"
            onClick={handleClick}
          />
          <h2 className="text-3xl font-bold">{title ? title : name}</h2>
          <h6 className="font-bold italic mt-2 mb-8">
            {original_title ? original_title : original_name}
          </h6>
          <p className="mb-4">{overview}</p>
          <Score value={vote_average} />
          <span className="bg-red-600 rounded py-2 px-4 ml-2">
            {runtime ? `${runtime}min` : `${number_of_seasons} temporadas`}
          </span>
        </div>
      </article>
    </div>
  );
};

export default Modal;
