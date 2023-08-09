import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const {loading,error,data}=useFetch("/hotel")

  return (
    <div className="fp">

     {loading? 'loading..':
     
    data.slice(0,4).map((ele)=>{
      return(
        <div className="fpItem" key={ele?._id}>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
          />
        <span className="fpName">{ele?.name}</span>
        <span className="fpCity">{ele?.city}</span>
        <span className="fpPrice">Starting from {ele.cheapestPrice}</span>
        {ele?.rating && 
         ( <div className="fpRating">
         <button>{ele?.rating }</button>
          <span>Excellent</span>
        </div> )}
      </div>
          ) })
      }
    </div>
  );
};

export default FeaturedProperties;