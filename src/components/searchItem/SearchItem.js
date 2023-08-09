import { useState } from "react";
import { Link } from "react-router-dom";
import Hotel from "../../pages/hotel/Hotel";
import Modal from "../Modal/Modal";
import "./searchItem.css";

const SearchItem = ({ele}) => {
  const [open,setOpen]=useState(false)
  const description=ele?.desc?.slice(0, 50);


  const handleCopyUrl = async (url) => {
    try {

      await navigator.clipboard.writeText(url);
      setOpen(true)
      console.log("URL copied successfully!");
    } catch (error) {
      console.error("Failed to copy URL:", error);
    }
  };
  return (
    <div className="searchItem">
      <img
        src={ele?.photo[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc"  
        onClick={()=>handleCopyUrl(ele?.title)}
      >
        <h1 className="siTitle">{ele?.title}</h1>
        <span className="siDistance">{ele?.distance}</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
     {description+'...' }
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {ele.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{ele.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${ele.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${ele._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
      <Modal   
  setShow={setOpen} show={open} >
    <Hotel isModal={true}/>
        </Modal>
    </div>
  );
};

export default SearchItem;