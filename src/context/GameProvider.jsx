// src/context/GameContext.jsx
//ai generated
import { useEffect, useState } from "react";
import { GameContext } from "./GameContext";

// Base data (static info + initial state)
const baseBusinesses = [
  {id: 1, name: "Grass Grower", unlocked: true, mps: 1, price: 0, icon: "/grass.png", caption: "You try your hand at selling on silk way. Returns are negligible at best ", isFunctioning: true, risk: "", tax: 0, level: 1, mpc: 1, upgradeCost: 10}, 
  {id: 2, name: "Big time dealer", unlocked: false, mps: 10, price: 100, icon: "/drug.png", caption: "You now sell multiple substances on multiple sites. You have your own little empire", isFunctioning: true, risk: "", tax: 0, level: 1, mpc: 10, upgradeCost: 100},
  {id: 3, name: "Arms dealer", unlocked: false, mps: 100, price: 1000, icon: "/gun.png", caption: "You aren't selling weapons, you are simply selling the means to attain peace through force", isFunctioning: true, risk: "", tax: 0, level: 1, mpc: 20, upgradeCost: 500}, 
  {id: 4, name: "Bioweapon testing", unlocked: false, mps: 500, price: 10000, icon: "/test.png", caption: "Research is conducted for government agencies but also out of your own curiosity", isFunctioning: true, risk: "", tax: 0, level: 1, mpc: 30, upgradeCost: 1000},
  {id: 5, name: "Organ dealer", unlocked: false, mps: 1000, price: 10000000, icon: "/brain.png", caption: "The conciousness of the previous person is not transferred (hopefully)", isFunctioning: true, risk: "", tax: 0, level: 1, mpc: 100, upgradeCost: 10000},
  {id: 6, name: "Poison manufacturing", unlocked: false, mps: 5000, price: 10000000, icon: "/poison.png", caption: "You can't trust serving you food or drinks anymore", isFunctioning: true, risk: "", tax: 0, level: 1, mpc: 1000, upgradeCost: 50000}, 
  {id: 7, name: "Assasination service", unlocked: false, mps: 10000, price: 100000000, icon: "/skull.png", caption: "Hitmen are a popular service on the dark web - a perfect opporunity to scale your empire", isFunctioning: true, risk: "", tax: 0, level: 1, mpc: 5000, upgradeCost: 100000},
  {id: 8, name: "Illegal nuclear power", unlocked: false, mps: 20000, price: 1000000000, icon: "/nuclear.png", caption: "fat bank >>> your countries safety", isFunctioning: true, risk: "", tax: 0, level: 1, mpc: 10000, upgradeCost: 500000},
  {id: 9, name: "Illegal oil rig", unlocked: false, mps: 50000, price: 10000000000, icon: "/oil.png", caption: "Oil has appeared out of the enormous craters from your nuclear weapons testing", isFunctioning: true, risk: "", tax: 0, level: 1, mpc: 10000, upgradeCost: 1000000},
  {id: 10, name: "Nuclear weapons dealer", unlocked: false, mps: 100000, price: 100000000000, icon: "/nuclear.png", caption: "You secretly control the worlds nuclear weapons", isFunctioning: true, risk: "", tax: 0, level: 1, mpc: 100000, upgradeCost: 10000000},
];

const baseNewsArticles = [
  "Dark web crash causes global panic — hitmen forced to accept PayPal ‘friends & family’ transfers.",
  "Cartel HR department introduces ‘wellness days’ after employees complain about stressful shootouts.",
  "North Korea launches subscription box service — every month includes a random warhead and collectible sticker.",
  "Cybercriminals furious after government bans 2-for-1 ransomware bundle deals.",
  "Drug kingpin caught because he kept writing Yelp reviews under his real name.",
  "Black market organ buyers complain about ‘false advertising’ after receiving IKEA assembly instructions instead of kidneys.",
  "War profiteers announce new loyalty program — buy 10 tanks, get a free drone strike.",
  "Dark web Amazon clone under fire for 2-week shipping delay on tactical nukes.",
  "Russian oligarchs launch streaming service: Netflix, but every movie ends with a coup.",
  "CIA accidentally leaks entire hit list after intern uploads it to Google Drive ‘shared with everyone.’",
  "New crypto coin promises to back every token with one actual bullet — Wall Street calls it ‘the most stable currency yet.’",
  "International summit on nuclear disarmament ends early after someone tries to pawn uranium in the hotel lobby.",
  "Local mafia boss rebrands as ‘lifestyle coach’ — now charging $999 for lessons in extortion mindfulness.",
  "Darknet food delivery app promises hot meals in under 30 minutes, or the driver disappears forever.",
  "Cartel TikTok goes viral for dance trend teaching teens how to smuggle grenades in fanny packs."
];


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
