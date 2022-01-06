import React from 'react'
import Main from '../components/Home/Main'
import Navbar from '../components/Home/Navbar'
import MintingSection from '../components/Home/MintingSection'
import Roadmap from '../components/Home/Roadmap'
import Footer from '../components/Home/Footer'
import Traits from '../components/Home/Traits'
import Team from '../components/Home/Team'
import Faq from '../components/Home/Faq'

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
