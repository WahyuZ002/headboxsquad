import React from 'react'
import TraitsImage from '../assets/images/Traits Image.png'

function Traits() {
    return (
        <div className="px-12 md:px-36">
            <div className="px-28">
                <div className="flex items-center">
                    <img className="rounded-3xl" src={TraitsImage} alt="" />
                    <div className="ml-24">
                        <h2 className="text-4xl font-bold">Headbox Traits</h2>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <div className="h-6 w-6 rounded-full bg-dark flex items-center justify-center text-white font-bold">1</div>
                                <span className="font-semibold ml-4">Background</span>
                            </div>
                            <div className="flex items-center">
                                <div className="h-6 w-6 rounded-full bg-dark flex items-center justify-center text-white font-bold">2</div>
                                <span className="font-semibold ml-4">Hat / Accessories</span>
                            </div>
                            <div className="flex items-center">
                                <div className="h-6 w-6 rounded-full bg-dark flex items-center justify-center text-white font-bold">3</div>
                                <span className="font-semibold ml-4">Face</span>
                            </div>
                            <div className="flex items-center">
                                <div className="h-6 w-6 rounded-full bg-dark flex items-center justify-center text-white font-bold">4</div>
                                <span className="font-semibold ml-4">Box / Head</span>
                            </div>
                            <div className="flex items-center">
                                <div className="h-6 w-6 rounded-full bg-dark flex items-center justify-center text-white font-bold">5</div>
                                <span className="font-semibold ml-4">Weapon</span>
                            </div>
                            <div className="flex items-center">
                                <div className="h-6 w-6 rounded-full bg-dark flex items-center justify-center text-white font-bold">6</div>
                                <span className="font-semibold ml-4">Mouth</span>
                            </div>
                            <div className="flex items-center">
                                <div className="h-6 w-6 rounded-full bg-dark flex items-center justify-center text-white font-bold">7</div>
                                <span className="font-semibold ml-4">Skin</span>
                            </div>
                            <div className="flex items-center">
                                <div className="h-6 w-6 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">8</div>
                                <span className="font-semibold ml-4 text-gray-400">Cloth</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Traits
