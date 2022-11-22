import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { loadWeb3 } from '../../api';
import { CONTRACT } from '../../Utils/contract';
import Navbar from '../Navbar/Navbar';
import './myColection.css'


export default function My_Collection() {

    let [imageArray, setImageArray] = useState([]);

    let simplleArray = [];

    const collection = async () => {

        let acc = await loadWeb3()
        if (acc == "No Wallet") {
            console.log("wallet");
            toast.error("No Wallet");
            // setBtTxt("Connect Wallet")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Network");

            // setBtTxt("Wrong Network")
        } else if (acc == "Connect Wallet") {
            toast.success("Connect Wallet");

        }
        else {

            try {
                const web3 = window.web3;

                let Contract_index_0 = new web3.eth.Contract(CONTRACT[1].contractAbi, CONTRACT[1].contractAddress);
                let Contract_index_1 = new web3.eth.Contract(CONTRACT[2].contractAbi, CONTRACT[2].contractAddress);
                let Contract_index_2 = new web3.eth.Contract(CONTRACT[3].contractAbi, CONTRACT[3].contractAddress);
                let Contract_index_3 = new web3.eth.Contract(CONTRACT[4].contractAbi, CONTRACT[4].contractAddress);
                let Contract_index_4 = new web3.eth.Contract(CONTRACT[5].contractAbi, CONTRACT[5].contractAddress);




                let walletOfOwner100 = await Contract_index_0.methods.walletOfOwner(acc).call()
                let walletLength = walletOfOwner100.length
                console.log("walletOfOwner", walletLength);
                for (let i = 0; i < walletLength; i++) {
                    try {
                        let res = await axios.get(`https://usdulenft.mypinata.cloud/ipfs/QmdHtZGQU4FPBfytDAEyKYCqXHcNtzWSM6ymPuWVRnVR5Q/${walletOfOwner100[i]}.gif`)
                        let imageUrl = res.config.url;
                        console.log("check", res);
                        let token_id = walletOfOwner100[i]
                        simplleArray = [...simplleArray, { imageUrl: imageUrl, token_id: token_id }]
                        setImageArray(simplleArray);
                    } catch (e) {
                        console.log("Error while Fetching Api", e)
                    }
                }

                let walletOfOwner200 = await Contract_index_1.methods.walletOfOwner(acc).call()
                let walletLength200 = walletOfOwner200.length
                console.log("walletLength200", walletLength200);
                for (let i = 0; i < walletLength200; i++) {
                    let token_id = walletOfOwner200[i]
                    try {
                        let res = await axios.get(`https://usdulenft.mypinata.cloud/ipfs/QmdHtZGQU4FPBfytDAEyKYCqXHcNtzWSM6ymPuWVRnVR5Q/${walletOfOwner200[i]}.gif`)
                        let imageUrl = res.config.url;
                        console.log("check", res);
                        simplleArray = [...simplleArray, { imageUrl: imageUrl, token_id: token_id }]
                        setImageArray(simplleArray);
                    } catch (e) {
                        console.log("Error while Fetching Api", e)
                    }
                }


                let walletOfOwner_index_3 = await Contract_index_2.methods.walletOfOwner(acc).call()
                let walletLength3 = walletOfOwner_index_3.length
                console.log("walletLength200", walletLength200);
                for (let i = 0; i < walletLength3; i++) {
                    let token_id = walletOfOwner_index_3[i]
                    try {
                        let res = await axios.get(`https://usdulenft.mypinata.cloud/ipfs/QmdHtZGQU4FPBfytDAEyKYCqXHcNtzWSM6ymPuWVRnVR5Q/${walletOfOwner_index_3[i]}.gif`)
                        let imageUrl = res.config.url;
                        console.log("check", res);
                        simplleArray = [...simplleArray, { imageUrl: imageUrl, token_id: token_id }]
                        setImageArray(simplleArray);
                    } catch (e) {
                        console.log("Error while Fetching Api", e)
                    }
                }



                let walletOfOwner_index_4 = await Contract_index_3.methods.walletOfOwner(acc).call()
                let walletLength4 = walletOfOwner_index_4.length
                console.log("walletLength200", walletLength200);
                for (let i = 0; i < walletLength4; i++) {
                    let token_id = walletOfOwner_index_4[i]
                    try {
                        let res = await axios.get(`https://usdulenft.mypinata.cloud/ipfs/QmdHtZGQU4FPBfytDAEyKYCqXHcNtzWSM6ymPuWVRnVR5Q/${walletOfOwner_index_4[i]}.gif`)
                        let imageUrl = res.config.url;
                        console.log("check", res);
                        simplleArray = [...simplleArray, { imageUrl: imageUrl, token_id: token_id }]
                        setImageArray(simplleArray);
                    } catch (e) {
                        console.log("Error while Fetching Api", e)
                    }
                }


                let walletOfOwner_index_5 = await Contract_index_4.methods.walletOfOwner(acc).call()
                let walletLength5 = walletOfOwner_index_5.length
                console.log("walletLength5", walletLength5);
                for (let i = 0; i < walletLength5; i++) {
                    let token_id = walletOfOwner_index_5[i]
                    try {
                        let res = await axios.get(`https://usdulenft.mypinata.cloud/ipfs/QmdHtZGQU4FPBfytDAEyKYCqXHcNtzWSM6ymPuWVRnVR5Q/${walletOfOwner_index_5[i]}.gif`)
                        let imageUrl = res.config.url;
                        console.log("check", res);
                        simplleArray = [...simplleArray, { imageUrl: imageUrl, token_id: token_id }]
                        setImageArray(simplleArray);
                    } catch (e) {
                        console.log("Error while Fetching Api", e)
                    }
                }


            } catch (e) {
                console.log("Error While showing Collection", e);
            }
        }
    }


    useEffect(() => {
        collection()
    }, [])


    return (
        <div className='category-area '>

            <section class="breadcrumb-area breadcrumb-bg">
                {/* <Navbar /> */}
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-8">
                            <div class="breadcrumb-content text-center">
                                <h3 class="title">My collections</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="browse-category-area pt-5 pt-80 pb-50 h-100">
                <div class="container">
                    <div className="row">
                        {

                            imageArray.map((items, idex) => {
                                return (

                                    <div class="col-xl-4 col-md-6 col-sm-6">
                                    <div class="top-collection-item">
        
                                        <div class="collection-item-thumb">
                                            <a ><img src={items.imageUrl} alt="" width="100%" /></a>
                                        </div>
                                        <div class="collection-item-content">
                                            <h5 class="title"><a >NFT Collection</a> <span class="price">{items.token_id}</span></h5>
                                        </div>
        
                                    </div>
                                </div>

                                    



                                )
                            })
                        }
                       
                    </div>



                </div>
            </div>
            



        </div>
    )
}
