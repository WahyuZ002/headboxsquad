import React, { useEffect, useState } from 'react'
import ComicAPI from '../../api/services/ComicAPI'

export default function ComicList() {
    const [comics, setComics] = useState([])

    useEffect(() => {
        ComicAPI.find().then(({ data }) => {
            setComics(data.data)
        })
    }, [])

    return (
        <div className="mx-40 p-3 bg-off-extra-dark rounded-xl">
            <div className="grid grid-cols-5 divide-x-2 divide-extra-dark">
                <div className="space-y-2 col-span-3  max-h-52 overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                    {comics.map((comic) => {
                        return (
                            <a
                                href={`comics/${comic.attributes.episode}`}
                                className="flex justify-between hover:bg-gray-800 duration-300 ease-in-out transition-all p-5 rounded-xl cursor-pointer"
                                key={comic.id}
                            >
                                <p className="font-medium">
                                    #{comic.attributes.episode} - {comic.attributes.title}
                                </p>
                                <p className="text-sm text-gray-400">{comic.attributes.createdAt}</p>
                            </a>
                        )
                    })}
                </div>
                <div className="col-span-2 p-5">
                    <div className="flex items-center">
                        <div className="h-4 w-4 bg-primary rounded-full mr-2"></div>
                        <h4 className="uppercase font-medium">Headboxsquad Comic</h4>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatem, recusandae saepe commodi itaque, consectetur repellat illum vero cupiditate ullam sint. Quae a ut
                        consectetur, quisquam modi in hic reiciendis!
                    </p>
                </div>
            </div>
        </div>
    )
}
