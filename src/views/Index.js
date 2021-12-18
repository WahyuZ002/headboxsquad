import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'

function Index(props) {
    return (
        <div className="font-open-sans text-dark">
            <Navbar />
            <div className="mt-12 md:mt-28">
                <Main />
            </div>
        </div>
    )
}

export default Index
