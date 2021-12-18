import React from 'react'
import Images from '../assets/TeamImages'

const teams = [
    {
        name: 'Maza',
        position: 'Director',
        twitter_link: 'https://google.com',
        pfp: Images.Team1,
    },
    {
        name: 'Mikail',
        position: 'Market Analyst',
        twitter_link: 'https://google.com',
        pfp: Images.Team2,
    },
    {
        name: 'DZ',
        position: 'Writer',
        twitter_link: 'https://google.com',
        pfp: Images.Team3,
    },
    {
        name: 'Amru',
        position: 'Illustrator',
        twitter_link: 'https://google.com',
        pfp: Images.Team4,
    },
    {
        name: 'Raihan',
        position: 'Illustrator',
        twitter_link: 'https://google.com',
        pfp: Images.Team5,
    },
]

function Team() {
    return (
        <div className="px-12 md:px-20 py-2 md:py-16">
            <div className="flex gap-12">
                <div className="w-1/3">
                    <h2 className="text-4xl font-bold">Meet Headbox Team</h2>
                    <p className="mt-4">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse. Vivamus fringilla.</p>
                </div>
                <div className="w-2/3">
                    <div className="grid grid-cols-3 gap-6">
                        {teams.map((person) => (
                            <div>
                                <img className="w-full" src={person.pfp} alt="" />
                                <div className="mt-3 flex items-center justify-between">
                                    <div>
                                        <p className="font-bold">{person.name}</p>
                                        <p className="font-semibold text-primary">{person.position}</p>
                                    </div>
                                    <a href={person.twitter_link} target="_blank" rel="noreferrer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            class="bi bi-twitter fill-current hover:text-blue-700 transition-all duration-300 ease-in-out"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
