import React from 'react'
import Navbar from '../../components/comic/Navbar'
import Contents from '../../components/comic/Contents'

export default function Index() {
    return (
        <div className="min-h-screen bg-extra-dark text-white font-open-sans selection:bg-primary selection:text-extra-dark">
            <Navbar />
            <Contents />
        </div>
    )
}
