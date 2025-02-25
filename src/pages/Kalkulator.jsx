import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// function Screen() {
//   return <div className="w-32"></div>;
// }

const TombolFungsi = ({ label, onClick }) => {
  return (
    <button
      key={label}
      className="p-4 rounded-full w-16 h-16 text-2xl font-bold bg-[#d4d4d2] hover:bg-gray-400"
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

TombolFungsi.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const TombolAngka = ({ label, onClick }) => {
  return (
    <button
      key={label}
      className="p-4 rounded-full w-16 h-16 text-2xl text-[#D4D4D2] font-bold bg-[#505050] hover:bg-[#888886]"
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

TombolAngka.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const TombolOperasi = ({ label, onClick }) => {
  return (
    <button
      key={label}
      className="p-4 rounded-full w-16 h-16 text-2xl font-bold text-white bg-[#FF9500] hover:bg-[#A85A00]"
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

TombolOperasi.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const TombolNol = ({ onClick }) => {
  return (
    <button
      key="0"
      className="p-4 rounded-full h-16 text-2xl text-[#D4D4D2] font-bold bg-[#505050] hover:bg-[#888886] col-span-2"
      onClick={() => onClick("0")}
    >
      0
    </button>
  );
};

TombolNol.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default function Kalkulator() {
  useEffect(() => {
    document.title = "Belajar Tailwind - Kalkulator";
  }, []);

  const [input, setInput] = useState("0");
  const [result, setResult] = useState("0");

  const handleClick = (value) => {
    console.log(value);
    if (value === "=") {
      setInput(result);
      setResult(String(new Function("return " + result.replace("×", "*"))()));
    } else if (value === "AC") {
      setInput("0");
      setResult("0");
    } else {
      setResult((prev) => {
        if (prev === "0" && value !== "." && value !== "0") {
          return value;
        }
        return prev + value;
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#17181A] p-4 rounded-3xl shadow-md max-w-fit">
        <div className="mt-4 rounded-lg text-xl text-right text-[#828282]">
          {input}
        </div>
        <div className="rounded-lg text-3xl text-right text-[#D4D4D2]">
          {result}
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          <TombolFungsi label="AC" onClick={handleClick} />
          <TombolFungsi label="±" />
          <TombolFungsi label="%" />
          <TombolOperasi label="÷" onClick={handleClick} />
          <TombolAngka label="7" onClick={handleClick} />
          <TombolAngka label="8" onClick={handleClick} />
          <TombolAngka label="9" onClick={handleClick} />
          <TombolOperasi label="×" onClick={handleClick} />
          <TombolAngka label="4" onClick={handleClick} />
          <TombolAngka label="5" onClick={handleClick} />
          <TombolAngka label="6" onClick={handleClick} />
          <TombolOperasi label="-" onClick={handleClick} />
          <TombolAngka label="1" onClick={handleClick} />
          <TombolAngka label="2" onClick={handleClick} />
          <TombolAngka label="3" onClick={handleClick} />
          <TombolOperasi label="+" onClick={handleClick} />
          <TombolNol onClick={handleClick} />
          <TombolAngka label="." onClick={handleClick} />
          <TombolOperasi label="=" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
