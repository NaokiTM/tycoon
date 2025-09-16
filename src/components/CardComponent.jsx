import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const CardComponent = (props) => {

  const {businesses, money, setMoney, setBusinesses, setUnlockedCount} = useContext(GameContext)

  const buy = () => {
    let business = businesses[props.index]
    if (money >= business.price) {
        //the whole business.slice and .every bit is to check if all businesses including the current business have an unlocked = true property. 
        if (business.unlocked === false && businesses.slice(0, props.index).every(business => business.unlocked)) {
            setMoney(money - business.price);

            //creates new array to change the reference so react rerenders
            const updated = [...businesses] // new array
            updated[props.index] = { ...businesses[props.index], unlocked: true } // new object
            setBusinesses(updated) // React sees a new reference → re-render

            setUnlockedCount(props.index + 1)
            console.log("bought")
            console.log("unlocked?" + business.unlocked)
        }
    } else if (business.unlocked) {
        console.log("already unlocked?")
        //code to make button go red or give warning saying its already unlocked
    } else {
        //not enough money
    }
  }  

  return (
    <div className="flex-1 flex flex-col items-start justify-between border-slate-600 border-2 m-2 rounded-md p-2">
        <div className="text-xl">{props.name}</div>
        <div className="flex flex-row w-full justify-between">
            <div className="flex-col flex">
                <div>Stats</div>
                <div className="flex flex-col text-xs font-light h-full justify-evenly">
                    <div className='flex flex-row '>
                        <div className='pr-2'>Level: </div>
                        <div>{props.level}</div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='pr-2'>Mps: </div>
                        <div>{props.mps}</div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='pr-2'>MpC: </div>
                        <div>{props.mpc}</div>
                    </div>
                    <div className='flex flex-row'> 
                        <div className='pr-2'> Functioning: </div>
                        <div>{props.isFunctioning}</div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='pr-2'>Competition: </div>
                        <div>{props.competition}</div>
                    </div>
                    <div className='flex flex-row'> 
                        <div className='pr-2'>Tax: </div>
                        <div>{props.tax}</div>
                    </div>

                </div>
            </div>

            <div className="flex-col justify-end mt-auto">
                <div id="bizSidebarIcon">
                    <img src={props.icon} alt={props.name} className='scale-75'/>
                </div>
                { businesses[props.index].unlocked ? (
                    <div className="flex justify-end">Owned</div>
                ) : (
                    <div className="flex flex-row justify-end">
                        <div className="mr-2">${props.price}</div>
                        <button className="bg-red-700 pl-1 pr-1 rounded-md hover:cursor-pointer hover:bg-red-500 hover:scale-110" onClick={() => buy()}>
                            <div>Buy</div>
                        </button>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default CardComponent