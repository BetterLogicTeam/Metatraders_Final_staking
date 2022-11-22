import './Mint.css'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
import { useEffect, useState } from 'react';
import { loadWeb3 } from '../../api';
import { contractAbi, contractAddress } from '../../Utils/contract';
import { toast } from 'react-toastify';
const Mint = () => {

    const [days,setDays_here] = useState()
    const [mins,setMunits_here] = useState()
    const [seconds,setSeconds] = useState()
    const [hours,setHours_here] = useState()


    const [price,setprice] = useState(1) 
    const [mintprice,setmintprice] = useState(1)
    const [totalprice,settotalprice] = useState(1)
    const [whitelist,setwhitelist] = useState(false)
    const [ChargeFee,setChargeFee] = useState(true)
    let [max,setmax] = useState(1);

    const timer = ()=>{
        var currentDateTime = new Date();
        let resultInSeconds = currentDateTime.getTime() / 1000;
        let Time_here = 1663187892 - resultInSeconds
        let TimeFinal = parseInt(Time_here)





        if (TimeFinal <= 0) {

        } else {
        let days = parseInt(TimeFinal / 86400)

        setDays_here(days)
        TimeFinal = TimeFinal % (86400)
        let hours = parseInt(TimeFinal / 3600)
        setHours_here(hours)
        TimeFinal %= 3600
        let munites = parseInt(TimeFinal / 60)
        setMunits_here(munites)
        TimeFinal %= 60
        let second_here = parseInt(TimeFinal)
        setSeconds(second_here)

        }
    }

    const onInc = ()=>{
        if(price < max)
        {
            setprice(price+1)
        }
    }
    const onDec = ()=>{
        if(price > 1)
        {
            setprice(price-1)

        }
    }
    const connectToWallet = async ()=>{
        let acc = await loadWeb3()
        if (acc == 'No Wallet') {
            toast.error('No Wallet')
          }
          else if (acc == 'Wrong Network') {
            toast.warning('Wrong Network')
          }
          else {
            toast.success('Connected')
            let contract  = await new window.web3.eth.Contract(contractAbi,contractAddress)
            let mintPriceWhe = await contract.methods.minting_price().call();
            let mintPrice = window.web3.utils.fromWei(mintPriceWhe)
            setmintprice((Number(mintPrice)))
            let maxMint = await contract.methods.maximumMintPerTrans().call();
            setmax(Number(maxMint))
            settotalprice(mintPrice)
            let wList = await contract.methods.whitelistedaddress(acc).call();
            setwhitelist(wList)
            if(wList == 'false')
            {
                let feeC = await contract.mthods.fee().call();
                setChargeFee(feeC)
            }
            
          }

    }
    const callMint = async ()=>{
        let acc = await loadWeb3()
        if (acc == 'No Wallet') {
            toast.error('No Wallet')
          }
          else if (acc == 'Wrong Network') {
            toast.warning('Wrong Network')
          }
          else {
            let contract  = await new window.web3.eth.Contract(contractAbi,contractAddress)
            if(whitelist == false)
            {
                if(ChargeFee == true)
                {
                    let balanceWei = await window.web3.eth.getBalance(acc);
                    let balance = await window.web3.utils.fromWei(balanceWei)
                    if(balance > totalprice)
                    {
                        let totalWei = await window.web3.utils.toWei(totalprice+'')
                        let status = await contract.methods.mint(price).send({
                            value:totalWei,
                            from:acc
                        })
                        toast.success('Minted')
                    }
                    else
                    {
                        toast.error(('No enough Balance'))
                    }
                }
                
            }
            else{
                let status = await contract.methods.mint(price).send({
                    value:0,
                    from:acc
                })
                toast.success('Minted')
            }
          }
    }
    useEffect(()=>{
        setprice(1)
        connectToWallet();
        setInterval(()=>{
            timer()
        },1000)
    },[])
    useEffect(()=>{
        settotalprice(mintprice*price)
    },[price])
    return ( 
        <div className="Mint text-white pt-5 " style={{background:'#072008'}}>
            <h1 className=" text-center fw-bold py-3">EVOLUTION APES PRESALE!</h1>
            <p className="text-center mx-2 my-0">Cong ratulation You are the one of luckey few ones who made it to oue WhiteList</p>
            <p className="text-center mx-2 my-0">you are able to mint upto 3 Nfts at the rate of (TBA) ETH</p>
            
            
            <div className='row justify-content-center'>
                <div className=' col-md-6 col-lg-4 my-4 col-10'>
                        <div className=' d-flex flex-row justify-content-between'>
                        <div className=' d-flex flex-column justify-content-center'>
                            <h3 className='text-center'>{days}</h3>
                            <h3>Days</h3>
                        </div>
                        <div className=' d-flex flex-column justify-content-center'>
                            <h3 className='text-center'>{hours}</h3>
                            <h3>Hours</h3>
                        </div>
                        <div className=' d-flex flex-column justify-content-center'>
                            <h3 className='text-center'>{mins}</h3>
                            <h3>Mins</h3>
                        </div>
                        <div className=' d-flex flex-column justify-content-center'>
                            <h3 className='text-center'>{seconds}</h3>
                            <h3>Sec</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-0 justify-content-center">
                <div className="col-md-5">
                    <div className="p-md-3 p-1">
                        <div className=" borderR d-flex justify-content-center flex-column align-items-center">
                            <h4 className='text-center py-2' style={{color:'#48ccc1'}}>PRE-SALE MINT</h4>
                            <div className=' w-75 d-flex flex-row justify-content-between align-items-center'>
                                <h4 className='m-0 h6 '>Balance</h4>
                                <p className='m-0'>{mintprice}ETH</p>
                            </div>
                            <div className=' my-3 w-75 d-flex flex-row justify-content-between align-items-center'>
                                <h4 className='m-0  h6'>Amount</h4>
                                <div className='d-flex flex-row'>
                                <button onClick={()=>{onDec()}}><AiOutlineMinus /></button>
                                <p className=' my-0 mx-2 mintprice px-3 py-1'>{price}</p>
                                <button onClick={()=>{onInc()}}><AiOutlinePlus /></button>
                                <button className=' ms-2' onClick={()=>{
                                    setprice(max)
                                }}>Max</button>
                                </div>
                            </div>
                            <div className=' w-75 d-flex flex-row justify-content-between align-items-center'>
                                <h4 className='m-0  h6'>Total</h4>
                                <p className='m-0'>{totalprice}ETH</p>
                            </div>
                            <div className=' w-75 my-2' style={{height:'1px',background:'white'}}></div>
                            <button className='w-75 my-4 py-2 mintbtnb' onClick={()=>{callMint()}}>MINT</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                <div class="three-d-container">
                        <input type="radio" class="three-d-bullet a" name="three-d" />
                        <input type="radio" class="three-d-bullet b" name="three-d" />
                        <input type="radio" class="three-d-bullet c" name="three-d" />
                        <input type="radio" class="three-d-bullet d" name="three-d" />
                        <input type="radio" class="three-d-bullet e" name="three-d" />
                        <input type="radio" class="three-d-bullet f" name="three-d" />
                        <div class="three-d-cube">
                            <figure class="three-d-item">
                                <img src="/images/1.webp" alt="" />
                            </figure>
                            <figure class="three-d-item">
                                <img src="/images/2.jpg" alt="" />
                            </figure>
                            <figure class="three-d-item">
                                <img src="/images/3.jpg" alt="" />
                            </figure>
                            <figure class="three-d-item">
                                <img src="/images/4.webp" alt="" />
                            </figure>
                            <figure class="three-d-item">
                                <img src="/images/5.jfif" alt="" />
                            </figure>
                            <figure class="three-d-item">
                                <img src="/images/6.jpg" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Mint;