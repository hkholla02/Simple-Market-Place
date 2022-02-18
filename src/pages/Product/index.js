import "./style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import Rating from 'react-rating';
const Product = () => {
  let { id } = useParams();
  const [infos, setInfos] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) =>(response.json()))
      .then((data) => setInfos(data));
  },[]);
  console.log(infos);
  return (
    
    <div>
        <h6>Category{'>'}{infos.category}</h6>
      {infos.length === 0 && <div>Loading....</div>}

      {infos.id!==undefined &&(
      <div>
      <h3>
        {infos.title}
        </h3>
      <div>
        <div className="image-content">
          <img src={infos.image} alt={infos.title} />
        </div>
        <div>
        <div>
          <p>

            User Rating: 
            <Rating
            initialRating={infos.rating.rate}
            readonly
          />({infos.rating.count}) ratings
          </p>
          
        </div>
        <div>
          Price: ₹{infos.price}
        </div>
        <div>
          {infos.description}
        </div>
        </div>
      </div>
      </div>)}
    </div>
  );
};
export default Product;
