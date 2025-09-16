import React, { useState, useContext } from 'react'
import { GameContext } from '../context/GameContext'

const Midsection = () => {
    const [currentBiz, setCurrentBiz] = useState(0)
    const {money, setMoney, businesses, setBusinesses, unlockedCount } = useContext(GameContext);
    let selected = businesses[currentBiz]


    const calcNextCurrentBiz = (direction) => {
        let nextBiz = currentBiz + 1
        let prevBiz = currentBiz - 1

        console.log("console.log" + nextBiz)
        console.log("console.log" + currentBiz)

        if (direction === "r") {
            if (nextBiz >= businesses.length) {
                setCurrentBiz(0)
            } else if (unlockedCount > nextBiz) {  //cant use >= because it will increase currentbiz again just because 
                setCurrentBiz(currentBiz + 1)
            }
        } else if (direction === "l") {
            if (prevBiz < 0) {
                if (unlockedCount === 10) {
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
        setMoney(money + multiplier)
    }

    const handleUpgrade = () => {
        if (money < selected.upgradeCost) {
            console.log("not enough money to upgrade")
        } else {
            setMoney(money - selected.upgradeCost)
            setBusinesses(prev => 
                prev.map(b => 
                    b.id === selected.id
                        ? {
                            ...b,
                            level: b.level + 1,
                            mps: b.mps * 2,
                            mpc: b.mpc * 2,
                            upgradeCost: b.upgradeCost * 4
                        }
                        : b
                )
            )
        }
    }

  return (
    <div className="flex flex-col flex-[6] justify-evenly">

        <div id="business" className="flex flex-row text-center items-center h-full justify-center space-x-4">
            <button id="leftbtn" className="hover:cursor-pointer scale-125" onClick={() => calcNextCurrentBiz("l")}>
                <img src="/arrback.png" className="hover:scale-150 transition"/>
            </button>


            <div className="flex-col overflow-y-auto w-80">
                {/* 
                    <div className='text-xs'>Net Worth:</div>
                    <div>{money}</div> 
                */}
                <div>Level</div>
                <div className='text-2xl'>{selected.level}</div>

                <div className="flex justify-center p-4">
                    <button className="hover:cursor-pointer hover:scale-110 transition" id="businessbutton" onClick={() => calcClickAmount(businesses[currentBiz].mpc)}>
                        <img src={businesses[currentBiz].icon} alt={businesses[currentBiz].name}></img>
                    </button>
                </div>
                <div className="text-2xl" id="businessname">
                    {businesses[currentBiz].name}
                </div>
                <div className="italic" id="businesssaying">
                    {businesses[currentBiz].caption}
                </div>
                <div className='flex justify-center'>
                    <button id="upgradebusinesbutton" className='p-2 bg-purple-600 rounded-2xl mt-6 hover:cursor-pointer flex flex-col w-40' onClick={() => handleUpgrade()}>
                        <div>Upgrade</div>
                        <div>{businesses[currentBiz].upgradeCost}</div>
                    </button>
                </div>
            </div>


            <button id="rightbtn" className="hover:cursor-pointer scale-125" onClick={() => calcNextCurrentBiz("r")}>
                <img src="/arrfront.png" className="hover:scale-150 transition" />
            </button>
        </div>
    </div>
  )
}

export default Midsection