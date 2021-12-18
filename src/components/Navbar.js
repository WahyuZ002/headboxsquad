import React from 'react'
import logo from '../logo.svg'

function Navbar(props) {
    return (
        <div className="px-12 md:px-20">
            <nav className="flex items-center justify-between">
                <img src={logo} alt="Headbox Logo" />
                <ul className="flex items-center space-x-10 font-semibold">
                    <li>
                        <a href="#/">Home</a>
                    </li>
                    <li>
                        <a href="#/">Roadmap</a>
                    </li>
                    <li>
                        <a href="#/">Team</a>
                    </li>
                    <li>
                        <a href="#/">FAQ</a>
                    </li>
                    <li>
                        <a href="#/">Comic</a>
                        <span className="ml-3 text-sm rounded-md bg-magenta px-4 py-[2px] text-white">Soon</span>
                    </li>
                </ul>
                <button className="bg-violet px-6 py-3 rounded-lg text-white font-bold shadow-xl shadow-violet/30">Connect to your wallet</button>
            </nav>
        </div>
    )
}

export default Navbar
