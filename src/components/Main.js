import React from 'react'
import Hero from '../assets/images/Hero.png'

function Main(props) {
    return (
        <div className="px-12 md:px-60">
            <div className="text-center space-y-7">
                <h1 className="text-5xl font-bold">Welcome To Headbox Squad</h1>
                <p className="px-36 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="bg-primary hover:bg-violet-800 transition-all duration-300 ease-in-out px-6 py-3 rounded-lg text-white font-bold shadow-xl shadow-primary/30">Mint now</button>
            </div>
            <img src={Hero} alt="Hero_Image" className="mt-12" />
        </div>
    )
}

export default Main
