import { Outlet } from 'react-router-dom'

import { useContext } from 'react'
import { CountdownContext } from './context/CountDownContext'

import WallPaper from './assets/wallpaper.jpg'

import './App.css'
import { use } from 'react'

function App() {
  const { event } = useContext(CountdownContext)

  let eventImage = null
  if (event) eventImage = event.image


  return (
    <div className='App'
      style={eventImage
        ? { backgroundImage: `url(${eventImage})` }
        : { backgroundImage: `url(${WallPaper})` }
      }
    >
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
