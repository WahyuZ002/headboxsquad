import React from 'react'
import Hero from '../../assets/images/Hero.png'

function Main() {
    return (
        <div id="home">
            <div className="px-12">
                <div className="text-center space-y-5 md:space-y-7">
                    <h1 className="text-3xl md:text-5xl font-bold">Discover Every Box</h1>
                    <p className="md:px-36 text-gray-500 text-sm md:text-base">
                        Headbox Squad is a social-life-based NFT collection packed with a boxed perspective. By randomly generated on the Ethereum blockchain, the Headbox Squad launched the first-gen
                        consisting of 8.888 units and land for each owner.
                    </p>
                    <a
                        href="#minting_section"
                        className="bg-primary hover:bg-violet-800 transition-all duration-300 ease-in-out px-6 py-3 rounded-lg text-white font-bold shadow-xl shadow-primary/30 inline-block"
                    >
                        Mint now
                    </a>
                </div>
            </div>
            <div className="flex justify-center px-12 md:px-60">
                <img src={Hero} alt="Hero_Image" className="mt-12 max-w-xl md:max-w-max" />
            </div>
        </div>
    )
}

export default Main
