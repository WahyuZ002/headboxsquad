import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Comic/NavbarShow'
import Contents from '../../components/Comic/Contents'
import ComicAPI from '../../api/services/ComicAPI'
import { useParams } from 'react-router-dom'

export default function Comic() {
    const [comic, setComic] = useState(1)

    let { episode } = useParams()

    useEffect(() => {
        ComicAPI.detail(episode).then((res) => {
            console.log(res.data.data)
        })
    }, [])

    return (
        <div className="min-h-screen bg-extra-dark text-white font-open-sans">
            <Navbar />

            <h1 className="text-center mt-20 text-4xl font-semibold">Title Goes Here</h1>

            {/* Comic Section */}
            <Contents />
        </div>
    )
}
