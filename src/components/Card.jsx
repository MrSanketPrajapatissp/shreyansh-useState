import React from "react";

function Card() {
  const data = [
    {
      name: "Amazon Basic",
      description: " h-screen flex items-center justify-center",
      url: "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true
    },

    {
      name: "Daily Wear",
      description: " h-screen flex items-center justify-center",
      url: "https://images.unsplash.com/photo-1661733197946-30b64aab3ee7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFpbHklMjB3ZWFyfGVufDB8fDB8fHww",
       instock: false
    },

    {
      name: "Amazon Basic",
      description: " h-screen flex items-center justify-center",
      url: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXBwbGUlMjBkZXZpY2V8ZW58MHx8MHx8fDA%3D",
      instock: true
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200 ">
      {data.map((value, index) => (
        <div
          key={index}
          className="w-52  bg-zinc-100 rounded-md overflow-hidden"
        >
          <div className="w-full h-32 bg-zinc-300 ">
            <img src={value.url} className="w-full h-full object-cover"></img>
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{value.name}</h2>
            <p className="text-xs mt-5">{value.description}</p>
            <button className={`px-3 py-2 mt-3 ${value.instock ? 'bg-sky-600' : 'bg-red-500'} rounded text-xs text-zinc-100 cursor-pointer `}>
            {value.instock ? "Instock": "Out of Stock"  }
          </button>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default Card;
