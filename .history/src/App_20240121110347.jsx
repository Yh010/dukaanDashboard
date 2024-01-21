/* import { useState } from 'react' */
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import SideNavBar from './components/sidenavbar'

function App() {
/*   const [count, setCount] = useState(0) */

  return (
    <div className='grid grid-cols-2'>
       <SideNavBar/>
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
       
    </div>

  )
}

export default App
