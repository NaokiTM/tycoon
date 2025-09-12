import React from 'react'
import Leftbar from './Leftbar'
import Midsection from './Midsection'
import Rightbar from './Rightbar'

const Mainsection = () => {
  return (
    <div id="mainui" className="flex justify-center h-full flex-1 overflow-auto">
        <Leftbar />
        <Midsection />
        <Rightbar />
    </div>
  )
}

export default Mainsection