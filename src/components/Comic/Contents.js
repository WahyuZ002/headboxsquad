import React from 'react'
import Comic1 from '../../assets/comics/1.png'

export default function Contents() {
    return (
        <div className="mt-20 px-12">
            <div className="flex items-center gap-6">
                <div className="w-1/4">
                    <img src={Comic1} alt="" />
                </div>
                <div className="w-3/4">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quia nobis magni perspiciatis aliquam libero fugit exercitationem tenetur tempora labore blanditiis eos magnam ut
                        nam, sit excepturi quae alias! Illo? lorem
                    </p>
                    <br />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis asperiores fugiat eligendi amet aut illo suscipit, necessitatibus voluptas doloremque molestiae, cupiditate
                        nam, sit quae est recusandae ad voluptates architecto iusto!
                    </p>
                </div>
            </div>
        </div>
    )
}
