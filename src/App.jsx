/* import { useState } from 'react' */
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import SideNavBar from './components/sidenavbar'
import Navbar from './components/navbar'
import Overview from './components/overview'

function App() {
/*   const [count, setCount] = useState(0) */

  return (
    <div className='grid grid-cols-10'>
      <div className='col-span-1'>
         <SideNavBar/>
      </div>
      

      <div className='col-span-9'>
        <Navbar />
        <div>
          <Overview/>

        </div>
        
        
      </div>
    </div>

  )
}

export default App
