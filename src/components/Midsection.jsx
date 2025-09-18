import React, { useState, useContext, useEffect } from 'react'
import { GameContext } from '../context/GameContext'

const Midsection = () => {
    const [currentBiz, setCurrentBiz] = useState(0)
    const [currentArticle, setCurrentArticle] = useState("")
    const {money, setMoney, businesses, setBusinesses, articles, unlockedCount } = useContext(GameContext);
    const choose = (arr) => {return arr[Math.floor(Math.random()*arr.length)];}
    let selected = businesses[currentBiz]

    const [showFeedback, setShowFeedback] = useState(false)

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

    const handleClick = (multiplier) => {
        setMoney(money + multiplier)
        setShowFeedback(true)
    }

    const handleClickEnd = () => {
        setShowFeedback(false)
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

    //GENERATE RANDOM NEWS ARTICLE EVERY 2 MINUTES
    //useeffect and articles dependency needed to avoid infinite loop from every rerender
    useEffect(() => {
        setCurrentArticle(choose(articles))
        setTimeout(() => {
          setCurrentArticle(choose(articles))
        }, 120000); // 120000 ms
    }, [articles]) 

  return (
    <div className="flex flex-col flex-[6] justify-evenly">

        <div className='bg-red-500 italic mt-2 pl-1 pr-1 rounded-md flex'>
            <div className='mr-1'>NEWS:</div>
            <div className='overflow-hidden w-full'>
                <div className='infinite-scroll w-full text-nowrap'>{currentArticle}</div>
            </div>
        </div>

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
                    {showFeedback && <div className='absolute top-[50%] z-10 clickfeedback text-4xl' onAnimationEnd={handleClickEnd}>+{selected.mpc}</div>}
                    <button className="hover:cursor-pointer hover:scale-110 transition" id="businessbutton" onClick={() => handleClick(businesses[currentBiz].mpc)} >
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