import { useState } from "react";
import { Link } from "react-router-dom";
import { loadWeb3 } from "../../api";
import { CONTRACT } from "../../Utils/contract";
import Button from "../Button/Button";
import './NftCard.css'
const NftCard = ({imgsrc,heading,btntext,btnlink,linkdata,price}) => {
    
    return ( 
        <div className="nftcard rounded-3 p-3 mx-2">
            <img src={imgsrc} />
            <h5 className=" fs-6 py-2">{heading}</h5>
            <div className=" w-100 my-3" style={{height:'1px',background:'white'}}></div>
           <div className="btn_and_price">
           <Link to={linkdata} ><Button text={btntext}  /></Link> 
           <h5 className="mt-2">{price} ETH</h5>



           </div>
        </div>
     );
}
 
export default NftCard;