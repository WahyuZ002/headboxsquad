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
        <div className="px-12 md:px-20">
            <div className="flex gap-12">
                <div className="w-1/3">
                    <h2 className="text-4xl font-bold">Frequently Asked Question</h2>
                    <p className="mt-4">
                        Can't find the answer you're looking for? Reach out to our <span className="font-semibold text-violet">customer support</span> team.
                    </p>
                </div>
                <div className="w-2/3 space-y-8">
                    {faq.map((item) => (
                        <div>
                            <p className="font-semibold">{item.question}</p>
                            <p className="mt-2 text-gray-500">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq
