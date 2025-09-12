import React from 'react'
import Cardcomponent from './Cardcomponent'

const Rightbar = () => {
  return (
    <div id="shop" class="flex-[2] flex flex-col bg-slate-800">
      <div class="text-center text-lg">Businesses</div>
      <div class="flex justify-evenly flex-col overflow-y-auto mt-auto">
        <Cardcomponent />
        <Cardcomponent />
        <Cardcomponent />
        <Cardcomponent />
        <Cardcomponent />
        <Cardcomponent />
        <Cardcomponent />
        <Cardcomponent />
        <Cardcomponent />
      </div>
    </div>     
  )
}

export default Rightbar