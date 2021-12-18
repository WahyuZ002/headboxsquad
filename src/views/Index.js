import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'

function Index() {
    return (
        <div className="font-open-sans text-dark">
            <div className="bg-off-white pt-2 md:pt-16">
                <Navbar />
                <div className="mt-12 md:mt-28">
                    <Main />
                </div>
            </div>
        </div>
    )
}

export default Index
