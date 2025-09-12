import React from 'react'

const Topbar = () => {
  return (
    <div id="status" class="flex bg-slate-900 p-2 justify-between">
        {/* <!-- MONEY DISPLAY BIT --> */}
        <div id="moneybar" class="flex flex-col text-3xl">
            <div class="text-xs font-medium">Money</div>
            <div id="money"></div>
        </div>

        {/* <!-- PRESTIGE/LEVEL BIT --> */}
        <div class="flex flex-col space-x-2 text-3xl">
            <div class="text-xs font-medium">Prestige</div>
            <div class="flex flex-row">
                <div class="text-xs font-light">Lvl.</div>
                <div id="prestigebar"></div>
            </div>
        </div>
    </div>
  )
}

export default Topbar