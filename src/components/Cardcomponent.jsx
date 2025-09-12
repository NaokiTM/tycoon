import React from 'react'

const Card = () => {
  return (
    <div class="flex-1 flex flex-col items-start justify-between border-slate-600 border-2 m-2 rounded-md p-2">
        <div id="name1" class="text-xl"></div>
        <div class="flex flex-row w-full justify-between">
            <div class="flex-col flex">
                <div>Stats</div>
                <div class="flex flex-col text-xs font-light h-full justify-evenly">
                    <div id="bizLevel1">Level:</div>
                    <div id="bizMps1">Mps: </div>
                    <div id="bizFunctioning1">Functioning: </div>
                    <div id="bizCompetition1">Competition: </div>
                    <div id="bizTax1">Tax:</div>
                </div>
            </div>

            <div class="flex-col justify-end mt-auto">
                <div id="bizSidebarIcon">
                    <img src="/sneakers.png" />
                </div>
                <div class="flex flex-row justify-end">
                    <div id="price1" class="mr-2"></div>
                    <button class="bg-red-700 pl-1 pr-1 rounded-md hover:cursor-pointer hover:bg-red-500 hover:scale-110">
                        <div>Buy</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card