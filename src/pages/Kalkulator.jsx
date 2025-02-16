import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// function Screen() {
//   return <div className="w-32"></div>;
// }

const TombolFungsi = ({ label }) => {
  return (
    <button className="p-4 rounded-full w-16 h-16 text-2xl font-bold bg-[#d4d4d2] hover:bg-gray-400">
      {label}
    </button>
  );
}

TombolFungsi.propTypes = {
  label: PropTypes.string.isRequired,
}

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
}

TombolAngka.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

const TombolOperasi = ({ label }) => {
  return (
    <button className="p-4 rounded-full w-16 h-16 text-2xl font-bold text-white bg-[#FF9500] hover:bg-[#A85A00]">
      {label}
    </button>
  );
}

TombolOperasi.propTypes = {
  label: PropTypes.string.isRequired,
}

const TombolNol = () => {
  return (
    <button className="p-4 rounded-full h-16 text-2xl text-[#D4D4D2] font-bold bg-[#505050] hover:bg-[#888886] col-span-2">
      0
    </button>
  );
}

export default function Kalkulator() {
  useEffect(() => {
    document.title = "Belajar Tailwind - Kalkulator";
  }, []);

  const [input, setInput] = useState("");
  // const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // const handleClear = () => {
  //   setInput("");
  // };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* <div className="flex h-screen items-center justify-center"> */}
      <div className="bg-[#17181A] p-4 rounded-3xl shadow-md max-w-fit">
        <div className="mt-4 rounded-lg text-xl text-right text-[#828282]">{input}</div>
        {/* <div className="rounded-lg text-3xl text-right text-[#D4D4D2]">{result}</div> */}
        <div className="mt-4 grid grid-cols-4 gap-2">
          <TombolFungsi label="AC" />
          <TombolFungsi label="±" />
          <TombolFungsi label="%" />
          <TombolOperasi label="÷" />
          <TombolAngka label="7" onClick={handleClick} />
          <TombolAngka label="8" onClick={handleClick} />
          <TombolAngka label="9" onClick={handleClick} />
          <TombolOperasi label="×" />
          <TombolAngka label="4" onClick={handleClick} />
          <TombolAngka label="5" onClick={handleClick} />
          <TombolAngka label="6" onClick={handleClick} />
          <TombolOperasi label="-" />
          <TombolAngka label="1" onClick={handleClick} />
          <TombolAngka label="2" onClick={handleClick} />
          <TombolAngka label="3" onClick={handleClick} />
          <TombolOperasi label="+" />
          <TombolNol />
          <TombolAngka label="." />
          <TombolOperasi label="=" />
          {/* <TombolFungsi label="AC" />
          <TombolFungsi label="±" />
          <TombolFungsi label="%" />
          <TombolOperasi label="÷" /> */}
          {/* <Tombol label="2" />
          <Tombol label="3" />
          <Tombol label="4" />
          <Tombol label="5" />
          <Tombol label="6" />
          <Tombol label="7" />
          <Tombol label="8" />
          <Tombol label="9" /> */}
        </div>
      </div>

    </div>
  );
}
