import React, { useContext } from 'react'
import CardComponent from './CardComponent'
import { GameContext } from '../context/GameContext'

const Rightbar = () => {
  const {businesses} = useContext(GameContext)

  return (
    <div className='p-2 flex-2'>
      <div className="flex flex-col bars rounded-xl h-full">

        <div className="text-center text-lg">Ventures</div>

        <div className="flex justify-evenly flex-col overflow-y-auto mt-auto">
        {businesses.map((biz, index) => (
          <CardComponent
            key={index}           // unique key for React
            index={index}
            name={biz.name}
            level={biz.level}
            mps={biz.mps}
            mpc={biz.mpc}
            isFunctioning={biz.isFunctioning.toString()}
            risk={biz.risk === "" ? "None" : biz.risk.toString()}
            tax={biz.tax}
            price={biz.price}
            icon={biz.icon}
          />
        ))}     
        </div>

      </div>  
    </div>
   
  )
}

export default Rightbar