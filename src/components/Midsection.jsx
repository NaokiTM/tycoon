import React, { useState, useContext } from 'react'
import { GameContext } from '../context/GameContext'

const Midsection = () => {
    const [currentBiz, setCurrentBiz] = useState(0)
    const {money, setMoney, businesses, unlockedCount, clickMultiplier } = useContext(GameContext);

    console.log("currentbiz" + currentBiz)


    const calcNextCurrentBiz = (direction) => {
        let nextBiz = currentBiz + 1
        let prevBiz = currentBiz - 1

        if (direction === "r") {
            if (nextBiz >= businesses.length) {
                setCurrentBiz(0)
            } else if (unlockedCount >= nextBiz) {
                setCurrentBiz(currentBiz + 1)
            }
        } else if (direction === "l") {
            if (prevBiz < 0) {
                if (unlockedCount === 9) {
                    setCurrentBiz(businesses.length - 1)
                }
            } else {
                setCurrentBiz(currentBiz - 1)
            }
        } else {
            console.log("argument in scroll function is wrong")
        }
    }

    const calcClickAmount = (multiplier) => {
        console.log("clicked")
        setMoney(money + multiplier)
    }

  return (
    <div className="flex flex-col flex-[6] justify-evenly h-full">
        <div id="news" className="bg-red-600 pl-1 italic">BREAKING: I just started the game</div>

        <div id="business" className="flex flex-row text-center items-center h-full justify-center space-x-4">
            <button id="leftbtn" className="hover:cursor-pointer scale-125" onClick={() => calcNextCurrentBiz("l")}>
                <img src="/arrback.png" className="hover:scale-150 transition"/>
            </button>
            <div className="flex-col">
                <div className="flex justify-center ">
                    <button className="hover:cursor-pointer hover:scale-110 transition" id="businessbutton" onClick={() => calcClickAmount(clickMultiplier)}>
                        <img src={businesses[currentBiz].icon} alt={businesses[currentBiz].name}></img>
                    </button>
                </div>
                <div className="" id="businessname">
                    {businesses[currentBiz].name}
                </div>
                <div className="italic" id="businesssaying">
                    {businesses[currentBiz].caption}
                </div>
                <button id="upgradebusinesbutton" className='p-2 bg-green-700 rounded-2xl mt-6 hover:cursor-pointer'>
                    Upgrade
                </button>
            </div>
            <button id="rightbtn" className="hover:cursor-pointer scale-125" onClick={() => calcNextCurrentBiz("r")}>
                <img src="/arrfront.png" className="hover:scale-150 transition" />
            </button>
        </div>
    </div>
  )
}

export default Midsection