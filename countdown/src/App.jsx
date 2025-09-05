import { Outlet } from 'react-router-dom'

import WallPaper from './assets/wallpaper.jpg'

import './App.css'

function App() { 
  return (
    <div className='App' style={{ backgroundImage: `url(${WallPaper})` }}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
