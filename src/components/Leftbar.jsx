import React from 'react'

const Leftbar = () => {
  return (  
    <div className='p-2 flex-2 h-full text-center '>
        <div className="h-full bg-slate-800 flex flex-col rounded-xl">
            <div className="flex flex-col flex-1 text-center text-xl" id="minigames">
                <div>Minigames</div>
                <div id="stocks" className="text-left font-medium flex flex-1">
                    <div className="text-lg">Stock market:</div>
                </div>
                <div id="hitman" className="text-left font-medium flex flex-1">
                    <div className="text-lg font-['Rubik_Glitch']">Hire a hitman: </div>
                </div>
            </div>
            <div className="flex-1 text-xl font-['Rubik_Glitch']" id="rivals">
                Rival Companies
            </div>
        </div>
    </div>
  )
}

export default Leftbar