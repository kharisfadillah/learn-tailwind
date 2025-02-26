import { useState } from "react";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const data = ["React", "Angular", "Vue", "Svelte", "Next.js", "Nuxt.js"];

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Cari..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded"
      />
      <ul className="mt-2">
        {filteredData.map((item, index) => (
          <li key={index} className="p-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
