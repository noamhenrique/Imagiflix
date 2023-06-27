import "./Score.css";

const Score = ({ value = 5 }: { value?: any }) => {
  const getBorderColor = () => {
    if (value >= 7) {
      return "border-green-400";
    } else if (value > 4 && value < 7) {
      return "border-yellow-400";
    } else {
      return "border-red-400";
    }
  };

  return (
    <span
      className={`score inline-block mx-2 my-6 py-2 px-3 border-4 bg-slate-950/75 rounded-full ${getBorderColor()}`}
    >
      {Math.floor(value)}
    </span>
  );
};

export default Score;
