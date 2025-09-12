import './index.css'
import Topbar from './components/Topbar'
import Mainsection from './components/Mainsection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="text-white bg-black font-[Gabarito] font-bold flex h-screen flex-col">
        <Topbar />
        <Mainsection />
        <Footer />
      </div>
    </>
  )
}

export default App
