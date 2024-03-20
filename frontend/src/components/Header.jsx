import React from 'react'

const Header = () => {
  return (
    <>
      <ul className='flex justify-evenly pt-5 pb-5 border'>
        <li className='border hover:cursor-pointer'><a href="#">Home</a></li>
        <li className='border hover:cursor-pointer'><a href="#">About</a></li>
      </ul>
    </>
  )
}

export default Header