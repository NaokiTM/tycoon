import './index.css'
import Topbar from './components/Topbar'
import Mainsection from './components/Mainsection'
import Menubar from './components/Menubar'
import { GameContext } from './context/GameContext'
import { useContext } from 'react'

function App() {
  const {money, level} = useContext(GameContext)
  console.log(money)
  console.log(level)
  

  return (
    <div className="text-white font-[Gabarito] font-bold flex flex-col relative h-screen bg-black select-none">

      <div className='absolute inset-0 bg-gradient-to-r from-purple-700 to-black blur-3xl w-full h-full'></div>

      <div className='relative flex flex-col h-full'>
        <Menubar/>
        <Topbar money={money} level={level} />
        <div className='flex-1 overflow-auto'>
          <Mainsection />
        </div>
      </div>
    </div>
  )
}

export default App
