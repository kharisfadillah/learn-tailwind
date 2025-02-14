import PropTypes from "prop-types";
import { useEffect } from "react";

// function Screen() {
//   return <div className="w-32"></div>;
// }

const Tombol = ( { label } ) => {
  return (
    <div className="bg-teal-300 rounded-full text-center align-middle p-4 text-xl font-bold">
      {label}
    </div>
  );
}

Tombol.propTypes = {
    label: PropTypes.string.isRequired,
}

// const MyItem = ({ label, color }) => {
//   return <div className={`${color} p-4 rounded-lg`}>{label}</div>;
// };

// MyItem.propTypes = {
//   label: PropTypes.string.isRequired,
//   color: PropTypes.string.isRequired,
// };

export default function Kalkulator() {
  useEffect(() => {
    document.title = "Belajar Tailwind - Kalkulator";
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="grid grid-cols-4 h-96 w-96 bg-black p-4 rounded-xl gap-4">
        <Tombol label="1" />
        <Tombol label="2" />
        <Tombol label="3" />
        <Tombol label="4" />
        <Tombol label="5" />
        <Tombol label="6" />
        <Tombol label="7" />
        <Tombol label="8" />
        <Tombol label="9" />
      </div>
    </div>
  );
}
