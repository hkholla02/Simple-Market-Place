import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import Rating from 'react-rating';
import "./style.css"

// presentational components
const ProductItem = ({ id,title, image, rate, count,category }) => {
  return (
    <li>
      <h3>
      <li key={id}>
        <Link to={`/product/${category}/${id}`}>
        {title}
        </Link>
        </li>
        </h3>
      <div>
        <div>
          <img src={image} alt={title} />
        </div>
        <div className="rating-whole">
            <div className="rating-render first">User Rating:</div>
            <div className="rating-render"><Rating initialRating={rate} readonly/></div> 
            <div className="rating-render">({count})</div>
        </div>
      </div>
    </li>
  );
};

const Category = () => {
  let { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [category]);
  return (
    <div>
      <h2>{category}</h2>
      <ul className="all-list">
        {products.map(({ id, title, image, rating }) => {
          return (
            <ProductItem
              key={id}
              id={id}
              title={title}
              image={image}
              rate={rating.rate}
              count={rating.count}
              category={category}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
