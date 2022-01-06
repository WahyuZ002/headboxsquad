import React from 'react'
import NavbarIndex from '../../components/Comic/NavbarIndex'
import Hero from '../../components/Comic/Hero'

export default function Index() {
    return (
        <div className="min-h-screen bg-extra-dark text-white font-open-sans">
            <NavbarIndex />
            <Hero />
        </div>
    )
}
