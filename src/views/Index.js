import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import MintingSection from '../components/MintingSection'
import Roadmap from '../components/Roadmap'
import Footer from '../components/Footer'

function Index() {
    return (
        <div className="font-open-sans text-dark">
            <div className="bg-off-white pt-2 md:pt-16">
                <Navbar />
                <div className="mt-12 md:mt-28">
                    <Main />
                </div>
            </div>
            <div className="bg-white mt-12 md:mt-28">
                <MintingSection />
            </div>
            <div className="bg-off-white mt-12 md:mt-28">
                <Roadmap />
            </div>
            <div className="bg-white mt-12 md:mt-28 pb-2 md:pb-16">
                <Footer />
            </div>
        </div>
    )
}

export default Index
