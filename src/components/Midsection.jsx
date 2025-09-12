import React from 'react'

const midsection = () => {
  return (
    <div class="flex flex-col flex-[6] justify-evenly h-full">
        <div id="news" class="bg-red-600 pl-1 italic">BREAKING: i just started the game</div>

        <div id="business" class="flex flex-row text-center items-center h-full justify-center space-x-4">
            <button id="leftbtn" class="hover:cursor-pointer scale-125">
                <img src="/arrback.png" class="hover:scale-150 transition"/>
            </button>
            <div class="flex-col">
                <div class="flex justify-center ">
                    <button class="hover:cursor-pointer hover:scale-110 transition" id="businessbutton">
                        <img id = "iconimg" src="/sneakers.png"></img>
                    </button>
                </div>
                <div class="" id="businessname">
                    Business: 
                </div>
                <div class="italic" id="businesssaying">
                    businesssaying
                </div>
                <button id="upgradebusinesbutton">
                    <img src="/upgrade.png" />
                </button>
            </div>
            <button id="rightbtn" class="hover:cursor-pointer scale-125">
                <img src="/arrfront.png" class="hover:scale-150 transition" />
            </button>
        </div>
    </div>
  )
}

export default midsection