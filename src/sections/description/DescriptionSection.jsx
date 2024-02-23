import React from 'react'
import './descriptionSection.css'

function DescriptionSection() {
    return (
        <div className='descrption-section m flex justify-center items-center flex-col'>
            <div className="sec-1"> <h1 className='descrip-1 text-white'>Discover The Star Wars <br /> Universe.</h1></div>
            <div className="sec-2-main flex">
                <div className="sec-sub-3">
                    <img src="../../../images/violetplanet.png" alt="" />
                </div>
                <div className="sec-sub-1">
                    <h1 className='descrip-2 text-xl p-[5vw] mx-[1vw] lg:px-[5vw] lg:mx-[2vw] '>Welcome to our interactive planets directory! Dive into the fascinating world of Star Wars and discover
                        detailed information about each planet, including its climate, population, and terrain. Journey through the galaxy as you learn about
                        the diverse environments that shape the Star Wars universe.</h1>
                </div>
                <div className="sec-sub-2">
                    <img className=' lg:w-[100vw]' src="../../../images/sateliteship.png" alt="" />
                </div>

            </div>


        </div>
    )
}

export default DescriptionSection