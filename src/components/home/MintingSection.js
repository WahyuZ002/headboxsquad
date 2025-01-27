import React, { useEffect, useState } from 'react'
import MintingImage from '../../assets/images/Minting Image.png'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from '../../redux/blockchain/blockchainActions'
import { fetchData } from '../../redux/data/dataActions'
import ThreeDotsWave from '../public/ThreeDotsWave'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const truncate = (input, len) => (input.length > len ? `${input.substring(0, len)}...` : input)

function MintingSection() {
    const dispatch = useDispatch()
    const blockchain = useSelector((state) => state.blockchain)
    const data = useSelector((state) => state.data)
    const [claimingNft, setClaimingNft] = useState(false)
    const [connectedWallet, setConnectedWallet] = useState(false)
    const [mintAmount, setMintAmount] = useState(1)

    const [canIncrementAmount, setCanIncrementAmount] = useState(true)
    const [canDecrementAmount, setCanDecrementAmount] = useState(false)

    const [CONFIG, SET_CONFIG] = useState({
        CONTRACT_ADDRESS: '',
        SCAN_LINK: '',
        MAX_SUPPLY_PER_ADDRESS: '',
        NETWORK: {
            NAME: '',
            SYMBOL: '',
            ID: 0,
        },
        NFT_NAME: '',
        SYMBOL: '',
        MAX_SUPPLY: 1,
        WEI_COST: 0,
        DISPLAY_COST: 0,
        GAS_LIMIT: 0,
        MARKETPLACE: '',
        MARKETPLACE_LINK: '',
        SHOW_BACKGROUND: false,
    })

    const claimNFTs = () => {
        if (data.paused) {
            toast.info('The Minting is Paused.')
        } else {
            if (data.currentWalletSupply + mintAmount > CONFIG.MAX_SUPPLY_PER_ADDRESS) {
                toast.warning('You have exceeded the max limit of minting.')
            } else {
                let cost = data.cost
                let gasLimit = CONFIG.GAS_LIMIT
                let totalCostWei = String(cost * mintAmount)
                let totalGasLimit = String(gasLimit * mintAmount)
                console.log('Cost: ', totalCostWei)
                console.log('Gas limit: ', totalGasLimit)
                // setFeedback(`Minting your ${CONFIG.NFT_NAME}...`)
                toast.info(`Minting your ${CONFIG.NFT_NAME}...`)
                setClaimingNft(true)
                blockchain.smartContract.methods
                    .mint(mintAmount)
                    .send({
                        gasLimit: String(totalGasLimit),
                        to: CONFIG.CONTRACT_ADDRESS,
                        from: blockchain.account,
                        value: totalCostWei,
                    })
                    .once('error', (err) => {
                        console.log(err)
                        // setFeedback('Sorry, something went wrong please try again later.')
                        toast.error('Sorry, something went wrong please try again later.')
                        setClaimingNft(false)
                    })
                    .then((receipt) => {
                        console.log(receipt)
                        // setFeedback(`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`)
                        toast.success(`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`)
                        setClaimingNft(false)
                        dispatch(fetchData(blockchain.account))
                    })
            }
        }
    }

    const decrementMintAmount = () => {
        let newMintAmount = mintAmount - 1
        if (newMintAmount === 1) {
            setCanDecrementAmount(false)
        }
        if (newMintAmount < 1) {
            newMintAmount = 1
        }
        setMintAmount(newMintAmount)
        setCanIncrementAmount(true)
    }

    const incrementMintAmount = () => {
        let newMintAmount = mintAmount + 1
        if (newMintAmount === 20) {
            setCanIncrementAmount(false)
        }
        if (newMintAmount > 20) {
            newMintAmount = 20
        }
        setMintAmount(newMintAmount)
        setCanDecrementAmount(true)
    }

    const getData = () => {
        if (blockchain.account !== '' && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account))
            setConnectedWallet(true)
        }
    }

    const getConfig = async () => {
        const configResponse = await fetch('/config/config.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        const config = await configResponse.json()
        SET_CONFIG(config)
    }

    useEffect(() => {
        getConfig()
    }, [])

    useEffect(() => {
        getData()
    }, [blockchain.account])

    return (
        <div>
            <ToastContainer />
            <div className="flex justify-center" id="minting_section">
                <div className="text-center max-w-xs md:max-w-[403px] border-[6px] border-dark pt-20 md:pt-24 pb-8 md:pb-12 px-6 md:px-12 rounded-xl relative">
                    <div className="flex justify-center">
                        <img src={MintingImage} className="w-4/12 md:w-auto rounded-full absolute -top-[3.5rem] md:-top-[4.5rem] border-[6px] border-dark" alt="MintingImage" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold">Get Your Headbox</h2>
                    {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                        <>
                            <h2>The sale has ended.</h2>
                            <p>You can still find {CONFIG.NFT_NAME} on</p>
                            <a target={'_blank'} href={CONFIG.MARKETPLACE_LINK} rel="noreferrer">
                                {CONFIG.MARKETPLACE}
                            </a>
                        </>
                    ) : (
                        <>
                            <p className="text-gray-500 mt-6">
                                1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST} {CONFIG.NETWORK.SYMBOL}.
                                <br />
                            </p>
                        </>
                    )}
                    <div className="flex flex-col items-center mt-8 md:mt-12">
                        <div className="flex items-center space-x-5">
                            <span
                                onClick={(e) => {
                                    e.preventDefault()
                                    decrementMintAmount()
                                }}
                                className="cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={
                                        'h-10 w-10 transition-all duration-300 ease-in-out cursor-pointer' +
                                        (canDecrementAmount ? 'fill-current text-primary hover:text-violet-800' : 'fill-current text-gray-300')
                                    }
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <span className="text-3xl font-bold">{mintAmount}</span>
                            <span
                                onClick={(e) => {
                                    e.preventDefault()
                                    incrementMintAmount()
                                }}
                                className="cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={
                                        'h-10 w-10 transition-all duration-300 ease-in-out cursor-pointer' +
                                        (canIncrementAmount ? 'fill-current text-primary hover:text-violet-800' : 'fill-current text-gray-300')
                                    }
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </div>
                        {blockchain.account === '' || blockchain.smartContract === null ? (
                            <button
                                className="bg-primary hover:bg-violet-800 transition-all duration-300 ease-in-out px-6 py-3 rounded-lg text-white font-bold shadow-xl shadow-primary/30 mt-8 md:mt-12"
                                onClick={(e) => {
                                    e.preventDefault()
                                    dispatch(connect())
                                    getData()
                                }}
                            >
                                Connect
                            </button>
                        ) : (
                            <>
                                {data.loading ? (
                                    <button className="bg-primary hover:bg-violet-800 transition-all duration-300 ease-in-out px-6 py-3 rounded-lg text-white font-bold shadow-xl shadow-primary/30 mt-8 md:mt-12">
                                        Loading . . .
                                    </button>
                                ) : (
                                    <button
                                        className="bg-primary hover:bg-violet-800 transition-all duration-300 ease-in-out px-6 py-3 rounded-lg text-white font-bold shadow-xl shadow-primary/30 mt-8 md:mt-12"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            claimNFTs()
                                            getData()
                                        }}
                                    >
                                        {claimingNft ? <ThreeDotsWave /> : 'BUY'}
                                    </button>
                                )}
                            </>
                        )}
                        <span className="mt-8 font-semibold text-primary text-sm md:text-base">
                            {!connectedWallet ? (
                                <span>Please Connect your wallet first</span>
                            ) : (
                                <>
                                    {data.loading ? (
                                        <span>XXX / {CONFIG.MAX_SUPPLY} items has minted.</span>
                                    ) : (
                                        <span>
                                            {data.totalSupply} / {CONFIG.MAX_SUPPLY} items has minted.
                                        </span>
                                    )}
                                </>
                            )}
                        </span>
                        <a target={'_blank'} href={CONFIG.SCAN_LINK} rel="noreferrer" className="text-xs mt-3 text-primary font-medium">
                            {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
                        </a>
                        {connectedWallet && (
                            <div className="flex justify-center mt-4">
                                <span className="bg-semi-dark px-5 py-1 rounded-full text-sm text-green-400 font-bold">
                                    <span>{data.loading ? <>X</> : <>{data.currentWalletSupply}</>}</span> / {CONFIG.MAX_SUPPLY_PER_ADDRESS} has minted
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MintingSection
