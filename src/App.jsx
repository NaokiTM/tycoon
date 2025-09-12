import './index.css'
import Topbar from './components/Topbar'
import Mainsection from './components/Mainsection'
import Footer from './components/Footer'
import { GameContext } from './context/GameContext'
import { useContext } from 'react'

function App() {
  const {money, level} = useContext(GameContext)
  console.log(money)
  console.log(level)
  

  return (
    <div className="text-white bg-black font-[Gabarito] font-bold flex h-screen flex-col">
      <Topbar money={money} level={level}/>
      <Mainsection />
      <Footer />
    </div>
  )
}

export default App
