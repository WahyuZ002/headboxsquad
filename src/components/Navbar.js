import React from 'react'
import logo from '../logo.svg'
import HamburgerMenu from './HamburgerMenu'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="px-8 md:px-20">
            <nav className="hidden md:flex items-center justify-between">
                <img src={logo} alt="Headbox Logo" />
                <ul className="flex items-center space-x-10 font-semibold">
                    <li>
                        <a href="#home" className="text-dark hover:text-primary transition-all duration-300 ease-in-out">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#roadmap" className="text-dark hover:text-primary transition-all duration-300 ease-in-out">
                            Roadmap
                        </a>
                    </li>
                    <li>
                        <a href="#team" className="text-dark hover:text-primary transition-all duration-300 ease-in-out">
                            Team
                        </a>
                    </li>
                    <li>
                        <a href="#faq" className="text-dark hover:text-primary transition-all duration-300 ease-in-out">
                            FAQ
                        </a>
                    </li>
                    <li>
                        <Link to="/comic" className="text-dark hover:text-primary transition-all duration-300 ease-in-out">
                            Comic
                        </Link>
                    </li>
                </ul>
                <button className="bg-primary hover:bg-violet-800 transition-all duration-300 ease-in-out px-6 py-3 rounded-lg text-white font-bold shadow-xl shadow-primary/30">
                    Connect to your wallet
                </button>
            </nav>
            <div className="flex md:hidden justify-between items-center w-full p-4">
                <p className="text-sm font-bold uppercase">HeadboxSquad</p>
                <HamburgerMenu />
            </div>
        </div>
    )
}

export default Navbar
