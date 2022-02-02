import { useEffect, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { connect } from '../../redux/blockchain/blockchainActions'
import { fetchData } from '../../redux/data/dataActions'

export default function HamburgerMenu() {
    const dispatch = useDispatch()
    const blockchain = useSelector((state) => state.blockchain)

    const getData = () => {
        if (blockchain.account !== '' && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account))
        }
    }

    useEffect(() => {
        getData()
    }, [blockchain.account])

    return (
        <div className="block md:hidden text-right z-10">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary rounded-md opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 shadow-xl shadow-primary/30">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" />
                        </svg>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-60 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                <a href="#home" className="font-medium text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                                    Home
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="#roadmap" className="font-medium text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                                    Roadmap
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="#team" className="font-medium text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                                    Team
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="#faq" className="font-medium text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                                    FAQ
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/comics" className="font-medium text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                                    Comic
                                </Link>
                            </Menu.Item>
                        </div>
                        <div className="p-3">
                            <Menu.Item>
                                <button
                                    className="bg-primary hover:bg-violet-800 transition-all duration-300 ease-in-out px-2 py-3 rounded-lg text-white font-bold shadow-xl shadow-primary/30 text-sm block text-center"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(connect())
                                        getData()
                                    }}
                                >
                                    Connect to your wallet
                                </button>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
