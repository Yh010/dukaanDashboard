/* import { useState } from 'react' */
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import SideNavBar from './components/sidenavbar'

function App() {
/*   const [count, setCount] = useState(0) */

  return (
    <div className='grid grid-cols-10'>
      <div className='col-span-2'>
         <SideNavBar/>
      </div>
      
        <h1 className="text-3xl font-bold underline col-span-7">
            Hello world!
        </h1>
       
    </div>

  )
}

export default App
