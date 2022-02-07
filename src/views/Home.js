import React from 'react'
import Main from '../components/home/Main'
import Navbar from '../components/home/Navbar'
import MintingSection from '../components/home/MintingSection'
import Roadmap from '../components/home/Roadmap'
import Footer from '../components/home/Footer'
import Traits from '../components/home/Traits'
import Team from '../components/home/Team'
import Faq from '../components/home/Faq'

function Home() {
    return (
        <div className="font-open-sans text-dark">
            <div className="bg-off-white pt-2 md:pt-16">
                <Navbar />
                <div className="mt-12 md:mt-28 overflow-x-hidden">
                    <Main />
                </div>
            </div>
            <div className="bg-white mt-28">
                <MintingSection />
            </div>
            <div className="bg-off-white mt-12 md:mt-28">
                <Roadmap />
            </div>
            <div className="bg-white mt-12 md:mt-28">
                <Traits />
            </div>
            <div className="bg-off-white mt-12 md:mt-28">
                <Team />
            </div>
            <div className="bg-white mt-12 md:mt-28">
                <Faq />
            </div>
            <div className="bg-white mt-12 md:mt-28 pb-8 md:pb-16">
                <Footer />
            </div>
        </div>
    )
}

export default Home
