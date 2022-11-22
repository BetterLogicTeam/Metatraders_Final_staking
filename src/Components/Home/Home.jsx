import Button from '../Button/Button';
import './Home.css'
import { MdArrowForward, MdArrowBack } from 'react-icons/md'
import NftCard from '../NftCard/NftCard';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { FiFacebook } from 'react-icons/fi'
import { FaTelegramPlane } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { CONTRACT } from '../../Utils/contract';
import { loadWeb3 } from '../../api';
const Home = () => {
    // const [nftdata,setnftdata] = useState([
    //     {
    //         imgsrc:'',
    //         heading:'',
    //     }
    // ])

    const nextCard = () => {
        let card = document.querySelector('.cards')
        let scrollinc = 200;
        card.scrollBy(scrollinc, 0)
    }
    const prevCard = () => {
        let card = document.querySelector('.cards')
        let scrollinc = 200;
        card.scrollBy(-scrollinc, 0)
    }

    const [nftname, setnftname] = useState('META-TRADERS ARMY PRIVATE')
    const [nftname2, setnftname2] = useState('META-TRADERS ARMY SERGEANT')
    const [nftname3, setnftname3] = useState('META-TRADERS ARMY CAPTAIN')
    const [nftname4, setnftname4] = useState('META-TRADERS ARMY COLONEL')
    const [nftname5, setnftname5] = useState('META-TRADERS ARMY GENERAL')
    const [mintprice, setmintprice] = useState(0.03)
    const [mintprice2, setmintprice2] = useState(0.03)
    const [mintprice3, setmintprice3] = useState(0.03)
    const [mintprice4, setmintprice4] = useState(0.03)
    const [mintprice5, setmintprice5] = useState(0.03)







    const connectToWallet = async () => {

        // let acc = await loadWeb3()


        let contract = await new window.web3.eth.Contract(CONTRACT[0].contractAbi, CONTRACT[0].contractAddress)
        let name = await contract.methods.name().call();
        setnftname(name)
        let mintPriceWhe = await contract.methods.minting_price().call();
        let mintPrice = window.web3.utils.fromWei(mintPriceWhe)
        setmintprice((Number(mintPrice)))
        let contract2 = await new window.web3.eth.Contract(CONTRACT[1].contractAbi, CONTRACT[1].contractAddress)
        let name2 = await contract2.methods.name().call();
        setnftname2(name2)
        let mintPriceWhe2 = await contract2.methods.minting_price().call();
        let mintPrice2 = window.web3.utils.fromWei(mintPriceWhe2)
        setmintprice2((Number(mintPrice2)))
        let contract3 = await new window.web3.eth.Contract(CONTRACT[2].contractAbi, CONTRACT[2].contractAddress)
        let name3 = await contract3.methods.name().call();
        setnftname3(name3)
        let mintPriceWhe3 = await contract3.methods.minting_price().call();
        let mintPrice3 = window.web3.utils.fromWei(mintPriceWhe3)
        setmintprice3((Number(mintPrice3)))
        let contract4 = await new window.web3.eth.Contract(CONTRACT[3].contractAbi, CONTRACT[3].contractAddress)
        let name4 = await contract4.methods.name().call();
        setnftname4(name4)
        let mintPriceWhe4 = await contract4.methods.minting_price().call();
        let mintPrice4 = window.web3.utils.fromWei(mintPriceWhe4)
        setmintprice4((Number(mintPrice4)))
        let contract5 = await new window.web3.eth.Contract(CONTRACT[4].contractAbi, CONTRACT[4].contractAddress)
        let name5 = await contract5.methods.name().call();

        setnftname5(name5)
        let mintPriceWhe5 = await contract5.methods.minting_price().call();
        let mintPrice5 = window.web3.utils.fromWei(mintPriceWhe5)
        setmintprice5((Number(mintPrice5)))



    }


    useEffect(() => {
        connectToWallet()
    }, [])

    return (
        <div className="" style={{ backgroundImage: "url('/images/camo-back.jpg')", }}>

            <section className='pb-5 homehere' style={{ backgroundImage: "url('/images/banner_bg.jpg')" }} >
                <Navbar />
                <div className=''>
                    <div className=' row m-0 justify-content-end abouttext text-white ' >
                        <div className=' col-md-12 pt-5'>
                            <div className='row m-0 justify-content-start col-12'>
                                <div className=' col-md-9 col-sm-12 col-12 text-start px-5 pb-4 maindiv_p respo' >
                                    <h1 className=' col-lg-8 display-3 fw-bold'>Get access to the world’s top performing master FOREX Traders</h1>
                                    <div className='row m-0'>
                                        <h4 className=' col-md-6  Home_inner_text pb-3'>Every day there are 6.7 TRILLION dollars traded on Forex and over
                                            100 Billion dollars in Crypto. It’s time for you to make your share.</h4>
                                    </div>
                                    <Button text='Read White Paper' />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pb-5' id='About' style={{ paddingBottom: '5rem' }}>
                <div className=''>
                    <div className=' row m-0 justify-content-end abouttext text-white bg_image' >
                        <div className=' col-md-12 pt-5'>
                            <div className='row m-0 justify-content-start col-12'>
                                <div className=' col-md-9 col-sm-12 col-12 text-start px-5 pb-4 maindiv_p respo' style={{ background: '#072008', borderRadius: '15px' }}>
                                    <h3 className='my-3 about_heading'>About the Project</h3>
                                    <h3 className='fw-bold'>We pull together as one army, trade together as one army. </h3>
                                    <h3 className='my-2 fw-bold'>We move markets. We are MetaTrader Army</h3>
                                    <p>A unique opportunity to have access to, and yield rewards from the world’s top performing master FOREX Traders. When you join the Meta Traders Army (MTA) you will be able to stake your NFT (which is given to all token holders who take part in the presale) to yield rewards of 7-10% per week. These rewards are not from minting more tokens (which could devalue the project) but are derived from trading the community wallets with expert trusted master traders on the FOREX markets around the world.</p>
                                    <p className='my-2'>It’s important to understand that while the entire crypto market is valued at around 1 Trillion dollars, the financial markets trade 6 times that every day that they are open (5 days a week) and that’s 6 Trillion dollars where there are enormous gains to be made, when you have access to the right trading partners, that’s where MetaTrader Army comes in.</p>
                                    <img src='/images/Logo.png' width="20%" />

                                    <p className='my-2 fs-5 ms-1'>MetaTrader.Army</p>

                                    <p className='Home_inner_text fs-3'>////////////////////</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='nftreward text-white  ' id="Reward" style={{ background: '#072008', padding: '30px' }}>
                <div className=''>
                    <div className=' row m-0 justify-content-end' >
                        <div className=' col-md-11 container d-flex justify-content-between flex-row pt-5'>
                            <h3 className=' fw-bold Home_inner_text'>Reward NFTs</h3>
                            <div className=' d-flex flex-row '>
                                <div className='movebtn rounded-2'>
                                    <button className=' btn  text-white bg-dark btn1' onClick={() => { prevCard() }}><MdArrowBack /></button>
                                </div>
                                <div className='movebtn rounded-2 ms-2'>
                                    <button className=' btn  text-white bg-dark btn1' onClick={() => { nextCard() }}><MdArrowForward /></button>
                                </div>
                            </div>
                        </div>

                        <div className=' d-flex flex-row col-md-12 my-4 cards'>
                            <NftCard imgsrc='/images/metatrader-monkey.jpeg' heading={nftname} btntext={'Mint'} linkdata="/Mint/?nft=1" price={mintprice} />
                            <NftCard imgsrc='/images/1.jpeg' heading={nftname2} btntext={'Mint'} linkdata="/Mint/?nft=2" price={mintprice2} />
                            <NftCard imgsrc='/images/2.jpeg' heading={nftname3} btntext={'Mint'} linkdata="/Mint/?nft=3" price={mintprice3} />
                            <NftCard imgsrc='/images/3.jpeg' heading={nftname4} btntext={'Mint'} linkdata="/Mint/?nft=4" price={mintprice4} />
                            <NftCard imgsrc='/images/4.jpeg' heading={nftname5} btntext={'Mint'} linkdata="/Mint/?nft=5" price={mintprice5} />
                        </div>

                    </div>
                </div>

            </section>
            <section className=''>
                <div className=''>
                    <div className=' row m-0 justify-content-end abouttext text-white' id='Traders' style={{ backgroundImage: "url('/images/camo-back.jpg')", }}>
                        <div className=' col-md-12 pt-5'>
                            <div className='row m-0 justify-content-start col-12'>
                                <div className=' col-md-9 text-start px-5 py-4 maindiv_p respo' style={{ background: '#072008', borderRadius: '15px' }}>
                                    <h3 className='my-3 about_heading'>Working with the world’s best FOREX and Crypto Traders</h3>
                                    <p>Link up to the best metatraders in the world, you could never access the best of the best world class FOREX traders with a $100 account, these guys and girls trade in the millions per week. However if you own a footsoldier NFT and work your way up the ranks inside the MetaTrader Army you can eventually have LIVE signals from the best of the best, or of course just sit back and yield from your staked NFT.</p>
                                    <p className='my-2'>Build up your own army within the project, have greater yield, accelerate your gains by holding more AMMO and ranks.</p>
                                    <h2 className='fw-bold w-75'>We have the best FOREX and CRYPTO metatraders in the world.</h2>
                                    {/* <p>A unique opportunity to have access to, and yield rewards from the world’s top performing master FOREX Traders. When you join the Meta Traders Army (MTA) you will be able to stake your NFT (which is given to all token holders who take part in the presale) to yield rewards of 7-10% per week. These rewards are not from minting more tokens (which could devalue the project) but are derived from trading the community wallets with expert trusted master traders on the FOREX markets around the world.</p>
                                    <p className='my-2'>We have the best FOREX and CRYPTO metatraders in the world..</p> */}
                                    <p className='my-2'>Our project is a bridge between the 6 trillion dollar a day FOREX market and the world of Defi (crypto, NFTs and metaverse opportunities), gains earned by pooling your NFT and token are paid out monthly to the holders. (40% to NFT holders and 40% to Token holders, remaining profits held for accelerator gains for those staking NFT and Token together as well as partner projects)</p>
                                    <p className='my-2'>You get the inside track on the markets with our signals and data.</p>
                                    <p className='my-2'>Great signals from the best of the best world class traders, we have the SPECIAL FORCES of traders on our shoulder and managing our community assets. Don’t worry though, this doesn’t make our token or NFT a security, when pooled together we enjoy the profits in return of typically 7-10% per week, meaning one Private Foot Soldier purchased at $100 should over a year of staking yield approximately $3-4,000 dependant on the markets and the success of our traders.</p>
                                    <p className='my-2'>Remember, capital is at risk when trading on the FOREX markets, 6 Trillion dollars a day go through the global financial markets, many of our professional traders (who will manage our funds) make in excess of $100,000 a week. We are able to copy their trades and give you access at the higher tiers to trading bots and even live signals. If you’re not a trader yourself then you’re able to sit back and relax, watching your staked NFT’s in the hands of these traders give returns that you just cannot receive from the traditional banks.</p>
                                    <p className='my-2'>OUR TRADERS remain anonymous, they will not reveal their identities. There is a simple reason for this, we pay them commissions, they are able to work with bigger budgets than they might do otherwise, but they do not want to come under the magnifying glass of any SEC or regulatory bodies around the world.</p>
                                    <p className='my-2'>Buy and Stake NFTs to earn monthly rewards, or stake your Private Foot Soldiers to earn higher ranks and therefore accelerated reward percentages from the community profit pools and farms.</p>
                                    <p className='Home_inner_text fs-3'>////////////////////</p>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="row">
                                                <div className="col-lg-6 mt-2">
                                                    <img src="/images/metatrader-monkey.jpeg" alt="" width="100%" className='rounded-4' />
                                                </div>
                                                <div className="col-lg-6 mt-2">
                                                    <img src="/images/1.jpeg" alt="" width="100%" className='rounded-4' />
                                                </div>
                                            </div>
                                            <div className="row mt-4">
                                                <div className="col-lg-6 mt-2">
                                                    <img src="/images/2.jpeg" alt="" width="100%" className='rounded-4' />
                                                </div>
                                                <div className="col-lg-6 mt-2">
                                                    <img src="/images/3.jpeg" alt="" width="100%" className='rounded-4' />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-lg-6 mt-2">
                                            <img src="/images/4.jpeg" alt="" width="100%" className='rounded-4' />

                                        </div>
                                    </div>

                                    {/* <h4 className='my-3'>Rewards / Tokenomics</h4> */}
                                    <h3 className='my-3 about_heading'>Rewards / Tokenomics</h3>
                                    <h3 className='fw-bold w-75'>ACCESS and INFORMATION</h3>
                                    <p className='my-2'>The more AMMO you hold, the greater your rank the more protection you have. The AMMO Token is the foundation of the MetaTraderArmy, we will have a small tax on all buy and sell transactions of 2%, this funds the community wallet as well as marketing the project. Anyone holding AMMO in their wallets will be able to stake this plus their NFT to earn an accelerated reward, the higher your rank and the greater the amount of token you hold the greater the acceleration bonus on your staking in the NFT community farms.</p>
                                    <p>Upgrade your status to status from Private to Sergeant to Captain to Colonel to General The higher your rank the more signals and access you receive.</p>
                                    <p className='my-2'>We can continually mint at the floor price (Privates)</p>
                                    <p className='my-2'>Access to the world's best traders by pooling and earning together.</p>
                                    <p className='' style={{ color: "rgba(85,166,29)", fontSize: '17px' }}><strong>Take 5 Privates / Foot Soldiers and burn them to earn one Sergeant</strong>   </p>
                                    <p style={{ color: "rgba(183,216,46)", fontSize: '17px' }} ><strong>Take 4 Sergeants to stake to earn Captain Rank</strong></p>
                                    <p style={{ color: "rgba(240,159,5)", fontSize: '17px' }}><strong>Take 5 Privates / Foot Soldiers and burn them to earn one Sergeant</strong></p>
                                    <p style={{ color: "rgba(252,226,5)", fontSize: '17px' }} className=""> <strong>Make it to General with 2 Colonels</strong></p>
                                    <p className='my-2'><b>REWARDS increase the higher the RANK you have</b></p>
                                    <p className='my-2'>AMMO is the token (this will accelerate rewards as well as ranks)</p>
                                    <p>Development of a P2E Game for battling arm</p>
                                    <p className='Home_inner_text fs-3'>////////////////////</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pb' style={{ paddingBottom: 'rem' }} id="Roadmap">
                <div className=''>
                    <div className=' row m-0 justify-content-end abouttext text-white bg_image' >
                        <div className=' col-md-12 pt-5'>
                            <div className='row m-0 justify-content-start col-12'>
                                <div className=' col-md-9 text-start px-5 pb-4 maindiv_p respo ' style={{ background: '#072008', borderRadius: '15px' }}>
                                    <h3 className='my-3 about_heading'>Roadmap</h3>
                                    <p>Launch on Token (AMM) on Pinksale (Token based on BSC)</p>
                                    <p>Token holders who join the presale receive one NFT each (Private - foot soldier) On Polygon (or ETH)</p>
                                    <p>Initial raise traded within 1 week, community made aware of raise and rewards per NFT</p>
                                    <p>Initial pool created for 1st rewards - staking period 30 days </p>
                                    <p>Rewards distributed within 24 hours of the pool closing to holders</p>
                                    <p>Launch of Game P2E for battling armies and AMMO</p>



                                    <p className='Home_inner_text fs-3'>////////////////////</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='pb' style={{ paddingBottom: 'rem' }}>
                <div className=''>
                    <div className=' row m-0 justify-content-end abouttext text-white bg_image' >
                        <div className=' col-md-12 pt-5'>
                            <div className='row m-0 justify-content-start col-12'>
                                <div className=' col-md-9 text-start px-5 pb-4 maindiv_p ' >
                                    <div className="row">

                                        <div className="col-lg-6">
                                            <img src='/images/Logo.png' width="30%" />

                                        </div>
                                        <div className="col-lg-6">
                                            <div class="footer_social">
                                                <a class="btn_social" href="#" target="_blank"><FiFacebook /></a>
                                                <a class="btn_social" href="#" target="_blank"><FaTelegramPlane /></a>

                                                <a class="btn_social" href="#" target="_blank"><AiOutlineTwitter /></a>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="footer" style={{ background: '#072008', marginLeft: '-1rem' }} >
                <div className=' row m-0 justify-content-end abouttext text-white '  >
                    <div className=' col-md-12 '>
                        <div className='row m-0 justify-content-start col-12'>
                            <div className=' col-md-9 text-start px-5 maindiv_p ' >
                                <div className="innerdiv ">
                                    <div className="footer_here maindiv_p">
                                        <p className=''>All rights reserved © 2022</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Home;