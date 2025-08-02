# React + Vite

<img width="1920" height="1080" alt="Screenshot (588)" src="https://github.com/user-attachments/assets/3665d4d7-26a0-4d38-9634-852065844676" />

<img width="1920" height="1080" alt="Screenshot (589)" src="https://github.com/user-attachments/assets/1b4cd93f-39b7-47eb-95f3-9a8212c697e7" />

```
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

```
