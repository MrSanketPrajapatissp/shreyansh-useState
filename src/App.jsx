import Card from "./components/Card";
import "./App.css";
import { useState } from "react";

function App() {
  const [banned, setBanned] = useState({ name: "John", isBanned: false });

  return (
    <div className="px-4 py-2 ">
      <div className="px-4 py-2"> {banned.name}</div>
      <div className="px-4 py-2 ">{banned.isBanned.toString()}</div>

      <button
        onClick={() => setBanned({ ...banned, isBanned: !banned.isBanned })}
        className={`${
          banned.isBanned ? "bg-blue-500" : "bg-red-500"
        } text-white px-2 py-1 rounded-full`}
      >
        Change
      </button>
    </div>
  );
}

export default App;
