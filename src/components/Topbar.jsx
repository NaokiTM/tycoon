import React from 'react'

const Topbar = (props) => {

  return (
    <div id="status" class="flex bg-slate-900 p-2 justify-between mt-2 ml-2 mr-2 rounded-xl">
        {/* <!-- MONEY DISPLAY BIT --> */}
        <div id="moneybar" class="flex flex-col text-2xl">
            <div class="text-xs font-medium">Money</div>
            <div id="money">${props.money}</div>
        </div>

        {/* <!-- PRESTIGE/LEVEL BIT --> */}
        <div class="flex flex-col text-2xl">
            <div class="text-xs font-medium">Level</div>
            <div className='text-center'>{props.level}</div>
        </div>
    </div>
  )
}

export default Topbar