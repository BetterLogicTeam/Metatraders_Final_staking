import  Button  from '../Button/Button';
import './mint_ref.css'
import { loadWeb3 } from '../../api';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
import { useState,useEffect} from 'react';
import { CONTRACT } from '../../Utils/contract';
import { toast } from 'react-toastify';
import {SyncLoader} from 'react-spinners'
const Mint_Ref = () => {
        let  nft = Number((window.location.href).charAt(window.location.href.length-1)) - 1
        console.log("NFT",nft);
        const nftinfo =[
           
            {
                imgSrc:'/images/metatrader-monkey.jpeg',id:"1"
            },
             {
                imgSrc:'/images/1.jpeg',id:"2"
            },
            {
                imgSrc:'/images/2.jpeg',id:"3"
            },
            {
                imgSrc:'/images/3.jpeg',id:"4"
            },
            {
                imgSrc:'/images/4.jpeg',id:"5"
            }
        ]
        const [loadpage,setloadpage] = useState(false)
        const [nftname,setnftname] = useState('META TRADER NFT')
        const [max,setmax] = useState(1);
        const [price,setprice] = useState(1) 
        const [mintprice,setmintprice] = useState(0.03)
        const [totalprice,settotalprice] = useState(1)
        const [whitelist,setwhitelist] = useState(false)
        const [ChargeFee,setChargeFee] = useState(true)
        const [connected,setConnected] = useState(false)
        const [loader,setloader] = useState(false)
        const [balance,setbalance] = useState(0)
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
        setloader(true)
        let acc = await loadWeb3()
        if (acc == 'No Wallet') {
            toast.error('No Wallet')
          }
          else if (acc == 'Wrong Network') {
            toast.warning('Wrong Network')
          }
          else {
            let balanceWei = await window.web3.eth.getBalance(acc);
            let balanceC = await window.web3.utils.fromWei(balanceWei)
            setbalance(Number(balanceC).toFixed(3))
            let contract  = await new window.web3.eth.Contract(CONTRACT[nft].contractAbi,CONTRACT[nft].contractAddress)
            let name = await contract.methods.name().call();
            setnftname(name)
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
            setConnected(true)
            toast.success('Connected')
          }
          setloader(false)
    }
    const callMint = async ()=>{
        setloader(true)

        try{
            let acc = await loadWeb3()
        if (acc == 'No Wallet') {
            toast.error('No Wallet')
            setConnected(false)
          }
          else if (acc == 'Wrong Network') {
            toast.warning('Wrong Network')
            setConnected(false)
          }
          else {
            let contract  = await new window.web3.eth.Contract(CONTRACT[nft].contractAbi,CONTRACT[nft].contractAddress)
            if(whitelist == false)
            {
                if(ChargeFee == true)
                {
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
        catch{
            toast.error('Mint Failed')
        }
        setloader(false)

    }
    useEffect(()=>{
        settotalprice(mintprice*price)
    },[price])
    useEffect(()=>{
        if((window.location.href.substring(window.location.href.length-6)).substring(0,(window.location.href.substring(window.location.href.length-6).length- 1)) == '?nft=')
        {
            try{
                nft = Number((window.location.href).charAt(window.location.href.length-1))-1
                console.log("NFTdata",nft);
                if(nft <= 4 && nft >= 0)
                {
                    setloadpage(true)
                }
            }
            catch{
                setloadpage(false)
            }
        }
    },[])
    return ( 
        <>
        
        { loadpage ? 
            <div className=""  style={{background:'#072008'}}>
            <section className="container-fluid Home text-white" style={{backgroundImage: "url('/images/banner_bg.jpg')"}}>
            <div className='h-100 row m-0 align-items-center justify-content-center'>
                <div className=' col-md-10 row m-0 align-items-center justify-content-center'>
                    {
                        connected == false ? 
                        <>
                        <div className=' position-relative bShadow col-md-5 p-3 bgColor d-flex flex-column align-items-center justify-content-center rounded-4 connectWallet topBox'>
                            <h4 className=' h5 px-3 fw-bold w-100'>MINT ({nftname})</h4>
                            <div className=' w-100 ' style={{height:'2px',background:'rgba(255, 255, 255, 0.3)'}}></div>
                            <h5 className=' fw-bold pt-5 my-5 px-2 text-center'>BEFORE MINTING YOU NEED TO FIRST <br /> CONNECT YOUR WALLET</h5>
                            <div className=' mb-5' onClick={()=>{
                                connectToWallet();
                            }}><Button text={'Connet Wallet'} /></div>
                            {loader == true ? 
                            <div className='loader rounded-4 d-flex justify-content-center align-items-center w-100 h-100'> 
                            <SyncLoader color='#fff' />
                            </div> : <></> }
                        </div>
                        </> :
                        <>
                        <div className=' position-relative bShadow col-md-5 px-3 py-4 bgColor d-flex flex-column align-items-center justify-content-center rounded-4 connectWallet topBox'>
                            <h4 className=' fs-6 px-3 mt-3 fw-bold w-100 d-flex flex-row flex-wrap justify-content-between'>MINT ({nftname}) <span>Your Balance : {balance} ETH</span></h4>
                            <div className=' w-100 mt-1 mb-4' style={{height:'2px',background:'rgba(255, 255, 255, 0.3)'}}></div>
                            <div className=' w-75 d-flex flex-row justify-content-between align-items-center'>
                                <h4 className='m-0 h6 '>Balance</h4>
                                <p className='m-0'>{mintprice}ETH</p>
                            </div>
                            <div className=' w-75 my-2' style={{height:'1px',background:'rgba(255, 255, 255, 0.3)'}}></div>
                            <div className=' w-75 d-flex flex-row justify-content-between align-items-center'>
                                <h4 className='m-0  h6'>Amount</h4>
                                <div className='d-flex flex-row align-items-center'>
                                <button onClick={()=>{onDec()}}><AiOutlineMinus /></button>
                                <p className=' my-0 mx-2 mintprice px-3 py-1 rounded-1'>{price}</p>
                                <button onClick={()=>{onInc()}}><AiOutlinePlus /></button>
                                <button className=' ms-2 px-2 WShadow' onClick={()=>{
                                    setprice(max)
                                }}>Max</button>
                                </div>
                            </div>
                            <div className=' w-75 my-2' style={{height:'1px',background:'rgba(255, 255, 255, 0.3)'}}></div>
                            <div className=' w-75 d-flex flex-row justify-content-between align-items-center'>
                                <h4 className='m-0  h6'>Total</h4>
                                <p className='m-0'>{totalprice}ETH</p>
                            </div>
                            <div className=' w-75 my-2' style={{height:'1px',background:'rgba(255, 255, 255, 0.3)'}}></div>
                            <div className=' ms-auto me-5 my-4 py-2 mintbtnb' onClick={()=>{callMint()}}>
                                <Button text='MINT NOW' />
                            </div> 
                            {loader == true ? 
                            <div className='loader rounded-4 d-flex justify-content-center align-items-center w-100 h-100'> 
                            <SyncLoader color='#fff' />
                            </div> : <></> }                       
                        </div>
                        </>
                    }
                    <div className='bShadow mt-4 mt-md-0 col-md-3 p-3 bgColor d-flex flex-column align-items-center rounded-4 connectWallet position-relative'>
                        <h5 className=' px-3 fw-bold'>{nftname}</h5>
                        {
                            console.log("NFTThhh",nftinfo[0])
                        }
                        <img src={nftinfo[nft].imgSrc} className=' col-10 my-2 rounded-3' />
                        <h6 className=' bgColor priceNFT px-3 py-1 rounded-1 shadow fw-bold' > {mintprice} ETH</h6>
                    </div>
                </div>
            </div>
            </section>
        </div>
        : <></>
        }</>
     );
}
 
export default Mint_Ref;