import React from 'react'

function NavBar() {
  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='p-4 text-xl font-bold'>SM</h1>
        <div className=''>
          <button className='p-4'>Projects</button>
          <button className='p-4'>TechStck</button>
          <button className='p-4'>Contact</button>
          <button className='p-4'>Resume</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar