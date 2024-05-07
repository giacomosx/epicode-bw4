import React from 'react'
import TopNavbar from '../../components/topnavbar/TopNavbar'

const Header = () => {
  return (
    <header className='w-100 position-fixed border-bottom bg-white '>
        <div className="container-lg">
          <TopNavbar />
        </div>
    </header>
  )
}

export default Header