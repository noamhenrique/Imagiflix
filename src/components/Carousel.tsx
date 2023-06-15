import Slick from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import mockData, { Movie } from "../data/mock";

const Poster = ({ cover, title, score }: Movie, index: number) => (
  <article key={index}>
    <img src={cover} alt={title} />
  </article>
);

interface CarouselData {
  title?: string;
  data?: Movie[];
}

const Carousel = ({ title = "Carousel", data = mockData }: CarouselData) => {
  enum Direction {
    left,
    right,
  }
  const SlickArrow = ({ direction }: { direction: Direction }) => (
    <button
      className={`absolute w-16 h-full z-10 bg-red-500 ${
        direction ? "right-0" : "left-0"
      }`}
    >
      <FontAwesomeIcon icon={direction ? faChevronRight : faChevronLeft} />
    </button>
  );

  const options = {
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <SlickArrow direction={Direction.left} />,
    nextArrow: <SlickArrow direction={Direction.right} />,
  };

  return (
    <section>
      <h2>{title}</h2>
      <Slick className="relative" {...options}>
        {data.map((movie, index) => Poster(movie, index))}
      </Slick>
    </section>
  );
};

/*  return (
    <section>
      <h2>{title}</h2>
      <Slick {...options}>
        {data.map(({ cover, title }) => (
          <article>
            <img src={cover} alt={title} />
          </article>
        ))}
      </Slick>
    </section>
  );
};*/

export default Carousel;
