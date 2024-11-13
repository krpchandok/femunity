import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Header from './components/custom/Header'
import { Link } from 'react-router-dom'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col mx-56 gap-9'>
      <Navbar/>
      <h1 className='font-semibold text-[35px] text-black'> 
        <span className='text-pink-300 font-mono'>Welcome to FemUnity!</span>
        <p className='text-[20px] font-mono my-5'>Here, you can connect with others nearby experiencing similar situations to get the support you need!</p>
      </h1>
      <Link to='./user-info'>
        <Button className='bg-pink-200 my-0 font-bold hover:text-pink-400'> Get Started </Button>
      </Link>
    </div>
  )
}

export default App
