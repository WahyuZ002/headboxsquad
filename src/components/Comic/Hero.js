import React from 'react'
import HeroImage from '../../assets/comics/Hero.png'
import ComicList from '../../components/Comic/ComicList'

export default function Hero() {
    return (
        <div className="relative">
            <div className="px-8 top-10">
                <div className="min-w-full">
                    <img src={HeroImage} alt="" />
                </div>
            </div>
            <div className="absolute -bottom-16 w-full mb-20">
                <ComicList />
            </div>
        </div>
    )
}
