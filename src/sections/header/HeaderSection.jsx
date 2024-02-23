import React from 'react'
import './headerSection.css'

function HeaderSection() {
  return (
    <div className="header flex justify-center items-center  ">
      <div>
        <img className='star-wars-1 ' src='../images/spaceship.png' alt='Star Wars logo'></img>
      </div>
      <div className=' flex justify-center items-center flex-col '>
        <img className='star-wars-logo' src='../images/star-wars-logo.png' alt='Star Wars logo'></img>

        <h1 className="heading-2 text-white"> Planet Directory</h1>
      </div>
      <div className='justify-content-end items-end'>
        <img className='star-wars-3' src='../images/pngegg (7).png' alt='Star Wars logo'></img>
      </div>



    </div>
  )
}

export default HeaderSection