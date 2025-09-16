// src/context/GameContext.jsx
//ai generated
import { useEffect, useState } from "react";
import { GameContext } from "./GameContext";

// Base data (static info + initial state)
const baseBusinesses = [
  {id: 1, name: "Sneaker flipping", unlocked: true, mps: 1, price: 0, icon: "/sneakers.png", caption: "returns are measly but enough to show off at school", isFunctioning: true, competition: "", tax: 0, level: 1, mpc: 1, upgradeCost: 10}, 
  {id: 2, name: "Manga studio", unlocked: false, mps: 10, price: 100, icon: "/manga.png", caption: "You tried your hand at writing your own self insert harem isekai trash", isFunctioning: true, competition: "", tax: 0, level: 1, mpc: 10, upgradeCost: 100},
  {id: 3, name: "Trading card shop", unlocked: false, mps: 100, price: 1000, icon: "/cards.png", caption: "The only people making you any amount of profit are scalpers", isFunctioning: true, competition: "", tax: 0, level: 1, mpc: 20, upgradeCost: 500}, 
  {id: 4, name: "Wcdonalds franchise", unlocked: false, mps: 500, price: 10000, icon: "/burger.png", caption: "Maybe this means you get the food for free?", isFunctioning: true, competition: "", tax: 0, level: 1, mpc: 30, upgradeCost: 1000},
  {id: 5, name: "Casino", unlocked: false, mps: 1000, price: 10000000, icon: "/casino.png", caption: "If you can't win at a casino, just buy the place.", isFunctioning: true, competition: "", tax: 0, level: 1, mpc: 100, upgradeCost: 10000},
  {id: 6, name: "Anime figurine Shop", unlocked: false, mps: 5000, price: 10000000, icon: "/action.png", caption: "Your customers say onii-chan unironically", isFunctioning: true, competition: "", tax: 0, level: 1, mpc: 1000, upgradeCost: 50000}, 
  {id: 7, name: "Gaming PC factory", unlocked: false, mps: 10000, price: 100000000, icon: "/pc.png", caption: "The only thing good about these is the graphics card", isFunctioning: true, competition: "", tax: 0, level: 1, mpc: 5000, upgradeCost: 100000},
  {id: 8, name: "Silk path", unlocked: false, mps: 20000, price: 1000000000, icon: "/silk.png", caption: "Silk road reupload", isFunctioning: true, competition: "", tax: 0, level: 1, mpc: 10000, upgradeCost: 500000},
  {id: 9, name: "Mafia boss", unlocked: false, mps: 50000, price: 10000000000, icon: "/mafia.png", caption: "Your position has earned you many enemies", isFunctioning: true, competition: "", tax: 0, level: 1, mpc: 10000, upgradeCost: 1000000},
  {id: 10, name: "Illuminatied", unlocked: false, mps: 100000, price: 100000000000, icon: "/illuminati.png", caption: "You learn advanced alchemy to turn printer paper into banknotes", isFunctioning: true, competition: "", tax: 0, level: 1, mpc: 100000, upgradeCost: 10000000},
];

const baseNewsArticles = [
  "Sneaker reselling rising in popularity, Teenagers and adults alike making thousands of dollars a day. ",
  "Famous manga writer has died after a fan crowd surge to his new meet and greet. fans will switch to fanmade light novel instead.", 
  "'Whale' Resellers are leaving no cards for children - upset parents urge trading card shops to restock ", 
  "Surging obesity and heart disease rates in healthy adults - WcDonalds to blame? health experts demand a lawsuit", 
  "Famous gambler casey nuw has won the jackpot at the world series poker with a whopping $40 million return", 
  "Wall Street shocked as 'baby mafia' launches IPO — toddlers with juice boxes outbid veteran investors overnight.",
  "Local hitman accidentally listed services on Fiverr, now fully booked with requests ranging from 'scare my boss' to 'assassinate pineapple pizza'.",
  "Stock for 'Invisible Getaway Cars Inc.' skyrockets after shareholders mysteriously vanish mid-meeting.",
  "Federal Reserve claims inflation is under control, but loan sharks report 'record-breaking kneecap collections' in Q3.",
  "Startup 'MafiaCoin' promises untraceable transactions, but investors complain it only buys garlic bread at suspicious Italian restaurants.",
  "WcDonalds franchise sued by rival burger cartel — trial postponed after the judge received 14 extra-large combo meals at his doorstep.",
  "Professional hitman unionizes, demanding dental, health insurance, and a standardized 'bulletproof vest allowance'.",
  "New business school course teaches 'Corporate Extortion 101' — enrollment doubles after professors start charging protection fees.",
  "Underground casino introduces 'stocks roulette' — bet red, black, or whether Elon Musk tweets within the next 5 minutes.",
  "National Pizza Chain collapses in stock market after it’s revealed their 'secret sauce' was just laundered marinara money."
]


// Provider Component
export function GameProvider({ children }) {

  const [businesses, setBusinesses] = useState(baseBusinesses);
  const [articles, setArticles] = useState(baseNewsArticles)

  //Some starting values - Change for testing if necessary
  const [money, setMoney] = useState(0)
  const [level, setLevel] = useState(1)
  const [unlockedCount, setUnlockedCount] = useState(1) //we already own a business at the start so count should be 1

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

  // useEffect(() => {
  //   const savedMoney = localStorage.getItem("money")
  //   const savedBusinesses = localStorag
  // }, [])

  return (
    <GameContext.Provider value={{ businesses, setBusinesses, articles, setArticles, money, setMoney, level, setLevel, unlockedCount, setUnlockedCount }}>
      {children}
    </GameContext.Provider>
  );
}
