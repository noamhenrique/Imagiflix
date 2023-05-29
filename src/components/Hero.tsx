import placeholder from "../assets/hero.jpg";

const Hero = ({ title = "Avengers Endgame", score = 10 }) => {
  const getBorderColor = () => {
    if (score >= 7) {
      return "border-green-400";
    } else if (score > 4 && score < 7) {
      return "border-yellow-400";
    } else {
      return "border-red-400";
    }
  };

  return (
    <header className="relative min-h-screen">
      <img
        className="object-cover object-center h-full w-full"
        src={placeholder}
        alt="Filme em destaque"
      />
      {
        <article className="absolute bottom-0 mb-64 px-8">
          <p className="text-2xl">Assista agora:</p>
          <h2 className="text-5xl font-bold">{title}</h2>
          <p className="text-base">
            Nota{" "}
            <span
              className={`inline-block mx-2 py-2 px-3 border-4 bg-black rounded-full ${getBorderColor()}`}
            >
              {score}
            </span>
          </p>
          <button className="text-base">Assistir</button>
          <button className="text-base">Minha Lista</button>
        </article>
      }
    </header>
  );
};

export default Hero;
