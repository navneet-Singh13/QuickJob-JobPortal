import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const AppLayout = () => {
  return (
    <div>
        <div className='grid-background'>

        </div>
     
        <main className='min-h-screen container w-[99%] m-auto'>
        <Header></Header>
        <Outlet/>
        </main>
        <div className='p-10 text-center bg-gray-900 mt-10'>
            Made with 💗 by Navneet Singh 
        </div>
   
    </div>
  )
}

export default AppLayout
