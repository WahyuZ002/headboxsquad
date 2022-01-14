import React from 'react'
import Navbar from '../../components/Comic/Navbar'
import Contents from '../../components/Comic/Contents'

export default function Index() {
    return (
        <div className="min-h-screen bg-extra-dark text-white font-open-sans selection:bg-primary selection:text-extra-dark">
            <Navbar />
            <Contents />
        </div>
    )
}
