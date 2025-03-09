
import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

const AnimatedButton = () => {
    const [hover, setHover] = useState(false);
  
    return (
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md transition-all duration-1000 hover:bg-blue-700"
      >
        Click Me
        <span className="transition-transform duration-1000 ease-in-out">
          {hover ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </span>
      </button>
    );
  }

export default function Animasi() {
    return (
        <div className="min-h-screen p-4 w-full flex justify-center items-center">
            <AnimatedButton />
        </div>
    );
}