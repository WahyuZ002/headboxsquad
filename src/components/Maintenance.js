import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/maintenance'

export default function Maintenance() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }
    return (
        <div>
            <div className="flex h-screen bg-off-white">
                <div className="m-auto px-8 md:px-0">
                    <div className="flex justify-center">
                        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                            <Lottie options={defaultOptions} />
                        </div>
                    </div>
                    <div className="text-center font-open-sans">
                        <h1 className="font-bold text-xl text-gray-800">Hang on! We are under maintenance 📦</h1>
                        <p className="text-sm text-gray-500 mt-3 font-medium">It will not take a long time till we get to make website 10x better than before. We will live again in.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
