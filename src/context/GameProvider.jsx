// src/context/GameContext.jsx
//ai generated
import { useEffect, useState } from "react";
import { GameContext } from "./GameContext";

// Base data (static info + initial state)
const baseBusinesses = [
  {name: "Sneaker flipping", unlocked: true, mps: 1, price: 0, icon: "/sneakers.png", caption: "returns are measly but enough to show off at school", isFunctioning: true, competition: "", tax: 0, level: 1}, 
  {name: "Manga studio", unlocked: false, mps: 10, price: 100, icon: "/manga.png", caption: "You tried your hand at writing your own self insert harem isekai trash", isFunctioning: true, competition: "", tax: 0, level: 1},
  {name: "Trading card shop", unlocked: false, mps: 100, price: 1000, icon: "/cards.png", caption: "The only people making you any amount of profit are scalpers", isFunctioning: true, competition: "", tax: 0, level: 1}, 
  {name: "Wcdonalds franchise", unlocked: false, mps: 500, price: 10000, icon: "/burger.png", caption: "Maybe this means you get the food for free?", isFunctioning: true, competition: "", tax: 0, level: 1},
  {name: "Casino", unlocked: false, mps: 1000, price: 10000000, icon: "/casino.png", caption: "If you can't win at a casino, just buy the place.", isFunctioning: true, competition: "", tax: 0, level: 1},
  {name: "Anime figurine Shop", unlocked: false, mps: 5000, price: 10000000, icon: "/action.png", caption: "Your customers say onii-chan unironically", isFunctioning: true, competition: "", tax: 0, level: 1}, 
  {name: "Gaming PC factory", unlocked: false, mps: 10000, price: 100000000, icon: "/pc.png", caption: "The only thing good about these is the graphics card", isFunctioning: true, competition: "", tax: 0, level: 1},
  {name: "Silk path", unlocked: false, mps: 20000, price: 1000000000, icon: "/silk.png", caption: "Silk road reupload", isFunctioning: true, competition: "", tax: 0, level: 1},
  {name: "Mafia boss", unlocked: false, mps: 50000, price: 10000000000, icon: "/mafia.png", caption: "Your position has earned you many enemies", isFunctioning: true, competition: "", tax: 0, level: 1},
  {name: "Illuminatied", unlocked: false, mps: 100000, price: 100000000000, icon: "/illuminati.png", caption: "You learn advanced alchemy to turn printer paper into banknotes", isFunctioning: true, competition: "", tax: 0, level: 1},
];


// Provider Component
export function GameProvider({ children }) {
  const [businesses, setBusinesses] = useState(baseBusinesses);
  const [money, setMoney] = useState(1000000)
  const [level, setLevel] = useState(0)
  const [unlockedCount, setUnlockedCount] = useState(1) //we already own a business at the start so count should be 1
  const [clickMultiplier, setClickMultiplier] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setMoney((prev) => {  //figure this out no matter what cuz dont get it atm. its annoying. and why without the newmoney variable it wouldnt go up.
        console.log("prev" + prev)
        console.log("shit maths" + businesses.filter(business => business.unlocked).reduce((sum, business) => sum + business.mps, 0))
        const newMoney = prev + businesses.filter(business => business.unlocked).reduce((sum, business) => sum + business.mps, 0)
        console.log("newmoney" + newMoney)
        return newMoney;
      });
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, [businesses]);

  return (
    <GameContext.Provider value={{ businesses, setBusinesses, money, setMoney, level, setLevel, unlockedCount, setUnlockedCount, clickMultiplier, setClickMultiplier }}>
      {children}
    </GameContext.Provider>
  );
}
