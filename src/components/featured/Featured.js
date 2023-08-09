import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const {loading,error,data}=useFetch("/hotel/countbycity?cities=islamabad,peshawar,karachi")
  

  return (
    <div className="featured">
     {loading ?<div>
      <h1>Please Wait a moment</h1>
     </div>:<> 
     <div className="featuredItem">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Islamabad</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Peshawar</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Karachi</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div></>}
    </div>
  );
};

export default Featured;