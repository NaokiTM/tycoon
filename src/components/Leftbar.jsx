import React from 'react'

const Leftbar = () => {
  return (  
    <div class="flex-[2] flex text-center flex-col h-full bg-slate-800">
        <div class="flex flex-col flex-1 text-center text-xl" id="minigames">
            <div>Minigames</div>
            <div id="stocks" class="text-left font-medium flex flex-1">
                <div class="text-lg">Stock market:</div>
            </div>
            <div id="hitman" class="text-left font-medium flex flex-1">
                <div class="text-lg font-['Rubik_Glitch']">Hire a hitman: </div>
            </div>
        </div>
        <div class="flex-1 text-xl font-['Rubik_Glitch']" id="rivals">
            Rival Companies
        </div>
    </div>
  )
}

export default Leftbar