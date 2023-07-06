import CONST from "../data/constants";

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
  video,
}: any) => {
  const { IMAGEURL } = CONST;

  return (
    <div className="fixed top-0 left-0 z-10 w-full h-screen grid place-items-center">
      <article className="w-4/5 h-4/5 grid grid-cols-3 p-4 bg-black bg-opacity-90">
        <img
          src={`${IMAGEURL}/w200/${poster_path}`}
          alt={title ? title : name}
        />
        <div>
          <h2>{title ? title : name}</h2>
          <h6>{original_title ? original_title : original_name}</h6>
          <p>{overview}</p>
          <Score value={vote_average} />
          <span>{runtime ? runtime : number_of_seasons}</span>
        </div>
      </article>
    </div>
  );
};

export default Modal;
