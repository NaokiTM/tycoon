import React from 'react'

const Stockmarket = () => {
  const graph = Array(48).fill(null)

  return (
    <>
        <div className='grid grid-cols-8 bg-neutral-900 m-4'>   
            {graph.map((cellContents, index) => (
                <div key = {index} className='w-full h-7 border-1 border-neutral-600'>{cellContents}</div>
            ))}
        </div>
        <div className='flex justify-evenly w-full '>
            <button className='bg-green-700 pl-4 pr-4 rounded-xl hover:pointer-cursor'>Buy</button>
            <button className='bg-red-700 pl-4 pr-4 rounded-xl hover:pointer-cursor'>Sell</button>
        </div>
    </>
  )
}

export default Stockmarket