import React from 'react'
import Logo from '../assets/logo.svg'
function Header() {
  return (
    <header className='py-8'>
      {/* bg-pink-300 */}
      <div className='container mx-auto'>
        <div className='flex justify-between items-center' id='mybutton'>
          <a href='/'>
            <img src={Logo} alt='' />
            <button className='btn btn-sm'>Work with me </button>
          </a>
        </div>
        </div> 
    </header>
  )
}

export default Header