import React from 'react'

function Card() {

  const onhandler = () => {
    alert("Download started!");
  }

  const data = [
    {name: "Mahi ve", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
    {name: "O rabba ve", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
  ]

  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full h-screen bg-zinc-300">
      
      {data.map((item, index) => (
        <div key = {index} className='px-2 py-2 bg-white rounded-md w-100 h-fit'>
        <h1 className='font-semibold px-2 py-2'>{item.name}</h1>
        <p className='text-xs mt-1 ml-2'> {item.description}</p>
        <button onClick={onhandler} className="bg-blue-500 text-xs text-white mt-1 px-2 py-2 rounded-md ml-2 hover:bg-blue-600">Download now</button>
      </div>

      ))}

      
    </div>
  )
}

export default Card
