import React from 'react'

const faq = [
    {
        question: 'Lorem ipsum dolor sit amet?',
        answer: 'Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.Vivamus fringilla.',
    },
    {
        question: 'Lorem ipsum dolor sit amet?',
        answer: 'Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.Vivamus fringilla.',
    },
    {
        question: 'Lorem ipsum dolor sit amet?',
        answer: 'Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.Vivamus fringilla.',
    },
    {
        question: 'Lorem ipsum dolor sit amet?',
        answer: 'Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.Vivamus fringilla.',
    },
]

function Faq(props) {
    return (
        <div className="px-12 md:px-20" id="faq">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 max-w-[90rem] mx-auto">
                <div className="w-full md:w-1/3">
                    <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Question</h2>
                    <p className="mt-4 text-sm md:text-base">
                        Can't find the answer you're looking for? Reach out to our <span className="font-semibold text-primary">customer support</span> team.
                    </p>
                </div>
                <div className="w-full md:w-2/3 space-y-8">
                    {faq.map((item) => (
                        <div>
                            <p className="font-semibold text-sm md:text-base">{item.question}</p>
                            <p className="mt-2 text-gray-500 text-sm md:text-base">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq
