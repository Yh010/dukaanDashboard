/* import { useState } from 'react' */
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import SideNavBar from './components/sidenavbar'
import Navbar from './components/navbar'

function App() {
/*   const [count, setCount] = useState(0) */

  return (
    <div className='grid grid-cols-10'>
      <div className='col-span-1'>
         <SideNavBar/>
      </div>
      
      <Navbar/>
        <h1 className="text-3xl font-bold underline col-span-9">
            Hello world!
        </h1>
       
    </div>

  )
}

export default App
