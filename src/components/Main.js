import React from 'react'
import Hero from '../assets/images/Hero.png'

function Main() {
    return (
        <div className="px-12 md:px-60">
            <div className="text-center space-y-5 md:space-y-7">
                <h1 className="text-3xl md:text-5xl font-bold">Welcome To Headbox Squad</h1>
                <p className="md:px-36 text-gray-500 text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="bg-primary hover:bg-violet-800 transition-all duration-300 ease-in-out px-6 py-3 rounded-lg text-white font-bold shadow-xl shadow-primary/30">Mint now</button>
            </div>
            <div className="flex justify-center">
                <img src={Hero} alt="Hero_Image" className="mt-12" />
            </div>
        </div>
    )
}

export default Main
