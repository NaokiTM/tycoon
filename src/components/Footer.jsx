import React, { useState, useEffect, useRef } from 'react'

const Footer = () => {

  const [isAttribsOpened, setIsAttribsOpened] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsAttribsOpened(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <footer className="flex text-xs bg-black relative space-x-2 p-1" ref={dropdownRef}>
      <button className='hover:underline hover:cursor-pointer' onClick={() => setIsAttribsOpened(prev => !prev)}>Attributions</button>

      { isAttribsOpened && (
        <div 
          open={open} 
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          className=' p-2 absolute left-0 overflow-hidden flex flex-col bg-neutral-900 rounded-md top-full'
        >
          <a className = 'hover:text-blue-400 hover:underline' href="https://www.flaticon.com/free-icons/sneakers" title="sneakers icons">Sneakers icons created by Good Ware - Flaticon</a>
          <a className = 'hover:text-blue-400 hover:underline' href="https://www.flaticon.com/free-icons/cards" title="cards icons">Cards icons created by Victoruler - Flaticon</a>
          <a className = 'hover:text-blue-400 hover:underline' href="https://www.flaticon.com/free-icons/manga" title="manga icons">Manga icons created by Freepik - Flaticon</a>
          <a className = 'hover:text-blue-400 hover:underline' href="https://www.flaticon.com/free-icons/hamburger" title="hamburger icons">Hamburger icons created by Freepik - Flaticon</a>
          <a className = 'hover:text-blue-400 hover:underline' href="https://www.flaticon.com/free-icons/poker" title="poker icons">Poker icons created by Freepik - Flaticon</a>
          <a className = 'hover:text-blue-400 hover:underline' href="https://www.flaticon.com/free-icons/action-figure" title="action figure icons">Action figure icons created by Freepik - Flaticon</a>
          <a className = 'hover:text-blue-400 hover:underline' href="https://www.flaticon.com/free-icons/tower-pc" title="tower pc icons">Tower pc icons created by Freepik - Flaticon</a>
          <a className = 'hover:text-blue-400 hover:underline' href="https://www.flaticon.com/free-icons/camel" title="camel icons">Camel icons created by Freepik - Flaticon</a>
          <a className = 'hover:text-blue-400 hover:underline' href="https://www.flaticon.com/free-icons/mafia" title="mafia icons">Mafia icons created by Freepik - Flaticon</a>
          <a className = 'hover:text-blue-400 hover:underline' href="https://www.flaticon.com/free-icons/illuminati" title="illuminati icons">Illuminati icons created by Freepik - Flaticon</a>
          <a className = 'hover:text-blue-400 hover:underline' href="https://www.flaticon.com/free-icons/arrows" title="arrows icons">Arrows icons created by Andrean Prabowo - Flaticon</a>
          <a className = 'hover:text-blue-400 hover:underline' href="https://www.flaticon.com/free-icons/ui" title="ui icons">Ui icons created by Freepik - Flaticon</a>
        </div>
      )}
      <a href='https://github.com/NaokiTM/webgame' className='hover:underline'>Github Repo</a>
    </footer>
  )
}

export default Footer