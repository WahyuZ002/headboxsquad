import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import MintingSection from '../components/MintingSection'
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
            <div className="bg-white">
                <div className="mt-12 md:mt-28">
                    <MintingSection />
                </div>
            </div>
            <div className="bg-white pb-2 md:pb-16">
                <div className="mt-12 md:mt-28">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Index
